import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons"
import digikalaLogo from "@/public/pictures/digikala.png"
import DashboardLogo from "@/public/pictures/dashboard.png"
import irancellLogo from "@/public/pictures/irancell.png"
import virtualLogo from "@/public/pictures/virtual.jpg"
import cvioLogo from "@/public/pictures/cvio.png"




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
                contectOne: [
                    "Crafting Digital Experiences, Designing Tomorrow.",
                    "Innovating User Interfaces, Shaping the Future.",
                    "Building Digital Dreams, Transforming Reality.",
                    "Creating Seamless Interactions, Advancing Technology.",
                    "Designing for Tomorrow, Coding the Future.",
                    "Merging Creativity and Technology, Pioneering Progress.",
                    "Architecting Digital Solutions, Empowering Users.",
                    "Visualizing Possibilities, Engineering Innovations."
                ],
                contectTwo: "Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.",
                viewMyWorkBtn: "View My Work",
                contactBtn: "Contact Me"
            }
        }
    },
    about: {
        title: "BIOGRAPHY",
        descriptionOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel doloremque numquam quam nihil.",
        descritionTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        skills: {
            title: "SKILLS",
            skillsName: ["JavaScript", "TypeScript", "React.js", "Next.js", "Django", "SCSS",
                "Tailwind CSS", "MongoDB", "PostgreSQL", "Node.js",
                "Nest.js", "Express.js", "Spring Boot", "GraphQL", "Apollo",
                "Redux", "Framer Motion", "Three.js", "WebGL", "Webpack",
                "Vite", "Docker", "AWS", "Firebase", "Git", "Figma"]
        },
        experience: {
            title: "EXPERIENCE",
            one: {
                title: "Senior JavaScript Engineer",
                description: " led web development, offering expertise in JavaScript frameworks.",
                year: "2024 - Present",
                company: "Apple"
            },
            two: {
                title: "Senior React Developer",
                description: "I spearheaded React-based application development, leveraging advanced skills.",
                year: "2019 - 2024",
                company: "Microsoft"
            },
            three: {
                title: "Freelancer",
                description: "I provided web solutions, applying a range of technologies to address client requirements",
                year: "2010 - 2019",
            }
        }
    },
    portfolio: {
        myWorks: "My Works",
        workSample: [
            {
                title: "Digikala Project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolore nulla? Harum voluptate assumenda accusamus. Neque ipsum adipisci repellendus quas cumque. Deserunt est totam et eveniet earum delectus provident alias?",
                src: digikalaLogo,
                alt: "digikala",
                href: "https://professional-digikala.vercel.app/",
                bgColor: "gradient-bg-1"
            },
            {
                title: "Dashboard Project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolore nulla? Harum voluptate assumenda accusamus. Neque ipsum adipisci repellendus quas cumque. Deserunt est totam et eveniet earum delectus provident alias?",
                src: DashboardLogo,
                alt: "dashboard",
                href: "https://dashboard-iota-orcin.vercel.app/dashboard",
                bgColor: "gradient-bg-2"
            },
            {
                title: "Irancell Project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolore nulla? Harum voluptate assumenda accusamus. Neque ipsum adipisci repellendus quas cumque. Deserunt est totam et eveniet earum delectus provident alias?",
                src: irancellLogo,
                alt: "irancell",
                href: "https://irancell.netlify.app/",
                bgColor: "gradient-bg-3"
            },
            {
                title: "Virtual Project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolore nulla? Harum voluptate assumenda accusamus. Neque ipsum adipisci repellendus quas cumque. Deserunt est totam et eveniet earum delectus provident alias?",
                src: virtualLogo,
                alt: "virtual",
                href: "https://virtual-reality-beige.vercel.app/",
                bgColor: "gradient-bg-4"
            },
            {
                title: "Cvio Project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolore nulla? Harum voluptate assumenda accusamus. Neque ipsum adipisci repellendus quas cumque. Deserunt est totam et eveniet earum delectus provident alias?",
                src: cvioLogo,
                alt: "cvio",
                href: "https://amirhosseinzandi-web.github.io/cvio-website/",
                bgColor: "gradient-bg-5"
            }
        ],
        haveProjectTitle: "Do you have a project?",
    }
}