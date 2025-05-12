import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-center items-center h-screen">{children}</div>;
};

export default AuthLayout;