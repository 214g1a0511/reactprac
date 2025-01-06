import { useContext, useState } from "react";
import { AuthContext } from "./ContextsComponents/AuthContextProvider";
import { AppContext } from "./AppContextProvider";
function Navbar() {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h4>Is Authenticated:{isAuth ? "YES" : "NO"}</h4>
      <button disabled={isAuth} onClick={login}>
        Login
      </button>
      <button disabled={!isAuth} onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Navbar;
