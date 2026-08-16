import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { getProjects, sendMessage } from "./services/api";

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const profile = {
  name: "RUPESH KUMAR CHAUDHARY",
  title: "Computer Science Engineer",
  subtitle: "Full-Stack Developer · AI/ML Learner · Problem Solver",

  summary:
    "Computer Science & Engineering student at IILM University with a 9.72/10 CGPA, passionate about building full-stack applications, exploring AI/ML, and strengthening problem-solving skills through DSA in C++.",

  email: "rc7946463@gmail.com",

  github: "https://github.com/rupesh568",

  linkedin: "https://www.linkedin.com/in/rupesh-chaudhary/",

  leetcode: "https://leetcode.com/u/RupeshK_Chaudhary/",

  geeksforgeeks:
    "https://www.geeksforgeeks.org/profile/rupeshalgo",

  location: "Greater Noida, Uttar Pradesh, India",

  cgpa: "9.72 / 10",
};

/* =========================================================
   SKILLS
========================================================= */

const skills = {
  "Programming Languages": [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
  ],

  "Frontend Development": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Responsive Design",
  ],

  "Backend Development": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Mongoose",
    "Middleware",
  ],

  Databases: [
    "MongoDB",
    "MongoDB Atlas",
    "MySQL",
    "MariaDB",
  ],

  "AI / Machine Learning": [
    "Machine Learning",
    "OpenAI API",
    "TensorFlow.js",
    "Data Processing",
    "Python",
  ],

  "Developer Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "npm",
    "Vite",
    "Vercel",
  ],

  "Professional Skills": [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Presentation",
    "Technical Learning",
    "Microsoft Excel",
  ],
};

/* =========================================================
   EDUCATION
========================================================= */

const education = {
  university: "IILM University",

  degree: "B.Tech — Computer Science & Engineering",

  location: "Greater Noida, Uttar Pradesh, India",

  period: "2024 — 2028",

  cgpa: "9.72 / 10",

  areas: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Web Development",
    "Cloud Computing",
    "Artificial Intelligence",
  ],
};

/* =========================================================
   EXPERIENCE
========================================================= */

const experience = {
  company: "Thraneix",

  role: "Software Development Intern",

  period: "2026 — Present",

  description:
    "Currently gaining professional experience in a real-world software development environment while applying programming, web-development and problem-solving skills to practical project work.",
};

/* =========================================================
   REAL PROJECTS ONLY
========================================================= */

const projectPortfolio = [
  {
    id: "parkinsons",

    title:
      "Parkinson's Disease Progression Prediction Using Gait Analysis",

    category: "AI / ML",

    description:
      "A machine-learning healthcare project developed using a wearable-sensor gait dataset sourced from Kaggle. The project involved preprocessing gait-related data, analyzing relevant features, applying machine-learning techniques and evaluating predictive models to identify patterns associated with Parkinson's disease progression.",

    technologies: [
      "Python",
      "Kaggle Dataset",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
    ],

    githubUrl:
      "https://github.com/rupesh-chaudhary-cs/PARKINSONS-DISEASE-PROGRESSION-PREDICTION-USING-GAIT-ANALYSIS-AND-WEARBLE-SENSOR-DATA",

    liveUrl: "",

    featured: true,

    status: "Machine Learning Project",
  },

  {
    id: "social-media",

    title: "Social Media Application",

    category: "React",

    description:
      "A React.js based social media application focused on building an interactive and responsive user interface using reusable React components and modern frontend development practices.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],

    githubUrl:
      "https://github.com/rupesh568/Social-Media-App",

    liveUrl:
      "https://social-media-app-git-main-rupesh-kumar-chaudhary-s-projects.vercel.app/",

    featured: true,

    status: "Live",
  },

  {
    id: "calculator",

    title: "Calculator Application",

    category: "React",

    description:
      "A responsive calculator application developed using React.js, demonstrating component-based development, state management, user interaction and responsive interface design.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    githubUrl:
      "https://github.com/rupesh568/Calculator-App",

    liveUrl:
      "https://calculator-rupesh.vercel.app/",

    featured: false,

    status: "Live",
  },

  {
    id: "todo",

    title: "Todo Application",

    category: "React",

    description:
      "A React-based productivity application designed to manage daily tasks through an interactive and responsive user interface while practising component-based frontend development.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    githubUrl:
      "https://github.com/rupesh568/Todo-App-",

    liveUrl:
      "https://todo-app-rupesh.vercel.app/",

    featured: false,

    status: "Live",
  },

  {
    id: "bharat-clock",

    title: "Bharat Clock",

    category: "JavaScript",

    description:
      "A real-time clock web application created to practise JavaScript fundamentals, DOM interaction and responsive frontend development.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vercel",
    ],

    githubUrl:
      "https://github.com/rupesh568/Clock",

    liveUrl:
      "https://clock-wave.vercel.app/",

    featured: false,

    status: "Live",
  },

  {
    id: "tic-tac-toe",

    title: "Tic Tac Toe Game",

    category: "JavaScript",

    description:
      "An interactive browser-based Tic Tac Toe game built with JavaScript, focusing on game logic, state handling, user interaction and responsive UI development.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    githubUrl:
      "https://github.com/rupesh568/JavaScriptProject-1/tree/main/Tic%20Tac%20Toe%20Game",

    liveUrl:
      "https://tic-tac-toe-game-rupesh.vercel.app/",

    featured: false,

    status: "Live",
  },

  {
    id: "medgpt",

    title: "MedGPT — AI Assistance for Doctors",

    category: "AI / In Development",

    description:
      "A major project currently in development exploring how artificial intelligence can assist doctors through intelligent healthcare-oriented workflows and AI-powered assistance.",

    technologies: [
      "AI / ML",
      "Python",
      "LLM",
      "React",
      "Backend",
    ],

    githubUrl: "",

    liveUrl: "",

    featured: true,

    status: "Currently Building",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  ["Python Programming", "Infosys"],

  ["Java EE", "Red Hat Academy"],

  ["C Programming", "Infosys"],

  ["Generative AI Foundations", "AWS Academy"],

  ["Cloud Computing", "NPTEL / AWS / Infosys"],

  ["IoT", "Infosys"],
];

/* =========================================================
   CURRENT LEARNING
========================================================= */

const currentLearning = [
  {
    number: "01",

    title: "Artificial Intelligence & Machine Learning",

    description:
      "Currently strengthening my understanding of machine-learning workflows, data processing and AI-powered applications.",

    icon: BrainCircuit,
  },

  {
    number: "02",

    title: "Data Structures & Algorithms",

    description:
      "Currently learning and practising DSA using C++, focusing on algorithmic thinking, complexity and problem-solving patterns.",

    icon: Code2,
  },

  {
    number: "03",

    title: "MedGPT",

    description:
      "Building a major AI healthcare project focused on creating an AI assistance platform for doctors.",

    icon: Sparkles,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function mergeProjectData(apiProjects) {
  /*
    The portfolio now uses the verified project list above as
    the source of truth.

    MongoDB can still provide matching project information,
    but old seeded projects will NOT appear on the website.
  */

  return projectPortfolio.map((localProject) => {
    const matchingProject = apiProjects.find(
      (apiProject) =>
        apiProject.title?.trim().toLowerCase() ===
        localProject.title.trim().toLowerCase()
    );

    if (!matchingProject) {
      return localProject;
    }

    return {
      ...localProject,

      description:
        localProject.description ||
        matchingProject.description ||
        "",

      technologies:
        localProject.technologies?.length > 0
          ? localProject.technologies
          : matchingProject.technologies || [],

      githubUrl:
        localProject.githubUrl ||
        matchingProject.githubUrl ||
        "",

      liveUrl:
        localProject.liveUrl ||
        matchingProject.liveUrl ||
        "",
    };
  });
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [apiProjects, setApiProjects] = useState([]);

  const [activeFilter, setActiveFilter] = useState("All");

  const [menuOpen, setMenuOpen] = useState(false);

  const [showAllProjects, setShowAllProjects] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [loadingProjects, setLoadingProjects] = useState(true);

  /* =======================================================
     LOAD API DATA
  ======================================================= */

  useEffect(() => {
    getProjects()
      .then(({ data }) => {
        setApiProjects(data.projects || []);
      })
      .catch(() => {
        setApiProjects([]);
      })
      .finally(() => {
        setLoadingProjects(false);
      });
  }, []);

  /* =======================================================
     PROJECT DATA
  ======================================================= */

  const projects = useMemo(() => {
    return mergeProjectData(apiProjects);
  }, [apiProjects]);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeFilter
          );

    return showAllProjects
      ? filtered
      : filtered.slice(0, 6);
  }, [
    activeFilter,
    projects,
    showAllProjects,
  ]);

  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      text: "Sending message...",
    });

    try {
      await sendMessage(form);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus({
        type: "success",
        text: "Message sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          "Could not send the message. Please try again or contact me directly by email.",
      });
    }
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigation = [
    ["About", "about"],
    ["Education", "education"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <div className="site-shell">

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="nav-wrap">
        <nav className="nav container">

          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">
              R
            </span>

            <span>
              RKC<span className="muted">.</span>
            </span>
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          <div
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
          >
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's talk
              <ArrowUpRight size={15} />
            </a>
          </div>

        </nav>
      </header>

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero section"
        >
          <div className="container hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                <span className="pulse" />
                COMPUTER SCIENCE ENGINEER
              </div>

              <h1>
                Building
                <br />

                <span>
                  intelligent
                </span>

                <br />

                digital products.
              </h1>

              <p className="hero-lead">
                {profile.summary}
              </p>

              <div className="hero-actions">

                <a
                  className="button primary"
                  href="#projects"
                >
                  Explore my work
                  <ArrowUpRight size={17} />
                </a>

                <a
                  className="button secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>

                <a
                  className="button secondary"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} />
                  Contact me
                </a>

              </div>

              <div className="hero-meta">

                <span>
                  <MapPin size={15} />
                  {profile.location}
                </span>

                <span>
                  <Terminal size={15} />
                  MERN · AI/ML · DSA
                </span>

                <span>
                  <GraduationCap size={15} />
                  {profile.cgpa}
                </span>

              </div>

            </div>

            <div className="system-card">

              <div className="system-top">

                <span>
                  rupesh.engineering.profile
                </span>

                <span className="live">
                  <span className="pulse small" />
                  available
                </span>

              </div>

              <div className="system-stack">

                <div className="stack-node">

                  <Code2 />

                  <div>
                    <b>Frontend</b>

                    <small>
                      React · JavaScript · Responsive UI
                    </small>
                  </div>

                </div>

                <div className="connector" />

                <div className="stack-node">

                  <Layers3 />

                  <div>
                    <b>Backend</b>

                    <small>
                      Node · Express · REST APIs
                    </small>
                  </div>

                </div>

                <div className="connector" />

                <div className="stack-node">

                  <Database />

                  <div>
                    <b>Data & AI</b>

                    <small>
                      MongoDB · ML · OpenAI · TensorFlow.js
                    </small>
                  </div>

                </div>

              </div>

              <div className="system-footer">
                <span>MERN</span>
                <span>AI/ML</span>
                <span>C++ DSA</span>
                <span>Git/GitHub</span>
              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section"
        >

          <div className="container split">

            <SectionLabel
              number="01"
              title="About Me"
            />

            <div>

              <h2>
                Curious by nature.
                <br />
                <em>Builder by choice.</em>
              </h2>

              <p className="large-copy">

                I am{" "}
                <strong>
                  Rupesh Kumar Chaudhary
                </strong>
                , a Computer Science & Engineering
                student who enjoys understanding
                how software works from the user
                interface to the backend and database
                layer.

              </p>

              <p className="large-copy">

                My current journey combines
                full-stack development, artificial
                intelligence and machine learning
                with data-structures and
                problem-solving in C++.

              </p>

              <div className="about-stats">

                <Stat
                  icon={GraduationCap}
                  value="9.72"
                  label="CGPA / 10"
                />

                <Stat
                  icon={Code2}
                  value="MERN"
                  label="Full-Stack"
                />

                <Stat
                  icon={BrainCircuit}
                  value="AI/ML"
                  label="Learning"
                />

                <Stat
                  icon={Trophy}
                  value="DSA"
                  label="C++"
                />

              </div>

              <div className="principles">

                {[
                  "Understand the problem",
                  "Design before coding",
                  "Build with intent",
                  "Test, learn & iterate",
                ].map((item, index) => (

                  <div
                    className="principle"
                    key={item}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <b>
                      {item}
                    </b>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <section
          id="education"
          className="section section-dark"
        >

          <div className="container split">

            <SectionLabel
              number="02"
              title="Education"
            />

            <div className="education-grid">

              <div>

                <div className="date-label">
                  {education.period}
                </div>

                <h3>
                  {education.degree}
                </h3>

                <p>
                  <strong>
                    {education.university}
                  </strong>

                  <br />

                  {education.location}
                </p>

                <p className="large-copy">

                  Building a strong foundation in
                  computer science while developing
                  practical skills in software
                  engineering, artificial intelligence,
                  databases and problem solving.

                </p>

                <div className="tag-row">

                  {education.areas.map(
                    (area) => (
                      <span key={area}>
                        {area}
                      </span>
                    )
                  )}

                </div>

              </div>

              <div className="cgpa-card">

                <GraduationCap size={24} />

                <small>
                  ACADEMIC PERFORMANCE
                </small>

                <strong>
                  {education.cgpa}
                </strong>

                <span>
                  Current CGPA
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section"
        >

          <div className="container split">

            <SectionLabel
              number="03"
              title="Experience"
            />

            <div className="timeline-item">

              <div className="timeline-marker" />

              <div>

                <div className="date-label">
                  {experience.period}
                </div>

                <h3>
                  {experience.role}
                </h3>

                <p className="company">
                  {experience.company}
                </p>

                <p className="large-copy">
                  {experience.description}
                </p>

                <div className="experience-highlights">

                  <span>
                    <CheckCircle2 size={14} />
                    Professional development
                  </span>

                  <span>
                    <CheckCircle2 size={14} />
                    Practical project exposure
                  </span>

                  <span>
                    <CheckCircle2 size={14} />
                    Software engineering workflow
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section section-dark"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-number">
                  04 / TECHNICAL TOOLKIT
                </span>

                <h2>
                  Tools I use to
                  <br />
                  <em>build.</em>
                </h2>

              </div>

              <p>

                A practical toolkit covering
                programming, frontend and backend
                development, databases, AI/ML,
                developer tools and professional
                skills.

              </p>

            </div>

            <div className="skills-grid">

              {Object.entries(skills).map(
                ([group, items]) => (

                  <div
                    className="skill-group"
                    key={group}
                  >

                    <h3>
                      {group}
                    </h3>

                    <div>

                      {items.map(
                        (item) => (
                          <span key={item}>
                            {item}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-number">
                  05 / SELECTED WORK
                </span>

                <h2>
                  Things I've
                  <br />
                  <em>built.</em>
                </h2>

              </div>

              <p>

                Real projects, real repositories
                and real deployed applications.
                No inflated project list.

              </p>

            </div>

            <div className="project-intro-bar">

              <span>
                <Sparkles size={15} />
                {projects.length} real projects
              </span>

              <span>
                <ExternalLink size={15} />
                Live demos available
              </span>

            </div>

            <div className="filter-row">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    className={
                      activeFilter === category
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setActiveFilter(
                        category
                      );

                      setShowAllProjects(
                        false
                      );
                    }}
                  >
                    {category}
                  </button>

                )
              )}

            </div>

            {loadingProjects ? (

              <div className="loading">
                Loading project data...
              </div>

            ) : (

              <>

                <div className="project-grid">

                  {filteredProjects.map(
                    (project, index) => (

                      <ProjectCard
                        key={
                          project.id ||
                          project._id ||
                          project.title
                        }
                        project={project}
                        index={index}
                      />

                    )
                  )}

                </div>

                {projects.length > 6 && (

                  <div className="projects-more">

                    <button
                      className="button secondary"
                      onClick={() =>
                        setShowAllProjects(
                          !showAllProjects
                        )
                      }
                    >

                      {showAllProjects
                        ? "Show fewer projects"
                        : "View all projects"}

                      <ArrowUpRight size={16} />

                    </button>

                  </div>

                )}

              </>

            )}

          </div>

        </section>

        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

        <section
          id="certifications"
          className="section section-dark"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-number">
                  06 / CREDENTIALS
                </span>

                <h2>
                  Learning that
                  <br />
                  <em>compounds.</em>
                </h2>

              </div>

            </div>

            <div className="cert-grid">

              {certifications.map(
                ([name, issuer], index) => (

                  <div
                    className="cert-card"
                    key={name}
                  >

                    <span>
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <div>

                      <h3>
                        {name}
                      </h3>

                      <p>
                        {issuer}
                      </p>

                    </div>

                    <CheckCircle2 size={18} />

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            CURRENTLY LEARNING
        ================================================= */}

        <section
          id="learning"
          className="section"
        >

          <div className="container split">

            <SectionLabel
              number="07"
              title="Currently Learning"
            />

            <div className="learning-list">

              {currentLearning.map(
                ({
                  number,
                  title,
                  description,
                  icon: Icon,
                }) => (

                  <article
                    className="learning-item"
                    key={title}
                  >

                    <div className="learning-icon">
                      <Icon size={20} />
                    </div>

                    <div>

                      <span>
                        {number}
                      </span>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {description}
                      </p>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            PROFESSIONAL SNAPSHOT
        ================================================= */}

        <section
          className="section section-dark"
        >

          <div className="container snapshot-grid">

            <SnapshotCard
              icon={Layers3}
              title="Full-Stack Development"
              text="Building responsive interfaces, REST APIs, backend systems and database-driven applications."
            />

            <SnapshotCard
              icon={BrainCircuit}
              title="Artificial Intelligence"
              text="Exploring machine learning and AI-powered applications through practical projects and continuous learning."
            />

            <SnapshotCard
              icon={Code2}
              title="Problem Solving"
              text="Strengthening algorithmic thinking through DSA in C++ and consistent coding practice."
            />

            <SnapshotCard
              icon={Users}
              title="Communication"
              text="Focused on explaining technical concepts clearly, collaborating effectively and continuously improving professional communication."
            />

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="container contact-grid">

            <div>

              <span className="section-number">
                08 / CONTACT
              </span>

              <h2>
                Let's build
                <br />
                <em>something useful.</em>
              </h2>

              <p className="large-copy">

                Whether you want to discuss a project,
                collaboration, internship opportunity
                or simply connect, feel free to reach
                out.

              </p>

              <a
                className="email-link"
                href={`mailto:${profile.email}`}
              >

                <Mail size={17} />

                {profile.email}

                <ArrowUpRight size={18} />

              </a>

              <div className="contact-links">

                <SocialLink
                  href={profile.linkedin}
                  icon={Linkedin}
                  label="LinkedIn"
                />

                <SocialLink
                  href={profile.github}
                  icon={Github}
                  label="GitHub"
                />

                <SocialLink
                  href={profile.leetcode}
                  icon={Code2}
                  label="LeetCode"
                />

                <SocialLink
                  href={profile.geeksforgeeks}
                  icon={Terminal}
                  label="GeeksforGeeks"
                />

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <label>

                Name

                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      name:
                        event.target.value,
                    })
                  }
                  placeholder="Your name"
                />

              </label>

              <label>

                Email

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      email:
                        event.target.value,
                    })
                  }
                  placeholder="you@example.com"
                />

              </label>

              <label>

                Message

                <textarea
                  required
                  rows="6"
                  value={form.message}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      message:
                        event.target.value,
                    })
                  }
                  placeholder="Tell me about your project..."
                />

              </label>

              <button
                className="button primary"
                disabled={
                  status.type === "loading"
                }
              >

                {status.type === "loading"
                  ? "Sending..."
                  : "Send message"}

                <Send size={16} />

              </button>

              {status.text && (
                <p
                  className={`form-status ${status.type}`}
                >
                  {status.text}
                </p>
              )}

            </form>

          </div>

        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>

        <div className="container footer">

          <div>

            <b>
              {profile.name}
            </b>

            <span>
              Computer Science Engineer ·
              Full-Stack Developer
            </span>

          </div>

          <div className="socials">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <Code2 size={18} />
            </a>

            <a
              href={profile.geeksforgeeks}
              target="_blank"
              rel="noreferrer"
              aria-label="GeeksforGeeks"
            >
              <Terminal size={18} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>

          <span>
            © {new Date().getFullYear()}{" "}
            {profile.name} · Built with MERN
          </span>

        </div>

      </footer>

    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project-card ${
        project.featured
          ? "featured"
          : ""
      }`}
    >

      <div className="project-topline">

        <span className="project-index">
          {number}
        </span>

        <span className="project-status">

          <span className="pulse small" />

          {project.status}

        </span>

      </div>

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        <div className="tag-row">

          {project.technologies?.map(
            (technology) => (

              <span key={technology}>
                {technology}
              </span>

            )
          )}

        </div>

        <div className="project-links">

          {project.githubUrl ? (

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >

              GitHub Repository

              <Github size={15} />

            </a>

          ) : (

            <span className="project-disabled">
              Repository coming soon
            </span>

          )}

          {project.liveUrl ? (

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >

              Live Website

              <ExternalLink size={15} />

            </a>

          ) : (

            <span className="project-disabled">

              {project.id === "parkinsons"
                ? "Not hosted"
                : "In development"}

            </span>

          )}

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  title,
}) {
  return (
    <div className="section-label">

      <span>
        {number} /
      </span>

      <b>
        {title}
      </b>

    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div className="about-stat">

      <Icon size={18} />

      <strong>
        {value}
      </strong>

      <span>
        {label}
      </span>

    </div>
  );
}

/* =========================================================
   SNAPSHOT CARD
========================================================= */

function SnapshotCard({
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="snapshot-card">

      <Icon size={22} />

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  icon: Icon,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social-link"
    >

      <Icon size={16} />

      <span>
        {label}
      </span>

      <ArrowUpRight size={14} />

    </a>
  );
}

export default App;