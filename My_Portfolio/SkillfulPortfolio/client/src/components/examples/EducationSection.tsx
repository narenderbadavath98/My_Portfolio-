import EducationSection from "../EducationSection";

export default function EducationSectionExample() {
  return (
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
  );
}
