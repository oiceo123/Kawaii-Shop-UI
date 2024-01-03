import { useEffect } from "react";
import axios from "./api";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "./redux";
import { setUser, logout } from "./redux/slices/authSlice/authSlice";

import Router from "./routes";

import Swal from "sweetalert2";
import NavbarContainer from "./containers/Navbar";

function App() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleFetchUser();
    if (import.meta.env.VITE_NODE_ENV === "production") {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.debug = () => {};
      console.table = () => {};
    }
  }, []);

  const handleFetchUser = async () => {
    try {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const res = await axios.get(`/users/${uid}`);
        dispatch(setUser(res.data));
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: t("message.error.signin.again"),
      });
      localStorage.removeItem("id");
      localStorage.removeItem("uid");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      dispatch(logout());
    }
  };

  return (
    <>
      <NavbarContainer />
      <Router />
    </>
  );
}

export default App;
