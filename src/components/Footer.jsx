import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaDownload,
  FaTimes,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Logo from './Logo';
import Reveal from './Reveal';
import { navLinks, ecosystemLinks, companyLinks, accountLinks, whitepaper } from '../data/navData';
import { contact, socials } from '../data/siteData';
import { stagger } from '../utils/helpers';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  // file name has spaces, so encode it for the iframe / links
  const pdfUrl = encodeURI(whitepaper.url);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
  };

  // close popup on Esc + lock page scroll while it is open
  useEffect(() => {
    if (!pdfOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setPdfOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [pdfOpen]);

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">
          <Reveal delay={stagger(0)} className="footer-brand">
            <Logo light />
            <p>Focus on long-term impact! Live with future technology! NFTs, digital assets and Web3, together in one Metaverse.</p>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label} className="social" target="_blank" rel="noopener noreferrer">
                  <s.icon />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={stagger(1)}>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              {accountLinks.map((l) => (
                <li key={l.to} className="footer-auth-item">
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={stagger(2)}>
            <h4>Ecosystem</h4>
            <ul>
              {ecosystemLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="mt">Company</h4>
            <ul>
              {companyLinks.slice(2).map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="footer-wp-link"
                  onClick={() => setPdfOpen(true)}
                  aria-haspopup="dialog"
                >
                  {whitepaper.label}
                </button>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={stagger(3)} className="footer-news">
            <h4>Stay Updated</h4>
            <p>Get launch news, AMAs and roadmap updates.</p>
            <form onSubmit={subscribe} className="news-form">
              <FaEnvelope className="news-icon" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address" required />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane />
              </button>
            </form>
            {done && <span className="news-ok">Thanks for subscribing!</span>}
            <ul className="footer-contact-list">
              <li><FaEnvelope /> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><FaMapMarkerAlt /> <address>{contact.company}, {contact.address.join(' ')}</address></li>
            </ul>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Disclaimer: the information shared in this white paper is not all-encompassing or comprehensive and does not intend to create any contractual relationship. Forward-looking statements may differ substantially from actual results.{' '}
            <Link to="/disclaimer">Read full disclaimer</Link>
          </p>
          <p className="copy">&copy; 2026 ZMAX NET CORPORATIONS. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-mark" aria-hidden="true">ZOHOMAX</div>

      {/* WHITE PAPER POPUP (view + download live here) */}
      {pdfOpen &&
        createPortal(
          <div
            className="wp-modal"
            role="dialog"
            aria-modal="true"
            aria-label={whitepaper.label}
            onClick={() => setPdfOpen(false)}
          >
            <div className="wp-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="wp-modal-head">
                <h3>{whitepaper.label}</h3>
                <div className="wp-modal-tools">
                  <a href={pdfUrl} download="ZOHOMAX-Whitepaper.pdf" className="wp-modal-btn">
                    <FaDownload /> <span>Download</span>
                  </a>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="wp-modal-btn wp-modal-btn-ghost">
                    <FaExternalLinkAlt /> <span>Open in new tab</span>
                  </a>
                  <button type="button" className="wp-modal-close" onClick={() => setPdfOpen(false)} aria-label="Close">
                    <FaTimes />
                  </button>
                </div>
              </div>
              <iframe
                className="wp-modal-frame"
                src={`${pdfUrl}#toolbar=1&view=FitH`}
                title={whitepaper.label}
              />
            </div>
          </div>,
          document.body
        )}
    </footer>
  );
}