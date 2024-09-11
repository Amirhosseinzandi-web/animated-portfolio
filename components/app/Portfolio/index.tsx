"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import { Flex, Layout, Typography } from "antd";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Sticky from 'react-sticky-el';
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";



const PortfolioComponent = () => {
    const [myWidth, setMyWidth] = useState(0)
    const { portfolio } = pageLevelLocalization
    const { Title, Text } = Typography
    const myRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: myRef })
    const measure = useTransform(scrollYProgress, [0, 1], [`0px`, `-${myWidth}px`])





    useEffect(() => {

        const calculateWidth = () => {
            const motionDiv = document.querySelector(".motion-div") as HTMLElement;
            if (motionDiv) {
                const childWidth = motionDiv.children[0].clientWidth;
                const childCount = motionDiv.childElementCount;
                const wholeWidth = childCount * childWidth;
                setMyWidth(wholeWidth - childWidth);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);

        return () => {
            window.removeEventListener('resize', calculateWidth);
        };

    }, []);



    return (
        <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, ease: "easeOut" }}
        >
            <Layout
                className="bg-transparent"
            >

                <Flex justify="center" align="center" className="w-full h-[100dvh]">
                    <Title level={1} className="!text-5xl lg:!text-8xl">{portfolio.myWorks}</Title>
                </Flex>


                <div className="sticky-container min-h-[500vh] overflow-hidden" ref={myRef}>
                    <Sticky boundaryElement=".sticky-container" hideOnBoundaryHit={false} stickyClassName="overflow-hidden">
                        <div>
                            <motion.div
                                className="w-full flex motion-div"
                                style={{ x: measure }}
                            >

                                {
                                    portfolio.workSample.map((item, index) => (
                                        <div key={index} className={`flex justify-center h-[100dvh] w-screen flex-shrink-0 py-5 ${item.bgColor}`}>

                                            <Flex justify="center" align="flex-start" vertical gap={10}>
                                                <Title className="!font-bold !text-xl md:!text-5xl 2xl:!text-8xl !text-slate-800">{item.title}</Title>
                                                <figure className="relative w-[320px] h-[224px] lg:w-[600px] lg:h-[420px] rounded-lg overflow-hidden">
                                                    <Image
                                                        fill
                                                        src={item.src}
                                                        alt={item.alt}
                                                        className="object-cover"
                                                        placeholder="blur"
                                                    />
                                                </figure>
                                                <Text className="text-base lg:text-lg text-slate-800 max-w-[320px] lg:max-w-[600px]">{item.desc}</Text>
                                                <button className="self-end p-2 lg:p-8 bg-white rounded">
                                                    <Link href={item.href} target="_blank" className="text-sm lg:text-lg font-semibold">See Demo</Link>
                                                </button>
                                            </Flex>

                                        </div>

                                    ))
                                }

                            </motion.div>
                        </div>
                    </Sticky>
                </div>


                <div className="w-full h-screen flex justify-center items-center bg-white overflow-hidden">

                    <Flex vertical gap={70} align="center">
                        <Title className="lg:!text-8xl">{portfolio.haveProjectTitle}</Title>

                        <div className="relative">
                            <motion.svg
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                viewBox="0 0 300 300"
                                className="w-64 h-64 md:w-[500px] md:h-[500px] "
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                    />
                                </defs>
                                <text fill="#000">
                                    <textPath xlinkHref="#circlePath" className="text-xl">
                                        Front-end Developer and UI Designer
                                    </textPath>
                                </text>
                            </motion.svg>
                            <Link
                                href="/contact"
                                className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                            >
                                Hire Me
                            </Link>
                        </div>

                    </Flex>

                </div>


            </Layout>
        </motion.div>
    );
}

export default PortfolioComponent;