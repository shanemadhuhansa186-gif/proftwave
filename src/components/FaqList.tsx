import { useId, useState } from "react";
import { faqs } from "../config/content";

export function FaqList() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pw-border overflow-hidden rounded-2xl border border-pw-border">
      {faqs.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const isOpen = open === index;

        return (
          <div key={item.q} className="bg-pw-card">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-pw-text"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.q}
                <span aria-hidden="true" className="text-pw-cyan">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-pw-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
