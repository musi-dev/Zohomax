import { FaCoins, FaRocket, FaNetworkWired, FaLock, FaLayerGroup, FaWallet, FaVoteYea, FaExchangeAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { different, entryPoints } from '../data/aboutData';
import { modelCards, economyIntro, economyPoints, fundRaising, zmaxModel } from '../data/businessData';
import { IMAGES } from '../data/images';
import { stagger } from '../utils/helpers';
import '../styles/business.css';
import '../styles/token.css';

// Every value below comes from the white paper.
const details = [
  { icon: FaCoins, label: 'Token', value: 'ZOHOMAX (ZMAX)' },
  { icon: FaExchangeAlt, label: 'Role', value: 'Medium of exchange inside the ZMAX Metaverse' },
  { icon: FaRocket, label: 'Launch', value: 'Public launch on PancakeSwap v2 (Q3 2026)' },
  { icon: FaNetworkWired, label: 'Gameplay', value: 'Web3 games played from the Polygon Explorer' },
  { icon: FaLock, label: 'Liquidity reserve', value: '30% reserved for 4 years when the listing phase begins' },
  { icon: FaLayerGroup, label: 'Supply', value: '100% of token reserved into existence unless burning is required' },
  { icon: FaWallet, label: 'Private sale', value: 'Whitelist program, around $1 Million target' },
  { icon: FaVoteYea, label: 'Governance', value: 'Token holders vote and submit proposals' },
];

export default function Token() {
  return (
    <>
      <PageHero eyebrow="Token" title="The ZMAX" highlight="Token" text="A digital currency for the virtual world: play, trade, build and earn with one native token." />

      {/* OVERVIEW */}
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="ZOHOMAX (ZMAX)" title="The Currency of the" highlight="ZMAX Metaverse" />
            <Reveal as="p" className="body-p" delay={150}>{different[0]}</Reveal>
            <Reveal as="p" className="body-p" delay={300}>{zmaxModel.intro}</Reveal>
          </div>
          <Reveal variant="right" className="media-frame">
            <div className="media tall"><img src="/assets/2.png" alt="Digital token" loading="lazy" /></div>
            <div className="float-badge"><FaCoins /><div><strong>ZMAX</strong><span>Native network token</span></div></div>
          </Reveal>
        </div>
      </section>

      {/* TOKEN DETAILS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Token details" title="ZMAX at" highlight="a Glance" align="center" />
          <div className="grid-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={stagger(i % 4, 110)}>
                <div className="card token-card">
                  <span className="icon-box"><d.icon /></span>
                  <small>{d.label}</small>
                  <p>{d.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Token use cases" title="What You Can Do" highlight="with ZMAX" align="center" />
          <div className="grid-2">
            {modelCards.slice(2).map((c, i) => (
              <Reveal key={c.title} variant={i === 0 ? 'left' : 'right'} delay={i * 120}>
                <div className="card service-card"><span className="icon-box"><c.icon /></span><h3>{c.title}</h3><p>{c.text}</p></div>
              </Reveal>
            ))}
          </div>
          <div className="chips center gap-top">
            {entryPoints.map((e, i) => (
              <Reveal key={e.label} delay={stagger(i, 80)}><span className="chip"><e.icon /> {e.label}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMY */}
      <section className="section section-white">
        <div className="container two-col top">
          <div>
            <SectionHeading eyebrow="Token economy" title="A Balanced Economy" highlight="Holders Can Trust" />
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
            <div className="fund-amount"><FaCoins /><span>Private Sale Target</span><strong>{fundRaising.amount}</strong></div>
            <div className="fund-text">{fundRaising.text.map((t, i) => <p key={i}>{t}</p>)}</div>
          </Reveal>
        </div>
      </section>

      {/* MARKET */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Market opportunity" title="Why Gaming and Blockchain" highlight="Belong Together" align="center" />
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

      <CtaBand title="Join the whitelist and be first to use ZMAX." button="Join the Whitelist" />
    </>
  );
}