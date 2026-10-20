"use client";

import { useEffect, useRef, useState } from "react";
import { assetSrc, assets, type AssetId } from "../components/assets";
import { token } from "../components/config";

const navigation = [
  { label: "Home", id: "home" },
  { label: "The Story", id: "story" },
  { label: "Trading Floor", id: "floor" },
  { label: "Digital Vault", id: "vault" },
  { label: "How to Buy", id: "buy" },
  { label: "Community", id: "community" },
];

const chapters = [
  {
    no: "01",
    icon: "icon_tradition" as AssetId,
    art: "story_1" as AssetId,
    eyebrow: "THE CLOSING BELL",
    title: "4:00 p.m. The suits went home.",
    copy: "Briefcases clicked shut. Calculators were told they had done enough. Somewhere a spreadsheet beeped like it had personally saved the quarter. Downtown agreed to dim the lights, because tradition still believes money needs a bedtime and a weekend.",
  },
  {
    no: "02",
    icon: "icon_ethereum" as AssetId,
    art: "story_2" as AssetId,
    eyebrow: "THE MEMO THAT BOUNCED",
    title: "Ethereum did not get the memo.",
    copy: "A blockchain wandered into the financial district and asked why settlement should wait for Monday. Twelve executives opened a slide deck. Three scheduled a meeting about the meeting. The network kept producing blocks, unimpressed by office hours, dress codes, or the concept of closed.",
  },
  {
    no: "03",
    icon: "icon_innovation" as AssetId,
    art: "story_3" as AssetId,
    eyebrow: "THE NIGHT SHIFT",
    title: "Then the meme clocked in.",
    copy: "JPM COIN ($JPMD) is not a bank, not a deposit, and not on the earnings-call guest list. It is an independent community joke about finance discovering a clock with no off switch. The punchline stays on-chain.",
  },
];

const storyIcons: { id: AssetId; label: string }[] = [
  { id: "icon_tradition", label: "Tradition" },
  { id: "icon_innovation", label: "Invention" },
  { id: "icon_community", label: "Community" },
  { id: "icon_ethereum", label: "Ethereum" },
  { id: "icon_growth", label: "Curiosity" },
];

const buySteps: { no: string; art: AssetId; title: string; copy: string }[] = [
  { no: "01", art: "step1_wallet", title: "Prepare a wallet", copy: "Use a trusted self-custody Ethereum wallet. Write the recovery phrase down somewhere that is not a screenshot named 'final-final'." },
  { no: "02", art: "step2_eth", title: "Get some ETH", copy: "ETH pays for the swap and for gas. The network does not invoice you later. It asks up front, politely and immutably." },
  { no: "03", art: "step3_swap", title: "Verify, then swap", copy: "Match the exact contract, the pool, and the permissions. A familiar ticker is not a signature. Wait until this site publishes a verified address." },
  { no: "04", art: "step4_complete", title: "Read the receipt", copy: "Open the transaction on an Ethereum explorer. Confirm what you received. Nothing on this page is a promise of profit." },
];

const scenes = {
  a: [28, 34, 31, 44, 40, 52, 47, 58, 49, 63, 55, 68, 61, 74, 66, 79, 71, 84, 76, 88],
  b: [62, 58, 66, 49, 54, 47, 41, 46, 38, 43, 36, 40, 34, 48, 44, 52, 49, 57, 63, 70],
  c: [40, 42, 39, 48, 46, 55, 52, 61, 58, 67, 63, 72, 68, 76, 71, 80, 74, 83, 78, 86],
};

function pathFor(data: number[]) {
  return data.map((n, i) => `${i === 0 ? "M" : "L"} ${16 + i * 28} ${168 - n * 1.35}`).join(" ");
}

function Picture({ id, alt = "", className, priority = false }: { id: AssetId; alt?: string; className?: string; priority?: boolean }) {
  const item = assets[id];
  return (
    <img
      src={assetSrc(id)}
      alt={alt}
      width={item.width}
      height={item.height}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
    />
  );
}

function Scene({ id, className = "" }: { id: AssetId; className?: string }) {
  return <div className={`scene ${className}`} style={{ backgroundImage: `url(${assetSrc(id)})` }} aria-hidden="true" />;
}

function Atmosphere({ id }: { id: AssetId }) {
  return <div className="atmosphere" style={{ backgroundImage: `url(${assetSrc(id)})` }} aria-hidden="true" />;
}

function Action({
  children,
  onClick,
  href,
  tone = "primary",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  tone?: "primary" | "ghost";
}) {
  const className = tone === "ghost" ? "btn ghost" : "btn";
  if (href) {
    return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
  }
  return <button className={className} type="button" onClick={onClick}>{children}</button>;
}

function FooterMarks() {
  const marks = [
    { href: token.twitter, label: "X" },
    { href: token.telegram, label: "Telegram" },
  ];
  return (
    <div className="footerMarks">
      {marks.map((mark) => {
        const graphic = mark.label === "X" ? (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="21" />
            <path d="M22 22l7 7M35 35l7 7M42 22l-7 7M29 35l-7 7" />
            <rect x="24" y="29" width="7" height="5.2" rx="2" />
            <rect x="33" y="29" width="7" height="5.2" rx="2" />
            <path d="M31 31.6h2" />
            <path d="M45 14c3.4.4 5.2 3.6 3.6 6.4" />
            <path d="M47.2 13.2c2.6 2.2 3 4.8 1.4 7.2" />
          </svg>
        ) : (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="21" />
            <path d="M19 33 L46 21 L37 45 L30.5 36.5 Z" />
            <path d="M30.5 36.5 L46 21" />
            <path d="M28 35.2c1.8 1.6 3.6 1.6 5.2 0" />
            <path d="M24 40.5l3.2-2.2" />
          </svg>
        );
        return mark.href ? (
          <a key={mark.label} href={mark.href} target="_blank" rel="noreferrer" aria-label={mark.label}>{graphic}</a>
        ) : (
          <span key={mark.label} aria-label={mark.label}>{graphic}</span>
        );
      })}
    </div>
  );
}

function Terminal() {
  const [view, setView] = useState<"a" | "b" | "c">("a");
  const data = scenes[view];
  return (
    <div className="terminal" aria-label="Illustrative chart, not live market data">
      <div className="terminalHeader">
        <span className="led" />
        <span>MARKET TERMINAL</span>
        <span className="demoLabel">ILLUSTRATION · NOT LIVE</span>
      </div>
      <div className="terminalBody">
        <div className="terminalBar">
          <span>JPMD / WETH <small>CONCEPT DISPLAY</small></span>
          <div className="terminalTabs" role="group" aria-label="Illustration scenes">
            {(["a", "b", "c"] as const).map((key) => (
              <button key={key} type="button" aria-pressed={view === key} onClick={() => setView(key)}>
                SCENE {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <svg key={view} className="illustrativeChart" viewBox="0 0 560 190" role="img" aria-label="Decorative simulated line, not a price">
          {Array.from({ length: 5 }, (_, i) => (
            <line key={i} x1="0" y1={18 + i * 36} x2="560" y2={18 + i * 36} />
          ))}
          <path className="chartLine" pathLength={1} d={pathFor(data)} />
        </svg>
        <div className="terminalFooter">
          <span>SIMULATED PATH ONLY</span>
          <span>NO MARKET CONNECTION</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const live = Boolean(token.contractAddress && token.swapUrl);

  useEffect(() => {
    let context: { revert: () => void } | undefined;
    let mounted = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.from(".heroRise", { y: mobile ? 16 : 32, opacity: 0, stagger: 0.1, duration: mobile ? 0.55 : 0.95, ease: "power3.out" });
        gsap.from(".heroFloat", { opacity: 0, y: 18, stagger: 0.12, duration: 0.8, delay: 0.25, ease: "power2.out" });
        if (!mobile) {
          gsap.fromTo(".hero .scene", { yPercent: -2 }, {
            yPercent: 4, ease: "none",
            scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1.4 },
          });
        }
        gsap.from(".chapter", {
          y: 48, opacity: 0, stagger: 0.18, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".chapterList", start: "top 80%", once: true },
        });
        gsap.from(".vaultDoor", {
          scale: 0.9, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".vaultStage", start: "top 78%", once: true },
        });
        gsap.from(".vaultCard", {
          y: 26, opacity: 0, stagger: 0.07, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".vaultGrid", start: "top 82%", once: true },
        });
        gsap.from(".step", {
          y: 28, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".steps", start: "top 80%", once: true },
        });
        gsap.from(".socialCard", {
          y: 22, opacity: 0, stagger: 0.08, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: ".socialGrid", start: "top 84%", once: true },
        });
      }, root);
    };
    if (!reduced) void run();

    const onScroll = () => {
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress((window.scrollY / range) * 100);
      let current = "home";
      navigation.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.38) current = link.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      mounted = false;
      window.removeEventListener("scroll", onScroll);
      context?.revert();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const contractDisplay = token.contractAddress || "Coming Soon..";
  const copyAddress = () => {
    const value = contractDisplay;
    let ok = false;
    try {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.focus();
      field.select();
      field.setSelectionRange(0, value.length);
      ok = document.execCommand("copy");
      field.remove();
    } catch {
      ok = false;
    }
    const showCopied = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    };
    if (ok) showCopied();
    if (!navigator.clipboard?.writeText) return;
    void navigator.clipboard.writeText(value).then(() => {
      if (!ok) showCopied();
    }).catch(() => undefined);
  };

  const communityTiles: { id: AssetId; label: string; href: string }[] = [
    { id: "community_people", label: "Community", href: "" },
    { id: "community_twitter", label: "X", href: token.twitter },
    { id: "community_telegram", label: "Telegram", href: token.telegram },
    { id: "community_chart", label: "Community chart", href: "" },
  ];

  const vaultCards: { icon: AssetId; label: string }[] = [
    { icon: "icon_supply", label: "Total Supply: 1 Billion" },
    { icon: "icon_tax", label: "Buy Tax: 0%" },
    { icon: "icon_tax", label: "Sell Tax: 0%" },
    { icon: "icon_burn", label: "LP Status: Burn" },
    { icon: "icon_renounce", label: "Ownership: Renounce" },
    { icon: "icon_contract", label: "Network: Ethereum" },
  ];

  return (
    <div className="site" ref={root}>
      <div className="readingProgress" style={{ transform: `scaleX(${progress / 100})` }} />
      <a className="skipLink" href="#story">Skip to content</a>
      <header className="top">
        <a className="brand" href="#home" aria-label="JPM COIN home">
          <Picture id="logo_circle" alt="" priority />
          <span>JPM COIN <small>$JPMD</small></span>
        </a>
        <nav aria-label="Main navigation">
          {navigation.map((link) => (
            <button key={link.id} type="button" className={active === link.id ? "selected" : ""} aria-current={active === link.id ? "true" : undefined} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>
        <button className="mobilemenu" type="button" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu((open) => !open)}>
          <span /><span /><span />
        </button>
      </header>
      {menu && (
        <div className="mobilelinks">
          {navigation.map((link) => (
            <button key={link.id} type="button" onClick={() => scrollTo(link.id)}>{link.label}</button>
          ))}
        </div>
      )}

      <main>
        <section className="panel hero" id="home">
          <Scene id="hero_bg" className="pos-hero" />
          <img className="heroOverlay" src={assetSrc("hero_overlay")} alt="" />
          <Picture id="hero_light" className="heroFloat light" alt="" priority />
          <Picture id="hero_smoke" className="heroFloat smoke" alt="" />
          <Picture id="hero_eth" className="heroFloat eth" alt="" priority />
          <Picture id="hero_coins" className="heroFloat coins" alt="" />
          <Picture id="hero_flag" className="heroFloat flag" alt="" />
          <Picture id="hero_bull" className="heroBullMobile" alt="" priority />
          <div className="heroLayout wrap">
            <div className="heroKeep" aria-hidden="true" />
            <div className="heroCopy">
              <p className="eyebrow heroRise">Wall Street meets Ethereum</p>
              <h1 className="heroRise">The money<br />never <em>sleeps.</em></h1>
              <p className="heroKicker heroRise">Neither do the memes.</p>
              <p className="lede heroRise">Meet <strong>JPM COIN ($JPMD)</strong> — an independent Ethereum meme about a financial district that just discovered the blockchain does not have a closing bell.</p>
              <div className="actions heroRise">
                <Action onClick={() => scrollTo("story")}>Explore the story</Action>
                <Action tone="ghost" onClick={() => scrollTo("vault")}>The token blueprint</Action>
              </div>
              <Picture id="hero_wallstreet" className="wallSign heroRise" alt="" />
            </div>
          </div>
          <button className="scrollHint" type="button" onClick={() => scrollTo("story")}>Scroll to begin</button>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>Independent Ethereum meme · One billion total supply · No Tax · LP Burned · Ownership Renounced · Independent Ethereum meme · One billion total supply · No Tax · LP Burned · Ownership Renounced · </div>
        </div>

        <section className="panel story" id="story">
          <Scene id="story_bg" />
          <div className="fadeTop" aria-hidden="true" />
          <div className="wrap">
            <div className="lead split">
              <div>
                <p className="eyebrow">Chapter 01 · The origin</p>
                <h2>When the suits met <em>the chain.</em></h2>
                <p>They arrived with marble, flags, and a timetable. Ethereum arrived with a crystal and no intention of clocking out. Nobody had prepared an agenda for that.</p>
              </div>
              <Picture id="mascot_main" className="mascot" alt="Golden bull mascot of the independent JPMD community" />
            </div>
            <div className="iconRow">
              {storyIcons.map((item) => (
                <div className="iconChip" key={item.id}>
                  <Picture id={item.id} alt="" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="chapterList">
              {chapters.map((chapter) => (
                <article className="chapter" key={chapter.no}>
                  <div className="chapterMedia">
                    <Picture id={chapter.art} alt="" />
                  </div>
                  <div className="chapterBody">
                    <Picture id={chapter.icon} alt="" />
                    <span className="chapterNo">{chapter.no}</span>
                    <small>{chapter.eyebrow}</small>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <blockquote className="quoteBlock">
              <p>The exchange closed. The blockchain asked: <em>what&apos;s closed?</em></p>
            </blockquote>
          </div>
        </section>

        <section className="panel floor" id="floor">
          <Scene id="bg_grid" />
          <div className="fadeTop" aria-hidden="true" />
          <div className="scrim" aria-hidden="true" />
          <div className="wrap">
            <div className="lead">
              <p className="eyebrow">Chapter 02 · The trading floor</p>
              <h2>The desk that <em>never clocks out.</em></h2>
              <p>A control room for the idea of an open network. The chart below is a staged illustration. It is not a quote, a forecast, or a connection to any market.</p>
            </div>
            <div className="floorGrid">
              <Terminal />
              <aside className="floorSide">
                <figure className="floorArt">
                  <Picture id="data_panel" alt="Decorative gold and blue market frame, not live data" />
                  <figcaption>ILLUSTRATION · NOT LIVE</figcaption>
                </figure>
              </aside>
            </div>
          </div>
        </section>

        <section className="panel vault" id="vault">
          <Scene id="tokenomics_bg" />
          <div className="fadeTop" aria-hidden="true" />
          <div className="scrim light" aria-hidden="true" />
          <div className="wrap">
            <div className="lead">
              <p className="eyebrow">Chapter 03 · The digital vault</p>
              <h2>The blueprint. <em>No secret drawers.</em></h2>
            </div>
            <div className="vaultStage">
              <Picture id="coin_stack" className="coinStack" alt="" />
              <Picture id="vault_door" className="vaultDoor" alt="Golden vault door emblem" />
              <Picture id="coin_stack" className="coinStack right" alt="" />
            </div>
            <div className="vaultGrid">
              {vaultCards.map((card) => (
                <article className="vaultCard" key={card.label}>
                  <Picture id={card.icon} alt="" />
                  <strong>{card.label}</strong>
                </article>
              ))}
            </div>
            <div className="contract">
              <Picture id="icon_contract" alt="" />
              <span>Contract address</span>
              <strong>{contractDisplay}</strong>
              <button type="button" className="btn" onClick={copyAddress} aria-label="Copy contract address">{copied ? "Copied" : "Copy"}</button>
            </div>
          </div>
        </section>

        <section className="panel buy" id="buy">
          <Scene id="buy_bg" />
          <div className="fadeTop" aria-hidden="true" />
          <div className="scrim" aria-hidden="true" />
          <div className="wrap">
            <div className="lead">
              <p className="eyebrow">Chapter 04 · Enter the network</p>
              <h2>Four moves. <em>Zero mystery.</em></h2>
              <p>This is the path, not the door.</p>
            </div>
            <div className="steps">
              {buySteps.map((step, index) => (
                <article className="step" key={step.no}>
                  <div className="stepMedia"><Picture id={step.art} alt="" /></div>
                  <div className="stepBody">
                    <span>{step.no}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                  {index < buySteps.length - 1 && <i className="stepArrow" aria-hidden="true" />}
                </article>
              ))}
            </div>
            {live && <div className="actions"><Action href={token.swapUrl}>Open verified swap</Action></div>}
          </div>
        </section>

        <section className="panel community" id="community">
          <Scene id="community_bg" className="pos-community" />
          <Atmosphere id="bg_particles" />
          <div className="fadeTop" aria-hidden="true" />
          <div className="scrim light" aria-hidden="true" />
          <div className="wrap">
            <div className="lead">
              <p className="eyebrow">Chapter 05 · A global night shift</p>
              <h2>The whole world <em>is still awake.</em></h2>
              <p>One independent community, stretched across time zones. Bring jokes and your own research.</p>
            </div>
            <div className="socialGrid">
              {communityTiles.map((item) => {
                const image = <Picture id={item.id} alt={item.label} />;
                return item.href ? (
                  <a className="socialCard" key={item.id} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>{image}</a>
                ) : (
                  <article className="socialCard" key={item.id}>{image}</article>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <footer>
        <Scene id="footer_bg" className="pos-footer" />
        <Atmosphere id="bg_stars" />
        <img className="footerLight" src={assetSrc("bg_lightline")} alt="" />
        <div className="wrap footerGrid">
          <div className="footerBrand">
            <Picture id="icon_logo_small" alt="JPM COIN logo" />
            <div>
              <strong>JPM COIN</strong>
              <span>$JPMD · Ethereum</span>
            </div>
            <Picture id="icon_eth_small" alt="" />
          </div>
          <button className="backToTop" type="button" onClick={() => scrollTo("home")}>Back to top</button>
          <FooterMarks />
        </div>
      </footer>
    </div>
  );
}
