import '@babel/polyfill'
import Splide from '@splidejs/splide'
import Inputmask from 'inputmask'
import Header from './components/header/header'
import Modal from './components/modal/modal'
import Alerts from './components/alerts/alerts'
import Slider from './components/slider/slider'
import Form from './components/form/form'
import Cards from './components/cards/cards'

import '@splidejs/splide/dist/css/splide-core.min.css'
import 'styles/style.scss'

const modal = new Modal()
modal.cfg({ cross: false })

$(document).ready(() => {
  Header()
  Slider(Splide, '.slider')
  Form(modal, Alerts)
  Cards()
})
