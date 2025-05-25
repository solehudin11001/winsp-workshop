import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="logo">
          <span className="logo__oblique">W</span>Insp
        </a>
        <div className="footer__wrap">
          <div className="footer__list">
            <div className="footer__item">
              <span>
                WInsp Workshop, Jalan Inspiratif No.1, Kota Bandung, Indonesia
              </span>
              <span>workshopinspiratif@winsp.com</span>
              <span>+62-7222417000</span>
            </div>
            <div className="footer__item">
              <a href="#" className="footer__link">
                Instagram
              </a>
              <a href="#" className="footer__link">
                Twitter/X
              </a>
              <a href="#" className="footer__link">
                Youtube
              </a>
            </div>
            <div className="footer__item">
              <a href="#" className="footer__link">
                Hubungi Kami
              </a>
              <a href="#" className="footer__link">
                Kebijakan Privasi
              </a>
              <a href="#" className="footer__link">
                Syarat dan Ketentuan
              </a>
            </div>
          </div>
          <div className="footer__footer">
            <form className="footer__form">
              <input
                type="email"
                placeholder="Email"
                className="footer__input"
              />
              <span className="footer__error">Email tidak valid</span>
              <button type="submit" className="footer__button">
                Subscribe
              </button>
            </form>
            <span>&copy; 2025 WInsp Workshop</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
