"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import AmirhosseinzandiLogo from "@/public/pictures/amirhosseinzandi.jpg";
import SignatureLogo from "@/public/pictures/signature.webp";
import { Col, Flex, Layout, Row, Typography } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import PreLoader from "../PreLoader";
import { motion } from "framer-motion"


const { Title, Text } = Typography

const AboutComponent = () => {

    const { about } = pageLevelLocalization

    const [domLoaded, setDomLoaded] = useState(false)


    useEffect(() => {
        setDomLoaded(true)
    }, [])

    useEffect(() => {
        domLoaded && (document.body.style.overflowY = "auto")
    }, [domLoaded])


    return (
        <>
            {/* biography */}

            {/*  */}

            {!domLoaded && <PreLoader />}
            <Layout className="bg-transparent pb-48 max-w-[1920px] px-3 mx-auto md:px-12 xl:px-40 2xl:px-48">
                <Row className="flex-col lg:flex-row">

                    <Col xs={24} md={15} lg={9} className="mt-[60px] sm:mt-[64px] md:mt-[78px] xl:mt-[110px] 2xl:mt-[222px]">
                        <Flex vertical gap={48}>

                            <Flex vertical gap={48}>
                                <figure className="relative size-28 rounded-full overflow-hidden">
                                    <Image
                                        fill
                                        alt="amirhossein zandi"
                                        src={AmirhosseinzandiLogo}
                                    />
                                </figure>

                                <Title level={1} className="gilory !font-bold !text-2xl !m-0 !leading-10 md:!text-6xl">{about.title}</Title>
                                <Text className="text-lg">{about.descriptionOne}</Text>
                                <Text className="text-base">{about.descritionTwo}</Text>
                                <div className="relative h-[244px] flex">
                                    <figure className="absolute right-[-110px] bottom-[95px] w-[406px] h-[244px]">
                                        <Image
                                            alt="amirhosseinzandi signature"
                                            fill
                                            src={SignatureLogo}
                                            className="object-contain"
                                        />
                                    </figure>
                                    <div className="flex items-end">
                                        <motion.svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, y: 15, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 } }}
                                        >
                                            <path
                                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                                stroke="#000000"
                                                strokeWidth="1"
                                            ></path>
                                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                            <path
                                                d="M15 11L12 14L9 11"
                                                stroke="#000000"
                                                strokeWidth="1"
                                            ></path>
                                        </motion.svg>
                                    </div>
                                </div>
                            </Flex>

                            {/* skills */}

                            <Flex vertical gap={48}>
                                <Title level={1} className="gilory !font-bold !text-2xl !m-0 !leading-10 md:!text-6xl">{about.skills.title}</Title>
                                <Flex gap={16} wrap>
                                    {
                                        about.skills.skillsName.map((skill, index) => (
                                            <Text key={index} className="text-sm p-2 bg-black text-white text-nowrap rounded-sm">{skill}</Text>
                                        ))
                                    }
                                </Flex>
                                <div className="flex items-end">
                                    <motion.svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={50}
                                        height={50}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, y: 15, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 } }}
                                    >
                                        <path
                                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                            stroke="#000000"
                                            strokeWidth="1"
                                        ></path>
                                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                        <path
                                            d="M15 11L12 14L9 11"
                                            stroke="#000000"
                                            strokeWidth="1"
                                        ></path>
                                    </motion.svg>
                                </div>
                            </Flex>

                            {/* Experience */}

                            <Flex vertical gap={48}>
                                <Title level={1} className="gilory !font-bold !text-2xl !m-0 !leading-10 md:!text-6xl">Experience</Title>
                                <div>
                                    <Flex>
                                        <div className="flex flex-col gap-3 flex-[2]">
                                            <p className="p-3 bg-white rounded-md">Senior JavaScript Engineer</p>
                                            <p className="italic p-3">I led web development, offering expertise in JavaScript frameworks.</p>
                                            <p className="px-3 text-rose-400">2024 - Present</p>
                                            <span className="block p-1 bg-white w-fit rounded-md">Apple</span>
                                        </div>
                                        <div className="flex justify-center flex-1 relative">
                                            <div className="w-[4px] h-full bg-slate-600" />
                                            <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute top-0 left-1/2 translate-x-[-50%]"></span>
                                            <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute bottom-0 left-1/2 translate-x-[-50%]"></span>
                                        </div>
                                        <div className="flex-[2]"></div>
                                    </Flex>

                                    <Flex>
                                        <div className="flex flex-[2]">
                                        </div>
                                        <div className="flex justify-center flex-1 relative">
                                            <div className="w-[4px] h-full bg-slate-600" />
                                            {/* <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute top-0 left-1/2 translate-x-[-50%]"></span> */}
                                            <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute bottom-0 left-1/2 translate-x-[-50%]"></span>
                                        </div>
                                        <div className="flex flex-[2] flex-col gap-3">
                                            <p className="p-3 bg-white rounded-md">Senior JavaScript Engineer</p>
                                            <p className="italic p-3">I led web development, offering expertise in JavaScript frameworks.</p>
                                            <p className="px-3 text-rose-400">2024 - Present</p>
                                            <span className="block p-1 bg-white w-fit rounded-md">Apple</span>
                                        </div>
                                    </Flex>

                                    <Flex>
                                        <div className="flex flex-col gap-3 flex-[2]">
                                            <p className="p-3 bg-white rounded-md">Senior JavaScript Engineer</p>
                                            <p className="italic p-3">I led web development, offering expertise in JavaScript frameworks.</p>
                                            <p className="px-3 text-rose-400">2024 - Present</p>
                                            {/* <span className="block p-1 bg-white w-fit rounded-md">Apple</span> */}
                                        </div>
                                        <div className="flex justify-center flex-1 relative">
                                            <div className="w-[4px] h-full bg-slate-600" />
                                            {/* <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute top-0 left-1/2 translate-x-[-50%]"></span> */}
                                            {/* <span className="block w-[20px] h-[20px] rounded-full bg-white ring-4 ring-red-400 absolute bottom-0 left-1/2 translate-x-[-50%]"></span> */}
                                        </div>
                                        <div className="flex-[2]"></div>
                                    </Flex>

                                </div>
                            </Flex>

                        </Flex>
                    </Col>

                    <Col xs={24} md={9} lg={15} className="custom"></Col>

                </Row>
            </Layout>
        </>
    );
}

export default AboutComponent;