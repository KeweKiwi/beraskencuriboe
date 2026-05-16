import { useState } from 'react';
import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import kencur from '../assets/images/kencur.png';

const uspItems = [
  ['Jamu autentik', 'Tetap membawa rasa khas beras kencur Indonesia.'],
  ['Tidak perlu diracik', 'Lebih praktis untuk rutinitas modern.'],
  ['Kemasan modern', 'Lebih fresh, menarik, dan mudah dibawa.'],
  ['Bisa dinikmati kapan saja', 'Cocok untuk menemani aktivitas harian.'],
  ['Praktis untuk gaya hidup aktif', 'Siap masuk ke ritme hidup yang cepat dan sehat.'],
];

export default function USP() {
  const [active, setActive] = useState(uspItems[1]);

  return (
    <section
      id="why"
      data-can-phase="usp"
      className="usp-section section-shell bg-ink px-0 py-14 text-paper md:py-24 lg:py-32"
    >
      <div className="usp-ambient absolute inset-0" />
      <img src={kencur} alt="" className="usp-herb halftone-cut absolute left-0 top-12 w-52 opacity-18 md:w-[34rem] md:opacity-25" />
      <img src={leafOne} alt="" className="usp-leaf float-alt absolute bottom-16 right-8 w-36 opacity-35 md:w-52" />
      <div className="usp-mega mega-word bottom-[-1rem] left-[-4rem] text-paper/10">USP</div>

      <div className="section-inner relative z-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="usp-kicker label-strip bg-paper text-xs text-ink md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
            Why This Product?
          </span>
          <h2 className="usp-title section-title display-type mt-4 md:mt-5">Why This Product?</h2>
          <p className="usp-copy body-copy mt-5 text-sm font-medium text-cream sm:text-base md:mt-6 md:text-lg">
            Beras Kencur by Jamu Iboe menawarkan kombinasi antara keaslian jamu tradisional dan
            kemasan modern yang praktis. Produk ini hadir dalam bentuk siap minum sehingga mudah
            dikonsumsi kapan saja dan di mana saja.
          </p>
        </div>

        <div className="usp-stage reveal relative mt-8 grid min-h-0 items-center gap-4 md:mt-14 md:gap-8 lg:min-h-[620px] lg:grid-cols-[0.9fr_0.85fr_1fr]">
          <div className="order-3 grid gap-3 sm:grid-cols-2 md:order-2 lg:order-none lg:grid-cols-1 lg:gap-4">
            {uspItems.slice(0, 2).map((item, index) => (
              <UspButton
                key={item[0]}
                item={item}
                active={active}
                setActive={setActive}
                rotate={index ? '2deg' : '-2deg'}
                side="left"
              />
            ))}
          </div>

          <div className="usp-can-wrap order-1 relative mx-auto w-36 sm:w-44 md:w-72 lg:order-none lg:w-72">
            <div className="usp-glow absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/10 blur-xl md:h-72 md:w-72" />
            <div className="usp-orbit-ring absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/15 md:h-[23rem] md:w-[23rem]" />
            <div className="usp-orbit-ring usp-orbit-ring--small absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fresh/20 md:h-72 md:w-72" />
            <img src={productCan} alt="Beras Kencur modern can" className="usp-can-image can-local relative z-10" />
          </div>

          <div className="order-4 grid gap-3 sm:grid-cols-2 md:order-3 lg:order-none lg:grid-cols-1 lg:gap-4">
            {uspItems.slice(2).map((item, index) => (
              <UspButton
                key={item[0]}
                item={item}
                active={active}
                setActive={setActive}
                rotate={index === 1 ? '-2deg' : '2deg'}
                side="right"
              />
            ))}
          </div>

          <div className="usp-active-panel order-2 w-full rounded-[1.2rem] border border-cream/20 bg-paper p-4 text-center text-ink shadow-soft md:order-4 md:absolute md:bottom-10 md:left-1/2 md:w-[min(92%,520px)] md:-translate-x-1/2 md:rounded-[1.5rem] md:p-5">
            <p className="display-type text-2xl md:text-3xl">{active[0]}</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-forest md:text-base">{active[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UspButton({ item, active, setActive, rotate, side }) {
  const selected = active[0] === item[0];
  return (
    <button
      type="button"
      onClick={() => setActive(item)}
      className={`usp-label usp-label-${side} label-strip min-h-14 w-full justify-center px-4 text-center text-sm transition hover:-translate-y-1 sm:text-base md:min-h-20 md:justify-start md:px-5 md:text-left md:text-2xl ${
        selected ? 'bg-cream text-ink' : 'bg-deep text-paper'
      }`}
      style={{ transform: `rotate(${rotate})` }}
      aria-pressed={selected}
    >
      {item[0]}
    </button>
  );
}
