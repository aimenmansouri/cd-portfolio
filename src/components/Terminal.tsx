import React, { useRef, useState, useEffect } from "react";
import disk from "@/disk/disk.json";
import Error from "./output/Error";

interface diskType {
  id: number;
  belong_to: number;
  name: string;
  type: string;
  description: string;
  link: string;
}

function trim(s: string) {
  return s.replaceAll(" ", "");
}

function getFile(disk: diskType[], name: string) {
  for (let i = 0; i < disk.length; i++) {
    if (disk[i].name == name) {
      return disk[i];
    }
  }
  return false;
}

export default function Terminal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const cdDivRef = useRef<HTMLDivElement>();

  const [cdid, setCdid] = useState(0);
  const [path, setPath] = useState<string>("");
  const [cd, setCd] = useState<diskType>({
    id: -1,
    belong_to: -1,
    name: "",
    type: "",
  });

  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setOutput([]);
  }, [clear]);
  useEffect(() => {
    for (let i = 0; i < disk.length; i++) {
      if (disk[i].id == cdid) {
        setCd(disk[i]);
      }
    }
  }, [cdid]);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    cdDivRef.current?.scrollTo({
      top: cdDivRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [output]);

  const proccessInput = (s: string) => {
    const command: string[] = s.split(" ");
    const toOut: React.ReactNode[] = [];

    const thecom = (
      <div className="space-x-2 flex">
        <div>User@aymene.net : {path} &gt;</div>
        <span className="text-white">{command.join(" ")}</span>
        <div></div>
      </div>
    );
    toOut.push(thecom);

    let content: diskType[];

    switchLabel: switch (command[0]) {
      case "cat":
        if (command.length < 2) {
          const err = (
            <Error message={`Error : Missing file name`} path={path} />
          );
          toOut.push(err);
          break;
        } else if (command[1].trim() == "") {
          const err = (
            <Error message={`Error : Missing file name`} path={path} />
          );
          toOut.push(err);
          break;
        }
        content = disk.filter((f) => f.belong_to == cdid);
        const file = getFile(content, command[1]);
        if (file) {
          switch (file.type) {
            case "project":
              const fileOut: React.ReactNode = (
                <div>
                  <p className="ml-3 my-2 text-sky-400">
                    <span className="font-semibold">Project description</span>{" "}
                    {file.description}
                    <br />
                    <span className="font-semibold">
                      Read full post at :{" "}
                      <a
                        className=" hover:underline"
                        href={file.link}
                        target="blank"
                      >
                        {file.name}
                      </a>
                    </span>{" "}
                  </p>
                </div>
              );
              toOut.push(fileOut);
              break;
            default:
              const err = (
                <Error message={`Error : cannot read folders`} path={path} />
              );
              toOut.push(err);
              break;
          }
        } else {
          const err = (
            <Error
              message={`Error : file '${command[1]}' not found`}
              path={path}
            />
          );
          toOut.push(err);
        }
        break;
      case "clear":
        setClear(!clear);
        break;
      case "cd":
        if (command.length < 2) {
          const err = (
            <Error message={`Error : Missing folder name`} path={path} />
          );
          toOut.push(err);
          break;
        } else if (command[1].trim() == "") {
          const err = (
            <Error message={`Error : Missing folder name`} path={path} />
          );
          toOut.push(err);
          break;
        }
        if (command[1].trim() == "/") {
          setPath("/");
          setCdid(0);
          break;
        }
        if (command[1] == "..") {
          if (cdid == 0) {
            break;
          }
          setCdid(cd.belong_to);
          setPath(path.trim().split("/").slice(0, -2).join("/") + "/");
          break;
        }
        content = disk.filter((f) => f.belong_to == cdid);
        for (let i = 0; i < content.length; i++) {
          if (content[i].name == command[1]) {
            if (content[i].type != "folder") {
              const err = (
                <Error
                  message={`Error : ${command[1]} is not a folder`}
                  path={path}
                />
              );
              toOut.push(err);
              break switchLabel;
            }
            setPath(path + content[i].name + "/");
            setCdid(content[i].id);
            break switchLabel;
          }
        }
        const err2 = (
          <Error
            message={`Error : Folder ${command[1]} not found`}
            path={path}
          />
        );
        toOut.push(err2);
        break;
      case "ls":
        const padding = 5;
        content = disk.filter((f) => f.belong_to == cdid);
        if (content.length == 0) {
          const err = <Error message={`Empty folder`} path={path} />;
          toOut.push(err);
          break;
        }
        const longest = content.reduce((maxLength, item) => {
          const nameLength = item.name.length;
          return nameLength > maxLength ? nameLength : maxLength;
        }, 0);
        const longestType = content.reduce((maxLength, item) => {
          const typeLength = item.type.length;
          return typeLength > maxLength ? typeLength : maxLength;
        }, 0);

        const filesList = (
          <ul className=" whitespace-pre my-0">
            {" "}
            <li>{"Name" + " ".repeat(longest + padding - 4) + "Type"}</li>
            <li>{"-".repeat(longest + padding + longestType)}</li>
            {content.map((item) => (
              <li key={item.id}>
                {item.name}
                {" ".repeat(longest + padding - item.name.length)}
                {item.type}
              </li>
            ))}{" "}
          </ul>
        );
        toOut.push(filesList);
        break;

      default:
        const err = (
          <Error
            message={`Error : Unknow command '${command[0]}'`}
            path={path}
          />
        );
        toOut.push(err);
    }
    setOutput([...output, ...toOut]);
  };
  function handelEnter(e: KeyboardEvent) {
    if (trim(inputRef.current?.value || "") == "") {
      inputRef.current.value = "";
      return;
    }
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      proccessInput(inputRef.current?.value || "");
      inputRef.current.value = "";
    }
  }
  return (
    <div
      onClick={() => {
        inputRef.current?.focus();
      }}
      ref={cdDivRef}
      className="h-[34rem]  w-full px-3 py-1 text-sm hover:cursor-text backdrop-blur-[2px] bg-slate-900/75 rounded-b border border-t-0 border-slate-900 shadow-slate-900/20 shadow-md overflow-y-scroll"
    >
      <div className="text-green-400">
        {output.map((dv) => (
          <div key={crypto.randomUUID()}>{dv}</div>
        ))}
      </div>
      <div className=" text-green-400 flex space-x-2">
        <div className="">User@aymene.net : {path} &gt; </div>
        <div className="grow">
          <input
            onKeyDown={(e) => handelEnter(e)}
            ref={inputRef}
            type="text"
            className="bg-transparent text-white outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
