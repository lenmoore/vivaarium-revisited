import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'home',
        component: HomeView,
        redirect: { path: 'intro/1' },
        children: [
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
        ],
    },
    {
        path: '/overview',
        name: 'overview',

        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Finale/FinaleView.vue'
            ),
        children: [
            {
                name: 'overview.about',
                path: 'about',

                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Finale/AboutVivarium.vue'
                    ),
            },
            {
                name: 'overview.dramaturg',
                path: 'dramaturg',

                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Finale/DramaturgVideo.vue'
                    ),
            },
            {
                name: 'overview.stats',
                path: 'stats',

                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Finale/VivaStats.vue'
                    ),
            },
        ],
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
        path: '/shop',
        name: 'shop',
        redirect: { name: 'products' },
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
        redirect: { name: 'quiz.intro' },
        children: [
            {
                path: 'intro',
                name: 'quizzes.intro',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Quiz/QuizShopFinishedIntro.vue'
                    ),
            },
            {
                path: 'intro',
                name: 'quiz.intro',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Quiz/QuestionnaireIntro.vue'
                    ),
            },
            {
                path: ':quiz/question/:step',
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
        path: '/humanity-result',
        name: 'humanity-result',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Results/ResultsScreen.vue'
            ),
    },
    {
        path: '/welcome-video',
        name: 'welcome-video',
        component: () => import('../views/Results/WelcomeVideo.vue'),
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
    history: createWebHistory('/'),
    routes,
});

export default router;
