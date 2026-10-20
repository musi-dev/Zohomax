import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

// Each file is loaded on demand, so the heavy JSON (the game room is ~1.9 MB)
// never ends up in the main bundle. `ratio` reserves the space so nothing jumps.
const REGISTRY = {
  hero: { load: () => import('../lottie/Exploring Metaverse World.json'), ratio: '1 / 1' },
  vr: { load: () => import('../lottie/Futuristic Virtual Reality Glasses Helmet.json'), ratio: '6 / 5' },
  gameRoom: { load: () => import('../lottie/3D Game Room.json'), ratio: '4 / 3' },
  faq: { load: () => import('../lottie/FAQ.json'), ratio: '1 / 1' },
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function LottieBox({ name, className = '', label = '', eager = false, loop = true }) {
  const ref = useRef(null);
  const [near, setNear] = useState(eager);
  const [data, setData] = useState(null);
  const item = REGISTRY[name];

  // start loading only when the box is close to the viewport
  useEffect(() => {
    if (near) return undefined;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setNear(true);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true);
        io.disconnect();
      }
    }, { rootMargin: '300px' });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  useEffect(() => {
    if (!near || !item) return undefined;
    let alive = true;
    item.load().then((m) => alive && setData(m.default || m));
    return () => {
      alive = false;
    };
  }, [near, item]);

  if (!item) return null;

  return (
    <div ref={ref} className={`lottie-box ${className}`} style={{ aspectRatio: item.ratio }} role="img" aria-label={label}>
      {data && <Lottie animationData={data} loop={loop} autoplay={!prefersReducedMotion()} />}
    </div>
  );
}
