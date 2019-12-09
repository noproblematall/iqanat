require('es6-promise').polyfill();
import Vue from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import YmapPlugin from 'vue-yandex-maps'
import VueWow from 'vue-wow'
import VModal from 'vue-js-modal'
// import router from './routes'
Vue.use(VueCarousel);
Vue.use(VueWow)
Vue.use(VModal)

const settings = {
  apiKey: '60445215-6d3a-4f88-87fe-8d52b72e5bc9',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

export const eventBus = new Vue({
  methods:{
    changeLanguage(lang){
      this.$emit('langWasChanged', lang);
    },
    clickMenu(){
      this.$emit('menuWasClicked');
    }
  }
});
import App from './App.vue'
// const App = () => import('./App.vue');
Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  render: h => h(App),
})
