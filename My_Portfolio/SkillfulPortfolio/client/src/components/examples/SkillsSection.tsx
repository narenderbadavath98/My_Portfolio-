import SkillsSection from "../SkillsSection";
import { Code, Layers, Brain, Database } from "lucide-react";

export default function SkillsSectionExample() {
  return (
    <SkillsSection
      categories={[
        {
          icon: Code,
          title: "Core Competencies",
          skills: [
            "Full Stack Development",
            "MERN Stack",
            "Django",
            "Generative AI",
            "LLMs",
            "RAG",
            "Blockchain",
            "DSA",
          ],
        },
        {
          icon: Layers,
          title: "Languages & Frameworks",
          skills: [
            "Python",
            "JavaScript",
            "React.js",
            "Node.js",
            "Django",
            "Streamlit",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
          ],
        },
        {
          icon: Brain,
          title: "AI/ML Tools",
          skills: [
            "LangChain",
            "OpenAI APIs",
            "Hugging Face",
            "Transformers",
            "Whisper",
            "mBART",
            "Tesseract OCR",
            "OpenCV",
          ],
        },
        {
          icon: Database,
          title: "Databases & DevOps",
          skills: [
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "Git/GitHub",
            "GitLab",
            "Terraform",
            "AWS",
            "Docker",
          ],
        },
      ]}
    />
  );
}
