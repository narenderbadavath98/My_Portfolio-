import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      name="Badavath Narender"
      title="Full Stack Engineer (Python | Django | AI Integration)"
      tagline="Passionate about building scalable web applications and AI-powered solutions. Experienced in MERN stack, Django, and cutting-edge AI technologies."
      email="badavathnarender98@gmail.com"
      phone="+919440478897"
      linkedin="narender-badavath-804b88294"
      github="narenderbadavath98"
      onViewProjects={() => console.log("View Projects clicked")}
      onDownloadResume={() => console.log("Download Resume clicked")}
    />
  );
}
