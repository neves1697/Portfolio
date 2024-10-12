import React from "react";
import "../../Styles/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import "../../Styles/Mobile/TelaInicial.css";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { SiMysql, SiCsharp,SiPostman,SiOracle,SiExpo  } from "react-icons/si";
import { FaCss3, FaHtml5,FaReact  } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";

const TelaInicial = () => {
    const cards = [
        { title: "Sobre Mim", description: "Desenvolvedor Frontend com paixão por criar interfaces incríveis." },
        { title: "Habilidades", description: "React, JavaScript, CSS, HTML, Node.js." },
        { title: "Contato", description: "Email: exemplo@email.com" },
        { title: "Projeto", description: "Projeto XYZ em desenvolvimento." },
        { title: "Experiência", description: "2 anos de experiência em desenvolvimento." },
        { title: "Educação", description: "Graduado em Ciência da Computação." },
    ];

    // Linguagens e ícones
    const languages = [
        { icon: <IoLogoJavascript size={50} color="yellow" />, alt: "JavaScript" },
        { icon: <BiLogoJava size={50} color="#F80000" />, alt: "Java" },
        { icon: <SiMysql size={50} color="#00758F"/>, alt: "Mysql" },
        { icon: <SiCsharp size={50} color="purple" />, alt: "C#" },
        { icon: <BiLogoPostgresql size={50} color="#336791" />, alt: "PostgreSQL" },
        { icon: <FaHtml5 size={50} color="#E44D26" />, alt: "HTML" },
        { icon: <SiPostman  size={50} color="#FF6A24" />, alt: "Postman" },
        { icon: <FaReact size={50} color="#61DAFB" />, alt: "React JS" },
        { icon: <SiOracle size={50} color="#F80000" />, alt: "Oracle" },
        { icon: <AiOutlinePython size={50} color="#306998" />, alt: "Python" },
        { icon: <SiExpo size={50} color="white" />, alt: "Expo" },
    ];

    return (
        <>
            <div className="container">
                <div className="container-fundo">
                    <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />
                </div>

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

                <div className="card-container">
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TelaInicial;
