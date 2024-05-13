import React, { ReactNode } from "react";
import useNavigationContext from "../../hooks/useNavigationContext";

export interface LinkProps {
  to: string;
  children?: ReactNode;
}

function Link({ to, children }: LinkProps) {
  const { navigate } = useNavigationContext();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
}
export default Link;
