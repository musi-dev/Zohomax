import { FaCheckCircle } from 'react-icons/fa';
import Logo from './Logo';
import '../styles/auth.css';

const points = [
  'Play-To-Earn gaming & VR / AR worlds',
  '3D NFT marketplace and digital assets',
  'One account for the whole ZMAX Metaverse',
];

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <section className="auth-page">
      <div className="auth-shell">
        {/* left brand panel */}
        <aside className="auth-side">
          <Logo light />
          <h2>Welcome to the <span>ZMAX Metaverse</span></h2>
          <p>Focus on long-term impact. Live with future technology — NFTs, digital assets and Web3, together in one Metaverse.</p>
          <ul>
            {points.map((p) => (
              <li key={p}><FaCheckCircle /> {p}</li>
            ))}
          </ul>
        </aside>

        {/* right form panel */}
        <div className="auth-panel">
          <div className="auth-panel-inner">
            <h1 className="auth-title">{title}</h1>
            {subtitle && <p className="auth-sub">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}