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
      className="section-shell cream-field px-0 py-16 text-ink md:py-24 lg:py-32"
    >
      <div className="mega-word  top-12 rotate-[-4deg]">Tradisi</div>
      <span className="asterisk left-[8%] top-24 text-fresh">*</span>
      <img src={leafOne} alt="" className="float-slow absolute right-2 top-24 w-32 opacity-60 md:right-14 md:w-44" />

      <div className="section-inner relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="reveal relative order-2 min-h-[360px] md:min-h-[460px] lg:order-2 lg:min-h-[500px]">
          <div className="absolute inset-x-0 top-12 h-[285px] rounded-[2rem] bg-pale/55 shadow-soft md:top-16 md:h-[360px] md:rounded-[2.5rem]" />

          <div className="absolute left-1 top-20 z-20 rounded-[1.2rem] bg-paper/80 p-3 shadow-soft md:left-5 md:top-24 md:rounded-[1.6rem] md:p-5">
            <img
              src={productBox}
              alt="Traditional Beras Kencur Jamu Iboe box"
              className="w-20 -rotate-5 drop-shadow-2xl sm:w-24 md:w-36 lg:w-40"
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
            className="about-static-can absolute right-0 top-16 z-10 w-40 sm:w-44 md:right-5 md:top-16 md:w-56 lg:right-2 lg:w-60"
          >
            <img src={productCan} alt="Modern ready-to-drink Beras Kencur can" className="can-local" />
            <span
              className="label-strip absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs md:text-sm"
              style={{ transform: 'translateX(-50%) rotate(2deg)' }}
            >
              Sekarang
            </span>
          </div>

          <img src={kencur} alt="" className="float-alt absolute bottom-16 left-20 z-30 w-20 opacity-90 md:bottom-24 md:left-44 md:w-32" />
        </div>

        <div className="reveal order-1 lg:order-1">
          <div className="rounded-[1.5rem] bg-ink p-5 text-paper shadow-label md:rounded-[2rem] md:p-9">
            <p className="label-strip mb-4 bg-paper text-xs text-ink md:mb-5 md:text-sm" style={{ transform: 'rotate(-1.5deg)' }}>
              About the Product
            </p>
            <h2 className="display-type text-[2.6rem] sm:text-5xl md:text-[3.7rem]">Tradisi dalam kemasan modern.</h2>
            <p className="body-copy mt-6 text-sm font-medium text-cream md:text-base">
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

          <div className="mt-6 rounded-[1.5rem] border-2 border-ink bg-paper p-4 shadow-soft">
            <div className="grid grid-cols-2 gap-2">
              {['dulu', 'sekarang'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`rounded-full px-4 py-3 text-sm font-extrabold uppercase transition ${
                    mode === item ? 'bg-ink text-paper' : 'bg-cream text-ink hover:bg-pale'
                  }`}
                  aria-pressed={mode === item}
                >
                  {item === 'dulu' ? 'Dulu' : 'Sekarang'}
                </button>
              ))}
            </div>
            <p className="mt-4 min-h-16 text-sm font-semibold leading-relaxed text-forest md:text-base">
              {toggleCopy[mode]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
