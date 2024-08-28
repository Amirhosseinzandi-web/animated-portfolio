"use client"
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../../../styles/index.css";
import Pwa from "./Pwa";
import HeaderContainer from "../shared/Header";
import { Layout } from "antd";
import PageTransitionComponent from "@/utilities/PageTransition";
import dynamic from "next/dynamic";


const AnimatedCursorComponent = dynamic(() => import('@/utilities/AnimatedCursor/index'), { ssr: false })


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Pwa>
                    <div className="w-screen h-[100dvh] bg-gradient-to-b from-blue-100 to-red-100 back fixed z-[-1] top-0"></div>
                    <Layout className="p-0 bg-transparent overflow-x-hidden">
                        <HeaderContainer />
                        {/* <AnimatedCursorComponent /> */}
                        <PageTransitionComponent>
                            {children}
                        </PageTransitionComponent>
                    </Layout>
                </Pwa>
            </body>
        </html>
    );
}