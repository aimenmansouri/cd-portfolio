import Clock from "./Clock";

export default function TopBar() {
  return (
    <div className="absolute flex items-center h-8 w-full bg-black/70 shadow text-white justify-between px-3 select-none">
      <div className="">1</div>
      <div className="text-xs">
        <Clock />
      </div>
      <div className="flex space-x-3">1</div>
    </div>
  );
}
