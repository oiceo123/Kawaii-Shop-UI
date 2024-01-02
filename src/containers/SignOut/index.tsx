import React from "react";
import axios from "../../api";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux";
import { logout } from "../../redux/slices/authSlice/authSlice";

import Swal from "sweetalert2";
import SignOutComponent from "../../components/SignOut";

const SignOutContainer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "/users/signout",
        { oauth_id: localStorage.getItem("id") },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.status === 200) {
        localStorage.removeItem("id");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        dispatch(logout());
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: t("message.error.internal.server.error"),
      });
    }
  };

  return <SignOutComponent onClick={handleClick} />;
};

export default SignOutContainer;
