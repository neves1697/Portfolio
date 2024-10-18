import React from "react";
import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";
import "../../Styles/Redes.css";

const Redes = () => {
    const redes = [
        { nome: 'Github', url: 'https://github.com/neves1697' },
        { nome: 'Linkedin', url: 'https://www.linkedin.com/in/anderson-neves-405968118/' }
    ];

    return <>
        <div className="redes">
            <a href={redes[1].url} target="_blank" title={redes[1].nome}>
                <FaLinkedin size={50} color="#0A66C2 " />
            </a>

            <a href={redes[0].url} title={redes[0].nome}>
                <FaGithub size={50} color="#c6c6c6" />
            </a>
        </div>
    </>
}

export default Redes;