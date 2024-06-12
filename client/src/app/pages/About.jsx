import React from 'react';
import MainBanner from '../components/MainBanner';
import Svg from '../../assets/svg/Svg';
import oldMan from '../../assets/images/old_man.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <MainBanner name={'О нас'} />
        <section className="about__story">
          <div className="container">
            <div className="about__story-container">
              <h2 className="about__story-title">
                Наша история
                <Svg name={'decor-title'} width={82} height={40} fill={'#4b4342'} stroke={'none'} />
              </h2>
              <p className="about__story-text">
                Наша кондитерская компания была основана в далеком 2012 году. Тогда она называлась
                просто “Кондитерская фабрика”, но с тех пор многое изменилось. Компания начала свою
                работу с небольшого производства, расположенного в небольшом городке на окраине
                страны. Основной продукцией были конфеты, печенье и вафли. Сегодня наша кондитерская
                компания является одним из лидеров на рынке сладостей. Мы производим более 100 видов
                конфет, более 50 видов печенья и вафель, а также множество других кондитерских
                изделий.
              </p>
            </div>
          </div>
        </section>
        <section className="about__mission">
          <div className="about__mission-case">
            <div className="container">
              <div className="about__mission-container">
                <h2 className="about__mission-title">Наша миссия</h2>
                <p className="about__mission-text">
                  Дарить радость и наслаждение вкусом каждому, кто прикоснется к нашим сладостям,
                  создавая неповторимые и изысканные кондитерские шедевры
                </p>
                <ul className="about__mission-list">
                  <li className="about__mission-item">
                    <div className="about__mission-item-img">
                      <Svg
                        name={'mission-item'}
                        width={120}
                        height={120}
                        fill={'none'}
                        stroke={'#ffffff'}
                      />
                    </div>
                    <h3 className="about__mission-item-title">Слоган</h3>
                    <div className="about__mission-item-text">
                      Сладкое счастье в каждом мгновении! Наслаждайтесь вкусом наших десертов.
                      Покорите новые вкусовые вершины с нами!!
                    </div>
                  </li>
                  <li className="about__mission-item">
                    <div className="about__mission-item-img">
                      <Svg
                        name={'mission-item'}
                        width={120}
                        height={120}
                        fill={'none'}
                        stroke={'#ffffff'}
                      />
                    </div>
                    <h3 className="about__mission-item-title">Качество</h3>
                    <div className="about__mission-item-text">
                      Компания заслуженно пользуется популярностью среди покупателей благодаря
                      отменному качеству своей продукции. Вкус наших сладостей не оставит
                      равнодушным даже самого искушенного гурмана. Мы очень ответственно подходим к
                      выбору ингредиентов и процессу производства, что гарантирует безопасность и
                      экологичность их товаров.
                    </div>
                  </li>
                  <li className="about__mission-item">
                    <div className="about__mission-item-img">
                      <Svg
                        name={'mission-item'}
                        width={120}
                        height={120}
                        fill={'none'}
                        stroke={'#ffffff'}
                      />
                    </div>
                    <h3 className="about__mission-item-title">Созидательность</h3>
                    <div className="about__mission-item-text">
                      Это место, где каждый день создаются настоящие шедевры из теста, кремов,
                      фруктов и шоколада. Наши кондитеры обладают высоким профессионализмом и
                      богатой фантазией, что позволяет им постоянно удивлять и радовать посетителей
                      новыми вкусами и необычными украшениями.
                    </div>
                  </li>
                  <li className="about__mission-item">
                    <div className="about__mission-item-img">
                      <Svg
                        name={'mission-item'}
                        width={120}
                        height={120}
                        fill={'none'}
                        stroke={'#ffffff'}
                      />
                    </div>
                    <h3 className="about__mission-item-title">Энтузиазм</h3>
                    <div className="about__mission-item-text">
                      Атмосфера в нашей кондитерской пропитана энтузиазмом и позитивом, ведь мы
                      знаем, как сделать так, чтобы каждый наш гость ушел довольным и с улыбкой на
                      лице.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about__chef">
          <div className="container">
            <div className="about__chef-container">
              <div className="about__chef-left">
                <img src={oldMan} alt="Мастершеф" />
              </div>
              <div className="about__chef-right">
                <h2 className="about__chef-title">
                  Алекс Доу
                  <div className="about__chef-subtitle">Мастершеф</div>
                  <Svg
                    name={'decor-title'}
                    width={82}
                    height={40}
                    fill={'#4b4342'}
                    stroke={'none'}
                  />
                </h2>
                <p className="about__chef-description">
                  Алекс - рожденный в Риме шеф-кондитер, который провел 15 лет в своем городе Риме,
                  совершенствуя свое ремесло и создавая исключительные творения. Преддверие рта,
                  украшенное тинцидентом. Движение и течение языка. Накопление средств, изречение
                  порта. Аликвам рутрум улламкорпер велит хендрериту выздоравливать.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about__standarts">
          <div className="container">
            <div className="about__standarts-container">
              <h2 className="about__standarts-title">
                Наши стандарты
                <Svg name={'decor-title'} width={82} height={40} fill={'#4b4342'} stroke={'none'} />
              </h2>
              <ul className="about__standarts-list">
                <li className="about__standarts-item">
                  История создания и ключевые этапы развития кондитерской компании.
                </li>
                <li className="about__standarts-item">
                  Описание основных стандартов качества и безопасности производства сладостей.
                </li>
                <li className="about__standarts-item">
                  Принципы работы компании, информация о социальной ответственности и программе
                  лояльности.
                </li>
                <li className="about__standarts-item">
                  Раздел с информацией о новинках, акциях и возможностью оставить отзыв или задать
                  вопрос.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
