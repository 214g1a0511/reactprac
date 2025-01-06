import "./styles.css";
import { AppContext } from "./AppContextProvider";
import { AuthContext } from "./ContextsComponents/AuthContextProvider";
import Navbar from "./Navbar";
import React from "react";
export default function App() {
  const { theme, toggleTheme } = React.useContext(AppContext);
  //const {isAuth,log}
  console.log(theme);
  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <Navbar />
      <h1>Theme:{theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
