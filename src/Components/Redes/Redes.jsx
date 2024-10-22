import React from "react";
import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";
import "../../Styles/Redes.css";

const Redes = () => {
    const redes = [
        { nome: 'Github', url: 'https://github.com/neves1697' },
        { nome: 'Linkedin', url: 'https://www.linkedin.com/in/anderson-neves-405968118/' }
    ];

    const redes2 = {
        linkedin: "https://www.linkedin.com/in/anderson-neves-405968118/",
        linkedinDescricao: "Linkedin",
        github: "https://github.com/neves1697",
        githubDescricao: "Github"
    }

    return <>
        <div className="redes">
            <a href={redes2.linkedin} target="_blank" title={redes2.linkedinDescricao}>
                <FaLinkedin size={50} color="#0A66C2 " />
            </a>

            <a href={redes2.github} title={redes2.githubDescricao} target="_blank">
                <FaGithub size={50} color="#c6c6c6" />
            </a>
        </div>
    </>
}

export default Redes;