import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div class="container experience_container">
        <div class="experience_frontend">
          <h3>Frontend Skills</h3>
          <div class="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">React</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">React Native</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">Html</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">Angular</h4>
              </div>
            </article>
          </div>
        </div>
        <div class="experience_backend">
          <h3>Backend Skills</h3>
          <div class="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">PHP</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">MySQL</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">MongoDB</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4 className="text-light">Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
