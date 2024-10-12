import React from "react";
import "../../Styles/TelaInicial.css";
import "../../Styles/Mobile/TelaInicial.css";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { SiMysql, SiCsharp, SiPostman, SiOracle, SiExpo, SiInsomnia } from "react-icons/si";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import "../../Styles/Slide.css";

const Slides = () => {
    const languages = [
        { icon: <SiCsharp size={50} color="purple" />, alt: "C#" },
        { icon: <BiLogoJava size={50} color="#F80000" />, alt: "Java" },
        { icon: <SiMysql size={50} color="#00758F" />, alt: "Mysql" },
        { icon: <BiLogoPostgresql size={50} color="#336791" />, alt: "PostgreSQL" },
        { icon: <FaHtml5 size={50} color="#E44D26" />, alt: "HTML" },
        { icon: <FaCss3 size={50} color="#1572B6" />, alt: "CSS" },
        { icon: <IoLogoJavascript size={50} color="yellow" />, alt: "JavaScript" },
        { icon: <SiPostman size={50} color="#FF6A24" />, alt: "Postman" },
        { icon: <SiInsomnia size={50} color="#5851DB" />, alt: "Insomnia" },
        { icon: <FaReact size={50} color="#61DAFB" />, alt: "React JS" },
        { icon: <SiOracle size={50} color="#F80000" />, alt: "Oracle" },
        { icon: <AiOutlinePython size={50} color="#306998" />, alt: "Python" },
        { icon: <SiExpo size={50} color="white" />, alt: "Expo" },
    ];

    return <>
        <div className="language-container">
            <div className="language-slider">
                {/* Renderiza os ícones uma vez para a animação contínua */}
                {languages.map((language, index) => (
                    <div key={index} className="language-card">
                        {language.icon}
                    </div>
                ))}
                {/* Duplicando os ícones apenas para a animação */}
                {languages.map((language, index) => (
                    <div key={index + languages.length} className="language-card">
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Slides;