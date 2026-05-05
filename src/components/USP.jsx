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
      className="usp-section section-shell bg-ink px-0 py-24 text-paper md:py-32"
    >
      <div className="usp-ambient absolute inset-0" />
      <img src={kencur} alt="" className="usp-herb halftone-cut absolute -left-8 top-12 w-72 opacity-25 md:w-[34rem]" />
      <img src={leafOne} alt="" className="usp-leaf float-alt absolute bottom-16 right-8 w-36 opacity-35 md:w-52" />
      <div className="usp-mega mega-word bottom-[-1rem] left-[-4rem] text-paper/10">USP</div>

      <div className="section-inner relative z-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="usp-kicker label-strip bg-paper text-ink" style={{ transform: 'rotate(-2deg)' }}>
            Why This Product?
          </span>
          <h2 className="usp-title section-title display-type mt-5">Why This Product?</h2>
          <p className="usp-copy body-copy mt-6 text-base font-medium text-cream md:text-lg">
            Beras Kencur by Jamu Iboe menawarkan kombinasi antara keaslian jamu tradisional dan
            kemasan modern yang praktis. Produk ini hadir dalam bentuk siap minum sehingga mudah
            dikonsumsi kapan saja dan di mana saja.
          </p>
        </div>

        <div className="usp-stage reveal relative mt-14 grid min-h-[620px] items-center gap-8 lg:grid-cols-[0.9fr_0.85fr_1fr]">
          <div className="grid gap-4">
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

          <div className="usp-can-wrap relative mx-auto w-64 md:w-80 lg:w-72">
            <div className="usp-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/10 blur-xl" />
            <div className="usp-orbit-ring absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/15" />
            <div className="usp-orbit-ring usp-orbit-ring--small absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fresh/20" />
            <img src={productCan} alt="Beras Kencur modern can" className="usp-can-image can-local relative z-10" />
          </div>

          <div className="grid gap-4">
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

          <div className="usp-active-panel absolute bottom-0 left-1/2 w-[min(92%,520px)] -translate-x-1/2 rounded-[1.5rem] border border-cream/20 bg-paper p-5 text-center text-ink shadow-soft md:bottom-10">
            <p className="display-type text-3xl">{active[0]}</p>
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
      className={`usp-label usp-label-${side} label-strip w-full min-h-20 justify-start px-5 text-left text-xl transition hover:-translate-y-1 md:text-2xl ${
        selected ? 'bg-cream text-ink' : 'bg-deep text-paper'
      }`}
      style={{ transform: `rotate(${rotate})` }}
      aria-pressed={selected}
    >
      {item[0]}
    </button>
  );
}
