<template>
    <div class="header">
                    <div class="header__body">
                        <div class="header__body__logo">
                            <router-link to="/"><img src='@/assets/image/logo.png' alt="" width="200"></router-link>
                        </div>
                        <div class="hamburger">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="header__body__nav">
                            
                            <ul class="header__body__nav-list" id="menu">
                                <li class="header__body__nav-list-item">
                                    <a href="#about" class="_anim-items">О нас</a>
                                </li>
                                <li class="header__body__nav-list-item">
                                    <a href="#service" class="_anim-items">Услуги</a>
                                </li>
                                <li class="header__body__nav-list-item">
                                    <a href="#works" class="_anim-items">Наши работы</a>
                                </li>
                                <li class="header__body__nav-list-item">
                                    <a href="#contacts" class="_anim-items">Контакты</a>
                                </li>
                            </ul>
                            <div class="header__body__nav-links">
                                <div>
                                    <a href="#" target="_blank">
                                        <img src="@/assets/image/facebook.png"  alt="" width="25" height="25">
                                    </a>
                                </div>
                                <div>
                                    <a href="https://instagram.com/manit_creative?igshid=17i31p727srzr" target="_blank">
                                        <img src="@/assets/image/instagram.png"  alt="" width="25" height="25">
                                    </a>
                                </div>
                                <div>
                                    <a href="https://t.me/manit_creative" target="_blank">
                                        <img src="@/assets/image/telegram.png"  alt="" width="25" height="25">
                                    </a>
                                </div>
                            </div>
                            <div class="header__body__nav-phone">
                                <p>+998 90 655-7-655</p>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style scoped src="@/assets/css/index.css">

</style>