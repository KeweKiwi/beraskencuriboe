import { useState } from 'react';
import rice from '../assets/images/rice.png';
import leafTwo from '../assets/images/leaf-2.png';

const cards = [
  {
    label: 'Visual harus keren',
    solution: 'Kemasan kaleng dan visual brand yang fresh membuat jamu terasa lebih relevan.',
    rotate: '-3deg',
  },
  {
    label: 'Suka yang praktis',
    solution: 'Siap diminum tanpa perlu diracik.',
    rotate: '2deg',
  },
  {
    label: 'Minuman kekinian',
    solution: 'Bentuk kemasan modern membuat jamu terasa lebih dekat dengan lifestyle anak muda.',
    rotate: '-1deg',
  },
  {
    label: 'Healthy lifestyle',
    solution: 'Minuman herbal alami bisa menjadi pilihan untuk rutinitas sehat sehari-hari.',
    rotate: '3deg',
  },
];

export default function ProblemSolution() {
  const [active, setActive] = useState(cards[0]);

  return (
    <section
      id="problem"
      data-can-phase="problem"
      className="section-shell bg-pale px-0 py-16 text-ink md:py-24 lg:py-32"
    >
      <div className="pattern-layer absolute inset-0 opacity-20" />
      <div className="mega-word bottom-10 right-[-0rem] rotate-3 opacity-70">Gen Z</div>
      <img src={leafTwo} alt="" className="float-alt absolute right-6 top-20 w-32 opacity-60 md:w-44" />
      <img src={rice} alt="" className="drift absolute bottom-8 left-4 w-28 opacity-80 md:left-16 md:w-40" />

      <div className="section-inner relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="reveal lg:max-w-lg">
          <span className="label-strip text-xs md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
            Why It Matters?
          </span>
          <h2 className="display-type mt-5 text-[2.85rem] text-ink sm:text-5xl md:text-[4.6rem]">
            Warisan yang perlu cara baru.
          </h2>
          <p className="body-copy mt-5 text-sm font-semibold text-forest sm:text-base md:mt-6 md:text-lg">
            Beras kencur adalah bagian dari warisan budaya Indonesia. Namun, bagi sebagian anak
            muda, jamu sering dianggap kurang modern, kurang praktis, dan kurang menarik secara
            visual.
          </p>

          <div className="mt-6 rounded-[1.3rem] bg-ink p-4 text-paper shadow-label md:mt-8 md:rounded-[1.5rem] md:p-5">
            <p className="display-type text-2xl md:text-3xl">{active.label}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-cream md:text-base">
              {active.solution}
            </p>
          </div>
        </div>

        <div className="reveal grid content-center gap-3 sm:grid-cols-2 md:gap-4">
          {cards.map((card) => (
            <button
              key={card.label}
              type="button"
              onClick={() => setActive(card)}
              className={`min-h-32 rounded-[1.25rem] border-2 border-ink p-4 text-left shadow-label transition duration-300 hover:-translate-y-2 md:min-h-40 md:rounded-[1.6rem] md:p-5 ${
                active.label === card.label ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-cream'
              }`}
              style={{ transform: active.label === card.label ? 'rotate(0deg)' : `rotate(${card.rotate})` }}
              aria-pressed={active.label === card.label}
            >
              <span className="display-type block text-[1.7rem] sm:text-3xl md:text-4xl">{card.label}</span>
              <span
                className={`mt-4 block text-sm font-semibold leading-relaxed ${
                  active.label === card.label ? 'text-cream' : 'text-forest'
                }`}
              >
                Klik untuk lihat solusinya
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
