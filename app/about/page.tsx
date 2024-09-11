// import AboutComponent from "@/components/app/About";
import dynamic from "next/dynamic";



const AboutComponent = dynamic(() => import('@/components/app/About'), { ssr: false })


const AboutPage = () => {
    return (
        <AboutComponent />
    );
}

export default AboutPage;