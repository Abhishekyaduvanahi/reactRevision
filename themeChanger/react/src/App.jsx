import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      <h1>Theme Changer</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default App;
