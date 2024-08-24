"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import { Flex, Typography } from "antd";




const { Title, Text } = Typography


const ExperienceComponent = () => {

    const { about } = pageLevelLocalization

    return (
        <Flex vertical gap={48}>

            <Title level={1} className="gilory !font-bold !text-2xl !m-0 !leading-10 md:!text-6xl">{about.experience.title}</Title>

            <div>
                <Flex>
                    <div className="flex flex-col gap-3 flex-[2]">
                        <Text className="p-3 bg-white rounded-md font-semibold text-base">{about.experience.one.title}</Text>
                        <Text className="italic p-3 font-semibold">{about.experience.one.description}</Text>
                        <Text className="px-3 text-rose-400 text-base font-semibold">{about.experience.one.year}</Text>
                        <span className="block p-1 bg-white w-fit rounded-md text-base font-semibold">{about.experience.one.company}</span>
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
                        <Text className="p-3 bg-white rounded-md font-semibold text-base">{about.experience.two.title}</Text>
                        <Text className="italic p-3 font-semibold">{about.experience.two.description}</Text>
                        <Text className="px-3 text-rose-400 text-base font-semibold">{about.experience.two.year}</Text>
                        <span className="block p-1 bg-white w-fit rounded-md text-base font-semibold">{about.experience.two.company}</span>
                    </div>
                </Flex>

                <Flex>
                    <div className="flex flex-col gap-3 flex-[2]">
                        <Text className="p-3 bg-white rounded-md font-semibold text-base">{about.experience.three.title}</Text>
                        <Text className="italic p-3 font-semibold">{about.experience.three.description}</Text>
                        <Text className="px-3 text-rose-400 text-base font-semibold">{about.experience.three.year}</Text>
                        {/* <span className="block p-1 bg-white w-fit rounded-md text-base font-semibold">Apple</span> */}
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
    );
}

export default ExperienceComponent;