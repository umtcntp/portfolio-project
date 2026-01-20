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
    vuejs,
    kodland,
    onurenerji,
    hangikredi,
    countly,
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
    {
        name: "vuejs",
        icon: vuejs,
    },
];

const experiences = [
    {
        title: "Intern Back-End Developer",
        company_name: "Onur Enerji",
        icon: onurenerji,
        iconBg: "#349800",
        date: "Jul 2022 - Oct 2022",
        points: [
            "Developed and maintained back-end systems using Java, Spring, and Maven for enterprise-level applications.",
            "Optimized database operations with MySQL to improve data retrieval performance and system efficiency.",
            "Performed source code analysis using SonarQube to ensure code quality and maintainability.",
            "Implemented unit tests and contributed to improving overall software reliability."
        ],
    },
    {
        title: "Technology Academy Intern",
        company_name: "Hangi Kredi",
        icon: hangikredi,
        iconBg: "#ffffff",
        date: "Jan 2022 - Jun 2022",
        points: [
            "Completed hands-on training in software development, data science, and business intelligence.",
            "Worked on banking technology projects, gaining real-world experience in financial systems.",
            "Improved problem-solving skills through practical case studies and technical workshops.",
            "Participated in mentoring and coaching sessions focused on professional and technical growth."
        ],
    },
    {
        title: "Junior Full Stack Developer",
        company_name: "Countly",
        icon: countly,
        iconBg: "#ffffff",
        date: "Sep 2023 - Dec 2024",
        points: [
            "Designed and developed RESTful APIs using Node.js and Express.js to support scalable, high-traffic applications.",
            "Built custom, reusable front-end components with Vue.js to deliver dynamic and responsive user interfaces.",
            "Designed and managed MongoDB data models, optimizing query performance and data consistency for large-scale datasets.",
            "Implemented secure authentication and authorization flows using Amazon Cognito and Okta.",
            "Improved application performance by analyzing API bottlenecks and optimizing request–response cycles.",
            "Worked closely with product managers and designers to translate business requirements into technical solutions.",
            "Contributed to feature planning and estimation within Agile sprints, ensuring timely and predictable deliveries.",
            "Maintained code quality through unit testing, code reviews, and adherence to clean code principles."
        ],
    },
    {
        title: "Freelance Python Tutor",
        company_name: "Kodland",
        icon: kodland,
        iconBg: "#5b87ff",
        date: "Jan 2025 - Present",
        points: [
            "Teaching Python programming to students across different age groups by adapting explanations to varying skill levels.",
            "Introducing core software engineering concepts such as Object-Oriented Programming (OOP), basic web development, and introductory artificial intelligence topics.",
            "Designing interactive projects and hands-on exercises to help students understand abstract programming concepts.",
            "Guiding students through problem-solving processes and debugging techniques during live sessions.",
            "Strengthening communication and mentoring skills by translating complex technical topics into clear, accessible explanations."
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
        source_code_link: "https://github.com/umtcntp/portfolio-project",
    },
];

export { services, technologies, experiences, projects };