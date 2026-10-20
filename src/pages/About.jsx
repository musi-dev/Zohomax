import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { execSummary, different, entryPoints, mission, vision, founder, teamFocus } from '../data/aboutData';
import { IMAGES } from '../data/images';
import { stagger } from '../utils/helpers';
import '../styles/about.css';

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="About" highlight="ZOHOMAX" text="Play. Trade. Build. Earn. NFTs, digital assets and Web3, together in one Metaverse." />

      {/* EXECUTIVE SUMMARY */}
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Executive Summary" title="One Shared" highlight="Digital Ecosystem" />
            {execSummary.map((p, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 140, 150)} className="body-p">{p}</Reveal>
            ))}
          </div>
          <Reveal variant="right" className="media-frame">
            <div className="media tall"><img src={IMAGES.network} alt="Connected digital world" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="What makes us different" title="A Digital Currency" highlight="for the Virtual World" />
          <div className="two-col top">
            <div>
              {different.map((p, i) => (
                <Reveal as="p" key={i} delay={stagger(i, 150)} className="body-p">{p}</Reveal>
              ))}
            </div>
            <div className="chips">
              {entryPoints.map((e, i) => (
                <Reveal key={e.label} delay={stagger(i, 80)}>
                  <span className="chip"><e.icon /> {e.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="section">
        <div className="container grid-2 stretch">
          <Reveal variant="left">
            <div className="card long-card">
              <span className="icon-box"><FaBullseye /></span>
              <h2>Our Mission</h2>
              {mission.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <div className="card long-card">
              <span className="icon-box"><FaEye /></span>
              <h2>Our Vision</h2>
              {vision.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section section-white">
        <div className="container founder">
          <Reveal variant="left" className="founder-card">
            <div className="founder-photo"><img src="/assets/02.jpg.jpeg" alt={founder.name} loading="lazy" /></div>
            <h3>{founder.name}</h3>
            <span>{founder.role}</span>
            <small>{founder.company}</small>
          </Reveal>
          <div>
            <SectionHeading eyebrow="A note from the founder" title="Welcome to" highlight="ZMAX NET" />
            {founder.letter.map((p, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 90, 100)} className="body-p">{p}</Reveal>
            ))}
            <Reveal className="closing">
              {founder.closing.map((p, i) => <p key={i}>{p}</p>)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM FOCUS */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Team focus" title="What the ZMAX Team" highlight="Will Work On" align="center" />
          <div className="grid-3">
            {teamFocus.map((t, i) => (
              <Reveal key={t} delay={stagger(i % 3, 120)}>
                <div className="card focus-card"><FaCheckCircle /><p>{t}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
