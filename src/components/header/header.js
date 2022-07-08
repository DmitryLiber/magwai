export default () => {
  $('.header__opener').on('click', (e) => {
    if (!$(e.currentTarget).hasClass('header__opener_open')) {
      $('.header__opener').addClass('header__opener_open')
      $('.menu').addClass('menu_show')
      $('.header__btns').addClass('header__btns_show')
    } else {
      $('.header__opener').removeClass('header__opener_open')
      $('.menu').removeClass('menu_show')
      $('.header__btns').removeClass('header__btns_show')
    }
  })
}
