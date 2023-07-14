import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './views/Shop/store';
import { createI18n } from 'vue-i18n';
import et from './locales/et.json';
const i18n = createI18n({
    locale: 'et',
    fallbackLocale: 'et',
    messages: { et },
});

const app = createApp(App);
// app.use(store);
app.use(router);
app.use(i18n);
app.mount('#app');
