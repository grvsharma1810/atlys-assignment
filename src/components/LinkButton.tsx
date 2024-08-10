import { useNavigation } from "../Providers/NavigationProvider";

export const LinkButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const { navigate } = useNavigation();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <button className="text-atlysGray-3 text-sm" onClick={handleClick}>
      {children}
    </button>
  );
};
