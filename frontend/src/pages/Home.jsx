import Hero from "../assets/Hero.png";
import { BookUser, Settings, Asterisk, CalendarFold } from "lucide-react";
import { motion } from "framer-motion";

import SkillsSection from "./skills/Skill";
import ExperienceSection from "./experience/experience";
import ProjectSection from "./projects/projects";
import SideNav from "./Sidebar";

function Home() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      {/* Stationary right-side navigation */}
      <SideNav />

      <div className="px-56 pt-34">
        {/* === Part 1: Brief Introduction === */}
        <motion.div
          id="intro"
          className="flex flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="flex-1">
            <h2 className="font-bold text-5xl pb-3">Hello, My name is Han.</h2>
            <p className="text-xl">
              Welcome to my lounge, where I stash together all my late-night
              coding projects and spontaneous bursts of creative chaos.
            </p>
            <p className="text-xl pt-1">
              Feel free to look around and explore and shoot me an email if you'd
              like to connect!
            </p>
            <div className="flex flex-row gap-3">
              <button className="rounded-md text-md border border-neutral-300 py-2 px-3 hover:bg-neutral-100 mt-4 font-medium flex flex-row justify-center items-center gap-2 transition-all">
                <CalendarFold width={20} className="text-neutral-700" />
                Contact Me
              </button>
              <button className="text-md py-2 px-3 mt-4 font-medium flex flex-row justify-center items-center gap-2 hover:text-neutral-700 transition-all">
                <Settings width={18} className="text-neutral-600" />
              </button>
            </div>
          </div>

          {/* Static Hero image — no animation */}
          <div className="flex-1 flex justify-end items-center">
            <img src={Hero} alt="Hero" className="w-120" />
          </div>
        </motion.div>

        {/* === Part 2: Experience === */}
        <div id="experience" className="mt-4">
          <motion.h2
            className="font-bold text-3xl pb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariants}
          >
            Experiences
          </motion.h2>
          <ExperienceSection />
        </div>

        {/* === Part 3: Projects === */}
        <div id="projects" className="mt-16">
          <motion.h2
            className="font-bold text-3xl pb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariants}
          >
            Projects
          </motion.h2>
          <ProjectSection />
        </div>

        {/* === Part 4: Skills === */}
        <div id="skills" className="mt-16">
          <motion.h2
            className="font-bold text-3xl pb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariants}
          >
            Skills
          </motion.h2>
          <SkillsSection />
        </div>

        {/* === Part 5: Contact Me === */}
        <motion.div
          id="contact"
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <section className="flex flex-col md:flex-row gap-16 mb-26">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-600 leading-relaxed">
                Have an idea, a project, or just want to say hi? Drop a message
                below — I'd love to connect and hear from you!
              </p>
            </div>

            {/* Right Form */}
            <motion.form
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div>
                <label className="block text-md font-semibold mb-1 flex flex-row gap-1">
                  Name{" "}
                  <span className="flex items-center justify-center">
                    <Asterisk
                      size={12}
                      strokeWidth={3}
                      className="rounded-full bg-neutral-200"
                    />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 flex flex-row gap-1">
                  Email{" "}
                  <span className="flex items-center justify-center">
                    <Asterisk
                      size={12}
                      strokeWidth={3}
                      className="rounded-full bg-neutral-200"
                    />
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="heyeaslo@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 flex flex-row gap-1">
                  Send a message{" "}
                  <span className="flex items-center justify-center">
                    <Asterisk
                      size={12}
                      strokeWidth={3}
                      className="rounded-full bg-neutral-200"
                    />
                  </span>
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="bg-neutral-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-neutral-600 flex items-center gap-2 transition"
              >
                Submit <span>→</span>
              </button>
            </motion.form>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;