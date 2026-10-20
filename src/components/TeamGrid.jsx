import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { team } from '../data/teamData';
import { stagger } from '../utils/helpers';
import '../styles/team.css';

// Layout: title on top, all four members in a single row (desktop).
// On mobile the members stack one per row and reveal one by one on scroll.
function useIsMobile(query = '(max-width: 768px)') {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return isMobile;
}

export default function TeamGrid({ title = 'Our Leadership', subtitle = 'ZMAX NET CORPORATIONS' }) {
  const isMobile = useIsMobile();

  return (
    <div className="team-grid">
      <Reveal variant="left" className="team-title">
        <div className="bracket">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </Reveal>

      {team.map((m, i) => (
        <Reveal
          key={m.name}
          delay={isMobile ? 0 : stagger(i, 130)}
          className={`team-slot slot-${i + 1}`}
        >
          <figure className="member">
            <div className="member-photo">
              <img src={m.image} alt={m.name} loading="lazy" />
              <figcaption>
                <strong>{m.position}</strong>
                <span>{m.role}</span>
              </figcaption>
            </div>

            <div className="member-info">
              <h3>{m.name}</h3>
              {m.designation && <p>{m.designation}</p>}
            </div>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}