export default function Error(props: { message: string; path: string }) {
  return (
    <div className="space-x-2 flex">
      <div>User@aymene.net : {props.path} &gt;</div>
      <span className="text-red-500">{props.message}</span>
      <div></div>
    </div>
  );
}
