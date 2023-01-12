$(function () {

  // ПЕРЕМЕННЫЕ
  /**Переменная для работы с шапкой сайта */
  let header = $('#header');
  /**Вычисляет высоту экрана первого элемента(intro) при заданных размерах, включает в себя отступы, но не границу */
  let introHeight = $('#intro').innerHeight();
  /**контроль длины откскроленных элементов в рх*/
  let scrollOfSet = $(window).scrollTop;


  // 1-- HEADER FIXED

  // контролирует размер 1-го элемента, при первичной загрузке
  checkScroll(scrollOfSet);
  // СКРОЛЛ СТРАНИЦЫ 
  $(window).on('scroll', function () {
    // контроль длины откскроленных элементов в рх 
    scrollOfSet = $(this).scrollTop();
    // контролирует размер 1-го элемента, сохраняет фиксированную позицию шапки при обновлении страницы
    checkScroll(scrollOfSet);
  })
  /**Фиксируем шапку при скролле страницы*/
  function checkScroll(scrollOfSet) {
    if (scrollOfSet >= introHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // 2--  ПЛАВНЫЙ СКРОЛЛ ЭЛЕМЕНТОВ
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault();

    let $heightHeader = $('header').height();

    let blockId = $(this).data('scroll');
    /**Длина, которую нам нужно проскролить, чтобы добраться до нужного элемента */
    let blockOfSet = $(blockId).offset().top-$heightHeader;

    // Убираем class='active' у всех ссылок
    $('nav a').removeClass('active');
    // При нажатии на ссылку, добавляем class='active'
    $(this).addClass('active');

    $('html, body').animate({
      scrollTop: blockOfSet
    }, 500)
  })

  // 3-- Menu nav-toggle (burger menu)
  $('#nav-toggle').on('click', function (e) {
    e.preventDefault;

    // При клике меняем бургер на крестик
    $(this).toggleClass('active');
    // Раскрывает список меню бургера
    $('nav').toggleClass('active');
  })

  // 4-- Accordion
  $('[data-collapse]').on('click', function (e) {
    e.preventDefault;

    blockId = $(this).data('collapse');

    //Плавное открытие и раскрытие текста под шапкой
    $(blockId).slideToggle();
  })

  // 5--Слайдер
  $('[data-slider]').slick({
    //бесконечный эффект листания
    infinity: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
})
