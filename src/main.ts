import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n';
import et from './locales/et.json';

const i18n = createI18n({
    locale: 'et',
    fallbackLocale: 'et',
    messages: { et },
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
