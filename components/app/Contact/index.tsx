"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import { Col, Flex, Layout, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useFormik } from "formik";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const ConatctComponent = () => {
    const [domLoaded, setDomLoaded] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageLoaded, setMessageLoaded] = useState(false)
    const { contact } = pageLevelLocalization


    useEffect(() => {
        setDomLoaded(true)
        const savedMessage = localStorage.getItem('user_message') || "";
        const savedEmail = localStorage.getItem('user_email') || "";
        formik.setValues({
            user_message: savedMessage,
            user_email: savedEmail
        });
    }, [])

    useEffect(() => {
        domLoaded && (document.body.style.overflowY = "auto")
    }, [domLoaded])




    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (values: any) => {
        // e.preventDefault();
        setEmailSent(false)
        setEmailError(false)
        setMessageLoaded(true)

        if (formRef.current) {
            emailjs
                .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!
                    , process.env.NEXT_PUBLIC_TEMPLATE_ID!
                    , formRef.current,
                    {
                        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    })
                .then(
                    () => {
                        // console.log('SUCCESS!');
                        setMessageLoaded(false)
                        setEmailSent(true)
                        localStorage.clear()
                        formik.resetForm()
                    },
                    (error) => {
                        // console.log('FAILED...', error.text);
                        setMessageLoaded(false)
                        setEmailError(true)
                    },
                );
        }
    };



    const formik = useFormik({
        initialValues: {
            user_message: "",
            user_email: ""
        },
        validationSchema: Yup.object({
            user_message: Yup.string().required("Text is required"),
            user_email: Yup.string()
                .email("Invalid email address")
                .required("Email is required")
        }),
        onSubmit: (values) => {
            sendEmail(values)
        }
    })



    useEffect(() => {
        if (domLoaded) {
            localStorage.setItem('user_message', formik.values.user_message);
            localStorage.setItem('user_email', formik.values.user_email);
        }
    }, [formik.values.user_message, formik.values.user_email, domLoaded]);




    useEffect(() => {

        const alertState = (emailError && "error") || (emailSent && "success") || (messageLoaded && "info")

        if (alertState) {
            Swal.fire({
                title: alertState === "error" ? "something went wrong" : alertState === "success" ? "Message sent" : "Wait",
                icon: alertState
            });
        }


    }, [emailSent, emailError, messageLoaded])




    return (
        <motion.div
            initial={{ y: "-200vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeOut" }}
        >
            <Layout className="bg-transparent h-[calc(100dvh-70px)] lg:h-[calc(100dvh-108px)] overflow-y-clip lg:mt-[38px] px-3 md:px-12 xl:px-40 2xl:px-48 max-w-[1920px] mx-auto">
                <Row className="h-full overflow-y-auto">

                    <Col xs={24} lg={12} className="flex justify-center items-center text-6xl gilory [&>span:nth-of-type(4)]:ml-4 h-1/2 lg:h-full">
                        {

                            contact.sayHello.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.1,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))

                        }
                        <span>🤪</span>
                    </Col>

                    <Col xs={24} lg={12} className="h-auto flex justify-center items-center">
                        <div className="h-full w-full bg-[#fef2f2] rounded-xl flex justify-center items-center py-9">
                            <form ref={formRef} className="flex flex-col gap-8 justify-evenly w-full lg:h-fit max-w-[70%]" onSubmit={formik.handleSubmit}>


                                <div>
                                    <Flex vertical gap={32} className="border-b-black border-b-[2px] lg:!gap-[10px]">
                                        <label className="text-xl" htmlFor="user_message">Dear Amirhossein,</label>
                                        <TextArea rows={4} className="!outline-none !border-none !bg-transparent mb-1 max-h-[400px]"
                                            id="user_message"
                                            {...formik.getFieldProps('user_message')}
                                        />

                                    </Flex>
                                    {
                                        formik.touched.user_message && (
                                            <div className="text-red-500">{formik.errors.user_message}</div>
                                        )
                                    }
                                </div>


                                <div>
                                    <Flex vertical gap={32} className="border-b-black border-b-[2px]">
                                        <label className="text-xl" htmlFor="user_email">My mail address is:</label>
                                        <input
                                            type="text"
                                            id="user_email"
                                            {...formik.getFieldProps('user_email')}
                                            className="outline-none border-none !bg-transparent mb-1"
                                        />
                                    </Flex>

                                    {formik.touched.user_email && formik.errors.user_email ? (
                                        <div className="text-red-500">{formik.errors.user_email}</div>
                                    ) : null}
                                </div>


                                <span className="text-xl">Regards</span>
                                <button type="submit" className="bg-[#e9d5ff] p-4 rounded-md font-semibold text-xl">Send</button>

                            </form>
                        </div>
                    </Col>

                </Row>
            </Layout >
        </motion.div>
    );
}

export default ConatctComponent;