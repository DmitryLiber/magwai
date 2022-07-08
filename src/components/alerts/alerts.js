export default function alerts(status, text) {
  // success, warning, error
  const hide = () => {
    messageBlock.classList.remove('alert_show')
    setTimeout(() => messageBlock.remove(), 1500)
  }

  let messageBlock = document.createElement('div')
  messageBlock.classList.add('alert', 'alert__' + status)

  setTimeout(() => messageBlock.classList.add('alert_show'), 100)
  setTimeout(() => hide(), 4500)
  messageBlock.innerHTML = text
  document.querySelector('body').prepend(messageBlock)
}
