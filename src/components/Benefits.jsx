import { useState } from 'react';
import kencur from '../assets/images/kencur.png';
import rice from '../assets/images/rice.png';

const benefits = [
  {
    title: 'Menjaga daya tahan tubuh',
    text: 'Mendukung tubuh tetap fit dalam rutinitas harian.',
  },
  {
    title: 'Mengurangi rasa lelah',
    text: 'Cocok dinikmati saat tubuh mulai terasa capek.',
  },
  {
    title: 'Melancarkan pencernaan',
    text: 'Memberikan rasa nyaman dan ringan.',
  },
  {
    title: 'Efek hangat pada tubuh',
    text: 'Membantu tubuh terasa lebih rileks dan hangat.',
  },
];

export default function Benefits() {
  const [active, setActive] = useState(benefits[0].title);

  return (
    <section id="benefits" className="benefits-section section-shell bg-sage px-0 py-14 text-ink md:py-24 lg:py-32">
      <div className="mega-word bottom-10 left-[-1rem] opacity-70">Manfaat</div>
      <span className="asterisk right-[10%] top-20 text-olive">*</span>
      <img src={kencur} alt="" className="halftone-cut absolute left-0 top-36 hidden w-72 opacity-45 md:block md:w-[30rem] md:opacity-55" />
      <img src={rice} alt="" className="drift absolute bottom-14 right-4 w-20 opacity-45 md:right-8 md:w-44 md:opacity-80" />

      <div className="section-inner relative z-10 grid items-stretch gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="reveal flex min-h-0 flex-col justify-between lg:min-h-[560px]">
          <span className="label-strip text-xs md:text-sm" style={{ transform: 'rotate(2deg)' }}>
            Manfaat Produk
          </span>
          <div>
            <h2 className="section-title display-type mt-5 max-w-xl text-ink">
              Manfaat Produk
            </h2>
            <p className="body-copy mt-4 max-w-lg text-sm font-semibold text-forest sm:text-base md:mt-6 md:text-lg">
              Beras kencur dikenal sebagai minuman herbal yang membantu tubuh terasa lebih segar
              dan nyaman dalam aktivitas harian.
            </p>
          </div>

          <div className="mt-6 rounded-[1.2rem] border-2 border-ink bg-paper/86 p-4 shadow-soft backdrop-blur md:mt-10 md:rounded-[1.7rem] md:p-5">
            <p className="display-type text-2xl text-ink md:text-3xl">Manfaat Beras Kencur</p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-forest md:text-base">
              Terinspirasi dari booklet: daya tahan tubuh, rasa lelah, pencernaan, efek hangat,
              dan sensasi tubuh yang lebih fresh setelah dikonsumsi.
            </p>
          </div>
        </div>

        <div className="reveal relative overflow-hidden rounded-[1.35rem] bg-ink p-4 text-paper shadow-label md:rounded-[2.2rem] md:p-10">
          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-fresh/15 blur-2xl" />
          <p className="panel-title display-type max-w-md text-cream">
            Solusi yang diberikan ke konsumen
          </p>
          <p className="body-copy mt-4 max-w-2xl text-sm font-medium text-cream md:mt-6 md:text-base">
            Packaging kaleng memberi tampilan yang lebih modern, praktis, dan menarik. Desain yang
            identik dengan minuman kekinian membuat jamu terasa lebih relevan, fresh, mudah dibawa,
            lebih tahan lama, dan cocok untuk gaya hidup aktif.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-7">
            {benefits.map((benefit, index) => {
              const isActive = active === benefit.title;
              return (
                <button
                  key={benefit.title}
                  type="button"
                  onClick={() => setActive(benefit.title)}
                  onMouseEnter={() => setActive(benefit.title)}
                  className={`min-h-20 rounded-[0.95rem] border-2 p-3 text-left transition duration-300 hover:-translate-y-1 md:min-h-28 md:rounded-[1.2rem] md:p-4 ${
                    isActive
                      ? 'border-cream bg-cream text-ink'
                      : 'border-cream/20 bg-paper/5 text-paper hover:border-cream/70'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="text-xs font-black uppercase opacity-70">0{index + 1}</span>
                  <span className="display-type mt-2 block text-[1.45rem] md:text-[1.85rem]">{benefit.title}</span>
                  <span
                    className={`mt-2 block text-sm font-semibold leading-relaxed ${
                      isActive ? 'text-forest' : 'text-cream/80'
                    }`}
                  >
                    {isActive ? benefit.text : 'Tap untuk detail singkat.'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
