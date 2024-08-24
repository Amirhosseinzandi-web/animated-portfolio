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
                year: "2010 - 2019" ,
            }
        }
    }
}