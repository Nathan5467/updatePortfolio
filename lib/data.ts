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
        title: "Blockchain Engineer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "RichLink"),
            React.createElement("br"),
            " Philippines"
        ),
        description:
            "Developed, launched, and audited over 20 Web3 applications and 100+ smart contracts on EVM chains, significantly boosting user engagement and transaction security while supporting $25M+ in transaction volume.",
        icon: React.createElement(FaBitcoin),
        date: "2022 Jul - 2025 Mar",
    },
    {
        title: "Full Stack Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            "Philippines"
        ),
        description:
            "Architected high-performance backend and frontend systems using Java, Spring Boot, Next.js, and Node.js, optimizing payment, analytics, and DevOps pipelines to enhance reliability, speed, and customer satisfaction.",
        icon: React.createElement(FaReact),
        date: "2019 Mar - 2022 Jun",
    },
    {
        title: "Software Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            "Thailand"
        ),
        description:
            "Led the launch and modernization of e-commerce platforms and legacy systems with .NET and Angular, improving order accuracy, system speed, and secure access for hundred of thousands users.",
        icon: React.createElement(FaVuejs),
        date: "2017 Nov - 2019 Feb",
    },
    {
        title: "Ba in Computer Science",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "National University of Singapore"),
            React.createElement("br"),
            "Singapore"
        ),
        description:
            "Graduated from a top-ranked university with a strong foundation in computer science, equipping me with rigorous technical and analytical skills.",
        icon: React.createElement(LuGraduationCap),
        date: "2014 Aug - 2017 May",
    },
]

export const experiencesDataZn = [
    {
        title: "Blockchain Engineer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "RichLink"),
            React.createElement("br"),
            " Philippines"
        ),
        description:
            "Developed, launched, and audited over 20 Web3 applications and 100+ smart contracts on EVM chains, significantly boosting user engagement and transaction security while supporting $25M+ in transaction volume.",
        icon: React.createElement(FaBitcoin),
        date: "2022 Jul - 2025 Mar",
    },
    {
        title: "Full Stack Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            "Philippines"
        ),
        description:
            "Architected high-performance backend and frontend systems using Java, Spring Boot, Next.js, and Node.js, optimizing payment, analytics, and DevOps pipelines to enhance reliability, speed, and customer satisfaction.",
        icon: React.createElement(FaReact),
        date: "2019 Mar - 2022 Jun",
    },
    {
        title: "Software Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Pixelake"),
            React.createElement("br"),
            "Thailand"
        ),
        description:
            "Led the launch and modernization of e-commerce platforms and legacy systems with .NET and Angular, improving order accuracy, system speed, and secure access for hundred of thousands users.",
        icon: React.createElement(FaVuejs),
        date: "2017 Nov - 2019 Feb",
    },
    {
        title: "Ba in Computer Science",
        location: React.createElement("span", {},
            React.createElement("a", {
                // href: "#",
                // style: { textDecoration: 'underline' },
                target: "_blank"
            }, "National University of Singapore"),
            React.createElement("br"),
            "Singapore"
        ),
        description:
            "Graduated from a top-ranked university with a strong foundation in computer science, equipping me with rigorous technical and analytical skills.",
        icon: React.createElement(LuGraduationCap),
        date: "2014 Aug - 2017 May",
    },
]


// export type ProjectTags = typeof projectsData[number]["tags"];

// export const projectsData = [
//     {
//         "title": "Ethical Digital Nation Collaborative Platform",
//         "title_zh": "数字道德国家协作平台",
//         "description":
//             "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
//         "desc_zh": "旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",
//         "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
//         "imageUrl": knowledgeSharingPlatformImage,
//         "projectUrl": "https://github.com/Nathan5467/digitalNation",
//         "demoUrl": "https://yujie-ethical-digital-nation.netlify.app/"
//     },
//     {
//         title: "Typing Speed",
//         title_zh: '打字测验',
//         description:
//             "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
//         desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
//         tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
//         imageUrl: typingSpeedImage,
//         projectUrl: 'https://github.com/Nathan5467/typingSpeed',
//         demoUrl: 'https://joy-typing-speed.netlify.app/',
//     },
//     {
//         title: "Global Wealth Spectrum Visualisation",
//         title_zh: '世界财富可视化光谱',
//         description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
//         desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
//         tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
//         imageUrl: visualizationImage,
//         projectUrl: 'https://github.com/Nathan5467/HTML-Evolution',
//         demoUrl: 'https://global-wealth-spectrum.netlify.app/',
//     },
    // {
    //     title: "last-portfolio",
    //     title_zh: "最后的投资组合",
    //     description:
    //         `A showcase of my skills and projects.`,
    //     desc_zh: "展示我的技能和项目。",
    //     tags: ["React", "TypeScript", "SCSS"],
    //     imageUrl: portfolioImage,
    //     projectUrl: 'https://github.com/Nathan5467/Port_me',
    //     demoUrl: 'https://port-me-git-main-nathans-projects-0da572c1.vercel.app/',
    // },
// ]

export const skillsData = [
    "Web3.js",
    "Ether.js",
    "React.js",
    "Next.js",
    "Angular.js",
    "Vue.js",
    "Three.js",
    "Smart Contract Auditing",
    "Vulnerability Researcher",
    "Flutter",
    "Docker",
    "WordPress",
    "DevOps",
    "Figma",
    "n8n",
    "ASP.net",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Express",
    "Chat bot",
    "MongoDB",
    "SQL"
] 
