import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import JQuery from 'jquery'

window.$ = JQuery

library.add(faBars)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
