import './Footer.css';

const Footer = ({ pathname }) => {
  const footerClassName = (
    `footer
    ${(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && 'footer_visible'}`
  )
  return (
    <footer className={footerClassName}>
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm</p>
        <div className="footer__wrap">
          <p className="footer__copyright">© {new Date().getFullYear()}</p>
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com/innadobrynina" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li className="footer__link-item">
              <a href="https://instagram.com/innadobrynina" className="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;