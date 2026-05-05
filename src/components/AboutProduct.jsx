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
      className="section-shell cream-field px-0 py-24 text-ink md:py-32"
    >
      <div className="mega-word  top-12 rotate-[-4deg]">Tradisi</div>
      <span className="asterisk left-[8%] top-24 text-fresh">*</span>
      <img src={leafOne} alt="" className="float-slow absolute right-2 top-24 w-32 opacity-60 md:right-14 md:w-44" />

      <div className="section-inner relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal relative min-h-[500px] lg:order-2">
          <div className="absolute inset-x-0 top-16 h-[360px] rounded-[2.5rem] bg-pale/55 shadow-soft md:top-20" />

          <div className="absolute left-2 top-24 z-20 rounded-[1.6rem] bg-paper/80 p-4 shadow-soft md:left-5 md:p-5">
            <img
              src={productBox}
              alt="Traditional Beras Kencur Jamu Iboe box"
              className="w-28 -rotate-5 drop-shadow-2xl md:w-36 lg:w-40"
            />
            <span className="label-strip mt-5 text-sm" style={{ transform: 'rotate(-2deg)' }}>
              Dulu
            </span>
          </div>

          <div className="absolute left-[36%] top-60 z-30 hidden h-2 w-16 rounded-full bg-ink md:block lg:left-[35%] lg:w-20">
            <span className="absolute -right-2 -top-3 h-8 w-8 rotate-45 border-r-[10px] border-t-[10px] border-ink" />
          </div>

          <div
            ref={aboutCanRef}
            className="about-static-can absolute right-0 top-20 z-10 w-44 md:right-5 md:top-16 md:w-56 lg:right-2 lg:w-60"
          >
            <img src={productCan} alt="Modern ready-to-drink Beras Kencur can" className="can-local" />
            <span
              className="label-strip absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm"
              style={{ transform: 'translateX(-50%) rotate(2deg)' }}
            >
              Sekarang
            </span>
          </div>

          <img src={kencur} alt="" className="float-alt absolute bottom-24 left-16 z-30 w-24 opacity-90 md:left-44 md:w-32" />
        </div>

        <div className="reveal lg:order-1">
          <div className="rounded-[2rem] bg-ink p-6 text-paper shadow-label md:p-9">
            <p className="label-strip mb-5 bg-paper text-ink" style={{ transform: 'rotate(-1.5deg)' }}>
              About the Product
            </p>
            <h2 className="display-type text-5xl md:text-[3.7rem]">Tradisi dalam kemasan modern.</h2>
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
