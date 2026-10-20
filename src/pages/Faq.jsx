import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FaqSection from '../components/FaqSection';

export default function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked" highlight="Questions" text="Answers about ZOHOMAX, the Metaverse, play-to-earn and the private sale." />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Help center" title="How Can We" highlight="Help You?" align="center" />
          <FaqSection />
        </div>
      </section>
    </>
  );
}
