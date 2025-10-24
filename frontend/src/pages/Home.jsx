import Hero from "../assets/Hero.png";
import Contact from "../assets/Contact.png";
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

      {/* Part 3: Experience */}
      <div className="mt-4">
        <h2 className="font-bold text-3xl pb-3">Experiences</h2>
        <ExperienceSection />
      </div>

      {/* Part 3: Projects */}
      <div className="mt-16">
        <h2 className="font-bold text-3xl pb-3">Projects</h2>
        <ProjectSection />
      </div>

      {/* Part 2: Skills */}
      <div className="mt-16">
        <h2 className="font-bold text-3xl pb-3">Skills</h2>
        <SkillsSection />
      </div>

      {/* Part 4: Contact Me */}
      <div className="mt-20">
        <section className="flex flex-col md:flex-row gap-16 mb-26">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-gray-600 leading-relaxed">
              Have an idea, a project, or just want to say hi? Drop a message
              below — I’d love to connect and hear from you!
            </p>
          </div>

          {/* Right Form */}
          <form className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="heyeaslo@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Send a message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-neutral-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-neutral-600 flex items-center gap-2 transition"
            >
              Submit <span>→</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
