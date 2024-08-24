"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import AmirhosseinzandiLogo from "@/public/pictures/amirhosseinzandi.jpg";
import SignatureLogo from "@/public/pictures/signature.webp";
import { Flex, Typography } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";





const { Title, Text } = Typography


const BiographyComponent = () => {
    const { about } = pageLevelLocalization
    return (
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
    );
}

export default BiographyComponent;