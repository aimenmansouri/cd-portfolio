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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[18px] h-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
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
      <div className="md:block hidden">
        Aymene_masnouri@https://aymene.net:~
      </div>
      <div className="flex space-x-3">
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-amber-500"></div>
        <div className="rounded-full h-2 w-2 bg-red-500"></div>
      </div>
    </div>
  );
}
