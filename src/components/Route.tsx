import { useNavigation } from "../Providers/NavigationProvider";

export const Route = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const { pathname } = useNavigation();

  switch (pathname) {
    case path:
      return children;
    default:
      return null;
  }
};
