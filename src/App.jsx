import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutProduct from './components/AboutProduct.jsx';
import ProblemSolution from './components/ProblemSolution.jsx';
import Benefits from './components/Benefits.jsx';
import USP from './components/USP.jsx';
import BrandIdentity from './components/BrandIdentity.jsx';
import MiniQuiz from './components/MiniQuiz.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import productCan from './assets/images/product-can.png';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const mainCanRef = useRef(null);
  const transitionCanRef = useRef(null);
  const aboutCanRef = useRef(null);
  const [buyOpen, setBuyOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const hero = heroRef.current;
        const mainCan = mainCanRef.current;
        const transitionCan = transitionCanRef.current;
        const aboutCan = aboutCanRef.current;
        const secondaryCans = gsap.utils.toArray('.secondary-can');

        gsap.set(mainCan, { x: 0, y: 0, scale: 1, rotate: -3, autoAlpha: 1 });
        gsap.set(transitionCan, { x: 0, y: 0, scale: 1, rotate: -3, autoAlpha: 0 });
        gsap.set(aboutCan, { autoAlpha: 0, scale: 1 });
        gsap.set(secondaryCans, { autoAlpha: 0.35 });

        const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
        entrance.fromTo(
          [mainCan, ...secondaryCans],
          {
            autoAlpha: 0,
            y: 110,
            scale: 0.86,
            rotate: (index) => [-8, 12, -14, 9][index] || 0,
          },
          {
            autoAlpha: (index) => (index === 0 ? 1 : 0.35),
            y: 0,
            scale: 1,
            rotate: (index) => [-3, 12, -14, 9][index] || 0,
            stagger: 0.12,
            duration: 0.95,
          },
        );

        gsap.to('.secondary-can .hero-can-float', {
          y: -18,
          rotate: '+=2',
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.22,
        });

        const uspSection = document.querySelector('.usp-section');
        const uspTimeline = uspSection
          ? gsap
              .timeline({
                scrollTrigger: {
                  trigger: uspSection,
                  start: 'top 72%',
                  end: 'bottom 38%',
                  scrub: 1,
                },
              })
              .fromTo(
                '.usp-kicker',
                { autoAlpha: 0, y: 26, rotate: -8 },
                { autoAlpha: 1, y: 0, rotate: -2, ease: 'power2.out' },
                0,
              )
              .fromTo(
                '.usp-title',
                { autoAlpha: 0, y: 70, scale: 0.92 },
                { autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out' },
                0.05,
              )
              .fromTo(
                '.usp-copy',
                { autoAlpha: 0, y: 36 },
                { autoAlpha: 1, y: 0, ease: 'power2.out' },
                0.16,
              )
              .fromTo(
                '.usp-can-wrap',
                { autoAlpha: 0, y: 190, scale: 0.74, rotate: -8 },
                { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'power3.out' },
                0.18,
              )
              .fromTo(
                '.usp-orbit-ring',
                { autoAlpha: 0, scale: 0.55 },
                { autoAlpha: 1, scale: 1, ease: 'power2.out', stagger: 0.08 },
                0.28,
              )
              .fromTo(
                '.usp-label-left',
                { autoAlpha: 0, x: 180, y: 46, scale: 0.9 },
                { autoAlpha: 1, x: 0, y: 0, scale: 1, ease: 'back.out(1.2)', stagger: 0.08 },
                0.38,
              )
              .fromTo(
                '.usp-label-right',
                { autoAlpha: 0, x: -180, y: 46, scale: 0.9 },
                { autoAlpha: 1, x: 0, y: 0, scale: 1, ease: 'back.out(1.2)', stagger: 0.08 },
                0.42,
              )
              .fromTo(
                '.usp-active-panel',
                { autoAlpha: 0, y: 92, scale: 0.92 },
                { autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out' },
                0.58,
              )
              .to('.usp-herb', { y: 80, rotate: -5, ease: 'none' }, 0)
              .to('.usp-mega', { x: 90, ease: 'none' }, 0)
          : null;

        const uspFloat = gsap.to('.usp-can-image', {
          y: -16,
          rotate: 1.2,
          duration: 3.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });

        const uspOrbit = gsap.to('.usp-orbit-ring', {
          rotate: 360,
          duration: 26,
          ease: 'none',
          repeat: -1,
          stagger: 4,
        });

        const ctaSection = document.querySelector('.cta-section');
        const ctaTimeline = ctaSection
          ? gsap
              .timeline({
                scrollTrigger: {
                  trigger: ctaSection,
                  start: 'top 76%',
                  end: 'bottom 42%',
                  scrub: 1.05,
                },
              })
              .fromTo(
                '.cta-kicker',
                { autoAlpha: 0, y: 32, rotate: -8 },
                { autoAlpha: 1, y: 0, rotate: 2, ease: 'power2.out' },
                0,
              )
              .fromTo(
                '.cta-title-line',
                { yPercent: 112, rotate: -5, autoAlpha: 0 },
                { yPercent: 0, rotate: 0, autoAlpha: 1, ease: 'power4.out', stagger: 0.075 },
                0.06,
              )
              .fromTo(
                '.cta-copy',
                { autoAlpha: 0, y: 34 },
                { autoAlpha: 1, y: 0, ease: 'power2.out' },
                0.28,
              )
              .fromTo(
                '.cta-microcopy',
                { autoAlpha: 0, x: -34, scale: 0.94 },
                { autoAlpha: 1, x: 0, scale: 1, ease: 'back.out(1.1)' },
                0.36,
              )
              .fromTo(
                '.cta-actions > *',
                { autoAlpha: 0, y: 34, scale: 0.92 },
                { autoAlpha: 1, y: 0, scale: 1, ease: 'back.out(1.25)', stagger: 0.08 },
                0.44,
              )
              .fromTo(
                '.cta-can-wrap',
                { autoAlpha: 0, y: 180, scale: 0.72, rotate: -10 },
                { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'power4.out' },
                0.1,
              )
              .fromTo(
                '.cta-glow',
                { autoAlpha: 0, scale: 0.55 },
                { autoAlpha: 1, scale: 1, ease: 'power2.out' },
                0.16,
              )
              .fromTo(
                '.cta-ring',
                { autoAlpha: 0, scale: 0.42, rotate: -18 },
                { autoAlpha: 1, scale: 1, rotate: 0, ease: 'power3.out', stagger: 0.08 },
                0.2,
              )
              .to('.cta-mega', { x: 100, ease: 'none' }, 0)
              .to('.cta-kencur', { y: 76, x: -28, rotate: -8, ease: 'none' }, 0)
              .to('.cta-rice', { y: -42, x: 46, rotate: 6, ease: 'none' }, 0)
          : null;

        const ctaFloat = gsap.to('.cta-can-image', {
          y: -16,
          rotate: 1.4,
          duration: 3.1,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });

        const ctaRingSpin = gsap.to('.cta-ring', {
          rotate: 360,
          duration: 30,
          ease: 'none',
          repeat: -1,
          stagger: 5,
        });

        let transition;
        const getTargetMetrics = () => {
          const start = mainCan.getBoundingClientRect();
          const target = aboutCan.getBoundingClientRect();
          const trigger = transition.scrollTrigger;
          const currentScroll = window.scrollY || document.documentElement.scrollTop;
          const targetTopAtEnd = target.top + currentScroll - trigger.end;

          return {
            x: target.left + target.width / 2 - (start.left + start.width / 2),
            y: targetTopAtEnd + target.height / 2 - (start.top + start.height / 2),
            scale: target.width / start.width,
          };
        };

        transition = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom 12%',
            scrub: 1.15,
            invalidateOnRefresh: true,
            onRefresh: () => {
              const start = mainCan.getBoundingClientRect();
              gsap.set(transitionCan, {
                left: start.left,
                top: start.top,
                width: start.width,
                height: start.height,
                x: 0,
                y: 0,
                scale: 1,
                rotate: -3,
              });
            },
          },
        });

        transition
          .set(
            transitionCan,
            {
              autoAlpha: 1,
              left: () => mainCan.getBoundingClientRect().left,
              top: () => mainCan.getBoundingClientRect().top,
              width: () => mainCan.getBoundingClientRect().width,
              height: () => mainCan.getBoundingClientRect().height,
              x: 0,
              y: 0,
              scale: 1,
              rotate: -3,
            },
            0,
          )
          .to(
            mainCan,
            {
              autoAlpha: 0,
              scale: 0.98,
              ease: 'none',
            },
            0.02,
          )
          .to(
            transitionCan,
            {
              x: () => {
                return getTargetMetrics().x;
              },
              y: () => {
                return getTargetMetrics().y;
              },
              scale: () => getTargetMetrics().scale,
              rotate: 0,
              ease: 'none',
            },
            0,
          )
          .to(transitionCan, { autoAlpha: 0, ease: 'none' }, 0.94)
          .fromTo(
            aboutCan,
            { autoAlpha: 0, scale: 0.985 },
            { autoAlpha: 1, scale: 1, ease: 'none' },
            0.92,
          )
          .fromTo(
            secondaryCans,
            {
              autoAlpha: 0.35,
            },
            {
              autoAlpha: 0,
              x: (index) => [190, -220, 150][index] || 120,
              y: (index) => [-140, -90, 130][index] || -120,
              scale: 0.74,
              rotate: (index) => [22, -26, 18][index] || 16,
              ease: 'none',
              immediateRender: false,
            },
            0.04,
          );

        return () => {
          entrance.kill();
          transition.kill();
          uspTimeline?.kill();
          uspFloat.kill();
          uspOrbit.kill();
          ctaTimeline?.kill();
          ctaFloat.kill();
          ctaRingSpin.kill();
        };
      });

      mm.add('(max-width: 1023px)', () => {
        gsap.fromTo(
          '.mobile-hero-can',
          { autoAlpha: 0, y: 50, scale: 0.92 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
        );

        gsap.fromTo(
          '.usp-label',
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.usp-section',
              start: 'top 72%',
            },
          },
        );

      });

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      gsap.utils.toArray('.mega-word').forEach((element) => {
        gsap.to(element, {
          y: -42,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar onBuy={() => setBuyOpen(true)} />
      <img
        ref={transitionCanRef}
        src={productCan}
        alt=""
        className="transition-can"
        aria-hidden="true"
      />

      <main>
        <Hero heroRef={heroRef} mainCanRef={mainCanRef} onBuy={() => setBuyOpen(true)} />
        <AboutProduct aboutCanRef={aboutCanRef} />
        <ProblemSolution />
        <Benefits />
        <USP />
        <BrandIdentity />
        <MiniQuiz />
        <Testimonials />
        <CTA onBuy={() => setBuyOpen(true)} />
      </main>
      <Footer />

      {buyOpen ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="buy-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setBuyOpen(false);
          }}
        >
          <div className="w-full max-w-md rounded-[2rem] border-2 border-ink bg-paper p-6 text-center shadow-soft">
            <p id="buy-modal-title" className="display-type text-4xl text-ink">
              Coming soon
            </p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-forest md:text-base">
              Beras Kencur by Jamu Iboe siap menemani harimu.
            </p>
            <button
              type="button"
              onClick={() => setBuyOpen(false)}
              className="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-extrabold uppercase text-paper transition hover:-translate-y-1 hover:bg-forest"
            >
              Tutup
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
