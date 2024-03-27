import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "../utils/useColorScheme";

import { BsLightbulbOffFill, BsFillLightbulbFill } from "react-icons/bs";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="flex items-center justify-center flex-row gap-2 relative cursor-pointer">
      <div className="flex items-center justify-center flex-row  cursor-pointer">
        {isDark ? (
          <BsFillLightbulbFill className="text-amber-400 text-xl" />
        ) : (
          <BsLightbulbOffFill className="text-slate-800 text-xl" />
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
  );
};
