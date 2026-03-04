export const siteConfig = {
  name: "Allend Botani",
  title: "Engineer (Structures)",
  description: "Portfolio website of Allend Botani",
  accentColor: "rgb(3, 0, 205)",
  social: {
    email: "allendbotani@gmail.com",
    linkedin: "https://www.linkedin.com/in/allendb/",
    //twitter: "https://x.com/rfitzio",
    github: "https://github.com/WindBreeze1",
  },
aboutMe: `I’m a structural engineer with a Master’s degree in Structural Engineering and Computer Science, blending real-world design experience with strong computational and analytical skills. I enjoy solving complex problems, whether that means modeling structures or building efficient technical solutions with code.

Outside of engineering, I’m a huge sports fan and proudly support the Indianapolis Colts and the Indiana Pacers. When I’m not working on projects, you’ll probably find me watching a game, staying active, or diving into something new that mixes tech and creativity.`,
skills: ["SAP2000", "MATLAB", "SolidWorks", "Python", "CAD"],
  projects: [
    {
      name: "Vibrational Analysis of a Multi Span Bridge",
      description:
        "Utilized MATLAB in conjunction with historical seismic data (1940 El Centro accelerometer record) to perform earthquake analysis.",
      link: "/public/Projects/Botani_221_TermProject.pdf",
      skills: ["MATLAB", "Data Analysis", "Python"],
    },
    {
      name: "SirenAlert (Android Mobile Application)",
      description:
        "A mobile application developed in Android Studio to detect nearby first responders using smartphone sensors.",
      link: "https://github.com/WindBreeze1/SirenAlert-Mobile-Application/blob/main/SirenAlert%20Report.pdf",
      skills: ["Fast Fourier Transform", "Android Studio", "Data Analysis"],
    },
    {
      name: "Machine Learning Cost Estimate Tool",
      description:
        "Developed a machine learning program that extracted historical cost data from the State of California’s cost records to produce reliable cost estimates. The model generated unit price predictions based on historical data and incorporated geographical constraints.",
      link: "https://github.com/WindBreeze1/CostIndexML",
      skills: ["NumPy", "Pandas", "Scikit-Learn", "FastAPI"],
    },
  ],
  additionalDocuments: [
  {
    name: "Teaching Assistant Evaluations",
    description: "Evaluations from students and the professor when I was a teaching assistant at UC San Diego for SE 151A.",
    link: "/public/Projects/Student_Evaluations_Reviews.pdf",
  },
  {
    name: "Cover Letter",
    description: "Sample cover letter for engineering positions.",
    link: "/projects/cover-letter.pdf",
  },
],
  experience: [
    {
      company: "PARSONS Corporation",
      title: "Engineer I",
      dateRange: "August 2022 - Present",
      bullets: [
        "Structural Analyis for critical infrastructure",
        "Sheet production utilizing Computer-Aided Design",
        "Failure analysis of columns utilizing vibrational theory",
        "Field inspections for retrofit designs",
      ],
    },
    {
      company: "Caltrans",
      title: "Graduate Engineer",
      dateRange: "January 2022 - July 2022",
      bullets: [
        "Installed Fiber Optic Conduits along Bridge Barriers",
        "Finite Element Analysis for Mechnical Connections",
        "Collaborated with contractors to define technical requirements",
      ],
    },
        {
      company: "UC San Diego",
      title: "Graduate Teaching Assistant",
      dateRange: "December 2020 - December 2021",
      bullets: [
        "Lead teaching assistant for SE 151A (Reinforced Concrete Design)",
        "Teaching assistant for SE 105 (Structural Materials) ",
        "Collaborated with contractors to define technical requirements",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Masters of Science in Computer Science",
      dateRange: "2022 - 2024",
      achievements: [
        "Computing Systems Specialization",
        "GPA: 3.9/4.0",
      ],
    },
    {
      school: "University of California San Diego",
      degree: "Masters of Science in Structural Engineering",
      dateRange: "2020-2021",
      achievements: [
        "GPA: 3.9/4.0",
      ],
    },

    {
      school: "University of California San Diego",
      degree: "Bachelors of Science in Structural Engineering",
      dateRange: "2017-2020",
      achievements: [
        "GPA: 3.7/4.0",
      ],
    },
  ],
};
