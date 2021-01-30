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
            <section class="service">
                <div class="service__body">
                    <h2>Видео</h2>
                    <div class="service__body__table">
                        <div class="service__body__table-top">
                            <p class="service-number">№</p>
                            <p class="service-name">Наименование</p>
                            <p class="service-desc">Описание</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">1</p>
                            <p class="service-name">Съемочный рекламный ролик</p>
                            <p class="service-desc">Реклама вашего товара либо услуг.С возможностью привлечения профессиональных актеров,моделей либо без них</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">2</p>
                            <p class="service-name">Ролик вашей компаний</p>
                            <p class="service-desc">Специальный ролик о вашей компаний с целью улучшить представлений о компаний либо демонстраций услуг</p>
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
                      <img src="../../assets/image/telegramIcon.png" width="110px" height="110px"/>

                      <div class="main-item-content">
                        <a href="https://t.me/manit_creative" target="_blank"><h3>Написать в Telegram</h3></a>
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
import start from '../../assets/script/index'
export default {
    mounted(){
      start()
    }
}
</script>
<style scoped src="@/assets/css/index.css">
    
</style>