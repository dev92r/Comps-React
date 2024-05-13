import { ReactNode, createContext, useEffect, useState } from "react";

export interface NavigationContextProps {
  currentPath: string;
  navigate: (to: string) => void;
}

const initialNavigationContextProps: NavigationContextProps = {
  currentPath: "",
  navigate: () => {},
};

const NavigationContext = createContext(initialNavigationContextProps);

interface props {
  children: ReactNode;
}

function NavigationProvider({ children }: props) {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  const navigate = (to: string) => {
    window.history.pushState("", "", to);
    setCurrentPath(to);
  };

  useEffect(() => {
    const handler = () => {
      const pathName = window.location.pathname;
      setCurrentPath(pathName);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvider };
export default NavigationContext;
