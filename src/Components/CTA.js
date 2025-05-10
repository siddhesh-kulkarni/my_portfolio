import React from "react";
import SiddheshKulkarni from '../../src/assets/SiddheshKulkarni.pdf';
// import Siddhesh_Kulkarni from '../../src/assets/Siddhesh_Kulkarni.pdf';
const CTA=()=>{
    return(
        <div className="cta">
            <a href={SiddheshKulkarni} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA