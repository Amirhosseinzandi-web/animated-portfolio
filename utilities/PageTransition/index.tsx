"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransitionComponent = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">

            <section key={pathName}>

                <motion.div
                    className="h-[140vh] w-screen fixed bg-black rounded-b-[100px] z-40 top-0"
                    animate={{ height: "0vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ height: "140vh" }}
                />


                <motion.div
                    className="text-white text-8xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <p>{pathName.substring(1)}</p>
                </motion.div>


                <motion.div
                    className="h-[140vh] w-screen fixed bg-black rounded-t-[100px] z-50 bottom-[-10%]"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5, ease: "easeOut" } }}
                    exit={{ height: "0vh" }}
                />


                <div>{children}</div>

            </section>


        </AnimatePresence>
    )
};

export default PageTransitionComponent;
