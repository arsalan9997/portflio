import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  ["Cloud", "AWS · Azure"],
  ["CI/CD", "Jenkins · GitHub Actions"],
  ["Containers", "Docker · Kubernetes"],
  ["IaC", "Terraform"],
  ["Automation", "Ansible · Shell"],
  ["SCM", "Git · GitHub"],
  ["OS", "Linux"],
  ["Security", "Trivy"],
];

const projects = [
  {
    number: "01",
    title: "Airline Baggage Management",
    category: "DevOps / Cloud",
    stack: "React · Spring Boot · MySQL · Docker · Jenkins · AWS EC2",
    text: "Containerized application with separate frontend, backend and database services, automated build/deployment workflow and EC2 deployment.",
  },
  {
    number: "02",
    title: "Bike Showroom CI/CD",
    category: "CI/CD Pipeline",
    stack: "GitHub · Jenkins · Node.js · Docker · Docker Hub · AWS EC2",
    text: "A practical pipeline that pulls source code, builds the application, creates a Docker image, pushes it to a registry and deploys it to EC2.",
  },
  {
    number: "03",
    title: "Cloud & Linux Labs",
    category: "Cloud Engineering",
    stack: "AWS · Azure · Linux · CLI · Networking",
    text: "Hands-on cloud and Linux environments covering EC2, CLI workflows, networking fundamentals, resource management and operational troubleshooting.",
  },
];

function App() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time) => { lenis.raf(time * 1000); };
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker", { y: 24, opacity: 0, duration: 0.9, delay: 0.15 });
      gsap.from(".hero-title-line", { y: 70, opacity: 0, duration: 1.05, stagger: 0.12, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-copy", { y: 25, opacity: 0, duration: 0.8, delay: 0.55 });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" }
        });
      });

      gsap.utils.toArray(".project").forEach((el) => {
        gsap.from(el, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: { trigger: el, start: "top 82%" }
        });
      });

      gsap.to(".hero-orbit", {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, rootRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={rootRef}>
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("#top")}>MA<span>.</span></button>
        <nav>
          <button onClick={() => scrollTo("#about")}>About</button>
          <button onClick={() => scrollTo("#work")}>Work</button>
          <button onClick={() => scrollTo("#skills")}>Skills</button>
          <button onClick={() => scrollTo("#contact")}>Contact</button>
        </nav>
        <button className="nav-cta" onClick={() => scrollTo("#contact")}>Let's Work Together <ArrowUpRight size={16}/></button>
      </header>

      <main id="top">
        <section className="hero" ref={heroRef}>
          <div className="hero-grid"></div>
          <div className="hero-orbit"></div>
          <div className="hero-content">
            <p className="eyebrow hero-kicker">DEVOPS ENGINEER · CLOUD · AUTOMATION</p>
            <h1>
              <span className="hero-title-line">Building reliable</span>
              <span className="hero-title-line outline">systems that ship.</span>
            </h1>
            <p className="hero-copy">
              I work across CI/CD, cloud infrastructure, containers and automation
              to turn source code into repeatable deployments.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo("#work")}>View My Work <ArrowDownRight size={17}/></button>
              <button className="button" onClick={() => scrollTo("#contact")}>Let's Connect <ArrowUpRight size={17}/></button>
            </div>
          </div>
          <div className="scroll-note"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></div>
          <div className="hero-meta">AHMEDABAD · INDIA</div>
        </section>

        <div className="marquee">
          <div>CI/CD <span>•</span> CLOUD ENGINEERING <span>•</span> DOCKER <span>•</span> KUBERNETES <span>•</span> INFRASTRUCTURE AS CODE <span>•</span> AUTOMATION <span>•</span></div>
        </div>

        <section className="section about" id="about">
          <div className="section-label reveal">01 — ABOUT</div>
          <div className="about-main">
            <h2 className="reveal">More than a pipeline.<br/><em>Reliable delivery.</em></h2>
            <div className="about-copy reveal">
              <p>I’m Mudassir Arsalan, a DevOps Engineer focused on making software delivery more consistent, automated and repeatable.</p>
              <p>My practical work spans Git, Jenkins, Docker, AWS EC2, Linux, cloud CLI workflows and deployment automation. I also train interns through hands-on demos and labs.</p>
              <div className="stats">
                <div><strong>CI/CD</strong><span>Automation mindset</span></div>
                <div><strong>Cloud</strong><span>AWS · Azure</span></div>
                <div><strong>Containers</strong><span>Docker · Kubernetes</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-head reveal">
            <div className="section-label">02 — SELECTED WORK</div>
            <p>Practical projects built around real DevOps workflows.</p>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.number}>
                <div className="project-visual">
                  <span className="project-number">{p.number}</span>
                  <div className="terminal">
                    <div className="terminal-top"><i></i><i></i><i></i><span>deployment.log</span></div>
                    <div className="terminal-body">
                      <p>$ git pull origin main</p>
                      <p>$ docker build -t app:latest .</p>
                      <p>$ docker push registry/app:latest</p>
                      <p className="success">✓ deployment completed</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <p className="eyebrow">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="stack">{p.stack}</div>
                  <span className="project-link">EXPLORE PROJECT <ArrowUpRight size={17}/></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-label reveal">03 — TOOLKIT</div>
          <div className="skills-title reveal"><h2>The tools behind<br/><em>the delivery.</em></h2></div>
          <div className="skill-list">
            {skills.map(([name, tools], i) => (
              <div className="skill-row reveal" key={name}>
                <span>0{i + 1}</span><strong>{name}</strong><p>{tools}</p><ArrowUpRight size={18}/>
              </div>
            ))}
          </div>
        </section>

        <section className="section services">
          <div className="section-label reveal">04 — WHAT I DO</div>
          <div className="service-grid">
            <div className="service reveal"><span>01</span><h3>CI/CD Automation</h3><p>Design repeatable pipelines from source control through build, test and deployment.</p></div>
            <div className="service reveal"><span>02</span><h3>Cloud Infrastructure</h3><p>Work with AWS and Azure resources, Linux servers, networking and operational workflows.</p></div>
            <div className="service reveal"><span>03</span><h3>Containerization</h3><p>Package applications with Docker and prepare workloads for container-based deployment.</p></div>
            <div className="service reveal"><span>04</span><h3>DevOps Training</h3><p>Break complex DevOps tasks into beginner-friendly, practical steps for interns and learners.</p></div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-inner reveal">
            <p className="eyebrow">LET'S BUILD</p>
            <h2>Have a deployment<br/><em>to automate?</em></h2>
            <p className="contact-copy">For DevOps work, cloud projects, CI/CD implementation or collaboration, get in touch.</p>
            <a className="big-mail" href="mailto:your-email@example.com">your-email@example.com <ArrowUpRight size={24}/></a>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
              <a href="mailto:your-email@example.com"><Mail size={18}/> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>MA<span>.</span></span>
        <span>Built with curiosity + code.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
