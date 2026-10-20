import { FaCheckCircle } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import TeamGrid from '../components/TeamGrid';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { teamFocus } from '../data/aboutData';
import { stagger } from '../utils/helpers';
import '../styles/about.css';

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title="Meet the" highlight="ZMAX Team" text="10+ years of experience building and solving complex problems at scale." />
      <section className="section">
        <div className="container"><TeamGrid title="Our Leadership" subtitle="ZMAX NET CORPORATIONS" /></div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Team focus" title="What We Are" highlight="Working On" align="center" />
          <div className="grid-3">
            {teamFocus.map((t, i) => (
              <Reveal key={t} delay={stagger(i % 3, 120)}>
                <div className="card focus-card"><FaCheckCircle /><p>{t}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want to build with us? Say hello." button="Contact the Team" />
    </>
  );
}
