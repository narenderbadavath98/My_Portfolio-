import AboutSection from "../AboutSection";

export default function AboutSectionExample() {
  return (
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
  );
}
