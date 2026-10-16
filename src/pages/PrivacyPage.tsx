import { Section } from "../components/Section";
import { Seo } from "../components/Seo";

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy policy | ProfitWave"
        description="Placeholder privacy policy for the ProfitWave website. Update this page before collecting personal data beyond the contact form."
      />
      <Section
        eyebrow="Legal"
        title="Privacy policy placeholder"
        intro="This is a placeholder until ProfitWave publishes a reviewed privacy policy. Do not treat it as legal advice."
      >
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-pw-muted">
          <p>
            The public website currently stores business copy in a local
            configuration file. Contact form submissions are not sent anywhere
            until a form endpoint is configured in src/config/site.ts.
          </p>
          <p>
            If analytics is enabled later, only optional CTA click events should
            be recorded. Do not collect unnecessary personal data.
          </p>
          <p>
            Telegram, WhatsApp, Facebook, and TikTok are third-party services
            with their own privacy policies. Clicking those links leaves this
            website.
          </p>
          <p>
            Replace this page with a Sri Lanka–appropriate policy before running
            ads, membership checkout, or mailing lists.
          </p>
        </div>
      </Section>
    </>
  );
}
