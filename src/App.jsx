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
import Articles from './components/Articles.jsx';
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

        const articlesSection = document.querySelector('.articles-section');
        const articlesTimeline = articlesSection
          ? gsap
              .timeline({
                scrollTrigger: {
                  trigger: articlesSection,
                  start: 'top 82%',
                  end: 'top 18%',
                  scrub: 0.85,
                },
              })
              .fromTo(
                '.articles-kicker',
                { autoAlpha: 0, x: -44, rotate: -8 },
                { autoAlpha: 1, x: 0, rotate: -2, ease: 'power2.out' },
                0,
              )
              .fromTo(
                '.articles-title',
                { autoAlpha: 0, y: 70, scale: 0.9 },
                { autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out' },
                0.08,
              )
              .fromTo(
                '.articles-copy',
                { autoAlpha: 0, y: 34 },
                { autoAlpha: 1, y: 0, ease: 'power2.out' },
                0.18,
              )
              .fromTo(
                '.article-card',
                { autoAlpha: 0, y: 84, scale: 0.88, rotate: (index) => [-5, 0, 5][index] || 0 },
                { autoAlpha: 1, y: 0, scale: 1, rotate: (index) => [-1.2, 0, 1.2][index] || 0, ease: 'back.out(1.15)', stagger: 0.1 },
                0.18,
              )
              .fromTo(
                '.article-orbit',
                { autoAlpha: 0, scale: 0.45 },
                { autoAlpha: 1, scale: 1, ease: 'power2.out', stagger: 0.06 },
                0.28,
              )
              .to('.articles-mega', { x: 90, ease: 'none' }, 0)
          : null;

        const articleFloat = gsap.to('.article-image', {
          y: -10,
          rotate: '+=1.3',
          duration: 3.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.18,
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
          articlesTimeline?.kill();
          articleFloat.kill();
        };
      });

      mm.add('(max-width: 1023px)', () => {
        const mobileTweens = [];
        const add = (animation) => {
          mobileTweens.push(animation);
          return animation;
        };

        add(
          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .fromTo(
              '.hero-title',
              { autoAlpha: 0, y: 34, rotate: -1.5, scale: 0.96 },
              { autoAlpha: 1, y: 0, rotate: 0, scale: 1, duration: 0.82 },
              0,
            )
            .fromTo(
              '.mobile-stage-ring',
              { autoAlpha: 0, scale: 0.45, rotate: -18 },
              { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.72, stagger: 0.08 },
              0.08,
            )
            .fromTo(
              '.mobile-ghost-can',
              { autoAlpha: 0, y: 44, scale: 0.72 },
              { autoAlpha: 0.35, y: 0, scale: 1, duration: 0.75, stagger: 0.09 },
              0.14,
            )
            .fromTo(
              '.mobile-hero-can',
              { autoAlpha: 0, y: 70, scale: 0.82, rotate: -8 },
              { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.9 },
              0.2,
            )
            .fromTo(
              ['.mobile-orbit-kencur', '.mobile-orbit-rice'],
              { autoAlpha: 0, y: 20, scale: 0.72 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08 },
              0.34,
            )
            .fromTo(
              '.hero-badge',
              { autoAlpha: 0, y: 22, scale: 0.92 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06 },
              0.46,
            )
            .fromTo(
              '.hero-hotspot-card',
              { autoAlpha: 0, y: 26, scale: 0.95 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.62 },
              0.55,
            )
            .fromTo(
              '.hero-actions > *',
              { autoAlpha: 0, y: 20, scale: 0.94 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06 },
              0.63,
            ),
        );

        add(gsap.to('.mobile-main-can', { y: -12, rotate: 1.5, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
        add(gsap.to('.mobile-ghost-can-left', { y: -10, x: -7, rotate: -12, duration: 3.3, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
        add(gsap.to('.mobile-ghost-can-right', { y: 12, x: 8, rotate: 10, duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
        add(gsap.to('.mobile-stage-ring', { rotate: 360, duration: 28, ease: 'none', repeat: -1, stagger: 3 }));

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.8,
              },
            })
            .to('.mobile-can-stage', { y: -48, scale: 0.94, rotate: 2, ease: 'none' }, 0)
            .to('.mobile-ghost-can', { autoAlpha: 0.06, x: (index) => (index ? 42 : -42), ease: 'none' }, 0)
            .to('.hero-title', { y: -26, ease: 'none' }, 0)
            .to('.hero-hotspot-card', { y: -18, ease: 'none' }, 0),
        );

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '#about',
                start: 'top 82%',
                end: 'top 26%',
                scrub: 0.9,
              },
            })
            .fromTo('.about-mobile-flow', { autoAlpha: 0.1, y: 64, scale: 0.92, rotate: -2 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none' }, 0)
            .fromTo('.about-mobile-old', { x: -58, y: 28, rotate: -8, scale: 0.88 }, { x: 0, y: 0, rotate: 0, scale: 1, ease: 'none' }, 0.08)
            .fromTo('.about-mobile-new', { x: 58, y: 28, rotate: 8, scale: 0.88 }, { x: 0, y: 0, rotate: 0, scale: 1, ease: 'none' }, 0.08)
            .fromTo('.about-mobile-arrow', { autoAlpha: 0, scale: 0.25, rotate: -44 }, { autoAlpha: 1, scale: 1, rotate: 0, ease: 'none' }, 0.32)
            .fromTo('.about-mobile-can', { y: 30, scale: 0.78, rotate: -10 }, { y: 0, scale: 1, rotate: 0, ease: 'none' }, 0.2),
        );

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.problem-section',
                start: 'top 86%',
                end: 'top 28%',
                scrub: 0.85,
              },
            })
            .fromTo('.problem-section .label-strip', { autoAlpha: 0, x: -40, rotate: -9 }, { autoAlpha: 1, x: 0, rotate: -2, ease: 'none' }, 0)
            .fromTo('.problem-section h2', { autoAlpha: 0, y: 54, scale: 0.92, rotate: -2 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none' }, 0.05)
            .fromTo('.problem-section button', { autoAlpha: 0, y: 56, scale: 0.86 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none', stagger: 0.08 }, 0.22)
            .to('.problem-section .mega-word', { y: -34, x: -28, ease: 'none' }, 0),
        );

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.benefits-section',
                start: 'top 86%',
                end: 'top 24%',
                scrub: 0.9,
              },
            })
            .fromTo('.benefits-section .label-strip', { autoAlpha: 0, x: -44, rotate: 8 }, { autoAlpha: 1, x: 0, rotate: 2, ease: 'none' }, 0)
            .fromTo('.benefits-section h2', { autoAlpha: 0, y: 58, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.06)
            .fromTo('.benefits-section .section-inner > div:first-child > div:last-child', { autoAlpha: 0, y: 44, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.18)
            .fromTo('.benefits-section .section-inner > div:last-child', { autoAlpha: 0, y: 72, scale: 0.92, rotate: 1.8 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none' }, 0.26)
            .fromTo('.benefits-section button', { autoAlpha: 0, y: 36, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none', stagger: 0.06 }, 0.42)
            .to('.benefits-section .mega-word', { x: -42, y: -32, ease: 'none' }, 0),
        );

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.usp-section',
                start: 'top 88%',
                end: 'top 20%',
                scrub: 0.85,
              },
            })
            .fromTo('.usp-kicker', { autoAlpha: 0, y: 26, rotate: -8 }, { autoAlpha: 1, y: 0, rotate: -2, ease: 'none' }, 0)
            .fromTo('.usp-title', { autoAlpha: 0, y: 62, scale: 0.88 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.06)
            .fromTo('.usp-copy', { autoAlpha: 0, y: 38 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.16)
            .fromTo('.usp-can-wrap', { autoAlpha: 0.08, y: 70, scale: 0.76, rotate: -8 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none' }, 0.26)
            .fromTo('.usp-orbit-ring', { autoAlpha: 0, scale: 0.45 }, { autoAlpha: 1, scale: 1, ease: 'none', stagger: 0.05 }, 0.32)
            .fromTo('.usp-active-panel', { autoAlpha: 0, y: 34, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.46)
            .fromTo('.usp-label', { autoAlpha: 0, y: 30, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none', stagger: 0.045 }, 0.56)
            .to('.usp-herb', { y: 54, rotate: -6, ease: 'none' }, 0)
            .to('.usp-mega', { x: 54, ease: 'none' }, 0),
        );

        add(gsap.to('.usp-can-image', { y: -10, rotate: 1.2, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
        add(gsap.to('.usp-orbit-ring', { rotate: 360, duration: 26, ease: 'none', repeat: -1, stagger: 4 }));

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.articles-section',
                start: 'top 86%',
                end: 'top 18%',
                scrub: 0.85,
              },
            })
            .fromTo('.articles-kicker', { autoAlpha: 0, x: -34, rotate: -9 }, { autoAlpha: 1, x: 0, rotate: -2, ease: 'none' }, 0)
            .fromTo('.articles-title', { autoAlpha: 0, y: 56, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.08)
            .fromTo('.articles-copy', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.18)
            .fromTo('.article-card', { autoAlpha: 0, y: 62, scale: 0.9, rotate: (index) => (index % 2 ? 2 : -2) }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none', stagger: 0.08 }, 0.32)
            .fromTo('.article-orbit', { autoAlpha: 0, scale: 0.55 }, { autoAlpha: 1, scale: 1, ease: 'none', stagger: 0.05 }, 0.42)
            .to('.articles-mega', { x: 44, y: -28, ease: 'none' }, 0),
        );

        add(gsap.to('.article-image', { y: -8, rotate: '+=1.2', duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.16 }));

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '#quiz',
                start: 'top 86%',
                end: 'top 26%',
                scrub: 0.85,
              },
            })
            .fromTo('.quiz-kicker', { autoAlpha: 0, x: -34, rotate: -9 }, { autoAlpha: 1, x: 0, rotate: -2, ease: 'none' }, 0)
            .fromTo('.quiz-title', { autoAlpha: 0, y: 52, scale: 0.9, rotate: -2 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, ease: 'none' }, 0.06)
            .fromTo('.quiz-copy', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.16)
            .fromTo('.quiz-result', { autoAlpha: 0, y: 36, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0.24)
            .fromTo('.quiz-item', { autoAlpha: 0, x: (index) => (index % 2 ? 36 : -36), y: 20, scale: 0.92 }, { autoAlpha: 1, x: 0, y: 0, scale: 1, ease: 'none', stagger: 0.045 }, 0.34)
            .to('#quiz .pattern-layer', { y: -28, ease: 'none' }, 0),
        );

        add(
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 88%',
                end: 'top 48%',
                scrub: 0.9,
              },
            })
            .fromTo('.cta-kicker', { autoAlpha: 0, y: 28, rotate: -8 }, { autoAlpha: 1, y: 0, rotate: 2, duration: 0.24, ease: 'none' }, 0)
            .fromTo('.cta-title-line', { yPercent: 115, autoAlpha: 0, rotate: -6 }, { yPercent: 0, autoAlpha: 1, rotate: 0, duration: 0.34, ease: 'none', stagger: 0.04 }, 0.06)
            .fromTo('.cta-copy', { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.24, ease: 'none' }, 0.22)
            .fromTo('.cta-microcopy', { autoAlpha: 0, x: -30, scale: 0.92 }, { autoAlpha: 1, x: 0, scale: 1, duration: 0.24, ease: 'none' }, 0.28)
            .fromTo('.cta-actions > *', { y: 34, scale: 0.9 }, { y: 0, scale: 1, duration: 0.22, ease: 'none', stagger: 0.04 }, 0.34)
            .fromTo('.cta-can-wrap', { autoAlpha: 0.05, y: 90, scale: 0.72, rotate: -10 }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.36, ease: 'none' }, 0.16)
            .fromTo('.cta-ring', { autoAlpha: 0, scale: 0.4, rotate: -18 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.32, ease: 'none', stagger: 0.04 }, 0.22)
            .to('.cta-mega', { x: 52, ease: 'none' }, 0),
        );

        add(gsap.to('.cta-can-image', { y: -12, rotate: 1.4, duration: 3.1, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
        add(gsap.to('.cta-ring', { rotate: 360, duration: 30, ease: 'none', repeat: -1, stagger: 5 }));

        return () => {
          mobileTweens.forEach((animation) => animation.kill());
        };
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
              toggleActions: 'play none none none',
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

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const refreshCall = gsap.delayedCall(0.8, refresh);

    return () => {
      window.removeEventListener('load', refresh);
      refreshCall.kill();
      ctx.revert();
    };
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
        <Articles />
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
