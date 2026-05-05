import { useMemo, useState } from 'react';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

const bingoItems = [
  'Minum jamu waktu kecil',
  'Olahraga ringan',
  'Coba hidup tanpa junk food',
  'Minum 2 liter air putih',
  'Makan buah hari ini',
  'Tidur sebelum 12 malam',
  'Minum Beras Kencur pagi ini',
  'Coba minuman tradisional',
  'Makan sayur',
];

export default function MiniQuiz() {
  const [checked, setChecked] = useState(['Coba minuman tradisional']);
  const result = useMemo(() => {
    if (checked.length >= 6) return 'Kamu sudah masuk mode healthy ritual. Beras Kencur siap jadi drink of the day.';
    if (checked.length >= 3) return 'Nice. Tinggal tambah satu ritual praktis: jamu autentik dalam kemasan modern.';
    return 'Mulai dari yang gampang dulu: pilih minuman herbal yang praktis dan fresh.';
  }, [checked.length]);

  const toggle = (item) => {
    setChecked((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  };

  return (
    <section
      id="quiz"
      data-can-phase="quiz"
      className="section-shell bg-pale px-0 py-24 text-ink md:py-32"
    >
      <div className="pattern-layer absolute inset-0 opacity-20" />
      <img src={rice} alt="" className="drift absolute right-4 top-14 w-28 opacity-75 md:right-24 md:w-40" />
      <img src={kencur} alt="" className="float-slow absolute bottom-8 left-4 w-28 opacity-75 md:left-20 md:w-40" />

      <div className="section-inner relative z-10">
        <div className="reveal mx-auto max-w-6xl rounded-[2rem] border-2 border-ink bg-paper p-5 shadow-label md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <span className="label-strip text-sm" style={{ transform: 'rotate(-2deg)' }}>
                Interactive Content
              </span>
              <h2 className="display-type mt-5 text-5xl md:text-[4.8rem]">Bingo hidup sehat</h2>
              <p className="body-copy mt-5 text-base font-semibold text-forest md:text-lg">
                Terinspirasi dari booklet: pilih kebiasaan yang sudah kamu lakukan hari ini, lalu
                lihat rekomendasi ritual sehat yang paling praktis.
              </p>
              <div className="mt-7 rounded-[1.4rem] bg-pale p-5">
                <p className="display-type text-3xl text-ink">{checked.length}/9 kotak aktif</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-forest md:text-base">
                  {result}
                </p>
                <p className="mt-3 text-xs font-bold uppercase text-olive">
                  Tradisi dalam kemasan modern, siap masuk rutinitas harian.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {bingoItems.map((item) => {
                const isChecked = checked.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggle(item)}
                    className={`min-h-28 rounded-[1rem] border-2 p-3 text-center text-xs font-extrabold uppercase leading-tight transition hover:-translate-y-1 md:min-h-32 md:text-sm ${
                      isChecked
                        ? 'border-ink bg-ink text-paper shadow-label'
                        : 'border-forest/25 bg-cream/70 text-ink hover:border-ink'
                    }`}
                    aria-pressed={isChecked}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
