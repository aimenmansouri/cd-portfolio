import Image from "next/image";

export interface SideIconProps {
  link: string;
  imageLink: string;
  name: string;
}

export default function SideIcon(props: SideIconProps) {
  const dim = 75;
  return (
    <div className="group">
      <div className="hover:cursor-pointer  rounded hover:bg-slate-950/60 transition-colors duration-500">
        <a href={props.link} target="blank">
          <Image
            src={props.imageLink}
            width={dim}
            height={dim}
            alt={props.name}
          />
        </a>
      </div>
      <div className="h-[4px] w-[10px] bg-amber-500/50 rounded-sm mx-auto transition-all duration-500 group-hover:bg-transparent"></div>
    </div>
  );
}
