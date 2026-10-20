import useReveal from '../utils/useReveal';

export default function Reveal({ children, as: Tag = 'div', variant = 'up', delay = 0, className = '', ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
