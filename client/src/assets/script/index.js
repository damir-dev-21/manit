import Jquery from 'jquery'

let $ = Jquery

export default function start(){
  
const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.header__body__nav')
const links = document.querySelectorAll('.header__body__nav ul li')
const map = document.getElementById('manitMap')

// body.addEventListener('click',()=>{
//   navLinks.classList.toggle('close')
// })


hamburger.addEventListener('click',()=>{
  body.classList.toggle('dontScroll')
  navLinks.classList.toggle('open')
  links.forEach(link=>{
    link.classList.toggle('fade')
  })
})

links.forEach(link=>{
  link.addEventListener('click',()=>{
    navLinks.classList.toggle('open')
  })
})

const width = document.documentElement.clientWidth

if(width === 1220){
  map.innerHTML = 
  `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5646896104297!2d66.93462182924779!3d39.68182303083322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQwJzU0LjYiTiA2NsKwNTYnMDYuNiJF!5e1!3m2!1sru!2s!4v1610261858325!5m2!1sru!2s" width="100${'%'}" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  `
}


$(document).ready(function () {
  $('#menu').on('click', 'a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#up').fadeIn();
    } else {
      $('#up').fadeOut();
    }
  });

  $('#up').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 800);
  });
});


const animItems = document.querySelectorAll('._anim-items');

function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint - window.innerHeight - window.innerHeight / animStart;
    }
    if (
      pageYOffset > animItemOffset - animItemPoint &&
      pageYOffset < animItemOffset + animItemHeight
    ) {
      animItem.classList.add('_active');
    } else {
      animItem.classList.remove('_active');
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}


if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  
  animOnScroll();
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

}


