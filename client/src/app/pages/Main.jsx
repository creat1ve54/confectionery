import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Svg from '../../assets/svg/Svg';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = () => {
    console.log(123);
  };
  return (
    <>
      <Header />
      <section className="main__banner">
        <div className="main__banner-container">
          <div className="main__banner-img">
            <div className="main__banner-case">
              <Svg name={'titleLogo'} width={90} height={43} fill={'#5fcac7'} />
              <h1 className="main__banner-title">Добро пожаловать в Bellaria</h1>
              <div className="main__banner-text h4">
                Предлагаем Вам широкий ассортимент различных ароматных выпечек и пироженных
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main__mission about__mission">
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
                    отменному качеству своей продукции. Вкус наших сладостей не оставит равнодушным
                    даже самого искушенного гурмана. Мы очень ответственно подходим к выбору
                    ингредиентов и процессу производства, что гарантирует безопасность и
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
                    Это место, где каждый день создаются настоящие шедевры из теста, кремов, фруктов
                    и шоколада. Наши кондитеры обладают высоким профессионализмом и богатой
                    фантазией, что позволяет им постоянно удивлять и радовать посетителей новыми
                    вкусами и необычными украшениями.
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
                    Атмосфера в нашей кондитерской пропитана энтузиазмом и позитивом, ведь мы знаем,
                    как сделать так, чтобы каждый наш гость ушел довольным и с улыбкой на лице.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="main__about about__story">
        <div className="container">
          <div className="about__story-container">
            <h2 className="about__story-title">
              Наши фирменные блюда
              <Svg name={'decor-title'} width={82} height={40} fill={'#4b4342'} stroke={'none'} />
            </h2>
            <ul className="about__story-list">
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={'krug'}
                    height={180}
                    width={180}
                    fill={'transparent'}
                    stroke={'#5fcac7'}
                  />
                  <img src={require('../../assets/images/about/cake_01.png')} alt="Cake" />
                </div>
                <div className="about__story-item-title h3">Праздничные торты</div>
                <div className="about__story-item-text h5">
                  Праздничные торты – это не просто сладкое угощение, а настоящее произведение
                  искусства, которое становится украшением стола и создает атмосферу торжества.
                </div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={'krug'}
                    height={180}
                    width={180}
                    fill={'transparent'}
                    stroke={'#5fcac7'}
                  />
                  <img src={require('../../assets/images/about/cake_02.png')} alt="Cake" />
                </div>
                <div className="about__story-item-title h3">Кексы</div>
                <div className="about__story-item-text h5">
                  {' '}
                  Здесь вы найдете как классические кексы, так и необычные варианты с добавлением
                  различных ингредиентов, таких как фрукты, ягоды, орехи и шоколад
                </div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={'krug'}
                    height={180}
                    width={180}
                    fill={'transparent'}
                    stroke={'#5fcac7'}
                  />
                  <img src={require('../../assets/images/about/cake_03.png')} alt="Cake" />
                </div>
                <div className="about__story-item-title h3">Макарон</div>
                <div className="about__story-item-text h5">
                  Французское кондитерское изделие из яичных белков, сахара и молотого миндаля.
                  Обычно делается в форме печенья; между двумя слоями кладут крем или варенье.
                </div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={'krug'}
                    height={180}
                    width={180}
                    fill={'transparent'}
                    stroke={'#5fcac7'}
                  />
                  <img src={require('../../assets/images/about/cake_04.png')} alt="Cake" />
                </div>
                <div className="about__story-item-title h3">Маленькие пирожные</div>
                <div className="about__story-item-text h5">
                  Изысканное и аппетитное лакомство, которое станет прекрасным дополнением к любому
                  чаепитию или праздничному столу. Эти миниатюрные произведения кондитерского
                  искусства поражают своим разнообразием и изысканностью вкусов.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default Main;
