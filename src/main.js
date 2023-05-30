import { createApp } from 'vue'

import './style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faChromecast, faUsb } from '@fortawesome/free-brands-svg-icons'
library.add(far, fas, faChromecast, faUsb)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
