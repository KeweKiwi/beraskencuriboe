import { useState } from 'react';
import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import leafTwo from '../assets/images/leaf-2.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

const hotspots = [
  {
    id: 'beras',
    label: 'Beras alami',
    text: 'Memberikan karakter rasa khas yang lembut dan familiar.',
  },
  {
    id: 'kencur',
    label: 'Kencur pilihan',
    text: 'Memberikan aroma herbal segar dan rasa autentik khas jamu Indonesia.',
  },
  {
    id: 'packaging',
    label: 'Kemasan modern',
    text: 'Lebih praktis, fresh, dan siap dinikmati kapan saja.',
  },
];

export default function Hero({ heroRef, mainCanRef, onBuy }) {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      data-can-phase="hero"
      className="section-shell hero-transition-section green-noise min-h-screen px-0 pb-12 pt-24 text-ink md:pt-28 lg:pb-10"
    >
      <div className="mega-word parallax-word left-1/2 top-24 -translate-x-1/2 opacity-80">
        Beras Kencur
      </div>
      <span className="asterisk right-[8%] top-28">*</span>
      <img
        src={leafOne}
        alt=""
        className="float-slow absolute left-3 top-28 z-10 w-28 opacity-80 md:left-10 md:w-40"
      />
      <img
        src={leafTwo}
        alt=""
        className="float-alt absolute bottom-16 right-4 z-10 w-24 opacity-75 md:right-12 md:w-36"
      />

      <div className="section-inner relative z-20 grid min-h-[620px] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] xl:min-h-[660px]">
        <div className="reveal max-w-3xl pt-8">
          <h1 className="hero-title display-type max-w-3xl text-ink">
            Jamu Tradisional, Rasa Masa Kini.
          </h1>
          <img
            src={productCan}
            alt=""
            className="mobile-hero-can can-local mx-auto my-5 block w-44 md:hidden"
          />
          <p className="body-copy mt-6 max-w-2xl text-base font-semibold text-forest md:text-lg">
            Beras Kencur by Jamu Iboe menghadirkan rasa autentik jamu Indonesia dalam
            kemasan modern yang praktis, fresh, dan relevan untuk gaya hidup sehat masa kini.
          </p>

          <div className="mt-7 flex flex-wrap gap-3" aria-label="Brand highlights">
            {['Authentic Herbal Drink', 'Modern & Practical', 'Pilihan Tepat untuk Sehat'].map(
              (badge, index) => (
                <span
                  key={badge}
                  className="label-strip text-sm md:text-base"
                  style={{ transform: `rotate(${index === 1 ? 2 : index === 2 ? -2 : -1}deg)` }}
                >
                  {badge}
                </span>
              ),
            )}
          </div>

          <div className="mt-6 max-w-xl rounded-[1.4rem] border border-forest/15 bg-paper/70 p-4 shadow-soft backdrop-blur">
            <div className="flex flex-wrap gap-2">
              {hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspot(hotspot)}
                  className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase transition hover:-translate-y-0.5 ${
                    activeHotspot.id === hotspot.id
                      ? 'bg-ink text-paper'
                      : 'bg-cream text-ink hover:bg-pale'
                  }`}
                  aria-pressed={activeHotspot.id === hotspot.id}
                >
                  {hotspot.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-forest">
              {activeHotspot.text}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToAbout}
              className="rounded-full bg-ink px-7 py-4 text-sm font-extrabold uppercase text-paper shadow-label transition hover:-translate-y-1 hover:bg-forest"
            >
              Explore Product
            </button>
            <button
              type="button"
              onClick={onBuy}
              className="rounded-full border-2 border-ink bg-paper/75 px-7 py-4 text-sm font-extrabold uppercase text-ink transition hover:-translate-y-1 hover:bg-cream"
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="reveal relative min-h-[520px] lg:min-h-[620px]">
          <div className="absolute left-1/2 top-24 hidden h-[410px] w-[410px] -translate-x-1/2 rounded-full bg-paper/30 blur-2xl lg:block" />
          <div
            ref={mainCanRef}
            className="hero-main-can pointer-events-none absolute left-[48%] top-24 z-30 hidden w-[235px] -translate-x-1/2 lg:block xl:w-[265px]"
          >
            <img
              src={productCan}
              alt="Beras Kencur by Jamu Iboe modern can"
              className="can-local block w-full"
            />
          </div>
          <div className="secondary-can pointer-events-none absolute right-4 top-12 z-10 hidden w-24 rotate-12 opacity-35 lg:block xl:right-8 xl:w-28">
            <img src={productCan} alt="" className="hero-can-float can-local block w-full" />
          </div>
          <div className="secondary-can pointer-events-none absolute bottom-24 left-16 z-10 hidden w-20 -rotate-[14deg] opacity-35 lg:block xl:left-20 xl:w-24">
            <img src={productCan} alt="" className="hero-can-float can-local block w-full" />
          </div>
          <img
            src={productCan}
            alt="Beras Kencur by Jamu Iboe modern can"
            className="can-local mx-auto block w-[260px] md:w-[340px] lg:hidden"
          />
          <img
            src={rice}
            alt=""
            className="drift absolute bottom-2 left-0 w-28 opacity-90 md:left-10 md:w-36"
          />
          <img
            src={kencur}
            alt=""
            className="float-alt absolute right-0 top-5 w-28 opacity-90 md:right-12 md:w-36"
          />
        </div>
      </div>
    </section>
  );
}
