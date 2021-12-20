import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__sites">
          <li className="portfolio__sites-item">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/innadobrynina/how-to-learn" className="portfolio__site-link">
              <h3 className="portfolio__site">Статичный сайт</h3>
            </a>
          </li>
          <li className="portfolio__sites-item">
            <a target="_blank" rel="noopener noreferrer" href="https://innadobrynina.github.io/mesto/index.html" className="portfolio__site-link">
              <h3 className="portfolio__site">Адаптивный сайт</h3>
            </a>
          </li>
          <li className="portfolio__sites-item">
            <a target="_blank" rel="noopener noreferrer" href="https://frontend.indob.nomoredomains.monster/" className="portfolio__site-link">
              <h3 className="portfolio__site">Одностраничное приложение</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;