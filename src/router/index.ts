import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting

        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/intro',
        name: 'intro',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Intro/WelcomeScreen.vue'
            ),
        children: [
            {
                path: ':id',
                name: 'intro.slide',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Intro/VideoBackgroundSlide.vue'
                    ),
            },
        ],
    },
    {
        path: '/shop',
        name: 'shop',
        redirect: { name: 'cart' },
        children: [
            {
                path: 'cart',
                name: 'cart',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Shop/ShoppingCart.vue'
                    ),
            },
            {
                path: 'products',
                name: 'products',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Shop/ProductsList.vue'
                    ),
            },
        ],
    },
    {
        path: '/quiz',
        name: 'quiz',
        redirect: { name: 'quiz.intro ' },
        children: [
            {
                path: 'intro',
                name: 'quiz.intro',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Quiz/QuestionnaireIntro.vue'
                    ),
            },
            {
                path: ':quiz/question/:id',
                name: 'question-step',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Quiz/QuestionsView.vue'
                    ),
            },
            {
                path: 'done',
                name: 'quiz-done',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Quiz/QuestionnaireEnd.vue'
                    ),
            },
        ],
    },
    {
        path: '/audit',
        name: 'video-player',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/VideoPlayer/VideoPlayer.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
