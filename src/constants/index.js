import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    ecommerceapp,
    portfolio,
    threejs,
    digitalocean,
    python

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Python Tutor",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "digitalocean",
        icon: digitalocean,
    },
    {
        name: "python",
        icon: python,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];


const projects = [
    {
        name: "E-Commerce App",
        description:
            "Full-stack e-commerce platform with product listing, cart, and checkout flows. Built with a scalable Node.js backend and deployed using Docker on DigitalOcean for reliable, production-ready delivery.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "express", color: "green-text-gradient" },
            { name: "mongodb", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
            { name: "docker", color: "blue-text-gradient" },
            { name: "digitalocean", color: "blue-text-gradient" },
        ],
        image: ecommerceapp,
        source_code_link: "https://github.com/umtcntp/e-commerce-app",
        live_demo_link: "https://ecommerceapp.store/",
    },
    {
        name: "3D Portfolio",
        description:
            "Personal portfolio website with a 3D hero section, smooth animations, and a fully responsive layout. Built using React (Vite), Tailwind CSS, and modern animation and 3D libraries.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "vite", color: "blue-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
            { name: "threejs", color: "green-text-gradient" },
            { name: "react-three-fiber", color: "green-text-gradient" },
            { name: "drei", color: "green-text-gradient" },
            { name: "framer-motion", color: "pink-text-gradient" },
            { name: "emailjs", color: "green-text-gradient" },
        ],
        image: portfolio,
        source_code_link: "https://github.com/umtcntp/<repo-adi>",
    },
];

export { services, technologies, experiences, projects };