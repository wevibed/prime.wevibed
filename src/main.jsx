import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WA = "263776874677";
const wa = (message = "Hello The Prime Hide, I would like to enquire about your products.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const A = "/assets/";

const categories = [
  { title: "Belts", copy: "Leather belts for everyday wear.", image: "belt-brown.webp" },
  { title: "Wallets", copy: "Practical leather essentials.", image: "wallet-black.webp" },
  { title: "Shoe Care", copy: "Polish and care for leather footwear.", image: "polish-tan-boot.webp" },
  { title: "Leather Care", copy: "Products to clean and maintain leather.", image: "leather-cleaner.webp" },
];

const products = [
  ["Tan Leather Belt", "belt-tan.webp"],
  ["Brown Leather Belt", "belt-brown.webp"],
  ["Black Leather Belt", "belt-black.webp"],
  ["Tan Boot Polish", "polish-tan-boot.webp"],
  ["Black Shoe Polish", "polish-black.webp"],
  ["Leather Cleaner", "leather-cleaner.webp"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menu, setMenu] = React.useState(false);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <div className="topbar">
        <span>EASTGATE MARKET · SHOP G25 · HARARE</span>
        <span>LEATHER ESSENTIALS</span>
      </div>

      <header className="nav">
        <a href="#home" className="brand" onClick={close}>
          <strong>THE PRIME HIDE</strong>
          <small>LEATHER ESSENTIALS</small>
        </a>

        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? "×" : "☰"}
        </button>

        <nav className={menu ? "links open" : "links"}>
          <a href="#home" onClick={close}>Home</a>
          <a href="#collection" onClick={close}>Collection</a>
          <a href="#care" onClick={close}>Shoe Care</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#visit" onClick={close}>Visit Us</a>
          <a className="nav-wa" href={wa()} target="_blank" rel="noreferrer" onClick={close}>
            WhatsApp <Arrow />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero image-section">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">EASTGATE MARKET · SHOP G25 · HARARE</p>
            <h1>Everyday <em>leather.</em><br />Done right.</h1>
            <p className="hero-copy">
              Leather goods and shoe-care essentials for work, everyday and outdoor wear.
            </p>
            <div className="actions">
              <a className="btn primary" href={wa("Hello The Prime Hide, I would like to shop on WhatsApp.")} target="_blank" rel="noreferrer">
                SHOP ON WHATSAPP <Arrow />
              </a>
              <a className="btn ghost" href="#collection">EXPLORE COLLECTION <Arrow /></a>
            </div>
            <div className="hero-points">
              <span>QUALITY LEATHER GOODS</span>
              <span>PREMIUM SHOE CARE</span>
              <span>EASTGATE MARKET · G25</span>
            </div>
          </div>
        </section>

        <section id="collection" className="collection image-section">
          <div className="section-bg bg-leather" />
          <div className="section-overlay" />
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">OUR COLLECTION</p>
                <h2>Leather <em>essentials.</em></h2>
              </div>
              <p>Explore selected leather goods and care essentials.</p>
            </div>

            <div className="category-grid">
              {categories.map((item) => (
                <a className="category" key={item.title} href={wa(`Hello The Prime Hide, I am interested in ${item.title}.`)} target="_blank" rel="noreferrer">
                  <img src={A + item.image} alt={item.title} loading="lazy" />
                  <div className="category-shade" />
                  <div className="category-copy">
                    <span>{item.title}</span>
                    <p>{item.copy}</p>
                    <b>ENQUIRE <Arrow /></b>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="care image-section">
          <div className="section-bg bg-care" />
          <div className="section-overlay strong" />
          <div className="care-inner">
            <div>
              <p className="eyebrow">SHOE CARE</p>
              <h2>Keep good leather<br /><em>looking good.</em></h2>
              <p className="body-copy">
                Impala shoe-care products to clean, nourish and help maintain leather footwear.
              </p>
              <a className="btn primary" href={wa("Hello The Prime Hide, I would like to enquire about shoe-care products.")} target="_blank" rel="noreferrer">
                EXPLORE SHOE CARE <Arrow />
              </a>
            </div>

            <div className="care-product">
              <img src={A + "polish-tan-boot.webp"} alt="Impala tan boot polish" loading="lazy" />
              <div>
                <strong>IMPALA</strong>
                <span>Tan Boot Polish</span>
              </div>
            </div>

            <ul className="benefits">
              <li>Revives dull leather</li>
              <li>Helps prevent dryness and cracking</li>
              <li>Easy to use</li>
              <li>Suitable for work, casual and outdoor footwear</li>
            </ul>
          </div>
        </section>

        <section id="about" className="about image-section">
          <div className="section-bg bg-about" />
          <div className="section-overlay" />
          <div className="about-inner">
            <div>
              <p className="eyebrow">ABOUT THE PRIME HIDE</p>
              <h2>Leather goods<br /><em>for every occasion.</em></h2>
              <p className="body-copy">
                The Prime Hide brings together leather essentials and shoe-care products
                in one convenient destination at EastGate Market.
              </p>
              <a className="btn ghost" href="#visit">FIND THE STORE <Arrow /></a>
            </div>
            <div className="glass-stats">
              <div><b>01</b><span>Leather<br />essentials</span></div>
              <div><b>02</b><span>Shoe-care<br />products</span></div>
              <div><b>03</b><span>EastGate<br />Market</span></div>
            </div>
          </div>
        </section>

        <section className="products image-section">
          <div className="section-bg bg-products" />
          <div className="section-overlay strong" />
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">SELECTED PRODUCTS</p>
                <h2>Made for <em>everyday.</em></h2>
              </div>
              <a className="text-link" href={wa("Hello The Prime Hide, please send me your available products.")} target="_blank" rel="noreferrer">
                ASK WHAT'S AVAILABLE <Arrow />
              </a>
            </div>

            <div className="product-grid">
              {products.map(([name, image]) => (
                <a className="product" href={wa(`Hello The Prime Hide, I am interested in ${name}.`)} target="_blank" rel="noreferrer" key={name}>
                  <div className="product-img"><img src={A + image} alt={name} loading="lazy" /></div>
                  <div className="product-meta">
                    <span>{name}</span><b><Arrow /></b>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="visit image-section">
          <div className="section-bg bg-store" />
          <div className="section-overlay strong" />
          <div className="visit-inner">
            <div>
              <p className="eyebrow">VISIT THE STORE</p>
              <h2>EastGate Market<br /><em>Shop G25.</em></h2>
              <p className="body-copy">Find The Prime Hide at EastGate Market, Shop G25, Harare.</p>
            </div>
            <div className="contact-card">
              <div><small>LOCATION</small><strong>EastGate Market · Shop G25<br />Harare, Zimbabwe</strong></div>
              <div><small>WHATSAPP</small><strong>+263 77 687 4677</strong></div>
              <a className="btn primary" href={wa()} target="_blank" rel="noreferrer">MESSAGE US <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="contact image-section">
          <div className="section-bg bg-contact" />
          <div className="section-overlay" />
          <div className="contact-inner">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Have a question?<br /><em>Let's talk leather.</em></h2>
            <p className="body-copy">WhatsApp us for product enquiries and availability.</p>
            <div className="actions">
              <a className="btn primary" href={wa()} target="_blank" rel="noreferrer">WHATSAPP US NOW <Arrow /></a>
              <a className="btn ghost" href="tel:+263776874677">CALL +263 77 687 4677</a>
            </div>
            <div className="socials">
              <a href="https://tiktok.com/@theprimehide" target="_blank" rel="noreferrer">TikTok · @theprimehide</a>
              <a href="https://www.threads.com/@the_prime_hide" target="_blank" rel="noreferrer">Threads · @the_prime_hide</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>THE PRIME HIDE</span>
        <span>LEATHER ESSENTIALS · HARARE</span>
        <span>© 2026</span>
      </footer>

      <a className="floating-wa" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp The Prime Hide">◔</a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
