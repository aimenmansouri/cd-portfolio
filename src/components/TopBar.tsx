import Clock from "./Clock";
import { useEffect, useState } from "react";

export default function TopBar(props: { setDark: Function }) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    props.setDark(isChecked);
  });
  const toggleDarkMode = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="absolute flex items-center h-8 w-full bg-black/70 shadow text-white justify-between px-3 select-none">
      <div className=" text-green-500 basis-1/6 md:block hidden"></div>
      <div className="text-sm grow text-center">
        <Clock />
      </div>
      <div className="flex space-x-3 items-center basis-1/6 justify-end">
        <div className="flex flex-row justify-between py-2">
          <label
            htmlFor="dark-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="dark-mode"
                id="dark-toggle"
                className="checkbox hidden"
                checked={isChecked}
                onChange={toggleDarkMode}
              />
              <div
                className={`block border-[1px] border-slate-500 
                } w-[44px] h-6 rounded-full`}
              ></div>
              <div
                className={`dot flex items-center absolute left-1 top-1 w-4 h-4 rounded-full transition duration-300`}
              >
                {!isChecked ? (
                  <span role="img" aria-label="sun">
                    ☀️
                  </span>
                ) : (
                  <span role="img" aria-label="moon">
                    🌙
                  </span>
                )}
              </div>
            </div>
            <div className={`ml-3 font-medium text-sm`}></div>
          </label>
        </div>
        <div className="bg-slate-200 h-5 w-[2px]"></div>
        <div className="flex items-center space-x-2 bg-slate-800 py-1 px-2 rounded-full">
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
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>

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
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
            />
          </svg>
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
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
