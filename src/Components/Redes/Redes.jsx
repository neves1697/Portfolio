import React from "react";
import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";
import "../../Styles/Redes.css";

const Redes = () => {
    const linkedin = "https://www.linkedin.com/in/anderson-neves-405968118/";
    const github = "https://github.com/neves1697";
    const redes = [
        { nome: 'github', url: 'https://github.com/neves1697' },
        { nome: 'linkedin', url: 'https://www.linkedin.com/in/anderson-neves-405968118/' }
    ];

    return <>
        <div className="redes">
            <a href={redes[1].url} target="_blank" title="Linkedin">
                <FaLinkedin size={50} color="#0A66C2 " />
            </a>

            <a href={redes[0].url} title="Github">
                <FaGithub size={50} color="#c6c6c6" />
            </a>
        </div>
    </>
}

export default Redes;