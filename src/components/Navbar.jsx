import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Benefits', target: 'benefits' },
  { label: 'Why Us', target: 'why' },
  { label: 'Buy Now', target: 'buy' },
];

export default function Navbar({ onBuy }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target) => {
    setOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-5 ${
          scrolled
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
          <img src={logo} alt="" className="h-9 w-12 object-contain" />
          <span className="hidden text-sm font-extrabold leading-tight text-ink sm:block">
            Beras Kencur
            <span className="block text-[11px] font-semibold uppercase text-olive">by Jamu Iboe</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full bg-cream/70 p-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => (item.target === 'buy' ? onBuy() : scrollTo(item.target))}
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
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-extrabold text-paper shadow-label transition hover:-translate-y-0.5 hover:bg-forest md:inline-flex"
          >
            Buy Now
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper lg:hidden"
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
              onClick={() => (item.target === 'buy' ? onBuy() : scrollTo(item.target))}
              className="rounded-2xl px-4 py-3 text-left text-sm font-extrabold text-ink transition hover:bg-pale"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
