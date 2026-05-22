import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import productCan from '../assets/images/product-can.png';
import leafOne from '../assets/images/leaf-1.png';
import rice from '../assets/images/rice.png';
import kencur from '../assets/images/kencur.png';

gsap.registerPlugin(ScrollTrigger);

export default function ArticlePage({ article, articles }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

      intro
        .fromTo('.article-detail-kicker', { autoAlpha: 0, y: 26, rotate: -7 }, { autoAlpha: 1, y: 0, rotate: -2, duration: 0.65 }, 0)
        .fromTo('.article-detail-title', { autoAlpha: 0, y: 58, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.78 }, 0.08)
        .fromTo('.article-detail-meta', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.22)
        .fromTo('.article-detail-visual', { autoAlpha: 0, y: 64, scale: 0.86, rotate: 4 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.82 }, 0.16)
        .fromTo('.article-detail-lead', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.62 }, 0.34);

      gsap.to('.article-detail-image', {
        y: -12,
        rotate: 1.2,
        duration: 3.1,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to('.article-detail-ring', {
        rotate: 360,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });

      gsap.utils.toArray('.article-detail-copy p').forEach((paragraph, index) => {
        gsap.fromTo(
          paragraph,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.02,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      gsap.fromTo(
        '.article-related-card',
        { autoAlpha: 0, y: 44, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'back.out(1.12)',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.article-related-grid',
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [article?.slug]);

  if (!article) {
    return (
      <main className="article-detail-page cream-field min-h-screen px-0 pb-16 pt-28 text-ink">
        <div className="section-inner">
          <span className="label-strip text-xs">Artikel tidak ditemukan</span>
          <h1 className="display-type mt-5 max-w-3xl text-[3rem] leading-none sm:text-6xl">
            Ceritanya belum tersedia.
          </h1>
          <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-forest">
            Kembali ke section artikel untuk membaca cerita pilihan Beras Kencur by Jamu Iboe.
          </p>
          <a
            href="/#articles"
            className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase text-paper transition hover:-translate-y-1 hover:bg-forest"
          >
            Kembali ke artikel
          </a>
        </div>
      </main>
    );
  }

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main ref={pageRef} className="article-detail-page bg-paper text-ink">
      <section className="article-detail-hero section-shell cream-field px-0 pb-14 pt-24 md:pb-20 md:pt-32">
        <div className="pattern-layer absolute inset-0 opacity-15" />
        <div className="mega-word article-detail-mega left-[-3rem] top-28 rotate-[-4deg] opacity-60">Artikel</div>
        <span className="asterisk right-[8%] top-32 text-olive">*</span>
        <img src={leafOne} alt="" className="float-alt absolute left-3 top-36 w-24 opacity-40 md:left-14 md:w-36" />
        <img src={rice} alt="" className="drift absolute bottom-8 right-3 w-24 opacity-45 md:right-16 md:w-36" />

        <div className="section-inner relative z-10 grid gap-8 lg:grid-cols-[1.02fr_0.86fr] lg:items-center lg:gap-12">
          <div>
            <a href="/#articles" className="article-back-link mb-5 inline-flex text-sm font-black uppercase text-forest transition hover:-translate-x-1 hover:text-ink">
              Kembali ke artikel
            </a>
            <span className="article-detail-kicker label-strip text-xs md:text-sm" style={{ transform: 'rotate(-2deg)' }}>
              {article.category}
            </span>
            <h1 className="article-detail-title display-type mt-5 max-w-4xl text-[2.85rem] leading-[0.94] sm:text-[3.8rem] md:text-[4.65rem] xl:text-[5.05rem]">
              {article.title}
            </h1>
            <div className="article-detail-meta mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-paper">
                {article.readTime}
              </span>
              <span className="rounded-full border border-forest/20 bg-paper/80 px-4 py-2 text-xs font-black uppercase text-forest">
                {article.accent}
              </span>
            </div>
            <p className="article-detail-lead mt-6 max-w-2xl text-base font-semibold leading-relaxed text-forest md:text-lg">
              {article.excerpt}
            </p>
          </div>

          <div className="article-detail-visual relative mx-auto w-full max-w-sm rounded-[2rem] border-2 border-forest/15 bg-pale/80 p-5 shadow-soft md:max-w-md">
            <div className="article-detail-ring absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 md:h-80 md:w-80" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cream/80 blur-xl" />
            <img
              src={article.detailLogo || productCan}
              alt=""
              className={`absolute left-5 top-5 z-10 h-12 w-16 object-contain opacity-70 ${article.detailLogo ? '' : 'hidden'}`}
              aria-hidden="true"
            />
            <img
              src={article.image}
              alt={article.imageAlt}
              className="article-detail-image can-local relative z-10 mx-auto h-72 object-contain md:h-96"
            />
          </div>
        </div>
      </section>

      <section className="article-detail-body section-shell bg-paper px-0 py-14 md:py-20">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <aside className="article-detail-aside lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border-2 border-forest/15 bg-pale p-5 shadow-soft">
              <p className="display-type text-3xl text-ink">Inti artikel</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-forest">
                {article.takeaway}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[article.category, article.accent, 'Jamu modern'].map((chip) => (
                  <span key={chip} className="rounded-full border border-forest/20 bg-paper px-3 py-1.5 text-[11px] font-black uppercase text-forest">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <article className="article-detail-copy rounded-[1.8rem] border-2 border-forest/15 bg-paper p-5 shadow-soft md:p-8">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base font-semibold leading-[1.9] text-forest md:text-lg">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>

      <section className="article-related-section section-shell bg-pale px-0 py-14 text-ink md:py-20">
        <img src={kencur} alt="" className="float-slow absolute right-4 top-8 w-28 opacity-35 md:right-20 md:w-40" />
        <div className="section-inner relative z-10">
          <span className="label-strip text-xs" style={{ transform: 'rotate(-2deg)' }}>
            Baca Selanjutnya
          </span>
          <div className="article-related-grid mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
            {related.map((item) => (
              <a
                key={item.slug}
                href={item.href}
                className="article-related-card group rounded-[1.4rem] border-2 border-forest/15 bg-paper p-5 shadow-soft transition hover:-translate-y-1 hover:border-ink"
              >
                <div className="flex gap-4">
                  <img src={item.image} alt="" className="h-24 w-24 shrink-0 rounded-2xl bg-pale object-contain p-2" />
                  <div>
                    <p className="text-[11px] font-black uppercase text-olive">{item.category}</p>
                    <h2 className="display-type mt-2 text-2xl leading-none text-ink md:text-3xl">{item.cardTitle}</h2>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-forest">{item.excerpt}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
