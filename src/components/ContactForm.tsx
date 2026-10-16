
import { useState } from "react";

const adminWhatsApp = "94725542652";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("Lifetime VIP");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = [
      "Hello ProfitWave Admin! 👋",
      "",
      "I would like to know more about ProfitWave memberships.",
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Interested In: ${interest}`,
      "",
      "Please send me the membership details and payment instructions.",
    ].join("\n");

    const url = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pw-card grid gap-5 rounded-3xl p-6"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-medium"
        >
          Your Name
        </label>

        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="min-h-12 w-full rounded-xl border border-pw-border bg-pw-elevated px-4 text-pw-text outline-none focus:ring-2 focus:ring-pw-green"
        />
      </div>

      <div>
        <label
          htmlFor="contact-method"
          className="mb-2 block text-sm font-medium"
        >
          WhatsApp Number or Telegram Username
        </label>

        <input
          id="contact-method"
          type="text"
          autoComplete="tel"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter your contact details"
          className="min-h-12 w-full rounded-xl border border-pw-border bg-pw-elevated px-4 text-pw-text outline-none focus:ring-2 focus:ring-pw-green"
        />
      </div>

      <div>
        <label
          htmlFor="membership-interest"
          className="mb-2 block text-sm font-medium"
        >
          Membership Interest
        </label>

        <select
          id="membership-interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="min-h-12 w-full rounded-xl border border-pw-border bg-pw-elevated px-4 text-pw-text outline-none focus:ring-2 focus:ring-pw-green"
        >
          <option value="Lifetime VIP">Lifetime VIP</option>
          <option value="VVIP">VVIP</option>
          <option value="Super VVIP">Super VVIP</option>
          <option value="Crypto Signals">Crypto Signals</option>
          <option value="Forex Signals">Forex Signals</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pw-green px-5 font-semibold text-black transition-opacity hover:opacity-90"
      >
        Send Enquiry on WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-pw-muted">
        Enquiry එක අපට ලැබීමට WhatsApp එකේ Send button එක ඔබන්න.
      </p>
    </form>
  );
}
