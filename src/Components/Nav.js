import React , {useState} from "react";
import { AiOutlineHome, AiOutlineUser ,AiFillBook, AiFillContacts, AiFillProject} from "react-icons/ai";
import { MdSchool } from "react-icons/md";
export default function Nav()
{
    const [activenow, setActiveNow] = useState('#');

    return(
       <nav>
        <a href="#" className={activenow === '#'? 'active':''} onClick={()=>setActiveNow('#')}><AiOutlineHome/></a>
        <a href="#about" className={activenow === '#about'? 'active':''} onClick={()=>setActiveNow('#about')}><AiOutlineUser/></a>
        <a href="#experience" className={activenow === '#experience'? 'active':''} onClick={()=>setActiveNow('#experience')}><AiFillBook/></a>
        <a href="#projects" className={activenow === '#projects'? 'active':''} onClick={()=>setActiveNow('#projects')}><AiFillProject/></a>
        <a href="#academics" className={activenow === '#academics'? 'active':''} onClick={()=>setActiveNow('#academics')}><MdSchool/></a>
        <a href="#contact" className={activenow === '#contact'? 'active':''} onClick={()=>setActiveNow('#contact')}><AiFillContacts/></a>
       </nav>
    )
}