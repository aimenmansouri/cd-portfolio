import React, { useRef, useState, useEffect } from "react";
import disk from "@/disk/disk1.json";
import Error from "./output/Error";
import Terminalintro from "./TerminalIntro";

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

const comMem: string[] = [""];
let comMemPoint = 0;

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
    description: "",
    link: "",
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
        <div>
          <span className="md:block hidden">
            User@aymene.net : {path} &gt;{" "}
          </span>
          <span className="md:hidden block">: {path} &gt; </span>
        </div>
        <span className="text-white">{command.join(" ")}</span>
        <div></div>
      </div>
    );
    toOut.push(thecom);

    let content: diskType[];

    switchLabel: switch (command[0]) {
      case "help":
        let fileOut = (
          <div className="my-3">
            <ul>
              <li>cd dirName: enter directory</li>
              <li>ls : list current dir content</li>
              <li>cat fileName : read file</li>
              <li>clear : clear command line</li>
              <li className="flex items-center">
                Use
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
                and
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
                to browse commands history
              </li>
            </ul>
          </div>
        );
        toOut.push(fileOut);
        break;
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
          let fileOut: React.ReactNode;
          switch (file.type) {
            case "text":
              fileOut = (
                <div>
                  <p className="ml-3 my-2 text-sky-400">
                    <span className="font-semibold">{file.title} :</span>{" "}
                    {file.text}
                    <br />
                  </p>
                </div>
              );
              toOut.push(fileOut);
              break;
            case "project":
              fileOut = (
                <div>
                  <p className="ml-3 my-2 text-sky-400">
                    <span className="font-semibold">Project description :</span>{" "}
                    {file.description}
                    <br />
                    <span className="font-semibold">
                      Read full post at :{" "}
                      <a className="underline" href={file.link} target="blank">
                        {file.name}
                      </a>
                    </span>{" "}
                  </p>
                </div>
              );
              toOut.push(fileOut);
              break;
            case "list":
              fileOut = (
                <div>
                  <ul className="text-sky-400">
                    {file.list.map((skill: string) => (
                      <li key={skill}>- {skill}</li>
                    ))}
                  </ul>
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
        return;
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
    if (e.code === "ArrowUp") {
      comMemPoint = Math.max(0, comMemPoint - 1);
      inputRef.current.value = comMem[comMemPoint];
      return;
    } else if (e.code === "ArrowDown") {
      comMemPoint = Math.min(comMem.length - 1, comMemPoint + 1);
      inputRef.current.value = comMem[comMemPoint];
      return;
    }
    if (trim(inputRef.current?.value || "") == "") {
      inputRef.current.value = "";
      return;
    }
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      proccessInput(inputRef.current?.value || "");

      if (comMem[comMem.length - 2] != inputRef.current.value) {
        comMem.splice(-1, 0, inputRef.current.value);
        comMemPoint = comMem.length - 1;
      }
      inputRef.current.value = "";
    }
  }
  return (
    <div
      onClick={() => {
        inputRef.current?.focus();
      }}
      ref={cdDivRef}
      className="md:h-[55vh] h-[70vh]  w-full px-3 py-1 text-m hover:cursor-text backdrop-blur-[2px] bg-slate-900/75 rounded-b border border-t-0 border-slate-900 shadow-slate-900/20 shadow-md overflow-y-scroll"
    >
      <div className="text-green-400">
        <div className="lg:flex items-center block space-x-3">
          <Terminalintro />
        </div>
        {output.map((dv) => (
          <div key={crypto.randomUUID()}>{dv}</div>
        ))}
      </div>
      <div className="text-green-400 flex space-x-2">
        <div>
          <span className="md:block hidden">
            User@aymene.net : {path} &gt;{" "}
          </span>
          <span className="md:hidden ">{path}: &gt;</span>
        </div>
        <div className="grow">
          <input
            onChange={() => (comMemPoint = comMem.length - 1)}
            onKeyDown={(e) => handelEnter(e)}
            onBlur={() => (comMemPoint = comMem.length - 1)}
            ref={inputRef}
            type="text"
            className="bg-transparent text-white outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
