import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons"



export const localization = {
    header: {
        navbar: [
            {
                label: "Home",
                path: "/"
            },
            {
                label: "About",
                path: "/about"
            },
            {
                label: "Portfolio",
                path: "/portfolio"
            },
            {
                label: "Contact",
                path: "/contact"
            }
        ],
        icons: [
            {
                icon: <GithubFilled />,
                path: "https://github.com/amirhosseinzandi-web"
            },

            {
                icon: <InstagramFilled />,
                path: "https://instagram.com/amirhosseinzandi_web/"
            },

            {
                icon: <FacebookFilled />,
                path: "/"
            },

            {
                icon: <LinkedinFilled />,
                path: "https://www.linkedin.com/in/amirhosseinzandi"
            },
        ]
    }
}




export const pageLevelLocalization = {
    home: {
        hero: {
            contents: {
                contectOne: "Crafting Digital Experiences, Designing Tomorrow.",
                contectTwo: "Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.",
                viewMyWorkBtn: "View My Work",
                contactBtn: "Contact Me"
            }
        }
    }
}