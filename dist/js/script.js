"use strict";

window.addEventListener('DOMContentLoaded', function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  var burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      scroll = calcScroll(),
      links = document.querySelectorAll('.nav__link');

  var toggleOverflow = function toggleOverflow() {
    if (menu.classList.contains('active')) {
      document.body.classList.add('fixed-body');
      document.body.style.paddingRight = scroll + 'px';
    } else {
      document.body.classList.remove('fixed-body');
      document.body.style.paddingRight = '0px';
    }
  };

  function calcScroll() {
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidht = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidht;
  }

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    toggleOverflow();
  });
  links.forEach(function (item) {
    item.addEventListener('click', function () {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      toggleOverflow();
    });
  });
  $('.slider').slick({
    adaptiveHeight: true,
    speed: 0,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        speed: 0
      }
    }]
  });
  var btns = document.querySelectorAll('.mentor__btn'),
      mentorModal = document.querySelector('.mentor-modals'),
      closeBtn = document.querySelector('.mentor-modals .close'),
      wrapper = document.querySelector('.mentor-modals .wrapper');
  btns.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      if (e.target) {
        e.preventDefault();
      }

      mentorModal.classList.add('open-modal');
      $('.slider').slick('setPosition');
      $('.slider').slick('goTo', i);
      $('.slider').slick('slickSetOption', {
        speed: 500,
        responsive: [{
          breakpoint: 991,
          settings: {
            speed: 500,
            arrows: false,
            dots: true
          }
        }]
      }, true);
      document.body.style.overflow = 'hidden';
      wrapper.classList.add('open-anim');
      document.body.style.paddingRight = scroll + 'px';
    });
  });
  closeBtn.addEventListener('click', function () {
    mentorModal.classList.remove('open-modal');
    document.body.style.overflow = '';
    $('.slider').slick('slickSetOption', {
      speed: 0
    }, true);
    wrapper.classList.remove('open-anim');
    document.body.style.paddingRight = '0';
  });
  mentorModal.addEventListener('click', function (e) {
    if (e.target === mentorModal) {
      mentorModal.classList.remove('open-modal');
      document.body.style.overflow = '';
      $('.slider').slick('slickSetOption', {
        speed: 0
      }, true);
      wrapper.classList.remove('open-anim');
      document.body.style.paddingRight = '0';
    }
  });

  function bindModal(triggerSelector, modalSelector, closeSelector, blockSelector) {
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        block = document.querySelector(blockSelector);
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        modal.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scroll + 'px';
        setTimeout(function () {
          block.classList.add('open-anim');
        }, 100);
      });
    });
    close.addEventListener('click', function () {
      modal.classList.remove('open-modal');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0';
      block.classList.remove('open-anim');
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open-modal');
        document.body.style.overflow = '';
        document.body.style.marginRight = '0';
        block.classList.remove('open-anim');
      }
    });
  }

  bindModal('.program__btn', '.popup--1', '.popup--1 .close', '.popup--1 .popup__block');
  bindModal('.block__btn--1', '.popup--2', '.popup--2 .close', '.popup--2 .popup__block');
  bindModal('.block__btn--2', '.popup--3', '.popup--3 .close', '.popup--3 .popup__block');
  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px'
    });
    return false;
  });
  $('[data-phone]').mask('+7-(999)-999-9999', {
    placeholder: "+7-(___)-___-____"
  });
});