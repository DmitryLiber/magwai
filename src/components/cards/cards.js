export default () => {
  const parrentCard = (target) => {
      return `
      <div>
        <div class="column cards__item">
          <div class="cards__img" style="background-image:url(./assets/img/card2.jpg)"></div>
          <div class="cards__body">
            <h3 class="cards__title">${target.id}</h3>
            <p class="cards__desc">${target.title}</p>
            <p class="cards__text">${target.body}</p>
            <div class="cards__who">Posted by <strong>Eugenia</strong>, on July  24, 2019</div>
          </div>
          <div class="cards__footer">
            <button class="btn btn_black"><span>Continue reading</span></button>
          </div>
        </div>
      </div>
      `
    },
    cfg = {
      limit: 5,
      page: 0,
    }

  $('.load-cards .btn').on('click', (e) => {
    if ($(e.currentTarget).attr('disabled') !== undefined) return
    $(e.currentTarget).attr('disabled', '')
    ;(async () => {
      const cards = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          cfg.page * cfg.limit
        }&_limit=${cfg.limit}`
      )
        .then((res) => res.json())
        .catch(() =>
          Alerts(
            'warning',
            'Не удалось загрузить карточки. Проблемы с интернет соединением.'
          )
        )

      if (await cards) {
        const cardsDom = cards.map((card) => parrentCard(card)).join('')
        $('.cards').append(cardsDom)
        $(e.currentTarget).removeAttr('disabled')
      }
    })()

    cfg.page++
  })
}
