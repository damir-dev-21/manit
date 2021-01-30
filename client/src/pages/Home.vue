<template lang="">
    <div>
        <div class="mainContainer">
            <section class="container">
                
                <Header/>
    
                <div class="main">
                    <div class="main__body">
                        <h1>Мы не <span style="color:#5dce59">маним</span> мы <span style="color: #5dce59;">творим</span></h1>
                    </div>
                </div>
            </section>
            
            <button id="up"><font-awesome-icon :icon="['fas','arrow-up']"/></button>
        </div>

    <div class="container">
            <div class="about" id="about">
                <div class="about__body">
                    <div class="about__body__main">
                        <div class="about__body__main__item">
                            <h2>О нас</h2>
                            <h3>
                                Мы креативное агенство в городе Самарканд , с целью помочь клиентам в продвижений бизнеса
                            </h3>
                            <h3>
                                Оказываем услуги в таких направлениях как: Создание сайтов, Веб-Дизайн, Веб-приложения, Мобильные приложения, Брендинг, Видеографика, Дизайн печатных материалов, Дизайн упаковок и этикеток
                            </h3>

                            <h3>
                                У нас доступные цены и качествено выполненая работа,
                                также мы открыты для сотрудничества 
                            </h3>
                        </div>
                        <div class="about__body__main__item-sec" id="men">
                            <img src="@/assets/image/men.png" alt="">
                        </div>
                    </div>
                </div>
                
            </div>

                <Services/>

              <section class="works" id="works">
                  <h1>Недавние работы</h1>
                  <div class="works__body">
                      <div class="works__body__item">
                          <img src="https://d2l8h2eumdtj2d.cloudfront.net/app/uploads/2019/11/shutterstock_502429909.jpg" alt="">
                            <div class="works__body__item-text">
                                <h3>BurgerKing</h3>
                                <p>Брендинг</p>
                            </div>
                      </div>
                      <div class="works__body__item">
                        <img src="https://evo-rus.com/wp-content/uploads/2020/10/3213387.jpg" alt="">
                          <div class="works__body__item-text">
                              <h3>Tinkoff Bank</h3>
                              <p>Сайты</p>
                          </div>
                    </div>
                    <div class="works__body__item">
                        <img src="http://u.kanobu.ru/editor/images/33/82965a01-86e3-4ae4-8f42-c9abd33f84e4.png" alt="">
                          <div class="works__body__item-text">
                              <h3>CD Project Red</h3>
                              <p>Дизайн</p>
                          </div>
                    </div>
                    <div class="works__body__item">
                        <img src="https://i.ytimg.com/vi/I4SoyY614vQ/maxresdefault.jpg" alt="">
                          <div class="works__body__item-text">
                              <h3>Tesla</h3>
                              <p>Видео</p>
                          </div>
                    </div>
                    <div class="works__body__item">
                        <img src="https://www.rusdialog.ru/images/news/377e9c48da9ec229b3fec0ff340ee48e.jpg" alt="">
                          <div class="works__body__item-text">
                              <h3>SpaceX</h3>
                              <p>Мобильное приложение</p>
                          </div>
                    </div>
                    <div class="works__body__item">
                        <img src="https://marco.org/media/2017/11/mbp2015-back.jpg" alt="">
                          <div class="works__body__item-text">
                              <h3>Apple</h3>
                              <p>SMM</p>
                          </div>
                    </div>
                  </div>
                  <router-link to="/portfolio">
                        <button class="btn see-more"><a href="/pages/portfilio.html">Увидеть больше</a></button>
                  </router-link>
              </section>

              <section class="contacts" id="contacts">
                  <div class="contacts__body">
                      <div class="contacts__body__item">
                          <h2>Контакты</h2>
                          <div class="contacts__body__item-feedback">
                              <div class="address">
                                  <h3><font-awesome-icon :icon="['fas','map-marker-alt']"/></h3>
                                  <p>ул. Кошгарий 72, ориентир STV </p>
                              </div>
                              <div class="feedback">
                                  <div>
                                    <h3><font-awesome-icon :icon="['fas','envelope']"/></h3>
                                    <p>manitcreative@gmail.com</p>
                                  </div>
                                  <div>
                                    <h3><font-awesome-icon :icon="['fas','phone-alt']"/></h3>
                                    <p>+998 90 655-7-655</p>
                                  </div>
                              </div>
                          </div>
                          <div class="contacts__body__item-links">
                            <div>
                                <a href="#" target="_blank">
                                    <img src="@/assets/image/facebook.png"  alt="" width="35" height="35">
                                </a>
                            </div>
                            <div>
                                <a href="https://instagram.com/manit_creative?igshid=17i31p727srzr" target="_blank">
                                    <img src="@/assets/image/instagram.png"  alt="" width="35" height="35">
                                </a>
                            </div>
                            <div>
                                <a href="https://t.me/manit_creative" target="_blank">
                                    <img src="@/assets/image/telegram.png"  alt="" width="35" height="35">
                                </a>
                            </div>
                          </div>
                      </div>
                      <div class="contacts__body__item" id="manitMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.0096366243516!2d66.95291282923165!3d39.64884703132622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM4JzU1LjkiTiA2NsKwNTcnMTIuNSJF!5e0!3m2!1sru!2s!4v1610780339586!5m2!1sru!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.572357142251!2d66.9351944!3d39.6818333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQwJzU0LjYiTiA2NsKwNTYnMDYuNyJF!5e0!3m2!1sru!2s!4v1610180315576!5m2!1sru!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
                      </div>
                  </div>
              </section>
            </div>
            <section class="footer">
            <div class="footer__body">
                <p>&copy;Все права защищены 2021</p>
            </div>
        </section>
        <div class="cursor"></div>
    </div>
    
    
</template>
<script>

import Header from '../components/Header'
import Services from '../components/Services'

import start from '../assets/script/index'

export default {
    components:{
        Header,
        Services
    },
    mounted(){
        start()
    }
}
</script>
<style scoped src="@/assets/css/index.css">
    
</style>