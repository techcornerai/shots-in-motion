import ContactForm from "@/app/components/contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060606] to-black" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#c6a66b]/[0.05] blur-3xl" />

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="heading-section">Let’s Capture Something Meaningful</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            Reach out for portraits, events, weddings, editorial work, or any
            project that deserves cinematic storytelling.
          </p>

          <div className="mt-8 space-y-3 text-sm text-white/60 md:text-base">
            <p>Tampa Bay, Florida</p>
            <p>Available for portraits, events, weddings, and creative work</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] md:p-8">
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
