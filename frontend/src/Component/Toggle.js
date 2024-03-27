import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "../utils/useColorScheme";

import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="flex items-center justify-center flex-row  relative cursor-pointer">
      <div className="flex items-center justify-center flex-row  cursor-pointer">
        {isDark ? (
          <IoMdSunny className="text-white text-2xl" />
        ) : (
          <IoMdMoon className="text-white text-2xl" />
        )}
      </div>
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={false}
        aria-label="Dark mode toggle"
        className="absolute  opacity-0 w-8 cursor-pointer
            "
      />
    </div>

    // <Toggle
    //   checked={isDark}
    //   onChange={({ target }) => setIsDark(target.checked)}
    //   icons={{ checked: "🌙", unchecked: "🔆" }}
    //   aria-label="Dark mode toggle"
    // />
  );
};
