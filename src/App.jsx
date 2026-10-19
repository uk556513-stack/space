
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./styles.css";
import "./fx.css";

gsap.registerPlugin(ScrollTrigger);

const starData = Array.from({ length: 150 }, (_, i) => ({
  left: `${(i * 37.71 + (i % 7) * 11.3) % 100}%`,
  top: `${(i * 61.17 + (i % 11) * 4.7) % 100}%`,
  size: `${i % 13 === 0 ? 3 : i % 4 === 0 ? 2 : 1}px`,
  delay: `${(i % 17) * -0.23}s`,
  duration: `${2.5 + (i % 8) * 0.5}s`,
}));

function Stars({ count = 100 }) {
  return (
    <div className="starfield" aria-hidden="true">
      {starData.slice(0, count).map((star, index) => (
        <i
          key={index}
          style={{
            ...star,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

function Football({ id = "ball" }) {
  return (
    <svg
      className="moon-svg football-svg"
      viewBox="0 0 200 200"
      role="img"
      aria-label="Football"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-ball-light`} cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#e6f5ff" />
          <stop offset="100%" stopColor="#91b8d9" />
        </radialGradient>

        <radialGradient id={`${id}-ball-shadow`} cx="30%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#06172f" stopOpacity=".55" />
        </radialGradient>

        <clipPath id={`${id}-ball-clip`}>
          <circle cx="100" cy="100" r="96" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-ball-clip)`}>
        <circle
          cx="100"
          cy="100"
          r="96"
          fill={`url(#${id}-ball-light)`}
        />

        <g fill="#102747" stroke="#102747" strokeWidth="2">
          <path d="M100 55 L120 70 L112 92 L88 92 L80 70 Z" />
          <path d="M80 70 L56 67 L43 88 L56 109 L79 100 L88 92 Z" />
          <path d="M120 70 L144 67 L157 88 L144 109 L121 100 L112 92 Z" />
          <path d="M79 100 L56 109 L64 134 L88 141 L100 120 Z" />
          <path d="M121 100 L144 109 L136 134 L112 141 L100 120 Z" />
          <path d="M88 141 L88 161 L100 176 L112 161 L112 141 L100 120 Z" />
        </g>

        <g fill="#69bdf0">
          <path d="M100 55 L120 70 L112 92 L100 84 L88 92 L80 70 Z" />
          <path d="M43 88 L56 109 L79 100 L72 82 L56 67 Z" />
          <path d="M157 88 L144 109 L121 100 L128 82 L144 67 Z" />
          <path d="M64 134 L88 141 L88 161 L76 154 Z" />
          <path d="M136 134 L112 141 L112 161 L124 154 Z" />
        </g>

        <circle
          cx="100"
          cy="100"
          r="96"
          fill={`url(#${id}-ball-shadow)`}
        />

        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeOpacity=".65"
        />
      </g>
    </svg>
  );
}

function Player() {
  return (
    <svg
      className="messi-player-svg"
      viewBox="0 0 160 220"
      role="img"
      aria-label="Argentina number 10 football player illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="argentina-shirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d6eaff" />
        </linearGradient>

        <linearGradient id="argentina-shorts" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#76bdf5" />
          <stop offset="100%" stopColor="#174b9c" />
        </linearGradient>

        <linearGradient id="player-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4c6a4" />
          <stop offset="100%" stopColor="#c78360" />
        </linearGradient>
      </defs>

      <ellipse cx="80" cy="38" rx="25" ry="29" fill="url(#player-skin)" />

      <path
        d="M55 34 Q51 8 77 7 Q102 3 107 29 L102 22 L96 28 L88 20 L79 27 L68 21 L61 34Z"
        fill="#493326"
      />

      <path
        d="M65 42 Q70 46 76 43 M85 43 Q91 46 96 42"
        fill="none"
        stroke="#513426"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M73 53 Q80 57 87 53"
        fill="none"
        stroke="#7f3f32"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <rect
        x="70"
        y="59"
        width="20"
        height="17"
        rx="6"
        fill="url(#player-skin)"
      />

      <path
        d="M62 70 L46 78 L33 104 L47 114 L57 98 L54 144 Q80 153 106 144 L103 98 L113 114 L127 104 L114 78 L98 70 L91 78 L69 78Z"
        fill="url(#argentina-shirt)"
      />

      <path d="M63 73 L73 76 L71 146 L60 144Z" fill="#73baf0" />
      <path d="M85 77 L95 74 L99 145 L87 147Z" fill="#73baf0" />
      <path d="M69 70 L80 80 L91 70 L86 66 L74 66Z" fill="#2457a7" />

      <rect
        x="57"
        y="89"
        width="12"
        height="16"
        rx="2"
        fill="#f5f6f8"
        stroke="#d4b15e"
        strokeWidth="1.5"
      />

      <path d="M59 93 H67 M59 98 H67" stroke="#73a8e7" strokeWidth="2" />

      <text
        x="82"
        y="118"
        fontSize="17"
        fontWeight="900"
        textAnchor="middle"
        fill="#173d78"
      >
        10
      </text>

      <path
        d="M39 91 L28 121 Q25 129 32 132 Q39 133 42 124 L52 103Z"
        fill="url(#player-skin)"
      />

      <path
        d="M120 91 L132 119 Q136 127 129 132 Q122 134 118 125 L107 103Z"
        fill="url(#player-skin)"
      />

      <path
        d="M55 142 Q80 150 105 142 L102 171 L85 171 L80 158 L74 171 L58 171Z"
        fill="url(#argentina-shorts)"
      />

      <path
        d="M61 168 L59 197 Q59 205 67 205 Q74 204 74 196 L80 170Z"
        fill="url(#player-skin)"
      />

      <path
        d="M86 170 L90 196 Q91 205 99 204 Q106 202 102 194 L101 168Z"
        fill="url(#player-skin)"
      />

      <path d="M59 190 H74 L73 204 H59Z" fill="#ffffff" />
      <path d="M88 190 H103 L105 204 H91Z" fill="#ffffff" />
      <path d="M59 196 H73 M90 196 H104" stroke="#6ca3e8" strokeWidth="3" />

      <path
        d="M59 202 L73 202 L78 211 Q78 215 72 215 H53 Q50 211 59 202Z"
        fill="#152b50"
      />

      <path
        d="M92 202 L104 202 L113 211 Q115 215 108 215 H91 Q87 211 92 202Z"
        fill="#152b50"
      />
    </svg>
  );
}

function FootballBadge({ className = "" }) {
  const safeId = className.replace(/[^a-zA-Z0-9_-]/g, "-") || "default";

  return (
    <div className={`planet football-badge ${className}`} aria-hidden="true">
      <Football id={`badge-${safeId}`} />
    </div>
  );
}

function Header({ soundOn, onToggleSound }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <span className="brand-mark">✦</span> MESSI — THE GOAT
      </a>

      <span className="top-note">THE JOURNEY OF A FOOTBALL LEGEND</span>

      <div className="top-actions">
        <button
          type="button"
          className="sound-toggle"
          onClick={onToggleSound}
          aria-label={soundOn ? "Pause background music" : "Play background music"}
        >
          <span className={soundOn ? "sound-dot is-playing" : "sound-dot"} />
          {soundOn ? "SOUND ON" : "PLAY SOUND"}
        </button>

        <a className="menu-link" href="#journey">
          EXPLORE <span>↘</span>
        </a>
      </div>
    </header>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      {children}
    </div>
  );
}

function App() {
  const root = useRef(null);
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setSoundOn(true);
      } catch {
        setSoundOn(false);
      }
    } else {
      audio.pause();
      setSoundOn(false);
    }
  };

  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    let rafId = 0;

    const tick = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const syncScroll = () => ScrollTrigger.update();
    lenis.on("scroll", syncScroll);

    const cleanup = [];

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray(".cinematic-stage > .scene");

      if (!scenes.length) return;

      gsap.set(scenes, {
        autoAlpha: 0,
        scale: 1.055,
        y: 24,
        transformOrigin: "50% 50%",
      });

      gsap.set(scenes[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
      });

      gsap.set(".topbar", { autoAlpha: 1 });

      const cinematic = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: ".scroll-track",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      const HOLD = 1;

      scenes.forEach((scene, index) => {
        if (index === 0) {
          cinematic.to(
            ".hero-moon-wrap",
            { scale: 3.2, duration: HOLD, ease: "power2.in" },
            0
          );

          cinematic.to(
            ".hero-copy",
            { y: -40, autoAlpha: 0, duration: 0.4, ease: "none" },
            0
          );

          cinematic.to(
            ".hero-aurora",
            { yPercent: 40, autoAlpha: 0, duration: HOLD, ease: "none" },
            0
          );

          return;
        }

        const previous = scenes[index - 1];
        const at = index - 1 + HOLD;

        cinematic.set(scene, { autoAlpha: 1, scale: 1.12, y: 26 }, at);

        cinematic.to(
          previous,
          { autoAlpha: 0, scale: 0.94, y: -18, duration: 0.82 },
          at
        );

        cinematic.to(
          scene,
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.9 },
          at
        );

        const copy = scene.querySelector(
          ".reveal, .hero-copy, .final-copy"
        );

        if (copy) {
          cinematic.fromTo(
            copy,
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" },
            at + 0.18
          );
        }
      });

      cinematic.to(
        ".solar-orbit",
        { rotation: "+=42", duration: 1, ease: "none" },
        2.7 + HOLD
      );

      cinematic.to(
        ".ring-one",
        { rotation: "+=38", duration: 1, ease: "none" },
        4 + HOLD
      );

      cinematic.to(
        ".ring-two",
        { rotation: "-=42", duration: 1, ease: "none" },
        4 + HOLD
      );

      cinematic.to(
        ".comet",
        { x: -150, y: 130, rotation: -12, duration: 1, ease: "none" },
        5 + HOLD
      );

      cinematic.to(
        ".aurora-ribbon",
        {
          xPercent: 12,
          rotation: 4,
          scaleY: 1.12,
          duration: 1,
          ease: "none",
        },
        6 + HOLD
      );

      cinematic.to(
        ".exoplanet-sphere",
        { rotation: 14, scale: 1.08, duration: 1, ease: "none" },
        7 + HOLD
      );

      cinematic.to(
        ".constellation-lines",
        { strokeDashoffset: -45, duration: 1, ease: "none" },
        8 + HOLD
      );

      cinematic.to(
        ".final-planet",
        { scale: 1.12, rotation: 8, duration: 1, ease: "none" },
        9 + HOLD
      );

      cinematic.fromTo(
        ".portal",
        { scale: 0.6, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
        1.1 + HOLD
      );

      cinematic.fromTo(
        ".astro",
        { y: 120, rotation: -20, autoAlpha: 0 },
        { y: -40, rotation: 8, autoAlpha: 1, duration: 1.4, ease: "none" },
        1.1 + HOLD
      );

      cinematic.fromTo(
        ".moon-mini",
        { y: -60, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
        1.2 + HOLD
      );

      cinematic.to(
        ".portal",
        { rotation: 30, duration: 1, ease: "none" },
        1.9 + HOLD
      );

      cinematic.to(
        ".sun-core",
        { scale: 1.4, duration: 1, ease: "none" },
        2.7 + HOLD
      );

      const depthEls = gsap.utils.toArray("[data-depth]");

      const onMove = (event) => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;

        depthEls.forEach((element) => {
          const depth = Number(element.dataset.depth);

          gsap.to(element, {
            x: -nx * depth,
            y: -ny * depth,
            duration: 1.4,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("mousemove", onMove);
      cleanup.push(() => window.removeEventListener("mousemove", onMove));

      gsap.utils.toArray(".starfield").forEach((stars, index) => {
        gsap.to(stars, {
          scale: 1.08 + index * 0.01,
          y: index % 2 ? -24 : 18,
          x: index % 2 ? 12 : -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-track",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      cleanup.forEach((remove) => remove());
      lenis.off("scroll", syncScroll);
      lenis.destroy();
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root}>
      <audio
        ref={audioRef}
        src="/beyond-moon-soundtrack.mp3"
        loop
        preload="auto"
        onPause={() => setSoundOn(false)}
        onPlay={() => setSoundOn(true)}
      />

      <Header soundOn={soundOn} onToggleSound={toggleSound} />

      <div className="scroll-track">
        <div className="cinematic-stage">
          {/* HERO */}
          <section className="hero scene" id="home">
            <Stars count={150} />
            <div className="nebula nebula-blue" />
            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
            <div className="hero-aurora" />

            <div className="hero-moon-wrap">
              <div className="pulse-ring" style={{ "--s": 1.7, "--d": 0 }} />
              <div className="pulse-ring dashed" style={{ "--s": 2.2, "--d": 0.8 }} />
              <div className="pulse-ring" style={{ "--s": 2.9, "--d": 1.6 }} />
              <div className="pulse-ring" style={{ "--s": 3.7, "--d": 2.4 }} />
              <div className="pulse-ring dashed" style={{ "--s": 4.6, "--d": 3.2 }} />

              <div className="hero-moon" data-depth="12">
                <Football id="hero-football" />
              </div>
            </div>

            <div className="hero-copy">
              <span className="hero-tag">THE STORY OF A FOOTBALL LEGEND</span>
              <h1>Lionel Messi</h1>

              <p>
                From the streets of Rosario to the world's greatest football
                stages, discover the incredible journey of Lionel Messi —
                a story of talent, determination, and an unforgettable dream.
              </p>

              <div className="hero-quote">
                “One dream. One nation. One legendary number 10.”
              </div>

              <a className="scroll-cue" href="#journey">
                <span className="scroll-line" /> SCROLL TO EXPLORE <b>↓</b>
              </a>
            </div>

            <div className="coordinates">
              ROSARIO, ARGENTINA
              <br />
              THE BEGINNING OF A LEGEND
            </div>

            <div className="vertical-note">ONE DREAM. ONE LEGACY.</div>
          </section>

          {/* 01 — ROSARIO */}
          <section className="river-section scene" id="journey">
            <Stars count={150} />
            <div className="river-glow" />
            <div className="river-band river-band-one" />
            <div className="river-band river-band-two" />

            <div className="river-copy reveal">
              <SectionLabel number="01">THE BEGINNING</SectionLabel>
              <h2>
                A Dream
                <br />
                <em>Begins.</em>
              </h2>

              <p>
                Born on June 24, 1987, in Rosario, Argentina, Messi fell in love
                with football as a child. From playing in his hometown to
                chasing a dream bigger than he could imagine, his journey began
                with a simple love for the game.
              </p>
            </div>

            <span className="edge-caption">ROSARIO, ARGENTINA / 1987</span>
          </section>

          {/* 02 — BARCELONA */}
          <section className="moon-stage scene">
            <Stars count={85} />
            <div className="huge-halo" />

            <div className="moon-copy reveal">
              <SectionLabel number="02">THE BARCELONA CHAPTER</SectionLabel>
              <h2>
                Made for
                <br />
                <em>Greatness.</em>
              </h2>

              <p>
                At FC Barcelona, Messi grew into a global football icon.
                His close control, vision, passing, and remarkable goals
                created unforgettable moments for fans around the world.
              </p>

              <span className="tiny-stat">
                NUMBER 10 <small>FOREVER ICONIC</small>
              </span>
            </div>

            <div className="portal">
              <div className="portal-inner" />
            </div>

            <div className="moon-mini" data-depth="10">
              <Football id="barcelona-football" />
            </div>

            <div className="astro">
              <div data-depth="34">
                <div className="astro-bob">
                  <Player />
                </div>
              </div>
            </div>

            <span className="edge-caption">FC BARCELONA / A LEGEND RISES</span>
          </section>

          {/* 03 — RECORDS */}
          <section className="solar-section scene">
            <Stars count={100} />

            <div className="solar-copy reveal">
              <SectionLabel number="03">BEYOND LIMITS</SectionLabel>
              <h2>
                Records
                <br />
                <em>And Greatness.</em>
              </h2>

              <p>
                Season after season, Messi delivered incredible goals,
                assists, and record-breaking performances. His creativity
                and consistency helped define a generation of football.
              </p>
            </div>

            <div className="solar-art football-orbit-art">
              <div className="solar-orbit orbit-1">
                <i className="mini-planet mercury" />
              </div>
              <div className="solar-orbit orbit-2">
                <i className="mini-planet venus" />
              </div>
              <div className="solar-orbit orbit-3">
                <i className="mini-planet earth" />
              </div>
              <div className="solar-orbit orbit-4">
                <i className="mini-planet mars" />
              </div>
              <div className="solar-orbit orbit-5">
                <i className="mini-planet jupiter" />
              </div>
              <div className="sun-core">
                <Football id="records-football" />
              </div>
              <div className="sun-rays" />
            </div>

            <div className="solar-caption">
              <span>10</span>
              <span>THE ICONIC JERSEY NUMBER</span>
            </div>
          </section>

          {/* 04 — PSG / NEXT CHAPTER */}
          <section className="nebula-section scene">
            <Stars count={95} />
            <div className="nebula nebula-pink" />
            <div className="nebula nebula-cyan" />

            <div className="nebula-copy reveal">
              <SectionLabel number="04">A NEW CHAPTER</SectionLabel>
              <h2>
                A New
                <br />
                <em>Beginning.</em>
              </h2>

              <p>
                A new challenge took Messi to Paris Saint-Germain. Playing
                in a different league brought new experiences, new teammates,
                and another chapter in a career filled with milestones.
              </p>

              <a className="text-link" href="#orbit">
                DISCOVER THE JOURNEY <span>↗</span>
              </a>
            </div>

            <div className="nebula-dust dust-a" />
            <div className="nebula-dust dust-b" />
            <div className="nebula-dust dust-c" />
          </section>

          {/* 05 — ARGENTINA */}
          <section className="orbit-section scene" id="orbit">
            <Stars count={90} />

            <div className="orbit-copy reveal">
              <SectionLabel number="05">ARGENTINA</SectionLabel>
              <h2>
                Never Stop
                <br />
                <em>Believing.</em>
              </h2>

              <p>
                Messi's bond with Argentina became a story of perseverance.
                Through difficult moments and major victories, he continued
                to represent his country with pride and determination.
              </p>
            </div>

            <div className="asteroid-field">
              {Array.from({ length: 44 }, (_, index) => (
                <i
                  key={index}
                  style={{
                    "--i": index,
                    "--angle": `${index * 137.5}deg`,
                  }}
                />
              ))}
            </div>

            <div className="orbit-art">
              <div className="ring ring-one" />
              <div className="ring ring-two" />
              <div className="ring ring-three" />
              <div className="orbit-center">
                <Football id="argentina-football" />
                <span>10</span>
              </div>
              <span className="orbit-dot dot-a" />
              <span className="orbit-dot dot-b" />
              <span className="orbit-dot dot-c" />
            </div>

            <span className="edge-caption">ARGENTINA / THE NATIONAL DREAM</span>
          </section>

          {/* 06 — WORLD CUP */}
          <section className="comet-section scene">
            <Stars count={115} />

            <div className="comet-copy reveal">
              <SectionLabel number="06">A HISTORIC MOMENT</SectionLabel>
              <h2>
                A Nation's
                <br />
                <em>Dream.</em>
              </h2>

              <p>
                In December 2022, Messi led Argentina to FIFA World Cup glory
                in Qatar. After a thrilling final, Argentina lifted the trophy
                and celebrated a moment that football fans will never forget.
              </p>
            </div>

            <div className="comet">
              <span className="comet-tail" />
              <span className="comet-head" />
              <span className="comet-spark" />
            </div>

            <div className="comet-line" />
          </section>

          {/* 07 — WORLD CHAMPIONS */}
          <section className="aurora-section scene">
            <Stars count={65} />
            <div className="aurora-glow" />
            <div className="aurora-ribbon ribbon-a" />
            <div className="aurora-ribbon ribbon-b" />
            <div className="aurora-ribbon ribbon-c" />

            <div className="aurora-copy reveal">
              <SectionLabel number="07">ARGENTINA'S GLORY</SectionLabel>
              <h2>
                <em>Champions of the World.</em>
              </h2>

              <p>
                The World Cup triumph became one of the defining moments of
                Messi's career. Argentina's victory united millions of fans
                and turned a lifelong dream into reality.
              </p>

              <span className="aurora-coords">
                QATAR 2022 — WORLD CHAMPIONS
              </span>
            </div>
          </section>

          {/* 08 — INTER MIAMI */}
          <section className="exoplanet-section scene">
            <Stars count={115} />

            <div className="exoplanet-copy reveal">
              <SectionLabel number="08">A NEW DESTINATION</SectionLabel>
              <h2>
                Miami
                <br />
                <em>Magic.</em>
              </h2>

              <p>
                Messi began a new chapter with Inter Miami in the United States.
                His arrival brought fresh excitement to the club and introduced
                even more fans to his unique style of football.
              </p>

              <span className="exo-distance">
                A NEW CHAPTER IN HIS CAREER
              </span>
            </div>

            <div className="exoplanet-sphere">
              <FootballBadge className="exoplanet-surface" />
              <span className="exo-orbit-line" />
              <span className="exo-moon" />
            </div>

            <span className="edge-caption">INTER MIAMI / A NEW ERA</span>
          </section>

          {/* 09 — LEGACY */}
          <section className="constellation-section scene">
            <Stars count={100} />

            <div className="constellation-copy reveal">
              <SectionLabel number="09">MORE THAN FOOTBALL</SectionLabel>
              <h2>
                Stories Written
                <br />
                <em>in Light.</em>
              </h2>

              <p>
                Messi's legacy reaches beyond goals and trophies. His journey
                reminds people to keep learning, trust their abilities, work
                with their team, and never give up on a dream.
              </p>
            </div>

            <svg
              className="constellation-map"
              viewBox="0 0 900 550"
              aria-hidden="true"
            >
              <g className="constellation-lines">
                <path d="M70 310 L170 210 L270 250 L350 110 L455 160 L530 80 L640 150 L720 105 L820 230 L730 340 L610 300 L530 410 L390 360 L270 430 L170 370 Z" />
                <path d="M350 110 L390 360 M455 160 L610 300 M70 310 L270 430 M640 150 L610 300" />
              </g>

              {[
                [70, 310],
                [170, 210],
                [270, 250],
                [350, 110],
                [455, 160],
                [530, 80],
                [640, 150],
                [720, 105],
                [820, 230],
                [730, 340],
                [610, 300],
                [530, 410],
                [390, 360],
                [270, 430],
                [170, 370],
              ].map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r={index % 4 === 0 ? 4 : 2.5}
                  className="star-point"
                />
              ))}
            </svg>

            <span className="constellation-name">
              A LEGACY THAT INSPIRES GENERATIONS
            </span>
          </section>

          {/* 10 — FINALE */}
          <section className="final-section scene">
            <Stars count={140} />
            <div className="final-nebula" />

            <div className="final-planet">
              <FootballBadge className="final-football" />
            </div>

            <div className="final-copy reveal">
              <div className="eyebrow">
                <span /> THE LEGACY LIVES ON <span />
              </div>

              <h2>
                Beyond
                <br />
                <em>the Legend.</em>
              </h2>

              <p>
                One boy. One dream. A lifetime of unforgettable moments.
                <br />
                Lionel Messi's story continues to inspire the world.
              </p>

              <a href="#home" className="return-button">
                RETURN TO THE BEGINNING <span>↑</span>
              </a>
            </div>

            <footer>
              <span>© 2026 MESSI — THE GOAT</span>
              <span>INSPIRED BY A FOOTBALL LEGEND</span>
              <a href="#home">BACK TO TOP ↑</a>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
