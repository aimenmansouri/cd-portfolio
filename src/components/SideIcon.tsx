export interface SideIconProps {
  link: string;
  imageLink: string;
  name: string;
}

export default function SideIcon(props: SideIconProps) {
  return (
    <div className="hover:cursor-pointer rounded hover:bg-slate-950/60 transition-colors duration-400">
      <a href={props.link} target="blank">
        <img src={props.imageLink} alt={props.name} />
      </a>
    </div>
  );
}
