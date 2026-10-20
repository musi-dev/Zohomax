import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';

export default function CtaBand({ title = 'Join us on the journey of making ZMAX the next biggest thing in crypto.', button = 'Get in Touch', to = '/contact' }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal variant="zoom" className="cta-band">
          <h2>{title}</h2>
          <Link to={to} className="btn btn-light">
            {button} <FaArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
