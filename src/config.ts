export const siteConfig = {
  name: "Allend Botani",
  title: "Engineer",
  description: "Portfolio website of Allend Botani",
  accentColor: "rgb(3, 0, 205)",
  social: {
    email: "allendbotani@gmail.com",
    linkedin: "https://www.linkedin.com/in/allendb/",
    github: "https://github.com/WindBreeze1",
  },
aboutMe: `I’m an engineer with a Master’s degree in Structural Engineering and Computer Science, blending real-world design experience with strong computational and analytical skills. I enjoy solving complex problems, whether that means modeling structures or building efficient technical solutions with code.

Outside of engineering, I’m a huge sports fan and proudly support the Indianapolis Colts and the Indiana Pacers.`,
skills: ["SAP2000", "MATLAB", "SolidWorks", "Python", "CAD"],
  projects: [
    {
      name: "Vibrational Analysis of a Multi Span Bridge",
      description:
        "Utilized MATLAB in conjunction with historical seismic data (1940 El Centro accelerometer record) to perform earthquake analysis.",
      link: "https://windbreeze1.github.io/allendb.github.io/Projects/Botani_221_TermProject.pdf",
      skills: ["MATLAB", "Data Analysis", "Python"],
    },
        {
      name: "UAV Flight Dynamics & PID Control Simulation",
      description:
        "Developed a 2-D UAV flight dynamics simulator modeling lift, drag, thrust, gravity, and wind disturbances. Designed and tuned a PID altitude controller achieving steady-state regulation within ±0.25 m under wind gusts. Visualized results with trajectory plots, altitude error analysis, and real-time flight animation using Python.",
      link: "https://github.com/WindBreeze1/uav-flight-simulator",
      skills: ["Python", "Modeling & Simulation", "Dynamics"],
    },
    {
      name: "SirenAlert (Android Mobile Application)",
      description:
        "A mobile application developed in Android Studio to detect nearby first responders using smartphone sensors.",
      link: "https://github.com/WindBreeze1/SirenAlert-Mobile-Application/blob/main/SirenAlert%20Report.pdf",
      skills: ["Fast Fourier Transform", "Android Studio", "Sensors"],
    },
    {
      name: "Machine Learning Cost Estimate Tool",
      description:
        "A machine learning solution that processes California State historical cost data to deliver reliable cost estimates for critical infrastructure. The model applies regression-based unit price predictions derived from historical datasets, with geographical constraints embedded into the estimation framework.",
      link: "https://github.com/WindBreeze1/CostIndexML",
      skills: ["NumPy", "Pandas", "Scikit-Learn", "FastAPI"],
    },
  ],
  additionalDocuments: [
  {
    name: "Teaching Assistant Evaluations",
    description: "Evaluations from students and the professor when I was a teaching assistant at UC San Diego for SE 151A.",
    link: "https://windbreeze1.github.io/allendb.github.io/Projects/Student_Evaluations_Reviews.pdf",
  }
],
  experience: [
    {
      company: "PARSONS Corporation",
      title: "Engineer I",
      dateRange: "August 2022 - Present",
      bullets: [
        "Structural Analyis for critical infrastructure",
        "Engineering plan production utilizing Computer-Aided Design",
        "Failure analysis of columns utilizing vibrational theory",
        "Field inspections for retrofit designs",
      ],
    },
    {
      company: "Caltrans",
      title: "Graduate Engineer",
      dateRange: "January 2022 - July 2022",
      bullets: [
        "Installed Fiber Optic Conduits along bridge barriers",
        "Finite Element Analysis for mechnical connections (anchor bolts, adhesives, composites)",
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
