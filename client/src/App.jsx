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
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { getProjects, sendMessage } from "./services/api";

/* =========================================================
   PERSONAL PROFILE
========================================================= */

const profile = {
  name: "RUPESH KUMAR CHAUDHARY",
  title: "Computer Science Engineer",
  subtitle: "Full-Stack Developer · AI/ML Systems · C++ DSA",

  summary:
    "Computer Science & Engineering undergraduate at IILM University maintaining a 9.72/10 CGPA. Focused on building resilient full-stack web systems, developing clinical AI applications, and engineering algorithmic solutions in C++.",

  email: "rc7946463@gmail.com",
  phone: "+91 8851453447",
  whatsapp: "https://wa.me/918851453447?text=Hi%20Rupesh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.",
  github: "https://github.com/rupesh568",
  linkedin: "https://www.linkedin.com/in/rupesh-chaudhary/",
  leetcode: "https://leetcode.com/u/RupeshK_Chaudhary/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/rupeshalgo",
  location: "Greater Noida, Uttar Pradesh, India",
  cgpa: "9.72 / 10",
};

/* =========================================================
   TECHNICAL TOOLKIT
========================================================= */

const skills = {
  "Core Systems & Languages": [
    "C++ (DSA)",
    "C",
    "Java",
    "JavaScript (ES6+)",
    "Python",
  ],

  "Frontend Architecture": [
    "React.js",
    "State Management",
    "Component Architecture",
    "HTML5 / CSS3",
    "Responsive Layouts",
  ],

  "Backend & API Engineering": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Mongoose ODM",
    "Middleware & Auth",
  ],

  "Databases & Storage": [
    "MongoDB",
    "MongoDB Atlas",
    "MySQL",
    "MariaDB",
    "Data Modeling",
  ],

  "Artificial Intelligence & ML": [
    "Predictive Modeling",
    "LLM Integration",
    "Scikit-Learn",
    "Pandas & NumPy",
    "TensorFlow.js",
  ],

  "DevOps & Tooling": [
    "Git & GitHub",
    "Vite",
    "Vercel",
    "Postman",
    "npm",
    "VS Code",
  ],

  "Engineering Practices": [
    "Algorithmic Complexity",
    "Clean Architecture",
    "Technical Writing",
    "Agile Collaboration",
    "Debugging & Profiling",
  ],
};

/* =========================================================
   EDUCATION & ACADEMICS
========================================================= */

const education = {
  university: "IILM University",
  degree: "B.Tech in Computer Science & Engineering",
  location: "Greater Noida, Uttar Pradesh, India",
  period: "2024 — 2028",
  cgpa: "9.72 / 10",
  areas: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Full-Stack Architecture",
    "Artificial Intelligence & ML",
    "System Design Fundamentals",
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
    "Contributing to production software development workflows. Implementing frontend modules, integrating backend REST endpoints, and refining UI performance in real-world application cycles.",
};

/* =========================================================
   PROJECT PORTFOLIO (TIERED BY IMPACT)
========================================================= */

const projectPortfolio = [
  {
    id: "medgpt",
    title: "MedGPT — Clinical AI Workflow Assistant",
    category: "AI / LLM",
    description:
      "A domain-specific clinical decision support platform designed to streamline diagnostic workflows for healthcare professionals using structured LLM interactions and healthcare data pipelines.",
    technologies: [
      "Generative AI",
      "Python",
      "LLMs",
      "React.js",
      "FastAPI / Node.js",
      "Healthcare NLP",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "Active Development",
  },
  {
    id: "parkinsons",
    title: "Parkinson’s Disease Progression via Gait Telemetry",
    category: "AI / ML",
    description:
      "Engineered an end-to-end predictive pipeline analyzing multi-axis wearable sensor telemetry. Applied feature extraction, dimensionality reduction, and Scikit-Learn regression models to identify disease biomarkers.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Wearable Sensor Telemetry",
      "Biomarker Modeling",
    ],
    githubUrl:
      "https://github.com/rupesh-chaudhary-cs/PARKINSONS-DISEASE-PROGRESSION-PREDICTION-USING-GAIT-ANALYSIS-AND-WEARBLE-SENSOR-DATA",
    liveUrl: "",
    featured: true,
    status: "Research Pipeline",
  },
  {
    id: "social-media",
    title: "Full-Stack Social Interaction Platform",
    category: "Full-Stack / React",
    description:
      "Engineered an interactive feed application featuring modular React component hierarchy, dynamic state synchronization, responsive layout grids, and optimized client-side rendering.",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "State Management",
      "CSS3 Modular Architecture",
      "REST Integration",
    ],
    githubUrl: "https://github.com/rupesh568/Social-Media-App",
    liveUrl:
      "https://social-media-app-git-main-rupesh-kumar-chaudhary-s-projects.vercel.app/",
    featured: true,
    status: "Live Production",
  },
  {
    id: "todo",
    title: "Task Orchestration & State Flow Engine",
    category: "React",
    description:
      "Built a state-driven task management application focusing on deterministic local state updates, immutable data flow, persistent caching, and keyboard-first accessibility.",
    technologies: ["React.js", "State Reducers", "Local Persistence", "UI Architecture"],
    githubUrl: "https://github.com/rupesh568/Todo-App-",
    liveUrl: "https://todo-app-rupesh.vercel.app/",
    featured: false,
    status: "Live Demo",
  },
  {
    id: "calculator",
    title: "Precision Mathematical Expression Evaluator",
    category: "React",
    description:
      "Developed a robust calculator utilizing strict input sanitization, tokenization for expression evaluation, and responsive CSS grid mechanics.",
    technologies: ["React.js", "Algorithm Logic", "Grid Architecture", "Event Handling"],
    githubUrl: "https://github.com/rupesh568/Calculator-App",
    liveUrl: "https://calculator-rupesh.vercel.app/",
    featured: false,
    status: "Live Demo",
  },
  {
    id: "bharat-clock",
    title: "High-Frequency Real-Time Chronometer",
    category: "JavaScript",
    description:
      "Engineered a lightweight clock application implementing efficient DOM reconciliation cycles, accurate interval timing, and localized timezone synchronization.",
    technologies: ["Vanilla JavaScript", "DOM Engine", "Interval Optimization", "CSS3"],
    githubUrl: "https://github.com/rupesh568/Clock",
    liveUrl: "https://clock-wave.vercel.app/",
    featured: false,
    status: "Live Demo",
  },
  {
    id: "tic-tac-toe",
    title: "Deterministic State Matrix Game Engine",
    category: "JavaScript",
    description:
      "Browser-based state machine evaluating two-dimensional grid permutations, instant win-condition matrix checks, and reactive turn tracking.",
    technologies: ["JavaScript Logic", "Matrix Operations", "State Handling", "CSS Grid"],
    githubUrl:
      "https://github.com/rupesh568/JavaScriptProject-1/tree/main/Tic%20Tac%20Toe%20Game",
    liveUrl: "https://tic-tac-toe-game-rupesh.vercel.app/",
    featured: false,
    status: "Live Demo",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  ["Generative AI Foundations", "AWS Academy"],
  ["Cloud Computing Architecture", "NPTEL / AWS / Infosys"],
  ["Java Enterprise Edition (EE)", "Red Hat Academy"],
  ["Python Programming & Systems", "Infosys Springboard"],
  ["C Systems Programming", "Infosys Springboard"],
  ["Internet of Things (IoT)", "Infosys Springboard"],
];

/* =========================================================
   TECHNICAL FOCUS AREAS
========================================================= */

const currentLearning = [
  {
    number: "01",
    title: "Scalable Full-Stack Systems",
    description:
      "Architecting resilient MERN applications with strict API contracts, robust caching, and decoupled modular component design.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Algorithmic Engineering in C++",
    description:
      "Systematic problem solving covering graph theory, dynamic programming, trees, and time/space complexity optimization.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Healthcare Intelligence & LLMs",
    description:
      "Pioneering MedGPT to explore Retrieval-Augmented Generation (RAG), vector embeddings, and actionable clinical assistance.",
    icon: BrainCircuit,
  },
];

/* =========================================================
   DATA MERGE HELPER
========================================================= */

function mergeProjectData(apiProjects) {
  return projectPortfolio.map((localProject) => {
    const matchingProject = apiProjects.find(
      (apiProject) =>
        apiProject.title?.trim().toLowerCase() ===
        localProject.title.trim().toLowerCase()
    );

    if (!matchingProject) return localProject;

    return {
      ...localProject,
      description: matchingProject.description || localProject.description,
      technologies:
        localProject.technologies?.length > 0
          ? localProject.technologies
          : matchingProject.technologies || [],
      githubUrl: matchingProject.githubUrl || localProject.githubUrl,
      liveUrl: matchingProject.liveUrl || localProject.liveUrl,
    };
  });
}

/* =========================================================
   MAIN APPLICATION COMPONENT
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

  const projects = useMemo(() => {
    return mergeProjectData(apiProjects);
  }, [apiProjects]);

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return showAllProjects ? filtered : filtered.slice(0, 6);
  }, [activeFilter, projects, showAllProjects]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({
      type: "loading",
      text: "Transmitting message to database...",
    });

    try {
      await sendMessage(form);
      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        text: "Message delivered and recorded. I will get back to you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Could not deliver message. Please reach out directly via Email.",
      });
    }
  };

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
      {/* ================= NAVBAR ================= */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">R</span>
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
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
              Initiate Contact
              <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse" />
                COMPUTER SCIENCE ENGINEER · AI & FULL-STACK
              </div>

              <h1>
                Engineering resilient web systems & <span>intelligent ML pipelines.</span>
              </h1>

              <p className="hero-lead">{profile.summary}</p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore Architecture
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
                  Contact Me
                </a>
              </div>

              <div className="hero-meta">
                <span>
                  <MapPin size={15} />
                  {profile.location}
                </span>

                <span>
                  <Terminal size={15} />
                  MERN · AI/ML · C++ DSA
                </span>

                <span>
                  <GraduationCap size={15} />
                  {profile.cgpa} Cumulative CGPA
                </span>
              </div>
            </div>

            <div className="system-card">
              <div className="system-top">
                <span>rupesh.systems.runtime</span>
                <span className="live">
                  <span className="pulse small" />
                  active & available
                </span>
              </div>

              <div className="system-stack">
                <div className="stack-node">
                  <Code2 />
                  <div>
                    <b>Frontend Architecture</b>
                    <small>React.js · State Orchestration · Modern UI</small>
                  </div>
                </div>

                <div className="connector" />

                <div className="stack-node">
                  <Layers3 />
                  <div>
                    <b>Backend & Micro-Endpoints</b>
                    <small>Node.js · Express · RESTful APIs · ODM</small>
                  </div>
                </div>

                <div className="connector" />

                <div className="stack-node">
                  <Database />
                  <div>
                    <b>Data Intelligence & ML</b>
                    <small>MongoDB Atlas · Scikit-Learn · LLM Pipelines</small>
                  </div>
                </div>
              </div>

              <div className="system-footer">
                <span>Full-Stack MERN</span>
                <span>C++ DSA</span>
                <span>Clinical AI</span>
                <span>Distributed Versioning</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="container split">
            <SectionLabel number="01" title="Engineering Identity" />

            <div>
              <h2>
                Rigorous fundamentals.
                <br />
                <em>Scalable execution.</em>
              </h2>

              <p className="large-copy">
                I am <strong>{profile.name}</strong>, a Computer Science &
                Engineering student focused on the convergence of full-stack web
                architectures and applied machine learning.
              </p>

              <p className="large-copy">
                My work centers on solving computationally demanding problems
                through robust C++ data structures, writing clean asynchronous backend
                services, and training predictive models on real-world datasets.
              </p>

              <div className="about-stats">
                <Stat
                  icon={GraduationCap}
                  value="9.72"
                  label="CGPA / 10"
                />
                <Stat
                  icon={Code2}
                  value="Full-Stack"
                  label="MERN Architecture"
                />
                <Stat
                  icon={BrainCircuit}
                  value="AI / ML"
                  label="Predictive Systems"
                />
                <Stat
                  icon={Trophy}
                  value="DSA"
                  label="C++ Algorithmic Core"
                />
              </div>

              <div className="principles">
                {[
                  "Algorithmic optimization and asymptotic efficiency first",
                  "Strict API contracts and clean modular architecture",
                  "Data-driven iteration over speculative engineering",
                  "Continuous learning compounded across full-stack & AI",
                ].map((item, index) => (
                  <div className="principle" key={item}>
                    <span>0{index + 1}</span>
                    <b>{item}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="section section-dark">
          <div className="container split">
            <SectionLabel number="02" title="Academic Background" />

            <div className="education-grid">
              <div>
                <div className="date-label">{education.period}</div>
                <h3>{education.degree}</h3>
                <p>
                  <strong>{education.university}</strong>
                  <br />
                  {education.location}
                </p>

                <p className="large-copy">
                  Developing an unshakeable foundation in computer science theory,
                  distributed databases, artificial intelligence, and software
                  engineering patterns while maintaining top-tier academic
                  standing.
                </p>

                <div className="tag-row">
                  {education.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>

              <div className="cgpa-card">
                <GraduationCap size={24} />
                <small>ACADEMIC EXCELLENCE</small>
                <strong>{education.cgpa}</strong>
                <span>Cumulative Grade Point Average</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section">
          <div className="container split">
            <SectionLabel number="03" title="Professional Track" />

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <div className="date-label">{experience.period}</div>
                <h3>{experience.role}</h3>
                <p className="company">{experience.company}</p>
                <p className="large-copy">{experience.description}</p>

                <div className="experience-highlights">
                  <span>
                    <CheckCircle2 size={14} />
                    Production Software Delivery
                  </span>
                  <span>
                    <CheckCircle2 size={14} />
                    Full-Stack Web Engineering
                  </span>
                  <span>
                    <CheckCircle2 size={14} />
                    Collaborative Version Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-number">04 / TECHNICAL TOOLKIT</span>
                <h2>
                  Technologies designed for
                  <br />
                  <em>reliability & scale.</em>
                </h2>
              </div>
              <p>
                A deliberate technical stack covering systems programming,
                responsive frontends, scalable REST backends, and data intelligence.
              </p>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([group, items]) => (
                <div className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <div>
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-number">05 / SELECTED WORK</span>
                <h2>
                  Engineered systems &
                  <br />
                  <em>clinical prototypes.</em>
                </h2>
              </div>
              <p>
                Production deployments, machine learning pipelines, and verified
                repositories showcasing architectural depth.
              </p>
            </div>

            <div className="project-intro-bar">
              <span>
                <Sparkles size={15} />
                {projects.length} Verified Repositories & Architectures
              </span>
              <span>
                <ExternalLink size={15} />
                Interactive demos available below
              </span>
            </div>

            <div className="filter-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeFilter === category ? "active" : ""}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowAllProjects(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {loadingProjects ? (
              <div className="loading">Loading project data...</div>
            ) : (
              <>
                <div className="project-grid">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id || project._id || project.title}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>

                {projects.length > 6 && (
                  <div className="projects-more">
                    <button
                      className="button secondary"
                      onClick={() => setShowAllProjects(!showAllProjects)}
                    >
                      {showAllProjects
                        ? "Show Priority Projects"
                        : "View All Projects"}
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section id="certifications" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-number">06 / VERIFIED CREDENTIALS</span>
                <h2>
                  Continuous mastery &
                  <br />
                  <em>technical certifications.</em>
                </h2>
              </div>
            </div>

            <div className="cert-grid">
              {certifications.map(([name, issuer], index) => (
                <div className="cert-card" key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{name}</h3>
                    <p>{issuer}</p>
                  </div>
                  <CheckCircle2 size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOCUS AREAS ================= */}
        <section id="learning" className="section">
          <div className="container split">
            <SectionLabel number="07" title="Core Initiatives" />

            <div className="learning-list">
              {currentLearning.map(
                ({ number, title, description, icon: Icon }) => (
                  <article className="learning-item" key={title}>
                    <div className="learning-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span>{number}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================= SNAPSHOT ================= */}
        <section className="section section-dark">
          <div className="container snapshot-grid">
            <SnapshotCard
              icon={Layers3}
              title="Full-Stack Systems"
              text="Architecting resilient client-server interfaces, RESTful microservices, and database models."
            />
            <SnapshotCard
              icon={BrainCircuit}
              title="Applied Machine Learning"
              text="Developing telemetry data pipelines, predictive models, and specialized LLM applications."
            />
            <SnapshotCard
              icon={Code2}
              title="Algorithmic Rigor"
              text="Practicing asymptotic optimization, graph traversals, and dynamic programming in C++."
            />
            <SnapshotCard
              icon={Users}
              title="Collaborative Delivery"
              text="Translating complex technical requirements into clean documentation, tests, and production code."
            />
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <span className="section-number">08 / GET IN TOUCH</span>
              <h2>
                Let’s architect
                <br />
                <em>something impactful.</em>
              </h2>

              <p className="large-copy">
                Available for software engineering roles, high-impact research
                collaborations, and technically challenging full-stack projects.
              </p>

              <a className="email-link" href={`mailto:${profile.email}`}>
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                />
              </label>

              <label>
                Your Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john@domain.com"
                />
              </label>

              <label>
                Project / Message Details
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Briefly describe your project, timeline, or inquiry..."
                />
              </label>

              <button
                className="button primary"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Transmitting..." : "Send Message"}
                <Send size={16} />
              </button>

              {status.text && (
                <p className={`form-status ${status.type}`}>{status.text}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container footer">
          <div>
            <b>{profile.name}</b>
            <span>
              Computer Science & Engineering · Full-Stack & AI Systems
            </span>
          </div>

          <div className="socials">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
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
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <span>
            © {new Date().getFullYear()} {profile.name} · Built with MERN Architecture
          </span>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   SUB-COMPONENTS
========================================================= */

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project-card ${project.featured ? "featured" : ""}`}
    >
      <div className="project-topline">
        <span className="project-index">{number}</span>
        <span className="project-status">
          <span className="pulse small" />
          {project.status}
        </span>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
              <Github size={14} />
            </a>
          ) : (
            <span className="project-disabled">Private / In Development</span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Deployment
              <ExternalLink size={14} />
            </a>
          ) : (
            <span className="project-disabled">
              {project.id === "parkinsons" ? "Model Evaluator" : "Deploy Pending"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function SectionLabel({ number, title }) {
  return (
    <div className="section-label">
      <span>{number} /</span>
      <b>{title}</b>
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="about-stat">
      <Icon size={18} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SnapshotCard({ icon: Icon, title, text }) {
  return (
    <article className="snapshot-card">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social-link"
    >
      <Icon size={16} />
      <span>{label}</span>
      <ArrowUpRight size={14} />
    </a>
  );
}

export default App;