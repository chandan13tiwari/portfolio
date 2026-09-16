import "./App.css";
import portrait from "./asset/me-cutout.png";
import commentOne from "./assets/comments/codex-clipboard-1caa38c5-67cb-4c82-bb12-3b5e5b19b404.png";
import commentTwo from "./assets/comments/codex-clipboard-f5c73264-6f04-4620-bfa1-bb5768b758ae.png";
import commentThree from "./assets/comments/codex-clipboard-515f4204-0893-4ffb-a206-22881b542ed8.png";
import commentFour from "./assets/comments/codex-clipboard-58c6b19b-fd06-4590-9be0-92a0587eb0a1.png";
import commentFive from "./assets/comments/codex-clipboard-1cd8124f-7fe3-4b87-9c08-00a2378f928f.png";
import commentSix from "./assets/comments/codex-clipboard-e8c7495a-f08a-49a1-986d-0cdf2ebcbbf3.png";
import commentSeven from "./assets/comments/codex-clipboard-9bd3aed1-22e6-4c36-b1e4-f07d3e1a5c95.png";
import commentEight from "./assets/comments/codex-clipboard-ca54064c-8fb8-496f-b28f-4ed861df7c80.png";
import commentNine from "./assets/comments/codex-clipboard-58a13be1-0ae5-4fab-9bd8-5c78246a5c73.png";
import commentTen from "./assets/comments/codex-clipboard-deac627d-f7cb-402f-a3f7-3365205047d3.png";
import commentEleven from "./assets/comments/codex-clipboard-ab71e6b0-12f4-4f7a-9fb8-14be43b06406.png";
import commentTwelve from "./assets/comments/codex-clipboard-cc2f58b8-d497-4f9d-9109-16958f2256aa.png";

const comments = [commentOne, commentTwo, commentThree, commentFour, commentFive, commentSix, commentSeven, commentEight, commentNine, commentTen, commentEleven, commentTwelve];
const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="#top">CT<span>./</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#watch">Watch</a><a href="#notes">Notes</a></div>
      <a className="linkedin-link" href="https://www.linkedin.com/in/chandan-tiwari-uk/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
    </nav>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><i /> SOFTWARE ENGINEER · PRODUCT BUILDER · CREATOR</p>
        <h1>Curious by<br /><em>default.</em></h1>
        <p className="intro">Hey, I’m Chandan. I build useful things, explain tricky tech in simple words, and keep finding new things to learn.</p>
        <div className="hero-actions"><a className="button button-solid" href="#work">See what I’m building <Arrow /></a><a className="button button-quiet" href="https://www.youtube.com/@proofofconceptcode" target="_blank" rel="noreferrer">Watch on YouTube <Arrow /></a></div>
      </div>
      <div className="portrait-wrap"><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><div className="portrait-backdrop"><img src={portrait} alt="Chandan Tiwari" className="portrait" /></div><img src={portrait} alt="" aria-hidden="true" className="portrait-head" /><div className="status-card"><span className="status-dot" /> Currently: building, teaching & learning</div></div>
    </section>

    <section className="statement shell"><p>I don’t code just to code. I like taking something that feels complicated, pulling it apart, and helping it reach that <em>“oh, now I get it”</em> moment.</p></section>

    <section id="work" className="section shell">
      <div className="section-heading"><p className="eyebrow"><i /> THINGS I’VE BUILT</p><h2>Projects with a<br /><em>point of view.</em></h2></div>
      <div className="product-grid">
        <a className="product-card academy" href="https://www.poccodeacademy.co.in/" target="_blank" rel="noreferrer"><div className="product-meta"><span>01 / EDUCATION</span><Arrow /></div><div><p className="product-mark">&lt;/&gt;</p><h3>Proof Of Concept<br />Code Academy</h3><p>Practical, Hinglish learning for developers who want to build with confidence.</p></div><span className="product-footer">Explore the academy <Arrow /></span></a>
        <a className="product-card library" href="https://www.librbary.co.in/" target="_blank" rel="noreferrer"><div className="product-meta"><span>02 / PRODUCT</span><Arrow /></div><div><p className="product-mark">lb.</p><h3>Librbary</h3><p>A new product I recently launched. Built from curiosity, care, and a desire to make something useful.</p></div><span className="product-footer">Visit Librbary <Arrow /></span></a>
      </div>
    </section>

    <section id="watch" className="section watch-section"><div className="shell">
      <div className="section-heading"><p className="eyebrow"><i /> ON YOUTUBE</p><h2>I make things<br /><em>make sense.</em></h2></div>
      <div className="channel-grid">
        <a className="channel-card tech" href="https://www.youtube.com/@proofofconceptcode" target="_blank" rel="noreferrer"><div className="youtube-dot">▶</div><div><span>TECH, EXPLAINED</span><h3>Proof Of Concept Code</h3><p>Java, APIs, system design, interviews and the practical thinking behind good engineering.</p></div><Arrow /></a>
        <a className="channel-card life" href="https://www.youtube.com/@ChanduuAndVeenuu" target="_blank" rel="noreferrer"><div className="cam-mark">◉</div><div><span>OFF THE CLOCK</span><h3>Chanduu & Veenuu</h3><p>Vlogs, everyday moments and the life around all the work.</p></div><Arrow /></a>
      </div>
    </div></section>

    <section id="notes" className="section shell notes-section"><div className="section-heading notes-heading"><p className="eyebrow"><i /> FROM THE COMMUNITY</p><h2>The best part is<br /><em>hearing this.</em></h2><p>Little reminders that learning in public can make a real difference.</p></div><div className="comment-wall">{comments.map((comment, index) => <img key={comment} className={`comment comment-${index + 1}`} src={comment} alt="A comment from a Proof Of Concept Code viewer" loading="lazy" />)}</div></section>

    <section className="closing shell"><div><p className="eyebrow"><i /> ALSO INTO</p><h2>Music, new ideas,<br />and the next <em>why not?</em></h2></div><p>I’m a learner first. Software, products, videos, music—each is another way to stay curious and make something worth sharing.</p></section>
    <footer className="shell footer"><a className="wordmark" href="#top">CT<span>./</span></a><p>© {new Date().getFullYear()} Chandan Tiwari</p><a href="https://www.linkedin.com/in/chandan-tiwari-uk/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></footer>
  </main>;
}

export default App;
