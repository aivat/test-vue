import Vue from 'vue'
import App from './App.vue'
import AppHeader from './components/appHeader.vue'
import AppContent from './components/appContent.vue'
import AppFooter from './components/appFooter.vue'
/*import book from './components/content/book.vue'
import users from './components/content/users.vue'*/
import VueRouter from 'vue-router'
import { routes } from './system/routes'
import  axios from 'axios'

Vue.component('AppHeader', AppHeader);
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('App', App);
/*Vue.component('book', book);
Vue.component('users', users);*/
Vue.use(VueRouter)
/*Vue.use(axios)*/

export const router = new VueRouter({
    mode: 'history',
    routes
})

/*export const axiosQwe = new axios({
})*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
