import React from "react";
import { useState, useEffect } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";

      localStorage.setItem("theme", "light");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);
  return (
    <>
      <button onClick={() => setTheme(theme ==="light" ? "dark" : "light")}>
        ThemeChanger
      </button>
    </>
  );
};

export default Theme;
