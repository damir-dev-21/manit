<template lang="">
    <div>
        <div class="container">
            <div class="header">
                <div class="header__body service-header">
                    <div class="header__body__logo">
                      <router-link to="/">
                        <img src="@/assets/image/logo.png" alt="" width="200">
                      </router-link>
                    </div>
                    
                </div>
            </div>
            
            <section class="works portfolio">
                <h2 class="portfolio-title">Наши Проекты</h2>
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
            </section>

            <section class="order">
                <h2>Заказать проект</h2>
                <div class="contactPage__body__main">
                    <div class="main-item">
                      <font-awesome-icon :icon="['fas','phone']"/>
                      <div class="main-item-content">
                        <h3>Позвонить</h3>
                        <p>+998 90 655-7-655</p>
                      </div>
                    </div>
                    <div class="main-item">
                    <font-awesome-icon :icon="['fas','envelope']"/>

                      <div class="main-item-content">
                        <h3 >Написать нам</h3>
                        <p>manitcreative@gmail.com</p>
                      </div>
                    </div>
                    <div class="main-item">
                      <img src="../assets/image/telegramIcon.png" width="100px" height="100px"/>

                      <div class="main-item-content">
                        <h3>Написать в Telegram</h3>
                      </div>
                    </div>
      
                    <div class="main-item">
                        <font-awesome-icon :icon="['fas','stopwatch']"/>

                      <div class="main-item-content">
                        <h3>Время работы</h3>
                        <p>
                          Круглосуточно
                        </p>
                      </div>
                    </div>
                  </div>
            </section>
        </div>
        
        <section class="footer">
            <div class="footer__body">
                <p>&copy;Все права защищены 2021</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped src="@/assets/css/index.css">
    
</style>