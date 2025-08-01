import { useState } from "react";
import { cn } from "@/lib/utils";

// Fazer uma lista de Skills:
const skills = [
  { name: "HTML/CSS", level: 50, category: "frontend" },
  { name: "JavaScript", level: 30, category: "frontend" },
  { name: "React", level: 10, category: "frontend" },
  { name: "Tailwind CSS", level: 10, category: "frontend" },
  { name: "Next.js", level: 0, category: "frontend" },

  { name: "Git/Github", level: 35, category: "tools" },
  { name: "Docker", level: 15, category: "tools" },
  { name: "Figma", level: 55, category: "tools" },
  { name: "VS Code", level: 55, category: "tools" },
];

const categories = ["All", "Frontend", "Tools"];

export const SkillsSection = () => {
  const [isActiveCategories, setActiveCategories] = useState("all");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary"> skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                isActiveCategories === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-primary mb-6 text-xl">
          Currently working on my skills :p
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out]"
                    style={{ width: skill.level + "%" }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
