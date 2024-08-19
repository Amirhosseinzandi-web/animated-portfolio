"use client"
import { Layout } from "antd";



const { Header, Footer, Sider, Content } = Layout;

const DesktopHeader = () => {
    return (
        <Layout>
            <Header className="text-white p-0">
                header
            </Header>
            <p className="gilory font-black">salllaaam</p>
        </Layout>
    );
}

export default DesktopHeader;