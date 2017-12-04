import Vue from 'vue'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

Vue.component('AppHeader', AppHeader);
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
