import React, { ReactNode } from "react";
import useNavigationContext from "../../hooks/useNavigationContext";

export interface LinkProps {
  to: string;
  children?: ReactNode;
}

function Link({ to, children }: LinkProps) {
  const { navigate, currentPath } = useNavigationContext();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      style={{
        fontWeight: currentPath === to ? "bold" : "normal",
        textDecoration: "none",
        color: "rgb(0,55,85)",
      }}
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  );
}
export default Link;
