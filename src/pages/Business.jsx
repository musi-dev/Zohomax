import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { FaCoins, FaMicrochip } from 'react-icons/fa';
import { markets, businessIntro, businessOutro, modelCards, economyIntro, economyPoints, fundRaising, blockchainPoints, zmaxModel, projectRole, howItWorks, aiIntegration } from '../data/businessData';
import { stagger } from '../utils/helpers';
import '../styles/business.css';

export default function Business() {
  return (
    <>
      <PageHero eyebrow="Business" title="The ZMAX" highlight="Business Model" text="Diverse gaming services and multiple use cases for one native token." />

      {/* BUSINESS MODEL */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The ZMAX business model" title="Several Major Markets," highlight="One Ecosystem" text={businessIntro} />
          <div className="grid-6">
            {markets.map((m, i) => (
              <Reveal key={m.label} delay={stagger(i, 100)}>
                <div className="card market-card"><span className="icon-box"><m.icon /></span><h3>{m.label}</h3></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="body-p center-text">{businessOutro}</Reveal>
          <div className="grid-4 gap-top">
            {modelCards.map((c, i) => (
              <Reveal key={c.title} delay={stagger(i)}>
                <div className="card service-card"><span className="icon-box"><c.icon /></span><h3>{c.title}</h3><p>{c.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMICAL APPROACH */}
      <section className="section section-white">
        <div className="container two-col top">
          <div>
            <SectionHeading eyebrow="Economical approach" title="A Balanced Economy" highlight="Holders Can Trust" />
            <Reveal as="p" className="body-p" delay={150}>{economyIntro}</Reveal>
          </div>
          <div className="check-list">
            {economyPoints.map((p, i) => (
              <Reveal key={p.text} delay={stagger(i, 110)}>
                <div className="check-item"><span className="icon-box sm"><p.icon /></span><p>{p.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUND RAISING */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom" className="fund">
            <div className="fund-amount">
              <FaCoins />
              <span>Fund Raising</span>
              <strong>{fundRaising.amount}</strong>
            </div>
            <div className="fund-text">
              {fundRaising.text.map((t, i) => <p key={i}>{t}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* METAVERSE AND BLOCKCHAIN */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Metaverse and blockchain" title="Blockchain Adds New" highlight="Dimensions" text="The utilization of blockchain adds other dimensions to the Metaverse saga:" align="center" />
          <div className="grid-2">
            {blockchainPoints.map((b, i) => (
              <Reveal key={b.title} variant={i === 0 ? 'left' : 'right'} delay={i * 120}>
                <div className="card long-card"><span className="icon-box"><b.icon /></span><h3>{b.title}</h3><p>{b.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ZOHOMAX */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="ZOHOMAX (ZMAX)" title="A Bilateral Model Connecting" highlight="Gaming & Blockchain" text={zmaxModel.intro} />
          <div className="facts">
            {zmaxModel.facts.map((f, i) => (
              <Reveal key={f.value} delay={stagger(i, 110)}>
                <div className="fact"><strong>{f.value}</strong><span>{f.text}</span></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="body-p center-text">{zmaxModel.outro}</Reveal>
        </div>
      </section>

      {/* PROJECT ROLE */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Project role" title="Maximizing the Value of" highlight="Gaming & NFTs" text={projectRole.intro} />
          <div className="grid-4">
            {projectRole.items.map((it, i) => (
              <Reveal key={i} delay={stagger(i)}>
                <div className="card service-card"><span className="icon-box"><it.icon /></span><p>{it.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container two-col">
          <Reveal variant="left" className="media-frame">
            <div className="media tall"><img src="/assets/1.png" alt="Art gallery" loading="lazy" /></div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="How it works" title={howItWorks.title} highlight="Scan, Mint & Explore" />
            {howItWorks.text.map((t, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 150, 150)} className="body-p">{t}</Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI INTEGRATION (content left, image right) */}
      <section className="section section-white">
        <div className="container two-col">
          <div className="ai-content">
            <SectionHeading
              eyebrow={aiIntegration.eyebrow}
              title={aiIntegration.title}
              highlight={aiIntegration.highlight}
            />
            {aiIntegration.text.map((t, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 150, 150)} className="body-p">{t}</Reveal>
            ))}

            <div className="ai-points">
              {aiIntegration.points.map((p, i) => (
                <Reveal key={p.title} delay={stagger(i, 110, 200)}>
                  <div className="ai-point">
                    <span className="icon-box sm"><p.icon /></span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" className="media-frame ai-frame">
            <div className="media ai-media">
              <img src="/assets/ai.png" alt="AI integration with the ZMAX Metaverse" loading="lazy" />
            </div>
            <div className="ai-badge">
              <span className="ai-badge-icon"><FaMicrochip /></span>
              <div>
                <strong>{aiIntegration.badge.title}</strong>
                <span>{aiIntegration.badge.text}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Invest in the future of gaming. Join the private sale whitelist." button="Join the Whitelist" />
    </>
  );
}