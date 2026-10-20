// Delay (ms) used to animate grid items one after another.
export const stagger = (index, step = 120, base = 0) => base + index * step;

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
