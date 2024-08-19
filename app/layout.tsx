import PublicLayout from "@/components/app/Layout";
import { ReactNode } from "react";






const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
}

export default RootLayout;