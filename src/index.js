import Vue from 'vue';
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import baseSearchHeader from './pages/base/baseSearchHeader.vue'
Vue.config.debug=true
Vue.use(ElementUI);

Vue.component('baseSearchHeader', baseSearchHeader)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
