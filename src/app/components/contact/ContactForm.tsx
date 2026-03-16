"use client";

import { useState } from "react";

type ContactFormProps = {
  compact?: boolean;
};

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSuccess("Your message was sent successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch {
      setError("Failed to send your message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? "grid gap-5 md:grid-cols-2" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Phone
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
            Event Type
          </label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-[#c6a66b]/40"
          >
            <option value="">Select one</option>
            <option value="Portraits">Portraits</option>
            <option value="Events">Events</option>
            <option value="Weddings">Weddings</option>
            <option value="Nature">Nature</option>
            <option value="Editorial">Editorial</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
          placeholder="Tell us about your session, event, or project."
        />
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      {success ? <p className="text-sm text-emerald-400">{success}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-[48px] items-center rounded-full bg-[#c6a66b] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
