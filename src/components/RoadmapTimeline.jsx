import Reveal from './Reveal';
import { roadmap } from '../data/roadmapData';
import { stagger } from '../utils/helpers';
import '../styles/roadmap.css';

// Horizontal chevron timeline. Text and icon alternate above/below the bar.
export default function RoadmapTimeline() {
  return (
    <div className="rt">
      {roadmap.map((r, i) => (
        <Reveal key={r.quarter} delay={stagger(i, 150)} className={`rt-col ${i % 2 === 0 ? 'text-top' : 'text-bottom'}`}>
          <div className="rt-text">
            <strong>{r.phase}</strong>
            <span>{r.items.length} milestones</span>
          </div>
          <div className={`rt-bar shade-${i + 1}`}>
            <b>{r.quarter}</b>
            <i className="rt-dot" />
          </div>
          <div className="rt-icon-wrap">
            <span className="rt-line" />
            <span className="rt-icon">
              <r.icon />
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
