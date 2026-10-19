"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, ChevronDown, Copy, Check, Menu, X,
  Wallet, Coins, ArrowLeftRight, CheckCircle2, ShieldCheck, ExternalLink,
  Globe2, Radio, CircleHelp, LockKeyhole, MoveUpRight,
} from "lucide-react";
import { token } from "../components/config";
import { publicAsset } from "../components/paths";

const navigation = [
  { label: "Home", id: "home" },
  { label: "The Story", id: "story" },
  { label: "Trading Floor", id: "floor" },
  { label: "Digital Vault", id: "vault" },
  { label: "How to Buy", id: "buy" },
  { label: "Community", id: "community" },
  { label: "FAQ", id: "faq" },
];

const questions = [
  { q: "Is this the JPM Coin issued by JPMorgan?", a: "No. JPM COIN ($JPMD) here is an independent community meme-token concept. It is not affiliated with, authorized by, sponsored by, or endorsed by JPMorgan Chase, Kinexys or the bank's JPM Coin deposit product. It is not bank-backed or redeemable for US dollars." },
  { q: "What network is the intended token on?", a: "Ethereum mainnet. Do not rely on ticker symbols alone: several unrelated tokens may use JPMD. Verify the exact official contract when one is published." },
  { q: "Is there a live, verified contract address?", a: token.contractAddress ? `The configured address is ${token.contractAddress}. Independently verify it on-chain before interacting.` : "No contract has been configured for this website yet. The project status is coming soon, and swap links are disabled until the contract is confirmed." },
  { q: "What is the planned supply and tax?", a: `The project configuration targets ${token.supply} tokens and ${token.buyTax} buy / ${token.sellTax} sell tax. These are intended values and must be checked against the deployed contract.` },
  { q: "Is liquidity burned and ownership renounced?", a: "Neither action is claimed complete here. The live token contract, LP burn transaction, and renouncement transaction need to be independently verified before these statuses can change." },
  { q: "How can I buy?", a: "Set up an Ethereum wallet, acquire ETH for transactions and gas, then wait for a verified contract address. Check contract permissions, liquidity and execution details before any swap. No price gain is promised." },
];

const storyChapters = [
  { number: "01", eyebrow: "THE CLOSING BELL", title: "4:00 PM. TIME TO GO HOME?", description: "The traders packed the calculators, straightened the ties, and told the markets to behave until morning. A spreadsheet beeped like it had done something heroic. Downtown lights dimmed on schedule, because tradition still believes money needs a bedtime." },
  { number: "02", eyebrow: "THE PLOT TWIST", title: "ETHEREUM DIDN'T GET THE MEMO.", description: "A blockchain wandered into the financial district and asked why settlement should wait for a weekday. Twelve executives opened a slide deck. Three booked a meeting about the meeting. The network kept producing blocks, unimpressed by office hours." },
  { number: "03", eyebrow: "THE MEME AWAKENS", title: "THE NIGHT SHIFT HAS ENTERED.", description: "Then came JPM COIN ($JPMD): not a bank, not a deposit, and not on the earnings-call guest list. An independent community meme about finance discovering a clock with no off switch. The joke is the culture. The chain is the punchline. The disclaimer stays on the marquee." },
];

const points = [31, 35, 32, 42, 38, 47, 44, 51, 46, 54, 48, 57, 55, 63, 59, 66, 61, 72, 68, 74, 70, 79, 74, 84];
function pathFor(d: number[]) { return d.map((n,i)=>`${i===0?"M":"L"} ${10+i*22} ${185-n*1.8}`).join(" "); }

function AbstractTerminal() {
 const [view,setView] = useState<"a"|"b">("a");
 const data = view === "a" ? points : [48,46,52,42,47,45,38,43,34,37,29,35,32,40,36,45,43,39,49,46,58,53,57,61];
 return <div className="terminal" aria-label="Illustrative chart, not live market data">
   <div className="terminalHeader"><span className="led"/><span>MARKET TERMINAL</span><span className="demoLabel">ILLUSTRATION · NOT LIVE</span></div>
   <div className="terminalBody"><div className="terminalBar"><span>JPMD / ETH <small>CONCEPT DISPLAY</small></span><div className="terminalTabs"><button aria-pressed={view==="a"} onClick={()=>setView("a")}>SCENE A</button><button aria-pressed={view==="b"} onClick={()=>setView("b")}>SCENE B</button></div></div>
   <svg key={view} className="illustrativeChart" viewBox="0 0 550 210" role="img" aria-label="Decorative non-financial simulated price-line chart">
    {Array.from({length:6},(_,i)=><line key={i} x1="0" y1={i*40+5} x2="550" y2={i*40+5} stroke="#49718c" strokeOpacity=".22" strokeDasharray="4 8"/>)}
    <path className="chartLine" pathLength={1} d={pathFor(data)} fill="none" stroke="#eec07d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={pathFor(data)+" L 516 210 L 10 210 Z"} fill="#eec07d" fillOpacity=".04"/>
   </svg><div className="terminalFooter"><span>SIMULATED PATH ONLY</span><span>NO MARKET CONNECTION</span></div>
   </div>
 </div>;
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let context: { revert: () => void } | undefined;
    let mounted = true;
    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.from(".heroInner", { opacity: 0, y: 34, duration: 1.15, ease: "power3.out" });
        gsap.fromTo(".hero .sceneArtwork", { yPercent: -1.5 }, {
          yPercent: 2.5, ease: "none",
          scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1.6 },
        });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 91%", once: true } });
        });
        gsap.from(".storyCard", {
          opacity: 0, y: 52, stagger: 0.18, duration: 0.95, ease: "power3.out",
          scrollTrigger: { trigger: ".storySequence", start: "top 84%", once: true },
        });
        gsap.from(".vaultTile", {
          opacity: 0, y: 30, stagger: 0.07, duration: 0.72, ease: "power2.out",
          scrollTrigger: { trigger: ".vaultGrid", start: "top 86%", once: true },
        });
        gsap.from(".stepCard", {
          opacity: 0, x: 18, stagger: 0.14, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".steps", start: "top 84%", once: true },
        });
      }, root);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) void run();
    const updateScroll = () => {
      const html = document.documentElement;
      const range = Math.max(1, html.scrollHeight - window.innerHeight);
      setProgress((window.scrollY / range) * 100);
      let current = "home";
      navigation.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * .42) current = link.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => { mounted = false; window.removeEventListener("scroll", updateScroll); context?.revert(); };
  }, []);

  const scrollTo = (id: string) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const copyAddress = async () => {
    if (!token.contractAddress || !navigator.clipboard) return;
    try { await navigator.clipboard.writeText(token.contractAddress); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch { setCopied(false); }
  };
  const isLive = Boolean(token.contractAddress && token.swapUrl);
  return <div className="site" ref={root}>
    <div className="readingProgress" style={{ transform: `scaleX(${progress/100})` }}/>
    <a href="#story" className="skipLink">Skip to content</a>
    <header className="top">
      <a href="#home" className="brand" aria-label="JPM COIN home"><Image src={publicAsset("/images/logo-original.png")} width={46} height={46} alt="Independent JPMD gold coin icon"/><span>JPM COIN <small>— $JPMD —</small></span></a>
      <nav aria-label="Main navigation">{navigation.map(l => <button className={active===l.id?"selected":""} aria-current={active===l.id?"true":undefined} key={l.id} onClick={()=>scrollTo(l.id)}>{l.label}</button>)}</nav>
      <button className="button navbuy" onClick={()=>scrollTo(isLive ? "buy" : "vault")}>{isLive ? "BUY $JPMD" : "LAUNCH STATUS"}<ArrowUpRight size={15}/></button>
      <button aria-label={menu?"Close menu":"Open menu"} aria-expanded={menu} className="mobilemenu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </header>
    {menu && <div className="mobilelinks">{navigation.map(l=><button key={l.id} onClick={()=>scrollTo(l.id)}>{l.label}</button>)}</div>}

    <main>
      <section id="home" className="section hero">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-1.webp")})`}} aria-hidden="true"/>
        <div className="heroInner"><p className="eyebrow"><span className="eyebrowDot"/> WALL STREET MEETS ETHEREUM</p>
          <h1>THE MONEY<br/>NEVER <em>SLEEPS.</em></h1>
          <p className="heroSub">NEITHER DO THE MEMES.</p>
          <p className="intro">Meet <strong>JPM COIN ($JPMD)</strong> — an independent Ethereum meme project inspired by finance's greatest identity crisis: discovering that a blockchain doesn't have a closing bell.</p>
          <div className="actions"><button className="button" onClick={()=>scrollTo("story")}>EXPLORE THE STORY <ArrowRight size={19}/></button><button className="button ghost" onClick={()=>scrollTo("vault")}>THE TOKEN BLUEPRINT <ArrowUpRight size={16}/></button></div>
          <p className="fine">Not JPMorgan's official JPM Coin. No bank affiliation, deposit backing, or USD redemption.</p>
        </div>
        <div className="heroCoinDecor" aria-hidden="true"><Image src={publicAsset("/images/logo-original.png")} width={300} height={300} alt="" priority/></div>
        <div className="heroVertical" aria-hidden="true">TRADITION / TECHNOLOGY / MEME CULTURE</div>
        <button className="scrollHint" onClick={()=>scrollTo("story")}>SCROLL TO BEGIN <ChevronDown size={18}/></button>
        <span className="cornerId">JPMD / ETH · VOL. 001</span>
      </section>
      <div className="tickerStrip" aria-label="Project description"><div>✦ THE FINANCIAL NIGHT SHIFT ✦ INDEPENDENT ETHEREUM MEME ✦ ONE BILLION PLANNED SUPPLY ✦ NO BANK AFFILIATION ✦ THE FINANCIAL NIGHT SHIFT ✦ INDEPENDENT ETHEREUM MEME ✦</div></div>

      <section id="story" className="section story">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-2.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="reveal sectionLead"><p className="eyebrow">CHAPTER 01 / THE ORIGIN STORY</p><h2>WHEN THE SUITS<br/>MET <em>THE CHAIN.</em></h2><p>They arrived with briefcases. Ethereum arrived with block confirmations. Naturally, nobody had prepared an agenda for this.</p></div>
          <div className="storySequence">{storyChapters.map(ch=><article key={ch.number} className="storyCard"><span className="storyNumber">{ch.number}</span><div className="storyDetails"><small>{ch.eyebrow}</small><h3>{ch.title}</h3><p>{ch.description}</p></div></article>)}</div>
          <div className="storyQuote reveal"><span>“</span><p>The exchange closed.<br/>The blockchain asked: <em>what's closed?</em></p></div>
        </div>
      </section>

      <section id="floor" className="section floor">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-4.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="sectionLead reveal"><p className="eyebrow">CHAPTER 02 / THE TRADING FLOOR</p><h2>THE DESK THAT<br/><em>NEVER CLOCKS OUT.</em></h2><p>A theatrical control room celebrating open networks, not a prediction engine. The display below is illustrative until a verified JPMD pool is linked.</p></div>
        <div className="floorGrid reveal"><AbstractTerminal/><div className="floorSide"><div className="floorStat"><small>NETWORK</small><strong>ETHEREUM</strong><span>MAINNET · ERC-20 TARGET</span></div><div className="floorStat"><small>MARKET DATA</small><strong>NOT CONNECTED</strong><span>NO FABRICATED PRICES</span></div><div className="floorStat"><small>POOL VERIFICATION</small><strong>AWAITING CA</strong><span>OFFICIAL CONTRACT REQUIRED</span></div>{token.dextools?<a className="button" href={token.dextools} target="_blank" rel="noreferrer">VIEW VERIFIED POOL <ExternalLink size={16}/></a>:<button className="button ghost" onClick={()=>scrollTo("vault")}>CHECK LAUNCH STATUS <ArrowRight size={16}/></button>}</div></div>
        </div>
      </section>

      <section id="vault" className="section vault">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-3.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="sectionLead reveal"><p className="eyebrow">CHAPTER 03 / THE DIGITAL VAULT</p><h2>THE <em>BLUEPRINT.</em><br/>NO SECRET DRAWERS.</h2><p>Built around a simple intended token configuration. Deployment and owner permissions require real on-chain proof, not slogans.</p></div>
          <div className="vaultGrid">{[
            {k:"PROJECT",v:token.name,n:"Independent concept"}, {k:"TICKER",v:"$"+token.symbol,n:"Verify contract identity"},
            {k:"NETWORK",v:token.network,n:"Target blockchain"},{k:"PLANNED SUPPLY",v:token.supply,n:"Confirm after deployment"},
            {k:"PLANNED BUY TAX",v:token.buyTax,n:"Unverified until deployed"},{k:"PLANNED SELL TAX",v:token.sellTax,n:"Unverified until deployed"},
            {k:"LP STATUS",v:token.liquidityStatus,n:"Proof required"},{k:"OWNERSHIP",v:token.ownershipStatus,n:"Proof required"},
          ].map(i=><div className="vaultTile" key={i.k}><small>{i.k}</small><strong>{i.v}</strong><span>{i.n}</span></div>)}</div>
          <button className="contract reveal" onClick={copyAddress} disabled={!token.contractAddress} aria-label={token.contractAddress?"Copy JPMD contract address":"Contract address not available"}><span className="contractLabel">CONTRACT ADDRESS</span><strong>{token.contractAddress||"COMING SOON — NOT VERIFIED"}</strong>{token.contractAddress?copied?<Check size={18}/>:<Copy size={18}/>:<LockKeyhole size={18}/>}</button>
          <p className="proofNote"><ShieldCheck size={16}/> LP burn and ownership-renounce claims will be displayed only with on-chain proof links.</p>
        </div>
      </section>

      <section id="buy" className="section buy">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-6.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="sectionLead reveal"><p className="eyebrow">CHAPTER 04 / ENTER THE NETWORK</p><h2>FOUR MOVES.<br/><em>ZERO MYSTERY.</em></h2><p>There is no trading link until a verified contract is configured. Here's what the process will look like when the project is ready.</p></div>
          <div className="steps">{[
            {Icon:Wallet,title:"PREPARE A WALLET",copy:"Use a trusted self-custody Ethereum wallet."},
            {Icon:Coins,title:"GET SOME ETH",copy:"You'll need ETH for purchases and network fees."},
            {Icon:ArrowLeftRight,title:"VERIFY, THEN SWAP",copy:"Confirm the exact contract, pool and permissions."},
            {Icon:CheckCircle2,title:"CHECK THE RECEIPT",copy:"Review your transaction on an Ethereum explorer."},
          ].map((step,i)=><div className="stepCard" key={step.title}><span className="stepNum">0{i+1}</span><step.Icon size={34}/><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div>
          {isLive?<a className="button" href={token.swapUrl} target="_blank" rel="noreferrer">OPEN VERIFIED SWAP <MoveUpRight size={16}/></a>:<button className="button ghost" onClick={()=>scrollTo("vault")}>WAITING FOR VERIFIED CA <LockKeyhole size={16}/></button>}
          <p className="buyCaution">Never buy a token based only on a matching name or ticker.</p>
        </div>
      </section>

      <section id="community" className="section community">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-5.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="sectionLead reveal"><p className="eyebrow">CHAPTER 05 / A GLOBAL NIGHT SHIFT</p><h2>THE WHOLE WORLD<br/><em>IS STILL AWAKE.</em></h2><p>Some people collect vintage watches. We collect jokes about an industry that just discovered the clock has no off button. Bring your memes, your curiosity, and your own research.</p></div>
          <div className="networkMap reveal" aria-hidden="true">
            <svg className="networkLines" viewBox="0 0 920 220">
              <path d="M70 150 C 180 40, 280 190, 390 78 S 620 40, 730 120 860 70, 880 48" />
              <path d="M120 168 C 250 200, 340 60, 510 150 S 700 190, 840 150" />
            </svg>
            {[[8,68],[28,34],[46,72],[63,28],[82,52],[93,22]].map(([x,y],i)=><span className="networkNode" key={i} style={{left:`${x}%`,top:`${y}%`,animationDelay:`${i*0.45}s`}}/>)}
          </div>
          <div className="communityActions reveal"><div><Globe2 size={26}/><span>ONE COMMUNITY<br/><strong>ACROSS TIME ZONES</strong></span></div><div><Radio size={26}/><span>UNFILTERED IDEAS<br/><strong>NOT RETURN PROMISES</strong></span></div></div>
          <div className="actions reveal">{token.telegram?<a href={token.telegram} rel="noreferrer" target="_blank" className="button">JOIN TELEGRAM <ArrowUpRight size={17}/></a>:<span className="button disabled">TELEGRAM LINK PENDING</span>}{token.twitter?<a href={token.twitter} rel="noreferrer" target="_blank" className="button ghost">FOLLOW ON X <ArrowUpRight size={17}/></a>:<span className="button ghost disabled">X LINK PENDING</span>}</div>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="sceneArtwork" style={{backgroundImage:`url(${publicAsset("/images/backgrounds/scene-6.webp")})`}} aria-hidden="true"/>
        <div className="sectionInner"><div className="sectionLead reveal"><p className="eyebrow">THE IMPORTANT DETAILS</p><h2>THE <em>FINE PRINT.</em></h2><p>A little less shouting, a little more clarity. Because transparency shouldn't require a magnifying glass.</p></div>
          <div className="faqList reveal">{questions.map((item,i)=><div className="faqItem" key={item.q}><button aria-expanded={expanded===i} aria-controls={`answer-${i}`} onClick={()=>setExpanded(expanded===i?-1:i)}><span><CircleHelp size={17}/>{item.q}</span><span aria-hidden="true">{expanded===i?"−":"+"}</span></button><div className={expanded===i?"faqAnswer open":"faqAnswer"} id={`answer-${i}`} role="region" aria-hidden={expanded!==i}><p>{item.a}</p></div></div>)}</div>
        </div>
      </section>
    </main>
    <footer><div className="footerLogo"><Image width={54} height={54} src={publicAsset("/images/logo-original.png")} alt="JPMD logo"/><div>JPM COIN <span>$JPMD · ETHEREUM</span></div></div><div className="footerDisclaimer"><strong>INDEPENDENT COMMUNITY TOKEN · NOT A BANK PRODUCT</strong><p>This project is not affiliated with, sponsored, endorsed, or issued by JPMorgan Chase, Kinexys, or any affiliate. It is not JPMorgan's JPM Coin deposit token; it is not a stablecoin, bank deposit, or redeemable claim on USD. All cryptocurrency participation carries risk. Nothing here is investment advice.</p></div><button className="backToTop" onClick={()=>scrollTo("home")}>BACK TO TOP ↑</button><small>© 2026 JPM COIN COMMUNITY</small></footer>
  </div>;
}
