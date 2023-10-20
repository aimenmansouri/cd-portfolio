import React, { useRef, useState, useEffect } from "react";
import disk from "@/disk/disk.json";
import Error from "./output/Error";

interface diskType {
  id: number;
  belong_to: number;
  name: string;
  type: string;
}

function trim(s: string) {
  return s.replaceAll(" ", "");
}
export default function Terminal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cdid, setCdid] = useState(0);
  const [path, setPath] = useState<string>("");
  const [cd, setCd] = useState<diskType>({
    id: -1,
    belong_to: -1,
    name: "",
    type: "",
  });

  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const clearOutput = () => {
    setOutput([]);
  };

  useEffect(() => {
    for (let i = 0; i < disk.length; i++) {
      if (disk[i].id == cdid) {
        setCd(disk[i]);
      }
    }
  }, [cdid]);

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

    switch (command[0]) {
      case "clear":
        console.log(setOutput([]));
        break;
      case "cd":
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
            setPath(path + content[i].name + "/");
            setCdid(content[i].id);
            break;
          }
          const err = (
            <Error message={`Error : Folder not found`} path={path} />
          );
          toOut.push(err);
          console.log(toOut);
        }
        break;
      case "ls":
        content = disk.filter((f) => f.belong_to == cdid);
        if (content.length == 0) {
          const err = <Error message={`Empty folder`} path={path} />;
          toOut.push(err);
          break;
        }
        const filesList = (
          <ul className=" list-disc">
            {" "}
            {content.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}{" "}
          </ul>
        );
        toOut.push(filesList);
        break;

      default:
        const err = <Error message={`Error : Unknow command`} path={path} />;
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
        inputRef.current.focus();
      }}
      className="h-full w-full px-3 py-1 text-sm hover:cursor-text backdrop-blur-[2px] bg-slate-900/75 rounded-b border border-t-0 border-slate-900 shadow-slate-900/20 shadow-md overflow-auto"
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
