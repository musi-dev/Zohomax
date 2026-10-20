import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import Logo from './Logo';
import { navLinks } from '../data/navData';
import { socials } from '../data/siteData';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(null); // desktop dropdown
  const [sub, setSub] = useState(null); // mobile accordion
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setMenu(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-right">
            <div className="topbar-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"><s.icon /></a>
              ))}
            </div>
            <span className="topbar-sep" />
            <span className="topbar-motto">Innovate <i>&bull;</i> Build <i>&bull;</i> Grow</span>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="nav-bar">
        <div className="container nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Main">
            {navLinks.map((l) =>
              l.children ? (
                <div
                  key={l.to}
                  className={`nav-item has-menu ${menu === l.to ? 'open' : ''}`}
                  onMouseEnter={() => setMenu(l.to)}
                  onMouseLeave={() => setMenu(null)}
                  onFocus={() => setMenu(l.to)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setMenu(null);
                  }}
                >
                  <NavLink to={l.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-haspopup="true" aria-expanded={menu === l.to}>
                    {l.label}
                    <FiChevronDown className="chev" />
                  </NavLink>
                  <div className="dropdown">
                    {l.children.map((c) => (
                      <Link key={c.label} to={c.to} className="dropdown-link" onClick={() => setMenu(null)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {l.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary nav-cta getin">
              Get in Touch <FiArrowRight />
            </Link>
            <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`nav-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`nav-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <Logo />
          <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <FiX />
          </button>
        </div>
        <nav className="drawer-links">
          {navLinks.map((l, i) =>
            l.children ? (
              <div key={l.to} className="drawer-group">
                <button
                  className={`drawer-link drawer-toggle ${sub === l.to ? 'expanded' : ''}`}
                  style={{ '--i': i }}
                  onClick={() => setSub(sub === l.to ? null : l.to)}
                  aria-expanded={sub === l.to}
                >
                  {l.label}
                  <FiChevronDown />
                </button>
                <div className={`drawer-sub ${sub === l.to ? 'open' : ''}`}>
                  <div>
                    {l.children.map((c) => (
                      <NavLink key={c.label} to={c.to} className="drawer-sublink">
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                style={{ '--i': i }}
                className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
                <FiArrowRight />
              </NavLink>
            )
          )}
        </nav>
        <Link to="/contact" className="btn btn-primary drawer-cta">
          Get in Touch <FiArrowRight />
        </Link>
      </aside>
    </header>
  );
}