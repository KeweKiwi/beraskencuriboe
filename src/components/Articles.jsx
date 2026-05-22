import { useState } from 'react';
import productCan from '../assets/images/product-can.png';
import productBox from '../assets/images/product-box.png';
import leafOne from '../assets/images/leaf-1.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

const articles = [
  {
    category: 'Heritage',
    readTime: '3 min read',
    title: 'Beras kencur, warisan rasa yang tetap relevan.',
    summary:
      'Jamu tidak harus terasa jauh dari hidup modern. Cerita beras kencur dimulai dari tradisi, lalu menemukan cara baru untuk tetap dekat.',
    takeaway: 'Nilai tradisi tetap terasa kuat ketika disajikan dengan bahasa visual yang lebih segar.',
    image: productBox,
    imageAlt: 'Kemasan tradisional Beras Kencur Jamu Iboe',
  },
  {
    category: 'Modern Pack',
    readTime: '4 min read',
    title: 'Kenapa kemasan modern membuat jamu lebih dilirik?',
    summary:
      'Visual yang fresh, bentuk siap minum, dan karakter kaleng membantu jamu terasa seperti bagian dari lifestyle anak muda.',
    takeaway: 'Kemasan modern bukan sekadar tampilan, tapi jembatan agar jamu terasa praktis dan relevan.',
    image: productCan,
    imageAlt: 'Kaleng modern Beras Kencur by Jamu Iboe',
  },
  {
    category: 'Healthy Ritual',
    readTime: '2 min read',
    title: 'Ritual sehat praktis untuk hari yang padat.',
    summary:
      'Rutinitas sehat bisa dimulai dari pilihan kecil: minuman herbal yang natural, mudah dibawa, dan siap dinikmati kapan saja.',
    takeaway: 'Healthy lifestyle terasa lebih mudah ketika pilihan sehatnya praktis dan menyenangkan.',
    image: kencur,
    imageAlt: 'Kencur sebagai bahan alami beras kencur',
  },
];

export default function Articles() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="articles"
      data-can-phase="articles"
      className="articles-section section-shell bg-pale px-0 py-14 text-ink md:py-20 lg:py-24"
    >
      <div className="pattern-layer absolute inset-0 opacity-15" />
      <div className="articles-mega mega-word left-[-3rem] top-16 rotate-[-3deg] opacity-70">Artikel</div>
      <span className="asterisk right-[9%] top-24 text-olive">*</span>
      <img src={leafOne} alt="" className="float-alt absolute left-4 top-24 w-24 opacity-50 md:left-16 md:w-40" />
      <img src={rice} alt="" className="drift absolute bottom-10 right-4 w-24 opacity-55 md:right-20 md:w-40" />

      <div className="section-inner relative z-10">
        <div className="articles-header grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end md:gap-10">
          <div>
            <span className="articles-kicker label-strip text-xs md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
              Artikel Pilihan
            </span>
            <h2 className="articles-title section-title display-type mt-5 max-w-4xl">
              Baca cerita di balik rasa modern.
            </h2>
          </div>
          <p className="articles-copy body-copy max-w-2xl text-sm font-semibold text-forest sm:text-base md:text-lg">
            Konten ringan untuk memperkuat pesan brand: jamu adalah warisan Indonesia yang bisa
            tampil fresh, praktis, dan dekat dengan gaya hidup sehat hari ini.
          </p>
        </div>

        <div className="articles-grid mt-7 grid gap-4 md:mt-8 md:grid-cols-3 md:gap-5">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`article-card group relative overflow-hidden rounded-[1.35rem] border-2 p-4 shadow-soft transition duration-300 md:rounded-[1.7rem] md:p-5 ${
                active === index ? 'border-ink bg-paper' : 'border-forest/20 bg-cream/72 hover:border-ink'
              }`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              style={{ transform: `rotate(${index === 0 ? '-1.2deg' : index === 2 ? '1.2deg' : '0deg'})` }}
              tabIndex={0}
            >
              <div className="article-visual relative min-h-44 overflow-hidden rounded-[1rem] bg-pale md:min-h-52">
                <div className="article-orbit absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10" />
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cream/80 blur-lg" />
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className={`article-image can-local relative z-10 mx-auto h-40 object-contain pt-4 transition duration-500 group-hover:-translate-y-2 group-hover:scale-105 md:h-48 ${
                    index === 0 ? '-rotate-6' : index === 2 ? 'rotate-6' : ''
                  }`}
                />
                <span className="article-number display-type absolute bottom-2 left-3 text-5xl text-ink/10 md:text-6xl">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-black uppercase text-paper">
                  {article.category}
                </span>
                <span className="rounded-full border border-forest/20 bg-paper px-3 py-1.5 text-[10px] font-black uppercase text-forest">
                  {article.readTime}
                </span>
              </div>

              <h3 className="display-type mt-4 text-[1.72rem] leading-[0.98] text-ink md:text-[2rem]">
                {article.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-forest">
                {article.summary}
              </p>

              <div
                className={`article-takeaway mt-4 rounded-[1rem] p-3 transition duration-300 ${
                  active === index ? 'bg-ink text-paper' : 'bg-pale text-forest'
                }`}
              >
                <p className="text-[11px] font-black uppercase opacity-70">Key takeaway</p>
                <p className="mt-1 text-sm font-semibold leading-relaxed">{article.takeaway}</p>
              </div>

              <button
                type="button"
                onClick={() => setActive(index)}
                className={`mt-4 w-full rounded-full px-5 py-3 text-sm font-extrabold uppercase transition hover:-translate-y-1 ${
                  active === index ? 'bg-cream text-ink' : 'bg-ink text-paper hover:bg-forest'
                }`}
              >
                Baca ringkas
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
