import React, { createContext, useEffect, useState } from "react";

export const NavigationContext = createContext<{
  pathname: string;
  navigate: (path: string) => void;
}>({
  pathname: window.location.pathname,
  navigate: () => {},
});

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  const navigate = (path: string) => {
    setPathname(path);
    window.history.pushState(null, "", path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        pathname,
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return React.useContext(NavigationContext);
};
