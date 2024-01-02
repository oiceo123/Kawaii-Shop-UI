import React from "react";

interface Props {
  onClick: () => void;
}

const SignOutComponent: React.FC<Props> = ({ onClick }) => {
  return <div onClick={onClick}>Logout</div>;
};

export default SignOutComponent;
