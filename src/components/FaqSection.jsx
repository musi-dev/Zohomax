import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaQuestionCircle } from 'react-icons/fa';
import Reveal from './Reveal';
import LottieBox from './LottieBox';
import { faqs } from '../data/faqData';
import { stagger } from '../utils/helpers';
import '../styles/faq.css';

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  const [question, setQuestion] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setSent(true);
    setQuestion('');
  };

  return (
    <div className="faq-layout">
      <div className="faq-list">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={stagger(i, 90)}>
            <div className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                {open === i ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal variant="right" className="faq-ask">
        <LottieBox name="faq" className="faq-art" label="Two people talking, with question bubbles" />
        <h3>Ask Any Question</h3>
        <p>Feel free to ask any question you have; we&apos;re here to help!</p>
        {/* <form onSubmit={submit}>
          <div className="ask-field">
            <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="write here..." aria-label="Your question" />
            <FaQuestionCircle />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Now
          </button>
        </form>
        {sent && <span className="ask-ok">Thanks! Our team will get back to you soon.</span>} */}
      </Reveal>
    </div>
  );
}
