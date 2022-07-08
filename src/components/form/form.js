export default (modal, Alerts) => {
  const phone = () => {
      $('#phone').on('keyup', (e) => {
        if ($(e.currentTarget).val()[4] === '8') $(e.currentTarget).val('')
      })
      Inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
      }).mask($('#phone'))
    },
    validateForm = () => {
      const form = $(document).find('.form'),
        validatePhone = (phone) =>
          phone.length > 0 && phone.indexOf('_') === -1,
        validateEmail = (email) => {
          const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
          return reg.test(email)
        },
        formData = {
          name: form.find('#name').val(),
          phone: form.find('#phone').val(),
          email: form.find('#email').val(),
          msg: form.find('#msg').val(),
        }

      let error = 0

      if (!validatePhone(formData.phone)) error++
      if (!validateEmail(formData.email)) error++
      if (formData.name.length < 2) error++
      if (formData.msg.length < 5) error++

      error !== 0
        ? form.find('#send').attr('disabled', '')
        : form.find('#send').removeAttr('disabled')
    }

  $(document).on('keyup', '.form__input', () => validateForm())

  $(document).on('change', '.form__input', (e) =>
    $(e.currentTarget).val().length > 0
      ? $(e.currentTarget).addClass('form__input_fixed')
      : $(e.currentTarget).removeClass('form__input_fixed')
  )

  $(document).on('click', '#form', () => {
    modal.open(`
      <div class="container col-2 feedback">
        <div class="feedback__img"></div>
        <div class="feedback__form form">
          <button class="btn btn_transparent feedback__closed">
            <svg x="0px" y="0px" viewBox="0 0 24.7 25.5">
              <path d="M14.4,12.7L24.7,0.5c0.2-0.2,0-0.5-0.2-0.5h-3.1c-0.2,0-0.4,0.1-0.5,0.2l-8.5,10.1L3.9,0.2C3.8,0.1,3.6,0,3.4,0 H0.3C0,0-0.1,0.3,0.1,0.5l10.3,12.2L0.1,25C0,25,0,25.1,0,25.1c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2,0h3.1 c0.2,0,0.4-0.1,0.5-0.2l8.5-10.1l8.5,10.1c0.1,0.1,0.3,0.2,0.5,0.2h3.1c0.3,0,0.4-0.3,0.2-0.5L14.4,12.7z"/>
            </svg>
          </button>
          <div class="form__body">
            <h2>Оставьте заявку</h2>
            <p>Оставьте заявку и наш менеджер свяжется с вами в течение 10 -15 минут</p>

            <div class="form__input-box">
              <input type="text" id="name" class="form__input">
              <label for="name" class="form__labelfixed">Ваше имя <sup>*</sup></label>
            </div>

            <div class="form__input-box">
              <input type="phone" id="phone" class="form__input">
              <label for="phone">Ваш телефон <sup>*</sup></label>
            </div>

            <div class="form__input-box">
              <input type="email" id="email" class="form__input">
              <label for="email">Ваша почта <sup>*</sup></label>
            </div>

            <div class="form__input-box">
              <textarea name="msg" id="msg" class="form__input" rows="5"></textarea>
              <label for="msg">Ваш вопрос<sup>*</sup></label>
            </div>

          </div>
          
          <div class="form__footer">
            <button class="btn btn_ygray" id="send" disabled><span>Оставить заявку</span></button>
            <div>Нажимая на кнопку “Оставить заявку” вы соглашаетесь<br><a href="#">с "Пользовательским соглашением"</a></div>
          </div>
        </div>
      </div>
    `)
    setTimeout(() => phone(), 0)
  })

  $(document).on('click', '.feedback__closed', () => modal.closed())

  $(document).on('click', '#send', (e) => {
    if ($(e.currentTarget).attr('disabled') !== undefined) return
    $(e.currentTarget).attr('disabled', '')

    setTimeout(() => {
      const form = $(document).find('.form'),
        inputs = ['name', 'phone', 'email', 'msg']
      inputs.forEach((input) => form.find('#' + input).val(''))
      validateForm()
      Alerts(
        'success',
        '<h4>Ваша заявка успешно отправлена.</h4>В ближайшее время мы свяжемся с Вами.'
      )

      $(document).find('#send').attr('disabled', '')
    }, 1000)
  })
}
