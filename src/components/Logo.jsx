import { Link } from 'react-router-dom';

export default function Logo({ light = false, tagline = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="ZOHOMAX home">
      <img src="/assets/logo.jpg" alt="" className="logo-img" />
      <span className="logo-copy">
        <span className="logo-text">ZOHOMAX</span>
        {tagline && <small className="logo-tag">Digital Solutions for a Smarter Tomorrow</small>}
      </span>
    </Link>
  );
}
