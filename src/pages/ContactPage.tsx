import { ContactForm } from "../components/ContactForm";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact ProfitWave"
        description="Contact ProfitWave for Lifetime VIP, VVIP and Super VVIP membership details."
      />

      <Section
        eyebrow="Contact"
        title="Contact ProfitWave"
        intro="ඔබට අවශ්‍ය membership එක තෝරාගෙන විස්තර ලබාගැනීමට පහත form එක පුරවන්න."
      >
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}