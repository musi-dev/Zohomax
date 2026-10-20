import { FaCheckCircle } from 'react-icons/fa';
import Reveal from './Reveal';
import { roadmap } from '../data/roadmapData';
import { stagger } from '../utils/helpers';

export default function RoadmapDetails() {
  return (
    <div className="rd-grid">
      {roadmap.map((r, i) => (
        <Reveal key={r.quarter} delay={stagger(i % 3, 130)}>
          <article className="card rd-card">
            <header>
              <span className="icon-box">
                <r.icon />
              </span>
              <div>
                <h3>{r.quarter}</h3>
                <small>{r.phase}</small>
              </div>
            </header>
            <ul>
              {r.items.map((item) => (
                <li key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
