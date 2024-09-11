"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import { Col, Flex, Form, Input, Layout, Row } from "antd";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";




const ConatctComponent = () => {
    const [domLoaded, setDomLoaded] = useState(false)
    const { contact } = pageLevelLocalization


    useEffect(() => {
        setDomLoaded(true)
    }, [])

    useEffect(() => {
        domLoaded && (document.body.style.overflowY = "auto")
    }, [domLoaded])


    return (
        <motion.div
            initial={{ y: "-200vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeOut" }}
        >
            <Layout className="bg-transparent h-[calc(100dvh-70px)] lg:h-[calc(100dvh-108px)] overflow-y-clip lg:mt-[38px] px-3 md:px-12 xl:px-40 2xl:px-48 max-w-[1920px] mx-auto">
                <Row className="h-full overflow-y-auto">

                    <Col xs={24} lg={12} className="flex justify-center items-center text-6xl gilory [&>span:nth-of-type(4)]:ml-4 h-1/2 lg:h-full">
                        {

                            contact.sayHello.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.1,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))

                        }
                        <span>🤪</span>
                    </Col>

                    <Col xs={24} lg={12} className="h-auto lg:h-full flex justify-center items-center">
                        <div className="h-full w-full bg-[#fef2f2] rounded-xl flex justify-center items-center py-9">
                            <form action="" className="flex flex-col gap-8 justify-evenly w-full lg:h-fit max-w-[70%]">

                                <Flex vertical gap={32} className="border-b-black border-b-[2px] lg:!gap-[140px]">
                                    <label className="text-xl" htmlFor="">Dear Amirhossein,</label>
                                    <input type="text" className="outline-none border-none bg-transparent mb-1" />
                                </Flex>

                                <Flex vertical gap={32} className="border-b-black border-b-[2px]">
                                    <label className="text-xl" htmlFor="">My mail address is:</label>
                                    <input type="text" className="outline-none border-none bg-transparent mb-1" />
                                </Flex>

                                <span className="text-xl">Regards</span>
                                <button className="bg-[#e9d5ff] p-4 rounded-md font-semibold text-xl">Send</button>

                            </form>
                        </div>
                    </Col>

                </Row>
            </Layout >
        </motion.div>
    );
}

export default ConatctComponent;