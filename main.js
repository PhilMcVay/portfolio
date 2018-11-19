$(document).ready(function(){

  // Fade in on page load
  $('body').fadeIn(1000)

  // Add background to nav when scrolled past top of the page
  // Toggle scroll to top button
  addNavBackgound()
  renderScrollTopBtn()
  $(window).scroll(function() {
    addNavBackgound()
    renderScrollTopBtn()
  })

  // Close mobile menu on window expansion
  $(window).resize(function() {
    if (window.innerWidth > 630) {
      closeMobileMenu()
    }
  })

  // Scroll animation on nav link click
  $('nav a').click(function() {
    let section = $(this).attr('href')
    let navHeight = $('.nav-wrapper').height()
    $("html, body").animate({
      scrollTop: $(section).offset().top - navHeight
    }, 1000, "easeInOutExpo");
  })

  // Toggle mobile menu
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active')
    $('.mobile-menu').toggleClass('open')
  })

  // Close mobile menu on nav link click
  $('.mobile-menu a').click(function() {
    closeMobileMenu()
  })

  // Scroll to top of page on click
  $('.scroll-top-btn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000, "easeInOutExpo");
  })

});

function addNavBackgound() {
  let scrollPosition = $(window).scrollTop()
    scrollPosition > 0
      ? $('.nav-wrapper').addClass('scrolled-down')
      : $('.nav-wrapper').removeClass('scrolled-down')
}

function renderScrollTopBtn() {
  let scrollPosition = $(window).scrollTop()
    scrollPosition > 500
      ? $('.scroll-top-btn').addClass('scroll-top-active')
      : $('.scroll-top-btn').removeClass('scroll-top-active')
}

function closeMobileMenu() {
  $('.hamburger').removeClass('is-active')
  $('.mobile-menu').removeClass('open')
}