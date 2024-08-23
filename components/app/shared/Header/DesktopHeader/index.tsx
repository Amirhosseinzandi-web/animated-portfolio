"use client"
import { localization } from "@/constant/localizatyion";
import { Flex, Layout } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";



const { Header } = Layout;

const DesktopHeader = () => {
    const { header } = localization
    const pathName = usePathname()


    return (
        <>
            <Layout className="bg-transparent p-0 hidden md:block">
                <Header className="text-black bg-transparent h-auto flex items-center leading-none mt-[30px] max-w-[1920px] mx-auto md:px-12 xl:px-40 2xl:px-48 justify-between">

                    <nav>
                        <ul className="flex gap-5">
                            {
                                header.navbar.map((item, ind) => (
                                    <li key={ind}>
                                        <Link href={item.path} className={`text-xl text-black p-1 rounded-md flex justify-center items-center ${item.path === pathName ? "bg-black !text-white" : ""}`}>{item.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Flex className="bg-black rounded-md p-1 hidden lg:block">
                        <Link href={"/"} className="w-full h-full flex items-center justify-center gap-1 font-bold">
                            <span className="block text-white">Amirhossein</span>
                            <span className="text-black bg-white flex justify-center items-center w-12 h-8 rounded-md">Zandi</span>
                        </Link>
                    </Flex>

                    <Flex align="center" gap={16}>
                        {
                            header.icons.map((item, ind) => (
                                <Link href={item.path} key={ind} target="_blank" className="text-2xl">
                                    {item.icon}
                                </Link>
                            ))
                        }
                    </Flex>

                </Header>
            </Layout>
        </>
    );
}

export default DesktopHeader;