"use client"
import { localization } from "@/constant/localizatyion";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Flex, Layout } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"


const { Header } = Layout

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { header } = localization

    useEffect(() => {
        if (menuOpen) {
            document.documentElement.style.overflowY = "hidden"
        }
    }, [menuOpen])




    const containerVariants = {
        hidden: { x: "100vw" },
        visible: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeInOut" } }
    };



    return (
        <Layout className="bg-transparent p-0 md:hidden">
            <Header className="h-auto bg-transparent leading-none px-3 flex justify-between mt-[30px]">

                <Flex className="bg-black rounded-md p-1">
                    <Link href={"https://github.com/amirhosseinzandi-web"} target="_blank" className="w-full h-full flex items-center justify-center gap-1 font-bold">
                        <span className="block text-white">Amirhossein</span>
                        <span className="text-black bg-white flex justify-center items-center w-12 h-8 rounded-md">Zandi</span>
                    </Link>
                </Flex>

                <Flex className={`cursor-pointer relative z-[5] ${menuOpen && "text-white/80"}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CloseOutlined className="text-2xl" ></CloseOutlined>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >

                                <MenuOutlined className="text-2xl" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Flex>



            </Header>

            {/* mobile menu */}

            {
                menuOpen && (
                    <motion.ul className="flex flex-col gap-10 fixed top-0 left-0 w-screen h-[100dvh] bg-black z-[2] justify-center items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {
                            header.navbar.map((item, ind) => (
                                <motion.li
                                    key={ind}
                                    className="text-center"
                                    variants={itemVariants}
                                >
                                    <Link href={item.path} onClick={() => setMenuOpen(false)} className="text-white/80 text-3xl">
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                )
            }

        </Layout>
    );
}

export default MobileHeader;