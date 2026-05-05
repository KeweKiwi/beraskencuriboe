import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import leafTwo from '../assets/images/leaf-2.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

export default function CTA({ onBuy }) {
  return (
    <section
      id="buy"
      data-can-phase="cta"
      className="section-shell green-noise min-h-[760px] px-0 py-24 text-ink md:py-32"
    >
      <div className="mega-word left-1/2 top-16 -translate-x-1/2 opacity-70">Rasa Masa Kini</div>
      <img src={leafOne} alt="" className="float-slow absolute left-4 top-24 w-32 opacity-75 md:left-20 md:w-44" />
      <img src={leafTwo} alt="" className="float-alt absolute bottom-20 right-4 w-28 opacity-75 md:right-24 md:w-40" />
      <img src={rice} alt="" className="drift absolute bottom-10 left-8 w-28 opacity-80 md:w-36" />
      <img src={kencur} alt="" className="float-slow absolute right-8 top-28 w-28 opacity-80 md:w-36" />

      <div className="section-inner relative z-10 grid min-h-[560px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal max-w-2xl">
          <span className="label-strip text-sm" style={{ transform: 'rotate(2deg)' }}>
            Pilihan Tepat untuk Sehat
          </span>
          <h2 className="section-title display-type mt-5">
            Ready to Taste Tradition in a New Way?
          </h2>
          <p className="body-copy mt-6 text-base font-semibold text-forest md:text-lg">
            Nikmati beras kencur autentik dengan kemasan modern yang praktis untuk gaya hidup
            sehat masa kini.
          </p>
          <p className="mt-4 inline-block rounded-full bg-paper/80 px-5 py-3 text-sm font-extrabold uppercase text-ink">
            Tradisi Indonesia, dibuat lebih praktis untuk hari ini.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onBuy}
              className="rounded-full bg-ink px-8 py-4 text-sm font-extrabold uppercase text-paper shadow-label transition hover:-translate-y-1 hover:bg-forest"
            >
              Buy Now
            </button>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-ink bg-paper/70 px-8 py-4 text-center text-sm font-extrabold uppercase text-ink transition hover:-translate-y-1 hover:bg-cream"
            >
              Follow Us
            </a>
          </div>
        </div>

        <div className="reveal relative min-h-[430px]">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/70 md:h-96 md:w-96" />
          <img
            src={productCan}
            alt="Beras Kencur by Jamu Iboe ready-to-drink can"
            className="can-local relative z-10 mx-auto w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
