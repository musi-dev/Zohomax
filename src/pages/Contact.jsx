import { FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { contact, socials } from '../data/siteData';
import { stagger } from '../utils/helpers';
import '../styles/home.css'; // the contact hero re-uses the home hero styles
import '../styles/contact.css';

export default function Contact() {
  return (
    <>
      {/* HERO (same look as the home hero) */}
      <section className="hero hero-contact" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal as="span" className="hero-pill"><FaEnvelope /> Contact &bull; Support &bull; Partnerships</Reveal>
            <Reveal as="h1" delay={120}>
              Get in <span>Touch</span>
            </Reveal>
            <Reveal as="p" delay={240} className="hero-text">
              Questions about the whitelist, partnerships or the Metaverse? Talk to the team.
            </Reveal>
            <Reveal delay={360} className="hero-actions">
              <a href={`mailto:${contact.email}`} className="btn btn-primary btn-pill">Email Us <FaArrowRight /></a>
              <a href="#connect" className="btn btn-outline btn-pill">Follow Us</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <SectionHeading eyebrow="Contact us" title="Let's Build the Future" highlight="Together" />

            <div className="channels">
              <Reveal delay={200}>
                <a className="card channel" href={`mailto:${contact.email}`}>
                  <span className="icon-box"><FaEnvelope /></span>
                  <div><h3>Email</h3><p>{contact.email}</p></div>
                </a>
              </Reveal>
              <Reveal delay={320}>
                <div className="card channel">
                  <span className="icon-box"><FaMapMarkerAlt /></span>
                  <div>
                    <h3>{contact.company}</h3>
                    <address>
                      {contact.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal as="h3" className="connect-title" id="connect" delay={100}>Follow us on social media</Reveal>
            <div className="social-grid">
              {socials.map((s, i) => (
                <Reveal key={s.label} delay={stagger(i, 70)}>
                  <a className="social-tile" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} ${s.handle}`}>
                    <span className="icon-box sm"><s.icon /></span>
                    <div>
                      <strong>{s.label}</strong>
                      <span>{s.handle}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right">
            {/* Static form: display only, nothing is submitted or sent */}
            <form className="card contact-form">
              <h3>Send us a message</h3>
              <label>
                <span>Name</span>
                <div className="field"><FaUser /><input name="name" placeholder="Your name" /></div>
              </label>
              <label>
                <span>Email</span>
                <div className="field"><FaEnvelope /><input type="email" name="email" placeholder="you@example.com" /></div>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="How can we help?" />
              </label>
              <button type="button" className="btn btn-primary"><FaPaperPlane /> Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}