import { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Calendar,
  Download,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Menu,
  PenLine,
  Quote,
  Sparkles,
  X,
} from 'lucide-react';
import BookingSection from '@/components/BookingSection';

const portrait = '/images/1737310379049.jpg';
const resume = '/documents/Tansen_Kumar_Resume_(1).docx';

const capabilities = [
  { title: 'Scientific & academic writing', icon: PenLine },
  { title: 'Manuscript review', icon: BookOpen },
  { title: 'Research & analysis', icon: FlaskConical },
  { title: 'Proofreading & editing', icon: Check },
  { title: 'Applied AI & prompt design', icon: Sparkles },
  { title: 'Robotics & drone systems', icon: ArrowUpRight },
];

const certifications = [
  'Create Your First Gemini Enterprise Application',
  'Responsible AI: Applying AI Principles with Google Cloud',
  'Prompt Design in Agent Platform',
  'Introduction to Responsible AI',
  'Introduction to Large Language Models',
  'Introduction to Generative AI',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">TK</span>
          <span className="brand-name">Tansen Kumar</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#credentials" onClick={closeMenu}>Credentials</a>
          <a href="#booking" onClick={closeMenu}>Book a call</a>
          <a className="nav-contact" href="mailto:tansen.kumar098@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-line" /> Independent writer & researcher</p>
            <h1>Making complex<br /><em>ideas</em> easier to<br />understand.</h1>
            <p className="hero-intro">I read, research, write, and build at the intersection of artificial intelligence, robotics, and scientific thinking.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href={resume} download>Download résumé <Download size={16} /></a>
            </div>
            <div className="hero-meta"><span>Based in Bhagalpur, Bihar</span><span className="meta-dot" /><span>Available for freelance work</span></div>
          </div>
          <div className="hero-visual reveal-up">
            <div className="image-frame"><img src={portrait} alt="Tansen Kumar" /></div>
            <div className="image-note"><span>01</span><span>Curious by nature.<br />Precise by practice.</span></div>
            <div className="hero-stamp"><span>AI</span><span>ROBOTICS</span><span>RESEARCH</span></div>
          </div>
        </section>

        <section id="about" className="about section-pad section-grid">
          <div className="section-label"><span>01</span><span>About</span></div>
          <div className="about-content">
            <h2>The space between<br /><em>knowledge</em> and clarity.</h2>
            <div className="about-columns">
              <p>My background spans independent research and hands-on practice in AI, robotics, and drone systems, alongside a strong interest in vibe coding — building with AI-assisted development tools.</p>
              <p>That combination lets me approach technical writing and manuscript review from the inside. I understand the subject matter well enough to ask the right questions, not just polish the prose.</p>
            </div>
          </div>
        </section>

        <section id="work" className="work section-pad section-grid">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="work-content">
            <div className="work-heading"><h2>Work that makes<br />a <em>difference.</em></h2><span className="work-count">01 — 01</span></div>
            <article className="project-card">
              <div className="project-topline"><span>Freelance project</span><span>2025</span></div>
              <div className="project-body"><div><p className="project-type">Scientific book review & feedback</p><h3>Helping an ambitious scientific manuscript find its clearest voice.</h3></div><a className="circle-arrow" href="mailto:tansen.kumar098@gmail.com?subject=Scientific%20book%20review"><ArrowUpRight size={22} /></a></div>
              <div className="project-details"><p>Read and analyzed an upcoming scientific book ahead of its Amazon Kindle launch. Wrote a professional, detailed review to help the author refine and prepare the manuscript for publication.</p><div className="tag-list"><span>Critical thinking</span><span>Academic writing</span><span>Scientific research</span><span>Proofreading</span></div></div>
              <div className="project-footer"><span>Client: Independent author / scientist</span><span>Fixed deadline · Close reading · Editorial standards</span></div>
            </article>
          </div>
        </section>

        <section id="capabilities" className="capabilities section-pad section-grid dark-section">
          <div className="section-label light-label"><span>03</span><span>Capabilities</span></div>
          <div className="capabilities-content"><div className="work-heading"><h2>Good work starts<br />with the <em>right questions.</em></h2><p>I bring a flexible, cross-disciplinary perspective to every brief.</p></div><div className="capability-grid">{capabilities.map(({ title, icon: Icon }, index) => <div className="capability-item" key={title}><span className="capability-number">0{index + 1}</span><Icon size={20} strokeWidth={1.5} /><span>{title}</span></div>)}</div></div>
        </section>

        <section id="credentials" className="credentials section-pad section-grid">
          <div className="section-label"><span>04</span><span>Credentials</span></div>
          <div className="credentials-content">
            <div className="credential-block"><div className="credential-title"><span>Certifications</span><span>Google Skill Badges</span></div><div className="cert-list">{certifications.map((cert) => <div className="cert-row" key={cert}><span>{cert}</span><span>2026</span></div>)}</div></div>
            <div className="credential-block education-block"><div className="credential-title"><span>Education</span><span>Background</span></div><div className="education-list"><div><h3>Chauhan Public School, Bhagalpur</h3><p>12th (Senior Secondary) <span>2026</span></p></div><div><h3>Anandram Dhandhania Saraswati Vidya Mandir</h3><p>10th (Secondary) <span>2024</span></p></div></div></div>
          </div>
        </section>

        <section id="booking" className="booking section-pad section-grid">
          <div className="section-label"><span>05</span><span>Book a call</span></div>
          <div className="booking-content">
            <div className="work-heading">
              <h2>Let's find a time<br />that <em>works.</em></h2>
              <span className="booking-badge"><Calendar size={14} /> 30-min consultation</span>
            </div>
            <p className="booking-intro">
              Pick a topic, choose a date and time that suits you, and I'll get back
              within 24 hours to confirm. No back-and-forth emails needed.
            </p>
            <BookingSection />
          </div>
        </section>

        <section className="contact section-pad" id="contact"><div className="contact-inner"><Quote size={34} strokeWidth={1.2} /><h2>Have something worth<br /><em>explaining?</em></h2><p>Let's make it clear, thoughtful, and useful.</p><a className="button button-light" href="mailto:tansen.kumar098@gmail.com">Start a conversation <Mail size={16} /></a></div></section>
      </main>

      <footer className="footer section-pad"><div className="footer-top"><span className="footer-name">Tansen Kumar</span><span>Freelance Writer · Researcher · Vibe Coder</span><div className="socials"><a href="mailto:tansen.kumar098@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Tansen Kumar</span><span>Built with curiosity & care</span></div></footer>
    </div>
  );
}

export default App;
