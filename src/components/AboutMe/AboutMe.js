import './AboutMe.css';
import Info from '../Info/Info';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  
  return (
    <Info title="Студент" linkId="about-student" type="student" content="Информация о студенте.">
    <section className="about">
      <div className="about__container">
        <div className="about__wrap">
          <div className="about__column about__column_person">
            <h3 className="about__name">Инна</h3>
            <p className="about__info">Фронтенд-разработчик, 32 года</p>
            <p className="about__description">Я родилась и выросла в закрытом городе Межгорье в Башкирии, закончила экономический факультет ЮУрГУ в Челябинске, прожила 5 лет в Екатеринбурге. Долгое время работала маркетологом в разных сферах: строительство, фармация, event-маркетинг, в 2016 сменила направление деятельности в сторону оптимизации процессов, а в марте 2021 ушла с головой в код и в июле 2021 мы с мужем и дочкой переехали в Москву. Работаю в крупнейшем банке страны, занимаюсь веб-разработкой. В свободное время хожу в тренажерный зал, вяжу и занимаюсь саморазвитием. </p>
            <ul className="about__social">
              <li className="about__social-item">
                <a href="https://instagram.com/innadobrynina" className="about__social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="about__social-item">
                <a href="https://github.com/innadobrynina" className="about__social-link" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>
          <div className="about__column about__column_avatar">
            <img className="about__avatar" src={avatar} alt="Аватар"/>
          </div>
          
        </div>

      </div>
      </section>
      </Info>
    
  );
}

export default AboutMe;