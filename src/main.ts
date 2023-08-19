import { createApp } from 'vue';
import App from '@App.vue';
// import store from './views/Shop/store';
// import { createI18n } from 'vue-i18n';
// import et from './locales/et.json';
import router from './router';
//
// const i18n = createI18n({
//     locale: 'et',
//     fallbackLocale: 'et',
//     messages: { et },
// });

const app = createApp(App);

// app.use(store);
app.use(router);
// app.use(i18n);
app.mount('#app');
