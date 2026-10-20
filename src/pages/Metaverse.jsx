import { FaGamepad, FaVrCardboard, FaMicrochip } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { metaverseIntro, web3Gaming, vrAr, unreal, unrealHighlights, p2e } from '../data/metaverseData';
import { IMAGES } from '../data/images';
import { stagger } from '../utils/helpers';
import '../styles/metaverse.css';

export default function Metaverse() {
  return (
    <>
      <PageHero eyebrow="Metaverse" title="The ZMAX" highlight="Metaverse" text={metaverseIntro} />

      {/* WEB3 GAMING */}
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Blockchain / Web3 gaming" title="Web3 Gaming" highlight="with VR / AR" />
            {web3Gaming.map((t, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 150, 150)} className="body-p">{t}</Reveal>
            ))}
          </div>
          <Reveal variant="right" className="media-frame">
            <div className="media tall"><img src={IMAGES.gaming} alt="Gaming setup" loading="lazy" /></div>
            <div className="float-badge"><FaGamepad /><div><strong>Instant rewards</strong><span>Paid straight to wallets</span></div></div>
          </Reveal>
        </div>
      </section>

      {/* VR AND AR */}
      <section className="section section-white">
        <div className="container two-col">
          <Reveal variant="left" className="media-frame">
            <div className="media tall"><img src={IMAGES.vrAlt} alt="Virtual reality headset" loading="lazy" /></div>
            <div className="float-badge"><FaVrCardboard /><div><strong>VR &amp; AR</strong><span>Next-level immersion</span></div></div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Gaming with VR and AR" title="Immersive Worlds," highlight="Real Applications" />
            {vrAr.map((t, i) => (
              <Reveal as="p" key={i} delay={stagger(i, 150, 150)} className="body-p">{t}</Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UNREAL ENGINE */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Professionally designed and developed" title="Built on" highlight="Unreal Engine" align="center" />
          <div className="chips center">
            {unrealHighlights.map((h, i) => (
              <Reveal key={h} delay={stagger(i, 90)}><span className="chip"><FaMicrochip /> {h}</span></Reveal>
            ))}
          </div>
          <div className="grid-2 gap-top">
            {unreal.map((t, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? 'left' : 'right'} delay={stagger(Math.floor(i / 2), 120)}>
                <div className="card long-card"><p>{t}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLAY TO EARN */}
      <section className="section section-white">
        <div className="container two-col top">
          <div className="sticky-col">
            <SectionHeading eyebrow="Economy and play-to-earn" title="Play, Earn" highlight="& Shape the Universe" />
            <Reveal variant="left" className="media-frame">
              <div className="media"><img src={IMAGES.space} alt="Space exploration" loading="lazy" /></div>
            </Reveal>
          </div>
          <div className="p2e">
            {p2e.map((t, i) => (
              <Reveal key={i} delay={stagger(i % 2, 100)}>
                <p className="body-p">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to explore the ZMAX Metaverse?" button="Join the Whitelist" />
    </>
  );
}
