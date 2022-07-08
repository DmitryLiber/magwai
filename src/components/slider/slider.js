export default (Splide, block) => {
  const slider = new Splide(block, {
    height: 'calc(100vh - 120px)',
    arrows: false,
    breakpoints: {
      768: {
        pagination: false,
        height: 'auto',
      },
    },
  })

  slider.on('pagination:mounted', (pagination) => {
    const textPagination = ['Dogie Coin', 'Падение', 'Возвращение']
    $(pagination.items).each((i, item) => {
      $(item.button).text(textPagination[i])
    })
  })

  slider.mount()
}
