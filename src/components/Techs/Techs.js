import './Techs.css';
import Info from '../Info/Info';

const Techs = () => {
    return (
        <Info title="Технологии" linkId="techs" type="techs" content="Информация о технологиях.">
            <section className="techs">
                {/* <h3 className="techs__title">Технологии</h3> */}
                <h2 className="techs__caption">7 технологий</h2>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-item">HTML</li>
                    <li className="techs__list-item">CSS</li>
                    <li className="techs__list-item">JS</li>
                    <li className="techs__list-item">React</li>
                    <li className="techs__list-item">Git</li>
                    <li className="techs__list-item">Express.js</li>
                    <li className="techs__list-item">mongoDB</li>
                </ul>
            </section>
        </Info>
    );
  };
  
  export default Techs;