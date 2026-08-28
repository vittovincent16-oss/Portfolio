import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaFacebook, FaInstagram, FaTiktok, FaGithub, 
  FaFacebookMessenger, FaBriefcase, FaCode, FaHeart 
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdEmail, MdSmartphone, MdMenu, MdClose } from 'react-icons/md';
import LineWaves from './LineWaves';
import './App.css';

const TECHNOLOGIES = ['Python', 'React', 'Java', 'C', 'C#', 'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'TypeScript'];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleUnavailableProject = () => {
    alert("Sorry! This project is not available yet.");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-container">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <div className="nav-logo" onClick={() => scrollTo('home')}>Vincent.</div>
        
        {/* Desktop Links */}
        <nav className="nav-links desktop-only">
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('goals')}>Goals</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('goals')}>Goals</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <LineWaves
            speed={0.3}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#ffffff"
            color2="#ffffff"
            color3="#ffffff"
            enableMouseInteraction
            mouseInfluence={2}
          />
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1>Hello, I'm Vincent.</h1>
            <div className="typing-container">
              <TypeAnimation
                sequence={[
                  'I am a college student passionate about learning new things, exploring the world of technology, and continuously creating meaningful digital experiences for the web.',
                ]}
                wrapper="p"
                speed={50}
                cursor={true}
              />
            </div>
            <button className="cta-button" onClick={() => scrollTo('about')}>
              Learn More About Me
            </button>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* LANYARD DRAG EFFECT */}
            <motion.div
              className="draggable-image-container"
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              dragElastic={0.4}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            >
              <div className="drag-hint">Drag me!</div>
              <img src="/profile.jfif" alt="Vincent Profile" className="profile-image" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE CAROUSELS */}
      <div className="carousel-container">
        <div className="carousel-track right-to-left">
          <div className="carousel-content">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <span key={i} className="carousel-item">{tech}</span>
            ))}
          </div>
        </div>
        <div className="carousel-track left-to-right">
          <div className="carousel-content">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <span key={i} className="carousel-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <section id="about" className="content-section">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>About Me</motion.h2>
        <div className="card-grid three-cols">
          <motion.div className="card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <span className="card-category">ABOUT</span>
            <FaBriefcase size={32} className="card-icon" />
            <h3>Experience</h3>
            <p>I have experience building calculator applications, developing library management systems, and creating UI/UX-focused websites.</p>
          </motion.div>
          <motion.div className="card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
            <span className="card-category">ABOUT</span>
            <FaCode size={32} className="card-icon" />
            <h3>Skills</h3>
            <p>My skills include digital drawing and sketching, as well as web and software development using HTML, CSS, JavaScript, React, TypeScript, Python, PHP, and SQL for database management.</p>
          </motion.div>
          <motion.div className="card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
            <span className="card-category">ABOUT</span>
            <FaHeart size={32} className="card-icon" />
            <h3>Passion</h3>
            <p>I am passionate about designing meaningful digital experiences and creating valuable solutions that help people and improve their everyday interactions with technology.</p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="content-section bg-alt">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Projects</motion.h2>
        <div className="card-grid three-cols">
          {[
            { 
              title: "First Portfolio", 
              img: "/firstportfolio.png", 
              desc: "My first personal portfolio website, built using HTML, CSS, and JavaScript. This project helped me develop my foundation in front-end web development and responsive website design.",
              link: "https://vittovincent16-oss.github.io/HeniXv2/",
              isAvailable: true
            },
            { 
              title: "Second Portfolio", 
              img: "/secondportfolio.jfif", 
              desc: "My second portfolio website, created to improve my design, development, and user interface skills while exploring more modern layouts and interactions.",
              link: "",
              isAvailable: true
            },
            { 
              title: "Website Project", 
              img: "/sociaa.jfif", 
              desc: "Another website project showcasing a wider range of my skills, creativity, and growth as a developer through modern design and web development.",
              link: "#",
              isAvailable: false
            }
          ].map((project, index) => (
            <motion.div className="project-card" key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-info">
                <span className="card-category">PROJECT</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.isAvailable ? (
                  <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                ) : (
                  <button className="project-btn" onClick={handleUnavailableProject}>
                    View Project
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GOALS SECTION WITH FLOATING GRID BOXES BACKGROUND */}
      <section id="goals" className="content-section goals-section-wrapper">
        <div className="grid-motion-bg">
          <div className="grid-boxes-container">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <div key={i} className="motion-grid-box">
                <span className="box-tech-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="goals-content-overlay">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>My Goals & Next Steps</motion.h2>
          <div className="card-grid three-cols">
            {[
              { title: "Build CodeNest", desc: "My first major goal is to build a large project with my friends called CodeNest. The platform aims to create value for learners by helping beginners and aspiring developers learn different programming languages and improve their technical skills." },
              { title: "Share and Create", desc: "I want to share more of my projects, publish my work, create useful tutorials, and continue building content that can help other learners and developers." },
              { title: "Build Better Products", desc: "My goal is to build polished applications and create clean, accessible, and meaningful digital products with memorable and engaging user interactions." }
            ].map((goal, index) => (
              <motion.div className="card border-card" key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <span className="card-category">GOAL</span>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & FEEDBACK SECTION */}
      <section id="contact" className="content-section bg-alt">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Contact & Feedback</motion.h2>
        <div className="contact-grid">
          <motion.div className="contact-left" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="contact-info">
              <p><MdEmail size={24} /> vittovincent16@gmail.com</p>
              <p><MdSmartphone size={24} /> 09128842378</p>
            </div>
            
            <form 
              className="contact-form" 
              action="https://formspree.io/f/xnpapzwy" 
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="cta-button form-button">Send Message</button>
            </form>
          </motion.div>
          
          <motion.div className="contact-right" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3>Connect with me</h3>
            <div className="social-grid">
              <a href="https://www.facebook.com/vincent.vitto.2024" aria-label="Facebook"><FaFacebook size={28}/></a>
              <a href="https://www.instagram.com/ykvince_nt" aria-label="Instagram"><FaInstagram size={28}/></a>
              <a href="https://www.tiktok.com/@henix_v2?_r=1&_t=ZS-98kmZJ4zFsD" aria-label="TikTok"><FaTiktok size={28}/></a>
              <a href="https://github.com/vittovincent16-oss/HeniXv2" aria-label="GitHub"><FaGithub size={28}/></a>
              <a href="https://m.me/vincent.vitto.2024" aria-label="Messenger"><FaFacebookMessenger size={28}/></a>
              <a href="mailto:vittovincent16@gmail.com" aria-label="Gmail"><SiGmail size={28}/></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="carousel-track right-to-left footer-carousel">
          <div className="carousel-content">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <span key={i} className="carousel-item">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="footer-content">
          <nav className="footer-links">
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('goals')}>Goals</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          
          <div className="footer-socials">
             <a href="https://www.facebook.com/vincent.vitto.2024"><FaFacebook size={24}/></a>
             <a href="https://www.instagram.com/ykvince_nt"><FaInstagram size={24}/></a>
             <a href="https://github.com/vittovincent16-oss/HeniXv2"><FaGithub size={24}/></a>
             <a href="mailto:vittovincent16@gmail.com"><SiGmail size={24}/></a>
          </div>

          <p className="footer-quote">
            "Keep learning, keep creating, and let every project reflect how far you've grown."
          </p>
          <p className="copyright">Jhon Vincent Vitto - A man that creates Value.</p>
        </div>
      </footer>
    </div>
  );
}