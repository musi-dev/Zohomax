import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { stagger } from '../utils/helpers';

const text = [
  'The information shared in this whitepaper is not all-encompassing or comprehensive and does not in any way intend to create or put into implicit effect any elements of a contractual relationship.',
  'The primary purpose of this whitepaper is to provide potential token holders with pertinent information in order for them to thoroughly analyze the project and make an informed decision. Prior to your participation in the purchase of ZOHOMAX, we strongly advocate a careful study of this whitepaper and all the documents associated with the same, including the contract in relation to the purchase of the same.',
  'You may even engage the services of appropriate experts to help you with investment analysis. Certain statements, estimates and financial information featured in this whitepaper are forward-looking statements that are based on and take into consideration certain known and unknown contingencies and risks which in eventuality may cause the estimated results or may differ factually and substantially from the featured estimates or results extrapolated or expressed in such forward-looking statements herewith.',
];

export default function Disclaimer() {
  return (
    <>
      <PageHero eyebrow="Disclaimer" title="Important" highlight="Disclaimer" text="Please read carefully before taking part in any token purchase." />
      <section className="section">
        <div className="container narrow">
          {text.map((t, i) => (
            <Reveal key={i} delay={stagger(i, 150)}><p className="body-p">{t}</p></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
