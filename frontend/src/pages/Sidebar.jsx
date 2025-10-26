import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "intro", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      let current = active;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          onClick={() => scrollTo(section.id)}
          whileHover={{ scale: 1.1 }}
          className="group relative flex items-center cursor-pointer"
        >
          {/* Bullet */}
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === section.id
                ? "bg-neutral-800 scale-125"
                : "bg-neutral-400 hover:bg-neutral-600"
            }`}
          />

          {/* Label (visible on hover) */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-5 bg-neutral-900 text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100"
          >
            {section.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
