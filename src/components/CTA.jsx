import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import leafTwo from '../assets/images/leaf-2.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

export default function CTA({ onBuy }) {
  const titleLines = ['Ready', 'to Taste Tradition', 'in a New Way?'];

  return (
    <section
      id="buy"
      data-can-phase="cta"
      className="cta-section section-shell green-noise min-h-0 px-0 py-16 text-ink md:min-h-[760px] md:py-24 lg:py-32"
    >
      <div className="cta-mega mega-word left-1/2 top-16 -translate-x-1/2 opacity-70">Rasa Masa Kini</div>
      <img src={leafOne} alt="" className="cta-leaf-left float-slow absolute left-4 top-24 w-32 opacity-75 md:left-20 md:w-44" />
      <img src={leafTwo} alt="" className="cta-leaf-right float-alt absolute bottom-20 right-4 w-28 opacity-75 md:right-24 md:w-40" />
      <img src={rice} alt="" className="cta-rice drift absolute bottom-10 left-8 w-28 opacity-80 md:w-36" />
      <img src={kencur} alt="" className="cta-kencur float-slow absolute right-8 top-28 w-28 opacity-80 md:w-36" />

      <div className="section-inner relative z-10 grid min-h-0 items-center gap-8 md:min-h-[560px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="max-w-2xl">
          <span className="cta-kicker label-strip text-xs md:text-sm" style={{ transform: 'rotate(2deg)' }}>
            Pilihan Tepat untuk Sehat
          </span>
          <h2 className="cta-title section-title display-type mt-5" aria-label="Ready to Taste Tradition in a New Way?">
            {titleLines.map((line) => (
              <span className="cta-title-mask block overflow-hidden" key={line}>
                <span className="cta-title-line block">{line}</span>
              </span>
            ))}
          </h2>
          <p className="cta-copy body-copy mt-5 text-sm font-semibold text-forest sm:text-base md:mt-6 md:text-lg">
            Nikmati beras kencur autentik dengan kemasan modern yang praktis untuk gaya hidup
            sehat masa kini.
          </p>
          <p className="cta-microcopy mt-4 inline-block rounded-full bg-paper/80 px-4 py-3 text-xs font-extrabold uppercase text-ink md:px-5 md:text-sm">
            Tradisi Indonesia, dibuat lebih praktis untuk hari ini.
          </p>

          <div className="cta-actions mt-8 flex flex-col gap-3 sm:flex-row">
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

        <div className="cta-visual relative min-h-[340px] md:min-h-[430px]">
          <div className="cta-glow absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/70 md:h-96 md:w-96" />
          <div className="cta-ring cta-ring-one absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 md:h-[27rem] md:w-[27rem]" />
          <div className="cta-ring cta-ring-two absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/45 md:h-72 md:w-72" />
          <div className="cta-can-wrap relative z-10 mx-auto w-52 sm:w-60 md:w-80">
            <img
              src={productCan}
              alt="Beras Kencur by Jamu Iboe ready-to-drink can"
              className="cta-can-image can-local relative z-10 block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
