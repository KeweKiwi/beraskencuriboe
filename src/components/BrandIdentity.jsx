import { useState } from 'react';
import logo from '../assets/images/logo.png';
import productCan from '../assets/images/product-can.png';
import leafTwo from '../assets/images/leaf-2.png';

const colorMeanings = [
  ['Dark Green', '#123D2A', 'Keaslian, ketenangan, dan rasa percaya.'],
  ['Forest Green', '#1F5C3B', 'Alam, herbal, dan karakter jamu Indonesia.'],
  ['Fresh Green', '#83A94C', 'Kesegaran, pertumbuhan, dan energi modern.'],
  ['Pale Green', '#DDEED7', 'Kesan lembut, natural, dan ringan.'],
  ['Cream', '#F5E8C7', 'Hangat, seimbang, dan dekat dengan rasa tradisi.'],
];

const chips = [
  ['Natural', 'Terasa dekat dengan bahan alami seperti beras dan kencur.'],
  ['Fresh', 'Visual hijau dan kemasan kaleng membuat jamu tampil lebih segar.'],
  ['Trusted', 'Membawa warisan dan pengalaman Jamu Iboe.'],
  ['Modern', 'Dibuat relevan untuk gaya hidup praktis hari ini.'],
  ['Authentic', 'Tetap mempertahankan cita rasa khas beras kencur.'],
  ['Practical', 'Siap diminum tanpa perlu diseduh atau diracik.'],
];

export default function BrandIdentity() {
  const [active, setActive] = useState({
    title: 'Logo meaning',
    text: 'Simbol daun pada logo Jamu Iboe melambangkan kehidupan dan alam, sekaligus menegaskan penggunaan bahan yang alami.',
  });

  return (
    <section
      id="brand"
      data-can-phase="brand"
      className="section-shell cream-field px-0 py-16 text-ink md:py-24 lg:py-32"
    >
      <div className="mega-word left-[-rem] top-14 rotate-[-3deg]">Brand Identity</div>
      <span className="asterisk right-[12%] top-24 text-fresh">*</span>
      <img src={leafTwo} alt="" className="float-slow absolute bottom-10 left-6 w-32 opacity-55 md:w-48" />

      <div className="section-inner relative z-10 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="reveal">
          <span className="label-strip text-xs md:text-sm" style={{ transform: 'rotate(2deg)' }}>
            Brand Identity
          </span>
          <h2 className="section-title display-type mt-5">Natural, fresh, modern.</h2>
          <p className="body-copy mt-5 text-sm font-semibold text-forest sm:text-base md:mt-6 md:text-lg">
            Identitas visualnya menjaga rasa warisan lokal, lalu dibuat lebih ringan, berani,
            dan siap tampil di rak minuman modern.
          </p>

          <button
            type="button"
            onClick={() =>
              setActive({
                title: 'Logo meaning',
                text: 'Simbol daun pada logo Jamu Iboe melambangkan kehidupan dan alam, sekaligus menegaskan penggunaan bahan yang alami.',
              })
            }
            className="mt-6 rounded-[1.3rem] border-2 border-ink bg-pale/75 p-5 text-left shadow-soft transition hover:-translate-y-1 md:mt-8 md:rounded-[1.5rem] md:p-6"
          >
            <img src={logo} alt="IBOE leaf logo" className="mx-auto h-20 object-contain md:h-24" />
            <span className="mt-4 block text-center text-sm font-extrabold uppercase text-forest">
              Klik logo untuk makna
            </span>
          </button>
        </div>

        <div className="reveal grid gap-5 md:gap-6">
          <div className="rounded-[1.5rem] bg-ink p-5 text-paper shadow-label md:rounded-[2rem] md:p-6">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {colorMeanings.map(([name, color, text]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive({ title: name, text })}
                  className="h-12 w-12 rounded-full border-2 border-paper/80 shadow-soft transition hover:-translate-y-1 sm:h-14 sm:w-14 md:h-20 md:w-20"
                  style={{ backgroundColor: color }}
                  aria-label={`Show meaning of ${name}`}
                />
              ))}
            </div>
            <p className="body-copy mt-6 text-center text-sm font-medium text-cream md:text-base">
              Palet hijau menggambarkan kesegaran, pertumbuhan, ketenangan, dan keaslian. Aksen
              krem memberikan kesan hangat, lembut, dan seimbang.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] border-2 border-ink bg-paper p-4 shadow-soft md:grid-cols-[0.72fr_1fr] md:rounded-[2rem] md:p-5">
            <img src={productCan} alt="Beras Kencur can identity" className="can-local mx-auto w-28 sm:w-32 lg:w-40" />
            <div>
              <div className="mb-4 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setActive({
                      title: 'IBOE / Cooper BT',
                      text: 'Karakter logo terasa retro dan terpercaya, menjaga rasa heritage Jamu Iboe.',
                    })
                  }
                  className="rounded-sm bg-olive px-3 py-3 text-xs font-extrabold uppercase text-paper transition hover:-translate-y-1 md:px-4 md:text-sm"
                >
                  IBOE / Cooper BT
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActive({
                      title: 'Beras / Pagkaki',
                      text: 'Display font baru memberi rasa modern, segar, dan mudah diingat di berbagai platform.',
                    })
                  }
                  className="rounded-sm bg-ink px-3 py-3 text-xs font-extrabold uppercase text-paper transition hover:-translate-y-1 md:px-4 md:text-sm"
                >
                  Beras / Pagkaki
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {chips.map(([chip, text]) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setActive({ title: chip, text })}
                    className="rounded-full border-2 border-ink bg-cream px-3 py-2 text-[11px] font-extrabold uppercase text-ink transition hover:-translate-y-1 hover:bg-pale md:px-4 md:text-xs"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-[1.1rem] bg-pale p-4 md:rounded-[1.3rem] md:p-5">
                <p className="display-type text-2xl text-ink md:text-3xl">{active.title}</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-forest md:text-base">{active.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
