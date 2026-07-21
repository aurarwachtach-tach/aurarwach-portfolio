"use client";

import { useEffect, useRef, useState } from "react";

type ContactCopyButtonProps = {
  label: string;
  value: string;
  displayValue: string;
};

export function ContactCopyButton({ label, value, displayValue }: ContactCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="contact-copy-button" type="button" onClick={copyToClipboard} aria-label={`Copy ${label}: ${displayValue}`}>
      <span><small>{label}</small>{displayValue}</span>
      <b className={copied ? "copy-status copied" : "copy-status"} aria-live="polite">
        {copied ? "COPIED ✓" : "↗"}
      </b>
    </button>
  );
}
