const testimonials = [
  {
    persona: 'Mahasiswa',
    quote:
      'Biasanya aku nggak suka jamu, tapi ini surprisingly enak. Nggak pahit dan masih bisa dinikmati sambil santai.',
    rating: '4/5',
    rotate: '-2deg',
  },
  {
    persona: 'Pekerja aktif',
    quote: 'Habis kerja atau aktivitas seharian, minum ini lumayan bikin badan lebih enakan.',
    rating: '5/5',
    rotate: '1.5deg',
  },
  {
    persona: 'Ibu rumah tangga',
    quote: 'Rasanya pas, tidak terlalu kuat tapi tetap terasa karakter beras kencurnya.',
    rating: '4/5',
    rotate: '2deg',
  },
  {
    persona: 'Siswa Gen Z',
    quote: 'Kalau diminum dingin enak banget, rasanya fresh. Sampai nggak kerasa lagi minum jamu.',
    rating: '5/5',
    rotate: '-1deg',
  },
];

export default function Testimonials() {
  return (
    <section className="section-shell bg-sage px-0 py-24 text-ink md:py-28">
      <div className="mega-word left-[-6rem] top-16 rotate-[-4deg] opacity-70">Testimoni</div>
      <span className="asterisk right-[12%] top-20 text-olive">*</span>

      <div className="section-inner relative z-10">
        <div className="reveal max-w-4xl">
          <span className="label-strip text-sm" style={{ transform: 'rotate(-2deg)' }}>
            Testimoni
          </span>
          <h2 className="section-title display-type mt-5">
            Jamu modern yang terasa dekat.
          </h2>
          <p className="body-copy mt-5 text-base font-semibold text-forest md:text-lg">
            Social proof dari booklet dibuat ringkas untuk landing page: rasa autentik, lebih
            fresh, dan cocok untuk rutinitas anak muda sampai keluarga.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.persona}
              className="reveal relative rounded-[1.6rem] bg-ink p-6 text-paper shadow-label md:p-7"
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <div className="absolute -bottom-4 left-10 h-8 w-8 rotate-45 bg-ink" />
              <p className="display-type text-3xl text-cream">{item.persona}</p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-paper/90 md:text-base">
                "{item.quote}"
              </p>
              <p className="mt-5 inline-flex rounded-full bg-cream px-4 py-2 text-xs font-extrabold uppercase text-ink">
                Review singkat: {item.rating}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
