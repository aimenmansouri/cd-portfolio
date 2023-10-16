interface NavbarProps {
  setShowFloating: Function;
  showFloating: boolean;
}

export default function Navbar(props: NavbarProps) {
  const setShowFloating_ = () => {
    props.setShowFloating(!props.showFloating);
  };
  return (
    <div className="h-8 bg-slate-900 backdrop-blur-0 rounded-t flex justify-between px-2 items-center text-white text-sm select-none">
      <div className="flex items-center space-x-2">
        <button className="text-white p-0.5 hover:outline outline-1 outline-slate-600 rounded-sm hover:bg-slate-800 transition-colors duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[20px] h-[20px]"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={setShowFloating_}
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      </div>
      <div className="">Aymene_masnouri@https://aymene.net:~</div>
      <div className="flex space-x-3">
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-red-500"></div>
      </div>
    </div>
  );
}
