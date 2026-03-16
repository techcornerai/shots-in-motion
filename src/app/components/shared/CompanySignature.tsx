export default function CompanySignature() {
  return (
    <div className="border-t border-white/10 pt-6 text-center text-xs leading-6 text-white/40">
      <p>
        Built and designed by{" "}
        <span className="text-white/70">The Techcorner AI LLC</span>
      </p>
      <p>
        <a
          href="https://www.techcorner.ai"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white/70"
        >
          www.techcorner.ai
        </a>
      </p>
      <p>
        Instagram{" "}
        <a
          href="https://instagram.com/techcornerai"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white/70"
        >
          @techcornerai
        </a>
      </p>
    </div>
  );
}
