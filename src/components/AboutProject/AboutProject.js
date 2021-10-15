import './AboutProject.css';

function AboutProject(props) {
    return (
      <section className="about-project">
          <div className="about-project__container">
              <h2 className="about-project__title">О проекте</h2>
              <div className="about-project__info">
                <div className="about-project__column">
                    <h3 className="about-project__column-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <h3 className="about-project__column-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
              </div>
              <div className="about-project__time">
                <div className="about-project__part about-project__part_back">1 неделя</div>
                <div className="about-project__part about-project__part_front">4 недели</div>
                <div className="about-project__caption about-project__caption_back">Back-end</div>
                <div className="about-project__caption about-project__caption_front">Front-end</div>
              </div>     
          </div>
      </section>
    );
  }
  
  export default AboutProject;