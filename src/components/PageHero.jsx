import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import heroBg from '../assets/hero-bg.png';

export default function PageHero({ eyebrow, title, highlight, text }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container page-hero-inner">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <span>{eyebrow}</span>
        </div>
        <h1 className="page-title">
          {title} <span>{highlight}</span>
        </h1>
        {text && <p className="page-text">{text}</p>}
      </div>
    </section>
  );
}
