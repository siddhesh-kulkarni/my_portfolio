import React from "react";
import { GrAchievement } from "react-icons/gr";
import { BsAward } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div class="container about_container">
        <div class="about_content">
          <div class="about_cards">
            <article class="about_card">
              <BsAward className="about_icons" />
              <h5>Experience</h5>
              <p className="about_info">
                6 months Intership as Fullstack Developer at Codeworld Infotech
              </p>
            </article>

            <article class="about_card">
              <GrAchievement className="about_icons" />
              <h5>Achievements</h5>
              <p className="about_info">
                2nd at Dexter Inofest 2023-24 National Level Programming
                Competition
              </p>
            </article>

            <article class="about_card">
              <GoProjectSymlink className="about_icons" />
              <h5>Projects</h5>
              <p className="about_info">Completed 6 Projects in Intership</p>
            </article>
          </div>
          <p>
            I am seeking a challenging role in a reputed company where I can
            apply my software skills to contribute to the organization's
            success. I aim to work on innovative projects, enhance my technical
            expertise, and grow professionally in a dynamic environment while
            working collaboratively with a team to achieve common goals.
          </p>
        </div>
      </div>
    </section>
  );
}
