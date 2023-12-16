import React from "react";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const ThailandIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1063 708.66"
      {...props}
    >
      <path
        d="M0 0h1063v708.66H0z"
        style={{
          fillRule: "evenodd",
          strokeWidth: "1pt",
          fill: "#fff",
        }}
      />
      <path
        d="M0 236.22h1063v236.22H0z"
        style={{
          fillRule: "evenodd",
          strokeWidth: "1pt",
          fill: "#001b9a",
        }}
      />
      <path
        d="M0 0h1063v118.11H0zM0 590.55h1063v118.11H0z"
        style={{
          fillRule: "evenodd",
          strokeWidth: "1pt",
          fill: "#e70000",
        }}
      />
    </svg>
  );
};

export default ThailandIcon;
