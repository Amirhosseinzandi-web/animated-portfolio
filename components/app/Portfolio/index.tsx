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
            initial={{ y: "-100vh" , opacity: 0}}
            animate={{ y: 0 , opacity: 1}}
            transition={{ delay: 0.8, ease: "easeOut"}}
        >
            <Layout
                className="bg-transparent pb-48"
            >

                <Flex justify="center" align="center" className="w-full h-[100dvh]">
                    <Title level={1} className="!text-5xl lg:!text-8xl">{portfolio.myWorks}</Title>
                </Flex>


                <div className="sticky-container min-h-[500vh]" ref={myRef}>
                    <Sticky boundaryElement=".sticky-container" hideOnBoundaryHit={false}>
                        <div>
                            <motion.div
                                className="w-full flex motion-div"
                                style={{ x: measure }}
                            >

                                {
                                    portfolio.workSample.map((item, index) => (
                                        <div key={index} className={`flex justify-center items-center h-[100dvh] w-screen flex-shrink-0 ${item.bgColor}`}>

                                            <Flex justify="center" align="flex-start" vertical gap={32}>
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


                <div>
                    <p>
                       ibus, cumque exercitationem, veniam aperiam vel! Magni, quis?
                    </p>
                </div>


            </Layout>
        </motion.div>
    );
}

export default PortfolioComponent;