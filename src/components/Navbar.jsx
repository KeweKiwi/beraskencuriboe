import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Benefits', target: 'benefits' },
  { label: 'Why Us', target: 'why' },
];

export default function Navbar({ onBuy }) {
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const whySection = document.getElementById('why');
      if (!whySection) return;

      const rect = whySection.getBoundingClientRect();
      const headerProbe = 86;
      setOnDarkSection(rect.top <= headerProbe && rect.bottom > headerProbe);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTo = (target) => {
    setOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const darkHeader = onDarkSection && !open;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-2 md:px-6 md:py-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 md:px-5 md:py-3 ${
          darkHeader
            ? 'border-cream/15 bg-ink/86 shadow-label backdrop-blur-xl'
            : scrolled
              ? 'border-forest/15 bg-paper/92 shadow-soft backdrop-blur-xl'
              : 'border-transparent bg-paper/18 backdrop-blur-sm'
        }`}
        aria-label="Primary navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="flex min-w-0 items-center gap-2 text-left"
          aria-label="Go to Beras Kencur home"
        >
          <img
            src={logo}
            alt=""
            className={`h-8 w-11 object-contain transition md:h-9 md:w-12 ${darkHeader ? 'brightness-0 invert' : ''}`}
          />
          <span
            className={`hidden text-sm font-extrabold leading-tight transition sm:block ${
              darkHeader ? 'text-paper' : 'text-ink'
            }`}
          >
            Beras Kencur
            <span
              className={`block text-[11px] font-semibold uppercase transition ${
                darkHeader ? 'text-cream/75' : 'text-olive'
              }`}
            >
              by Jamu Iboe
            </span>
          </span>
        </button>

        <div
          className={`hidden items-center gap-1 rounded-full p-1 transition lg:flex ${
            darkHeader ? 'bg-paper/88' : 'bg-cream/70'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollTo(item.target)}
              className="rounded-full px-4 py-2 text-sm font-bold text-ink transition hover:bg-ink hover:text-paper"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBuy}
            className={`hidden rounded-full px-5 py-2.5 text-sm font-extrabold shadow-label transition hover:-translate-y-0.5 md:inline-flex ${
              darkHeader ? 'bg-cream text-ink hover:bg-paper' : 'bg-ink text-paper hover:bg-forest'
            }`}
          >
            Buy Now
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition md:h-11 md:w-11 lg:hidden ${
              darkHeader ? 'bg-cream text-ink' : 'bg-ink text-paper'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-current transition ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-forest/10 bg-paper/95 shadow-soft backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollTo(item.target)}
              className="rounded-2xl px-4 py-3 text-left text-sm font-extrabold text-ink transition hover:bg-pale"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onBuy();
            }}
            className="mt-1 rounded-2xl bg-ink px-4 py-3 text-left text-sm font-extrabold text-paper transition hover:bg-forest"
          >
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
}
