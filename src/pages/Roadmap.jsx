import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import RoadmapTimeline from '../components/RoadmapTimeline';
import RoadmapDetails from '../components/RoadmapDetails';
import CtaBand from '../components/CtaBand';
import '../styles/roadmap.css';

export default function Roadmap() {
  return (
    <>
      <PageHero eyebrow="Roadmap" title="Our" highlight="Roadmap" text="From Q1 2026 to Q1 2027: foundation, presale, launch, expansion and global scale." />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Timeline" title="Five Phases to" highlight="100M Users" align="center" />
          <RoadmapTimeline />
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Milestones" title="Every Step," highlight="Quarter by Quarter" align="center" />
          <RoadmapDetails />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
