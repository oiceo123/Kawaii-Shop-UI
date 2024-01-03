import { useEffect } from "react";
import NavbarContainer from "./containers/Navbar";
import Router from "./routes";

function App() {
  useEffect(() => {
    if (import.meta.env.VITE_NODE_ENV === "production") {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.debug = () => {};
      console.table = () => {};
    }
  }, []);

  return (
    <>
      <NavbarContainer />
      <Router />
    </>
  );
}

export default App;
