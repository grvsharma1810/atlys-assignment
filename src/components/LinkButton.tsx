export const LinkButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className="text-atlysGray-3 text-sm" onClick={onClick}>
      {children}
    </button>
  );
};
