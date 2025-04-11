
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || 
         (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <Toggle 
      aria-label="Toggle dark mode"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="text-gray-700 dark:text-gray-300 hover:text-skyblue dark:hover:text-skyblue-light"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </Toggle>
  );
};

export default ThemeToggle;
