import { useState } from 'react';
import productBox from '../assets/images/product-box.png';
import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import kencur from '../assets/images/kencur.png';

const toggleCopy = {
  dulu: 'Jamu terasa tradisional, kurang praktis, dan kurang dekat dengan gaya hidup anak muda.',
  sekarang:
    'Rasa autentik tetap dipertahankan, tetapi hadir dalam kemasan modern yang siap diminum.',
};

export default function AboutProduct({ aboutCanRef }) {
  const [mode, setMode] = useState('sekarang');

  return (
    <section
      id="about"
      data-can-phase="about"
      className="about-section section-shell cream-field px-0 py-14 text-ink md:py-24 lg:py-32"
    >
      <div className="mega-word  top-12 rotate-[-4deg]">Tradisi</div>
      <span className="asterisk left-[8%] top-24 hidden text-fresh md:block">*</span>
      <img src={leafOne} alt="" className="float-slow absolute right-2 top-24 hidden w-32 opacity-60 md:right-14 md:block md:w-44" />

      <div className="section-inner relative z-10 grid items-center gap-6 md:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="about-visual reveal relative order-2 hidden min-h-[285px] md:block md:min-h-[460px] lg:order-2 lg:min-h-[500px]">
          <div className="absolute inset-x-0 top-8 h-[230px] rounded-[1.6rem] bg-pale/55 shadow-soft md:top-16 md:h-[360px] md:rounded-[2.5rem]" />

          <div className="about-box absolute left-2 top-14 z-20 rounded-[1.1rem] bg-paper/80 p-2.5 shadow-soft md:left-5 md:top-24 md:rounded-[1.6rem] md:p-5">
            <img
              src={productBox}
              alt="Traditional Beras Kencur Jamu Iboe box"
              className="w-[4.7rem] -rotate-5 drop-shadow-2xl sm:w-24 md:w-36 lg:w-40"
            />
            <span className="label-strip mt-3 text-xs md:mt-5 md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
              Dulu
            </span>
          </div>

          <div className="absolute left-[36%] top-60 z-30 hidden h-2 w-16 rounded-full bg-ink md:block lg:left-[35%] lg:w-20">
            <span className="absolute -right-2 -top-3 h-8 w-8 rotate-45 border-r-[10px] border-t-[10px] border-ink" />
          </div>

          <div
            ref={aboutCanRef}
            className="about-static-can absolute right-3 top-9 z-10 w-32 sm:w-36 md:right-5 md:top-16 md:w-56 lg:right-2 lg:w-60"
          >
            <img src={productCan} alt="Modern ready-to-drink Beras Kencur can" className="can-local" />
            <span
              className="label-strip absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] md:-bottom-3 md:text-sm"
              style={{ transform: 'translateX(-50%) rotate(2deg)' }}
            >
              Sekarang
            </span>
          </div>

          <img src={kencur} alt="" className="float-alt absolute bottom-12 left-[34%] z-30 w-16 opacity-90 md:bottom-24 md:left-44 md:w-32" />
        </div>

        <div className="reveal order-1 lg:order-1">
          <div className="rounded-[1.35rem] bg-ink p-4 text-paper shadow-label md:rounded-[2rem] md:p-9">
            <p className="label-strip mb-4 bg-paper text-xs text-ink md:mb-5 md:text-sm" style={{ transform: 'rotate(-1.5deg)' }}>
              About the Product
            </p>
            <h2 className="display-type text-[2.25rem] sm:text-5xl md:text-[3.7rem]">Tradisi dalam kemasan modern.</h2>
            <p className="body-copy mt-4 text-sm font-medium text-cream md:mt-6 md:text-base">
              Beras Kencur by Jamu Iboe merupakan minuman herbal tradisional berbahan alami
              seperti beras dan kencur. Produk ini mempertahankan cita rasa khas beras kencur
              yang autentik, namun hadir dengan sentuhan inovasi pada kemasan dan penyajian agar
              lebih praktis bagi masyarakat modern.
            </p>
            <p className="body-copy mt-4 text-sm font-medium text-cream md:text-base">
              Mengusung konsep "tradisi dalam kemasan modern", produk ini bertujuan untuk
              menghidupkan kembali minat generasi muda terhadap jamu tanpa menghilangkan esensi
              dan nilai alaminya.
            </p>
          </div>

          <div className="about-mobile-flow mt-5 rounded-[1.35rem] border-2 border-ink bg-pale/70 p-4 shadow-soft md:hidden">
            <div className="flex items-center justify-between gap-3">
              <div className="about-mobile-old flex-1 rounded-[1rem] bg-paper/85 p-3 text-center">
                <img
                  src={productBox}
                  alt="Traditional Beras Kencur box"
                  className="mx-auto h-24 object-contain drop-shadow-xl"
                />
                <span className="label-strip mt-3 text-[11px]" style={{ transform: 'rotate(-2deg)' }}>
                  Dulu
                </span>
              </div>
              <div className="about-mobile-arrow display-type text-4xl text-ink" aria-hidden="true">
                &gt;
              </div>
              <div className="about-mobile-new flex-1 rounded-[1rem] bg-cream/65 p-3 text-center">
                <img
                  src={productCan}
                  alt="Modern ready-to-drink Beras Kencur can"
                  className="about-mobile-can can-local mx-auto h-32 object-contain"
                />
                <span className="label-strip mt-2 text-[11px]" style={{ transform: 'rotate(2deg)' }}>
                  Sekarang
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-xs font-extrabold uppercase leading-relaxed text-forest">
              Dari jamu tradisional menjadi minuman siap minum yang lebih praktis.
            </p>
          </div>

          <div className="mt-5 rounded-[1.25rem] border-2 border-ink bg-paper p-3 shadow-soft md:mt-6 md:rounded-[1.5rem] md:p-4">
            <div className="grid grid-cols-2 gap-2">
              {['dulu', 'sekarang'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`min-h-11 rounded-full px-3 py-2 text-xs font-extrabold uppercase transition md:px-4 md:py-3 md:text-sm ${
                    mode === item ? 'bg-ink text-paper' : 'bg-cream text-ink hover:bg-pale'
                  }`}
                  aria-pressed={mode === item}
                >
                  {item === 'dulu' ? 'Dulu' : 'Sekarang'}
                </button>
              ))}
            </div>
            <p className="mt-3 min-h-0 text-sm font-semibold leading-relaxed text-forest md:mt-4 md:min-h-16 md:text-base">
              {toggleCopy[mode]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
