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
                    <h2>3D</h2>
                    <div class="service__body__table">
                        <div class="service__body__table-top">
                            <p class="service-number">№</p>
                            <p class="service-name">Наименование</p>
                            <p class="service-desc">Описание</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">1</p>
                            <p class="service-name">Рекламный ролик в 2D</p>
                            <p class="service-desc">Ролик в 2D стиле.Хронометраж до 30 секунд</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">2</p>
                            <p class="service-name">Рекламный ролик в 3D</p>
                            <p class="service-desc">Ролик в 3D стиле.Хронометраж до 30 секунд</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">3</p>
                            <p class="service-name">Анимационный рекламный ролик</p>
                            <p class="service-desc">Ролик в 2D,3D стиле с анимацией либо несколько персонажей.Хронометраж до 30 секунд</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">4</p>
                            <p class="service-name">Ролик инфографики</p>
                            <p class="service-desc">Графический ролик для визуализаций определенных графиков показывающие развитие компаний.Графики создаются в 2D либо в 3D формате в зависимости от предпочтений клиента</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">5</p>
                            <p class="service-name">Корпоративный фильм</p>
                            <p class="service-desc">Мини-фильм о вашей компаний выполненый в 3D стиле и использование инфографики</p>
                        </div>
                        <div class="service__body__table-item">
                            <p class="service-number" colspan="1">6</p>
                            <p class="service-name">Заставка</p>
                            <p class="service-desc">Графическая заставка без звука выполненная 3D или 2D стиле.Хронометраж до 30 секунд</p>
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