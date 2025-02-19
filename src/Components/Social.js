import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Social()
{
    return(
        <div className="header__socials">
            <a href="https://github.com/siddhesh-kulkarni/" target="_blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/siddhesh-kulkarni-39a015266/" target="_blank"><BsLinkedin/></a>
        </div>
    )
}