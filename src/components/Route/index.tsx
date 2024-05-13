import { ReactNode } from "react";
import useNavigationContext from "../../hooks/useNavigationContext";
import { Stack } from "@fluentui/react";

interface props {
  path: string;
  children: ReactNode;
}
function Route({ path, children }: props) {
  const { currentPath } = useNavigationContext();

  if (currentPath === path) {
    return <Stack>{children}</Stack>;
  }

  return null;
}

export default Route;
