import React from "react";
import Sid_Resume from '../../src/assets/Sid_Resume.pdf';
import Siddhesh_Kulkarni from '../../src/assets/Siddhesh_Kulkarni.pdf';
const CTA=()=>{
    return(
        <div className="cta">
            <a href={Siddhesh_Kulkarni} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA