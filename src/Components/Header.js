import React from "react"
import CTA from "./CTA"
import sid from '../../src/assets/sid.png';
import Social from "./Social";

export default function Header(){
    return(
        <header>
             <div class="container header_container">
                <h1>Hello I'm</h1>
                <h1>Siddhesh Kulkarni</h1>
                <h5 class="text-light">Fullstack Developer</h5>
                <CTA/>
                <Social/>
                <div class="me">
                    <img src={sid} alt="Siddhesh Kulkarni"/>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
             </div>
        </header>
    )
}