export default function Error(props: { message: string; path: string }) {
  return (
    <div className="space-x-2 flex">
      <div>
        <span className="md:block hidden">
          User@aymene.net : {props.path} &gt;{" "}
        </span>
        <span className="md:hidden block">: {props.path} &gt; </span>
      </div>
      <span className="text-red-500">{props.message}</span>
      <div></div>
    </div>
  );
}
