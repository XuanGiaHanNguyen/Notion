import Hero from "../assets/Hero.png";
import { BookUser, Settings } from "lucide-react";

import SkillsSection from "./skills/Skill";
import ExperienceSection from "./experience/experience";
import ProjectSection from "./projects/projects";

function Home() {
  return (
    <div className="px-56 pt-34">
      {/* Part 1: Brief introduction */}
      <div className="flex flex-row">
        <div className="flex-1">
          <h2 className="font-bold text-4xl pb-3">Hello, My name is Han.</h2>
          <p className="text-xl">
            Welcome to my lounge, where I stash together all my late-night
            coding projects and spontaneous bursts of creative chaos.
          </p>
          <p className="text-xl pt-1">
            Feel free to look around and explore and shoot me an email if you’d
            like to connect!
          </p>
          <div className="flex flex-row ">
            <button className="rounded-md text-md border-1 border-neutral-300 py-2 px-3 hover:bg-neutral-100 mt-4 font-medium flex flex-row justify-center align-center gap-2">
              <BookUser width={20} className="text-neutral-700" />
              Contact Me
            </button>
            <button className="text-md py-2 px-3 mt-4 font-medium flex flex-row justify-center align-center gap-2">
              <Settings width={18} className="text-neutral-400" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img src={Hero} alt="Hero" className="" />
        </div>
      </div>

      {/* Part 2: Skills */}
      <div className="mt-2">
        <h2 className="font-bold text-3xl pb-3">Skills</h2>
        <SkillsSection />
      </div>

      {/* Part 3: Experience */}
      <div className="mt-16">
        <h2 className="font-bold text-3xl pb-3">Experiences</h2>
        <ExperienceSection />
      </div>

      {/* Part 3: Projects */}
      <div className="mt-16">
        <h2 className="font-bold text-3xl pb-3">Projects</h2>
        <ProjectSection />
      </div>

      {/* Part 4: Contact Me */}
      <div>
        <h2>Contact Me</h2>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
