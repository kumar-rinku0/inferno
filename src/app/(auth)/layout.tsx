const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
