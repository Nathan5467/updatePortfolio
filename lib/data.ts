import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import portfolioImage from "@/public/portfolio.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";
import { FaBitcoin } from "react-icons/fa6";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    
    {
        title: "Web3 Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.saola.co/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Cong Ty Tnhh Saola Lab"),
            React.createElement("br"),
            " Hanoi, Vietnam"
        ),
        description:
            "Developed, deployed, and maintained multiple high-impact Web3 applications and smart contracts on EVM-compatible chains, driving user engagement, reducing errors, and managing over $1.5M in transaction volume.",
        icon: React.createElement(FaBitcoin),
        date: "2024 Dec - Present",
    },
    {
        title: "Full Stack Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.pixelake.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            " Hanoi, Vietnam"
        ),
        description:
            "Developed and optimized cloud-based SaaS applications using modern technologies (Vue.js, React, Go, Ruby on Rails, Spring Boot), microservices, and CI/CD pipelines, resulting in significant improvements in user satisfaction, performance, scalability, and deployment efficiency.",
        icon: React.createElement(FaReact),
        date: "2019 Oct - 2024 Nov",
    },
    {
        title: "Ba in Computing and IT",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://hust.edu.vn/en/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Hanoi University of Science and Technology"),
            React.createElement("br"),
            "Hanoi, Vietnam"
        ),
        description:
            "Graduated with a Bachelors degree of Computer Science, securing a GPA of 3.83/4.0. Gained foundational knowledge in Information Technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2014 Sep - 2019 May",
    },

]

export const experiencesDataZn = [
    {
        title: "Web3 Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.saola.co/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Cong Ty Tnhh Saola Lab"),
            React.createElement("br"),
            " Hanoi, Vietnam"
        ),
        description:
            "Developed, deployed, and maintained multiple high-impact Web3 applications and smart contracts on EVM-compatible chains, driving user engagement, reducing errors, and managing over $1.5M in transaction volume.",
        icon: React.createElement(FaBitcoin),
        date: "2024 Dec - Present",
    },
    {
        title: "Full Stack Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.pixelake.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            " Hanoi, Vietnam"
        ),
        description:
            "Developed and optimized cloud-based SaaS applications using modern technologies (Vue.js, React, Go, Ruby on Rails, Spring Boot), microservices, and CI/CD pipelines, resulting in significant improvements in user satisfaction, performance, scalability, and deployment efficiency.",
        icon: React.createElement(FaReact),
        date: "2019 Oct - 2024 Nov",
    },
    {
        title: "Ba in Computing and IT",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://hust.edu.vn/en/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Hanoi University of Science and Technology"),
            React.createElement("br"),
            "Hanoi, Vietnam"
        ),
        description:
            "Graduated with a Bachelors degree of Computer Science, securing a GPA of 3.83/4.0. Gained foundational knowledge in Information Technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2014 Sep - 2019 May",
    },
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Ethical Digital Nation Collaborative Platform",
        "title_zh": "数字道德国家协作平台",
        "description":
            "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
        "desc_zh": "旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",
        "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://github.com/Nathan5467/digitalNation",
        "demoUrl": "https://yujie-ethical-digital-nation.netlify.app/"
    },
    {
        title: "Typing Speed",
        title_zh: '打字测验',
        description:
            "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
        desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/Nathan5467/typingSpeed',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '世界财富可视化光谱',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Nathan5467/HTML-Evolution',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },
    {
        title: "last-portfolio",
        title_zh: "最后的投资组合",
        description:
            `A showcase of my skills and projects.`,
        desc_zh: "展示我的技能和项目。",
        tags: ["React", "TypeScript", "SCSS"],
        imageUrl: portfolioImage,
        projectUrl: 'https://github.com/Nathan5467/Port_me',
        demoUrl: 'https://port-me-git-main-nathans-projects-0da572c1.vercel.app/',
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Angular",
    "Vue",
    "Web3",
    "Flutter",
    "Docker",
    "Tailwind",
    "Boostrap",
    "Figma",
    "Three.js",
    "ASP.net",
    "Node",
    "PHP",
    "Laravel",
    "Express",
    "Git",
    "MongoDB",
    "SQL"
] 
