import ProjectsSection from "../ProjectsSection";

export default function ProjectsSectionExample() {
  return (
    <ProjectsSection
      projects={[
        {
          title: "PrajaVote E-Voting System",
          description: "Secure full-stack e-voting platform for Northern Telangana districts with identity verification and real-time result tracking.",
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
          description: "AI-powered translation system supporting Banjara to 5 Indian languages using advanced LLM models.",
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
          description: "Telugu & English OCR application with NLP-based text processing and robust error handling.",
          techStack: ["Python", "Tesseract", "OpenCV", "Streamlit", "NLP"],
          features: [
            "Multi-language OCR support",
            "NLP text processing",
            "Integrated OCR + NLP pipeline",
          ],
        },
        {
          title: "Voice Assistant",
          description: "Python-based voice assistant with speech recognition, spoken feedback, and automation capabilities.",
          techStack: ["Python", "Speech Recognition", "pyttsx3"],
          features: [
            "Voice command recognition",
            "Text-to-speech feedback",
            "Google search automation",
          ],
        },
        {
          title: "QR Code Attendance System",
          description: "Contactless attendance system with secure Django admin portal for real-time tracking.",
          techStack: ["Python", "OpenCV", "Django", "MySQL"],
          features: [
            "QR code scanning",
            "Real-time attendance tracking",
            "Admin dashboard",
          ],
        },
        {
          title: "AI Assistant Chatbot",
          description: "Multifunctional AI assistant for Q&A, summarization, and information retrieval.",
          techStack: ["Python", "OpenAI API", "Streamlit"],
          features: [
            "Natural language understanding",
            "Task automation",
            "Information retrieval",
          ],
        },
        {
          title: "Government Web Portal",
          description: "Portal for managing rural development activities with government announcements and village-level tracking.",
          techStack: ["React", "Node.js", "MongoDB", "Express"],
          features: [
            "Government announcements",
            "MLA updates",
            "Village-level tracking",
          ],
        },
        {
          title: "Terraform Infrastructure Deployment",
          description: "Automated AWS S3 static website deployment using Infrastructure as Code.",
          techStack: ["Terraform", "AWS S3", "AWS CLI"],
          features: [
            "IaC automation",
            "AWS deployment",
            "CI/CD integration",
          ],
        },
      ]}
    />
  );
}
