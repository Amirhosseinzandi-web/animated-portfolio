"use client"
import { Col, Flex, Layout, Row } from "antd";
import { useEffect, useState } from "react";
import PreLoader from "../PreLoader";
import BiographyComponent from "./Biography";
import ExperienceComponent from "./Experience";
import SkillsComponent from "./Skills";
import BrainSvgComponent from "./BrainSvg";
import { motion } from "framer-motion"


const AboutComponent = () => {
    const [domLoaded, setDomLoaded] = useState(false)


    useEffect(() => {
        setDomLoaded(true)
    }, [])

    useEffect(() => {
        domLoaded && (document.body.style.overflowY = "auto")
    }, [domLoaded])


    return (
        <>

            {/* {!domLoaded && <PreLoader />} */}
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, ease: "easeOut" }}
            >
                <Layout className="bg-transparent pb-48 max-w-[1920px] px-3 mx-auto md:px-12 xl:px-40 2xl:px-48">
                    <Row className="flex-col lg:flex-row gap-44">

                        <Col xs={24} lg={9} className="mt-[60px] sm:mt-[64px] md:mt-[78px] xl:mt-[110px] 2xl:mt-[222px]">
                            <Flex vertical gap={48}>

                                {/* Biography  */}

                                <BiographyComponent />

                                {/* Skills */}

                                <SkillsComponent />

                                {/* Experience */}

                                <ExperienceComponent />

                            </Flex>
                        </Col>

                        <Col xs={24} lg={10} className="hidden lg:block">
                            <BrainSvgComponent />
                        </Col>

                    </Row>
                </Layout>
            </motion.div>
        </>
    );
}

export default AboutComponent;