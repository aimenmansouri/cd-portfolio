interface MiniNavbarProps {
  setShowFloating: Function;
}

export default function MiniNavbar(props: MiniNavbarProps) {
  return (
    <div className="h-8 bg-slate-900 backdrop-blur-0 rounded-t flex justify-between px-2 items-center text-white text-sm select-none">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => props.setShowFloating(false)}
          className="text-white p-0.5 hover:outline outline-1 outline-slate-600 rounded-sm hover:bg-slate-800 transition-colors duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className="text-xs">Commands list</div>
      <div className="flex space-x-3">
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-red-500"></div>
      </div>
    </div>
  );
}
