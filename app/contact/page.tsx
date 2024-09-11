// import ConatctComponent from "@/components/app/Contact";
import dynamic from "next/dynamic";




const ConatctComponent = dynamic(() => import('@/components/app/Contact'), { ssr: false })


const ContactPage = () => {
    return (
        <ConatctComponent />
    );
}

export default ContactPage;