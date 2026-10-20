import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, highlight, text, align = 'left' }) {
  return (
    <div className={`heading heading-${align}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="title" delay={100}>
        {title} {highlight && <span>{highlight}</span>}
      </Reveal>
      {text && (
        <Reveal as="p" className="lead" delay={200}>
          {text}
        </Reveal>
      )}
    </div>
  );
}
