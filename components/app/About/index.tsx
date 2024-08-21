"use client"
import { Flex, Layout, Typography } from "antd";
import Image from "next/image";
import AmirhosseinzandiLogo from "@/public/pictures/amirhosseinzandi.jpg"
import { pageLevelLocalization } from "@/constant/localizatyion";




const { Title, Text } = Typography

const AboutComponent = () => {

    const { about } = pageLevelLocalization


    return (
        <Layout className="bg-transparent p-3 ">
            <div className="mt-7">
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
                    <Text>{about.descriptionTWo}</Text>
                </Flex>
            </div>
        </Layout>
    );
}

export default AboutComponent;