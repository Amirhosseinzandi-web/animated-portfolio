"use client";

import { Typography } from "antd";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";




const PageTransitionComponent = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    const { Text } = Typography


    const animationVariants = {
        initial: { opacity: 0 },
        animate: {
          opacity: [0, 1, 0],
          transition: {
            duration: 0.7,
            times: [0, 0.71428, 1],
            ease: "easeInOut"
          }
        }
      };


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
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]"
                    initial={{ opacity: 1 , display:"block" }}
                    animate={{ opacity: 0 , display:"none" }}
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
                >
                    <Text className="text-white text-5xl lg:text-8xl">{pathName.charAt(1).toUpperCase() + pathName.substring(2).toLowerCase()}</Text>
                </motion.div>


                <motion.div
                    className="h-[140vh] w-screen fixed bg-black rounded-t-[100px] z-50 bottom-[-10%]"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.7, ease: "easeOut" } }}
                    exit={{ height: "0vh" }}
                />


                <div>{children}</div>

            </section>


        </AnimatePresence>
    )
};

export default PageTransitionComponent;
