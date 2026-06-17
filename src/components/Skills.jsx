import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiJavascript, SiHtml5, SiReact, SiGit,
    SiNetlify, SiVercel, SiWireshark, SiMqtt,
    SiVmware, SiVirtualbox, SiFortinet, SiPhp, SiBootstrap
} from "react-icons/si";
import {
    FaLinux, FaServer, FaNetworkWired, FaShieldAlt,
    FaCss3Alt, FaWindows
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const skillCategories = [
    {
        title: "Cibersegurança & Redes",
        color: "#8bc34a",
        skills: [
            { name: "Pentesting", icon: <MdSecurity /> },
            { name: "Wireshark", icon: <SiWireshark /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Análise de Redes", icon: <FaNetworkWired /> },
            { name: "Servidores", icon: <FaServer /> },
            { name: "Fortinet / Firewall", icon: <SiFortinet /> },
            { name: "MQTT / IoT", icon: <SiMqtt /> },
            { name: "Gestão de Vulnerabilidades", icon: <FaShieldAlt /> },
        ],
    },
    {
        title: "Virtualização & Infraestrutura",
        color: "#60a5fa",
        skills: [
            { name: "VMware", icon: <SiVmware /> },
            { name: "VirtualBox", icon: <SiVirtualbox /> },
            { name: "Active Directory", icon: <FaShieldAlt /> },
            { name: "Windows Server", icon: <FaWindows /> },
        ],
    },
    {
        title: "Web Development",
        color: "#bbed2f",
        skills: [
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "Git", icon: <SiGit /> },
            { name: "Netlify", icon: <SiNetlify /> },
            { name: "Vercel", icon: <SiVercel /> },
        ],
    },
];

export default function Skills() {
    return (
        <section className="skills-section">
            <motion.h2
                className="skills-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Skills
            </motion.h2>

            <div className="skills-categories">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        className="skills-category"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                    >
                        <h3 className="skills-category-title" style={{ color: cat.color }}>
                            {cat.title}
                        </h3>
                        <div className="skills-grid">
                            {cat.skills.map((skill, j) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-chip"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 }}
                                    whileHover={{ scale: 1.07, y: -2 }}
                                >
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
