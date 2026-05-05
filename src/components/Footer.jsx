import logo from '../assets/images/logo.png';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Benefits', 'benefits'],
  ['Why Us', 'why'],
  ['Buy Now', 'buy'],
];

export default function Footer() {
  const scrollTo = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-deep px-0 py-10 text-cream">
      <div className="section-inner flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <img src={logo} alt="IBOE leaf logo" className="h-14 w-20 object-contain brightness-125" />
          <h2 className="display-type mt-3 text-3xl text-paper">Beras Kencur by Jamu Iboe</h2>
          <p className="mt-2 text-sm font-semibold text-cream">Jamu Tradisional, Rasa Masa Kini.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {links.map(([label, target]) => (
            <button
              key={target}
              type="button"
              onClick={() => scrollTo(target)}
              className="rounded-full bg-paper/10 px-4 py-2 text-sm font-bold text-cream transition hover:bg-paper hover:text-ink"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {['Instagram', 'TikTok', 'Website'].map((item) => (
            <a
              key={item}
              href="https://www.jamuiboe.co.id/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/30 px-4 py-2 text-sm font-bold transition hover:bg-cream hover:text-ink"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
