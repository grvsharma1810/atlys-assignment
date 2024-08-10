export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {children}
    </div>
  );
};
