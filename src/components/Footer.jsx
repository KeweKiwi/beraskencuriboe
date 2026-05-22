import logo from '../assets/images/logo.png';
import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Benefits', 'benefits'],
  ['Why Us', 'why'],
  ['Buy Now', 'buy'],
];

export default function Footer() {
  const scrollTo = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.href = `/#${target}`;
  };

  return (
    <footer className="section-shell relative overflow-hidden bg-deep px-0 py-14 text-cream md:py-20">
      <div className="pattern-layer absolute inset-0 opacity-[0.07]" />
      <div className="display-type absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap text-[4.6rem] leading-none text-paper/5 md:text-[8rem]">
        Jamu Iboe
      </div>
      <span className="asterisk bottom-12 right-[8%] text-cream/35">*</span>
      <img src={leafOne} alt="" className="float-slow absolute left-1 top-10 w-28 opacity-20 md:w-52 md:opacity-25" />
      <img src={kencur} alt="" className="float-alt absolute right-6 top-16 w-28 opacity-40 md:right-20 md:w-40" />
      <img src={rice} alt="" className="drift absolute bottom-4 left-6 w-28 opacity-35 md:left-20 md:w-40" />

      <div className="section-inner relative z-10">
        <div className="grid gap-8 rounded-[2rem] border border-cream/15 bg-paper/[0.06] p-5 shadow-label backdrop-blur md:grid-cols-[1.05fr_0.72fr_0.9fr] md:items-center md:p-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="IBOE leaf logo" className="h-14 w-20 object-contain brightness-0 invert" />
              <span className="label-strip bg-cream text-xs text-ink shadow-none md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
                Tradisi dalam kemasan modern
              </span>
            </div>
            <h2 className="display-type mt-5 max-w-xl text-[2.45rem] leading-none text-paper sm:text-5xl md:text-[3.8rem]">
              Beras Kencur by Jamu Iboe
            </h2>
            <p className="mt-4 max-w-lg text-sm font-semibold leading-relaxed text-cream/85 md:text-base">
              Jamu Tradisional, Rasa Masa Kini. Dibuat lebih praktis untuk ritme sehat hari ini.
            </p>
          </div>

          <div className="relative mx-auto hidden min-h-56 w-full max-w-xs md:block">
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/10 blur-xl" />
            <img
              src={productCan}
              alt="Beras Kencur by Jamu Iboe can"
              className="can-local relative z-10 mx-auto w-36 rotate-3"
            />
          </div>

          <div className="grid gap-5">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-wide text-cream/60">Explore</p>
              <div className="flex flex-wrap gap-2">
                {links.map(([label, target]) => (
                  <button
                    key={target}
                    type="button"
                    onClick={() => scrollTo(target)}
                    className="rounded-full bg-paper/10 px-4 py-2 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-wide text-cream/60">Follow the ritual</p>
              <div className="flex flex-wrap gap-2">
                {['Instagram', 'TikTok', 'Website'].map((item) => (
                  <a
                    key={item}
                    href="https://www.jamuiboe.co.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-cream/30 px-4 py-2 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-cream/15 pt-5 text-xs font-semibold uppercase text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Beras Kencur by Jamu Iboe</p>
          <p>Pilihan Tepat untuk Sehat.</p>
        </div>
      </div>
    </footer>
  );
}
