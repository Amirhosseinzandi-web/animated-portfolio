import PublicLayout from "@/components/app/Layout";
import PageTransitionComponent from "@/utilities/PageTransition";
import { ReactNode } from "react";






const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PublicLayout>
      <PageTransitionComponent>
        {children}
      </PageTransitionComponent>
    </PublicLayout>
  );
}

export default RootLayout;