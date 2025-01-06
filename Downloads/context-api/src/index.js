import { createRoot } from "react-dom/client";
import AppContextProvider from "./AppContextProvider";
import AuthContextProvider from "./ContextsComponents/AuthContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </AuthContextProvider>
);
