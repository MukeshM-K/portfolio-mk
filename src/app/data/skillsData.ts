import { title } from "process";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

import {
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
    SiMongodb,
    SiVitest,
    SiNextdotjs
    
    

} from "react-icons/si"


export const skills = {
    frontend: {
        title: "Frontend",
        stacks: [
            {
            stack: "JavaScript",
            icon: SiJavascript
        },

        {
            stack: "React.JS",
            icon: FaReact
        },

        {
            stack: "Next.JS",
            icon: SiNextdotjs
        },

        {
            stack: "Tailwindcss",
            icon: SiTailwindcss
        },

        {
            stack: "HTML",
            icon: FaHtml5
        },

        {
            stack: "Vite",
            icon: SiVitest
        },



    ]
    },



}