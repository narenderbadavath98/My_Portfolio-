import ExperienceSection from "../ExperienceSection";

export default function ExperienceSectionExample() {
  return (
    <ExperienceSection
      experiences={[
        {
          role: "Development Intern",
          company: "The Developers Arena",
          duration: "May – Oct 2025",
          description: "Developed responsive front-end features, integrated APIs, and enhanced web application performance.",
          technologies: ["React", "JavaScript", "REST APIs", "Git"],
        },
        {
          role: "AI Developer Intern",
          company: "Swecha (IIIT Hyderabad & Meta)",
          duration: "May 2025",
          description: "Contributing to Telugu LLM development using Python, AI/ML frameworks, and DevOps for scalable Indic AI systems.",
          technologies: ["Python", "AI/ML", "LLMs", "DevOps"],
        },
        {
          role: "Conversational AI Analyst",
          company: "AICTE & Edunet Foundation",
          duration: "Sept – Oct 2025",
          description: "Worked on conversational data analytics using LLMs, building AI case studies across multiple domains.",
          technologies: ["LLMs", "Data Analytics", "Python", "NLP"],
        },
        {
          role: "Full Stack Developer",
          company: "Learn Fusion",
          duration: "Sept – Nov 2024",
          description: "Built and optimized full-stack modules with MERN and Django, improving UI responsiveness and backend efficiency.",
          technologies: ["MERN", "Django", "PostgreSQL", "React"],
        },
        {
          role: "MERN Stack Developer",
          company: "DevRhylme Foundation",
          duration: "May – Jul 2024",
          description: "Designed and tested MERN stack applications, enhancing debugging and version control through Git and GitHub.",
          technologies: ["MongoDB", "Express", "React", "Node.js", "Git"],
        },
      ]}
    />
  );
}
