"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import { Col, Layout, Row, Typography } from "antd";
import Image from "next/image";
import Logo from "../../../public/pictures/hero.webp";
import { useEffect, useState } from "react";
import PreLoader from "../PreLoader";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"



const { Text, Title } = Typography

const HomePage = () => {
    const [domLoaded, setDomLoaded] = useState(false)


    useEffect(() => {
        setDomLoaded(true)
    }, [])

    useEffect(() => {
        domLoaded && (document.body.style.overflowY = "auto")
    }, [domLoaded])


    const { home } = pageLevelLocalization
    return (
        <>
            {/* {!domLoaded && <PreLoader />} */}
            <motion.div
                initial={{ y: "-100%" , opacity: 0}}
                animate={{ y: 0 , opacity: 1}}
                transition={{delay: 0.8, ease: "easeOut" }}
            >
                <Layout className="bg-transparent md:h-[calc(100dvh-70px)] md:overflow-y-clip p-3 md:justify-center">
                    <div className="mt-7">
                        <Row className="gap-9">

                            <Col xs={24} lg={12} className="flex justify-center select-none">
                                <div className="relative w-[400px] h-[400px] lg:w-full lg:h-auto lg:pb-[85%]">
                                    <Image
                                        src={Logo}
                                        alt="Picture of the author"
                                        fill
                                        placeholder="blur"
                                        className="object-contain"
                                    />
                                </div>

                            </Col>

                            <Col xs={24} lg={11} className="flex flex-col gap-8 lg:justify-center">
                                <div className="min-h-[180px] md:min-h-[314px] 2xl:min-h-[180px]">
                                    <Title
                                        level={1}
                                        className="gilory !font-bold !text-4xl !m-0 !leading-10 md:!text-6xl"
                                    >
                                        <ReactTyped
                                            strings={home.hero.contents.contectOne.map(content => content)}
                                            typeSpeed={40}
                                            backDelay={2000}
                                            loop
                                        />
                                    </Title>
                                </div>

                                <Text className="leading-6 text-base md:!text-xl">{home.hero.contents.contectTwo}</Text>
                                <div className="flex gap-4">
                                    <button className="p-4 bg-black text-white rounded-md md:!text-base">{home.hero.contents.viewMyWorkBtn}</button>
                                    <button className="p-4 border border-black rounded-md md:!text-base">{home.hero.contents.contactBtn}</button>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Layout>
            </motion.div>
        </>
    );
}

export default HomePage;