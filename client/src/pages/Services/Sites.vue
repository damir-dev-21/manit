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
                    <h2>Сайты</h2>
                    <div class="service__body__table">
                        <div class="service__body__table-top">
                            <p class="service-number">№</p>
                            <p class="service-name">Наименование</p>
                            <p class="service-desc">Описание</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">1</p>
                            <p class="service-name">Одностарничный сайт</p>
                            <p class="service-desc">Веб-сайт в котором вся информация о ваших услугах,товаров,контактных данных находится на одной странице.</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">2</p>
                            <p class="service-name">Сайт `Визитка`</p>
                            <p class="service-desc">Веб-сайт в котором вся информация о товарах и услугах находятся на одной странице и имеются несколько дополнительных страниц.Сайт может иметь панель управления.</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">3</p>
                            <p class="service-name">Медийный сайт</p>
                            <p class="service-desc">Сайт развлекательного характера.К таким сайтам относятся сайты Кинопорталы,Блоги,Новостные и прочее.</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">4</p>
                            <p class="service-name">Корпоративный сайт</p>
                            <p class="service-desc">Сайт о компаний в котором имеется полная информация о продукции, услугах, проектах, контактных данных и прочего.Имеются дополнительные старницы,панель управления и функционал(Email-рассылка,Оформление заказа и прочее).</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">5</p>
                            <p class="service-name">Интернет магазин</p>
                            <p class="service-desc">Полноценный интернет магазин с большим количеством страниц и функционала(Регистрация,Онлайн оплата,Панель управления и прочее)</p>
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