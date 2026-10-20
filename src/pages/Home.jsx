import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaRocket, FaUsers, FaGamepad, FaCubes, FaCoins } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';
import tokenBg from '../assets/token-bg.jpg';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import LottieBox from '../components/LottieBox';
import SectionHeading from '../components/SectionHeading';
import RoadmapTimeline from '../components/RoadmapTimeline';
import TeamGrid from '../components/TeamGrid';
import FaqSection from '../components/FaqSection';
import CtaBand from '../components/CtaBand';
import { stats, services, features, mvItems, tokenNodes } from '../data/homeData';
import { execSummary } from '../data/aboutData';
import { IMAGES } from '../data/images';
import { stagger } from '../utils/helpers';
import '../styles/home.css';

// geometry of the token arc (viewBox units, shared by the SVG and the HTML nodes)
const ORBIT = { w: 1100, h: 700, cx: 550, cy: 470, r: 340, coinY: 510 };
const rad = (deg) => (deg * Math.PI) / 180;
const onArc = (deg) => ({ x: ORBIT.cx + ORBIT.r * Math.cos(rad(deg)), y: ORBIT.cy - ORBIT.r * Math.sin(rad(deg)) });
const arcStart = onArc(195);
const arcEnd = onArc(-15);
const RAYS = [90, 140, 40, 172, 8].map((a) => ({
  x1: ORBIT.cx + 125 * Math.cos(rad(a)),
  y1: ORBIT.coinY - 125 * Math.sin(rad(a)),
  x2: ORBIT.cx + 172 * Math.cos(rad(a)),
  y2: ORBIT.coinY - 172 * Math.sin(rad(a)),
}));

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal as="span" className="hero-pill"><FaRocket /> Play &bull; Trade &bull; Build &bull; Earn</Reveal>
            <Reveal as="h1" delay={120}>
              Focus on Long-term Impact! <span>Live with Future Technology!</span>
            </Reveal>
            <Reveal as="p" delay={240} className="hero-text">
              ZMAX combines gaming and blockchain in its most superior way: a decentralized, space-themed Metaverse with NFTs, digital assets and a Web3 economy for every active participant.
            </Reveal>
            <Reveal delay={360} className="hero-actions">
              <Link to="/metaverse" className="btn btn-primary btn-pill">Explore Metaverse <FaArrowRight /></Link>
              <Link to="/about" className="btn btn-outline btn-pill"><span className="play-dot"><FaPlay /></span> Watch Overview</Link>
            </Reveal>
          </div>

        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="container feature-wrap">
        <Reveal variant="zoom" className="feature-strip">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature-icon"><f.icon /></span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="wwd-top">
            <div className="wwd-copy">
              <SectionHeading eyebrow="What we do" title="Solutions that Drive" highlight="Real Impact" />
              <Reveal as="p" className="body-p" delay={150}>
                From gaming to NFTs and VR, one connected ecosystem built around the ZMAX token: play, trade, build and earn in a Metaverse that rewards every active participant.
              </Reveal>
              <Reveal delay={250}>
                <Link to="/business" className="link-arrow">Explore All Services <FaArrowRight /></Link>
              </Reveal>
            </div>

            <Reveal variant="right" delay={200} className="wwd-visual">
              <div className="hv-card">
                <LottieBox name="hero" label="Person exploring the metaverse in a VR headset" />
              </div>
              <span className="hv-chip hv-chip-a"><FaGamepad /> Play to Earn</span>
              <span className="hv-chip hv-chip-b"><FaCubes /> 3D NFTs</span>
            </Reveal>
          </div>
          <div className="grid-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={stagger(i)}>
                <div className="card service-card">
                  <span className="icon-box"><s.icon /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link to={s.to} className="link-arrow">Learn More <FaArrowRight /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT (3D game room lottie) */}
      <section className="section section-white">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="About ZMAX" title="A Universe" highlight="in Itself" />
            {execSummary.slice(0, 2).map((p, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 150, 200)} className="body-p">{p}</Reveal>
            ))}
            <Reveal delay={600}>
              <Link to="/about" className="btn btn-primary">Read Our Story</Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="media-frame">
            <div className="media lottie-media">
              <LottieBox name="gameRoom" label="Players enjoying games in a 3D game room" />
            </div>
            <div className="float-badge new"><FaUsers /><div><strong>10+ Years</strong><span>Team experience</span></div></div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION / GOALS */}
      <section className="section mv-section">
        <div className="container mv-grid">
          <div className="mv-left">
            <Reveal className="mv-deco"><span /><i /><i /><i /><span /></Reveal>
            <Reveal as="h2" className="mv-title" delay={100}>Our <span>Mission</span></Reveal>
            <Reveal className="mv-deco mv-deco-r" delay={160}><span /><i /><i /><i /><span /></Reveal>

            <div className="mv-list">
              {mvItems.map((m, i) => (
                <Reveal key={m.title} variant="left" delay={stagger(i, 140, 200)} className="mv-item">
                  <span className="mv-diamond"><b><m.icon /></b></span>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" className="mv-collage">
            <div className="dm dm-a"><div className="dm-in"><img src={IMAGES.space} alt="Space exploration" loading="lazy" /></div></div>
            <div className="dm dm-b"><div className="dm-in"><img src={IMAGES.vr} alt="People using VR headsets" loading="lazy" /></div></div>
            <div className="dm dm-c"><div className="dm-in"><img src={IMAGES.gaming} alt="Gaming setup" loading="lazy" /></div></div>
            <div className="dm dm-d"><div className="dm-in dm-lottie"><LottieBox name="vr" label="Animated VR headset" /></div></div>
          </Reveal>
        </div>
      </section>

      {/* TOKEN */}
      <section className="section token-section" style={{ backgroundImage: `url(${tokenBg})` }}>
        <div className="container">
          <SectionHeading
            eyebrow="ZMAX Token"
            title="The Currency of the"
            highlight="ZMAX Metaverse"
            text="Play, trade, build and earn with one native token that powers every transaction on the network."
            align="center"
          />

          <div className="token-stage">
            <svg className="token-svg" viewBox={`0 0 ${ORBIT.w} ${ORBIT.h}`} aria-hidden="true">
              <defs>
                <linearGradient id="rayGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7fe0ee" />
                  <stop offset="1" stopColor="#0fa3b8" />
                </linearGradient>
              </defs>
              <path
                d={`M ${arcStart.x} ${arcStart.y} A ${ORBIT.r} ${ORBIT.r} 0 1 1 ${arcEnd.x} ${arcEnd.y}`}
                fill="none"
                stroke="#5fd8ea"
                strokeOpacity="0.8"
                strokeWidth="2"
              />
              {RAYS.map((r, i) => (
                <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="url(#rayGrad)" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
              ))}
            </svg>

            <Reveal variant="zoom" className="token-core-wrap">
              <div className="token-core">
                <span className="token-core-ring" />
                <FaCoins />
                <strong>ZMAX</strong>
              </div>
            </Reveal>

            {tokenNodes.map((n, i) => {
              const p = onArc(n.angle);
              const side = Math.cos(rad(n.angle)) < -0.1 ? 'left' : Math.cos(rad(n.angle)) > 0.1 ? 'right' : 'top';
              return (
                <div
                  key={n.label}
                  className={`t-node t-${side}`}
                  style={{ left: `${(p.x / ORBIT.w) * 100}%`, top: `${(p.y / ORBIT.h) * 100}%` }}
                >
                  <span className="t-dot" />
                  <Reveal className="t-body" delay={stagger(i, 110, 150)}>
                    <span className="t-icon"><n.icon /></span>
                    <h4>{n.label}</h4>
                    <p>{n.text}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* market numbers (moved here from the old stats strip) */}
          <Reveal variant="zoom" className="stats token-stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <s.icon className="stat-icon" />
                <div>
                  <strong><CountUp end={s.end} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="center-btn"><Link to="/token" className="btn btn-primary">Explore the ZMAX Token <FaArrowRight /></Link></Reveal>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Roadmap" title="Our Path from Idea to" highlight="Global Scale" align="center" />
          <RoadmapTimeline />
          <Reveal className="center-btn"><Link to="/roadmap" className="btn btn-outline">View Full Roadmap</Link></Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container"><TeamGrid /></div>
      </section>

      {/* FAQ (FAQ lottie lives inside FaqSection) */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked" highlight="Questions" text="Everything you need to know about ZOHOMAX and the ZMAX Metaverse." align="center" />
          <FaqSection />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
