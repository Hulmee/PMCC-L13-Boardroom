import { createApp } from 'vue'

import './style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faChromecast, faUsb } from '@fortawesome/free-brands-svg-icons'
library.add(far, fas, faChromecast, faUsb)

import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
window.CrComLib = CrComLib
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
