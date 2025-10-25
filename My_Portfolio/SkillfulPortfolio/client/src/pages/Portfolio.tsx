import { useTheme } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Code, Layers, Brain, Database } from "lucide-react";
import resumePdf from "@assets/Badavath_Narender_Resume_1761373122439.pdf";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    console.log("Download resume clicked");
    window.open(resumePdf, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header onThemeToggle={toggleTheme} isDark={theme === "dark"} />

      <HeroSection
        name="Badavath Narender"
        title="Full Stack Engineer (Python | Django | AI Integration)"
        tagline="Passionate about building scalable web applications and AI-powered solutions. Experienced in MERN stack, Django, and cutting-edge AI technologies."
        email="badavathnarender98@gmail.com"
        phone="+919440478897"
        linkedin="narender-badavath-804b88294"
        github="narenderbadavath98"
        onViewProjects={() => scrollToSection("projects")}
        onDownloadResume={handleDownloadResume}
      />

      <AboutSection
        bio={`I'm a Full Stack Engineer specializing in Python, Django, React, and AI Integration. Currently pursuing Computer Science Engineering at Malla Reddy College of Engineering with a CGPA of 8.5.

I have hands-on experience building scalable web applications, AI-powered systems, and data-driven solutions. My work spans from developing e-voting platforms to creating language translation systems powered by LLMs.

I'm passionate about leveraging technology to solve real-world problems and continuously learning new technologies to stay at the forefront of innovation.`}
        stats={[
          { label: "Years of Experience", value: "2+" },
          { label: "Projects Completed", value: "8+" },
          { label: "Technologies", value: "15+" },
        ]}
      />

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

      <ProjectsSection
        projects={[
          {
            title: "PrajaVote E-Voting System",
            description:
              "Secure full-stack e-voting platform for Northern Telangana districts with identity verification and real-time result tracking.",
            techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
            features: [
              "Identity verification system",
              "Digital voting interface",
              "Real-time result tracking",
              "Survey data management",
            ],
            isSpotlight: true,
          },
          {
            title: "Banjara Language Translator",
            description:
              "AI-powered translation system supporting Banjara to 5 Indian languages using advanced LLM models.",
            techStack: ["Python", "Whisper", "Hugging Face", "Streamlit", "mBART", "NLLB"],
            features: [
              "Speech, text, and image translation",
              "Custom dataset training",
              "AI fallback logic",
              "Real-time translation",
            ],
            isSpotlight: true,
          },
          {
            title: "Bharat-AI-OCR-LLM",
            description:
              "Telugu & English OCR application with NLP-based text processing and robust error handling.",
            techStack: ["Python", "Tesseract", "OpenCV", "Streamlit", "NLP"],
            features: [
              "Multi-language OCR support",
              "NLP text processing",
              "Integrated OCR + NLP pipeline",
            ],
          },
          {
            title: "Voice Assistant",
            description:
              "Python-based voice assistant with speech recognition, spoken feedback, and automation capabilities.",
            techStack: ["Python", "Speech Recognition", "pyttsx3"],
            features: [
              "Voice command recognition",
              "Text-to-speech feedback",
              "Google search automation",
            ],
          },
          {
            title: "QR Code Attendance System",
            description:
              "Contactless attendance system with secure Django admin portal for real-time tracking.",
            techStack: ["Python", "OpenCV", "Django", "MySQL"],
            features: [
              "QR code scanning",
              "Real-time attendance tracking",
              "Admin dashboard",
            ],
          },
          {
            title: "AI Assistant Chatbot",
            description:
              "Multifunctional AI assistant for Q&A, summarization, and information retrieval.",
            techStack: ["Python", "OpenAI API", "Streamlit"],
            features: [
              "Natural language understanding",
              "Task automation",
              "Information retrieval",
            ],
          },
          {
            title: "Government Web Portal",
            description:
              "Portal for managing rural development activities with government announcements and village-level tracking.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            features: [
              "Government announcements",
              "MLA updates",
              "Village-level tracking",
            ],
          },
          {
            title: "Terraform Infrastructure Deployment",
            description:
              "Automated AWS S3 static website deployment using Infrastructure as Code.",
            techStack: ["Terraform", "AWS S3", "AWS CLI"],
            features: [
              "IaC automation",
              "AWS deployment",
              "CI/CD integration",
            ],
          },
        ]}
      />

      <ExperienceSection
        experiences={[
          {
            role: "Development Intern",
            company: "The Developers Arena",
            duration: "May – Oct 2025",
            description:
              "Developed responsive front-end features, integrated APIs, and enhanced web application performance.",
            technologies: ["React", "JavaScript", "REST APIs", "Git"],
          },
          {
            role: "AI Developer Intern",
            company: "Swecha (IIIT Hyderabad & Meta)",
            duration: "May 2025",
            description:
              "Contributing to Telugu LLM development using Python, AI/ML frameworks, and DevOps for scalable Indic AI systems.",
            technologies: ["Python", "AI/ML", "LLMs", "DevOps"],
          },
          {
            role: "Conversational AI Analyst",
            company: "AICTE & Edunet Foundation",
            duration: "Sept – Oct 2025",
            description:
              "Worked on conversational data analytics using LLMs, building AI case studies across multiple domains.",
            technologies: ["LLMs", "Data Analytics", "Python", "NLP"],
          },
          {
            role: "Full Stack Developer",
            company: "Learn Fusion",
            duration: "Sept – Nov 2024",
            description:
              "Built and optimized full-stack modules with MERN and Django, improving UI responsiveness and backend efficiency.",
            technologies: ["MERN", "Django", "PostgreSQL", "React"],
          },
          {
            role: "MERN Stack Developer",
            company: "DevRhylme Foundation",
            duration: "May – Jul 2024",
            description:
              "Designed and tested MERN stack applications, enhancing debugging and version control through Git and GitHub.",
            technologies: ["MongoDB", "Express", "React", "Node.js", "Git"],
          },
        ]}
      />

      <EducationSection
        education={[
          {
            institution: "Malla Reddy College of Engineering",
            degree: "Computer Science & Engineering",
            gpa: "CGPA: 8.5",
            duration: "June 2022 - August 2026",
            location: "Hyderabad, India",
          },
          {
            institution: "T.T.W.U.R.J.C. Government College",
            degree: "Physics, Chemistry, Mathematics",
            gpa: "GPA: 7.88",
            duration: "June 2021 - August 2022",
            location: "Kama Reddy, India",
          },
          {
            institution: "Vignan Public High School",
            degree: "Secondary Education",
            gpa: "GPA: 9.0",
            duration: "June 2019 - 2020",
            location: "Gandhari, India",
          },
        ]}
      />

      <ContactSection
        email="badavathnarender98@gmail.com"
        phone="+91 9440478897"
        location="Hyderabad, India"
        linkedin="narender-badavath-804b88294"
        github="narenderbadavath98"
      />

      <Footer
        name="Badavath Narender"
        email="badavathnarender98@gmail.com"
        linkedin="narender-badavath-804b88294"
        github="narenderbadavath98"
      />
    </div>
  );
}
