/* tslint:disable */

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
    {
        path: '',
        name: 'home',
        component: HomeView,
        redirect: { path: 'intro/1' },
        children: [
            {
                path: '/intro',
                name: 'intro',
                component: () => import('@/views/Intro/WelcomeScreen.vue'),
                children: [
                    {
                        path: ':id',
                        name: 'intro.slide',
                        component: () =>
                            import('@/views/Intro/VideoBackgroundSlide.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: '/overview',
        name: 'overview',
        redirect: { name: 'overview.stats' },

        component: () => import('@/views/Finale/FinaleView.vue'),
        children: [
            {
                name: 'overview.about',
                path: 'about',

                component: () => import('@/views/Finale/AboutVivarium.vue'),
            },
            {
                name: 'overview.dramaturg',
                path: 'dramaturg',

                component: () => import('@/views/Finale/DramaturgVideo.vue'),
            },
            {
                name: 'overview.stats',
                path: 'stats',

                component: () => import('@/views/Finale/VivaStats.vue'),
                children: [
                    {
                        name: 'overview.stats.all',
                        path: 'all',
                        component: () =>
                            import('@/views/Finale/stats/BigSummary.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/shop',
        name: 'shop',
        redirect: { name: 'products' },
        children: [
            {
                path: 'cart',
                name: 'cart',
                component: () => import('@/views/Shop/ShoppingCart.vue'),
            },
            {
                path: 'products',
                name: 'products',
                component: () => import('@/views/Shop/ProductsList.vue'),
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
                    import('@/views/Quiz/QuizShopFinishedIntro.vue'),
            },
            {
                path: 'intro',
                name: 'quiz.intro',
                component: () => import('@/views/Quiz/QuestionnaireIntro.vue'),
            },
            {
                path: ':quiz/question/:step',
                name: 'question-step',
                component: () => import('@/views/Quiz/QuestionsView.vue'),
            },
            {
                path: 'done',
                name: 'quiz-done',
                component: () => import('@/views/Quiz/QuestionnaireEnd.vue'),
            },
        ],
    },
    {
        path: '/humanity-result',
        name: 'humanity-result',
        component: () => import('@/views/Results/ResultsScreen.vue'),
    },
    {
        path: '/welcome-video',
        name: 'welcome-video',
        component: () => import('@/views/Results/WelcomeVideo.vue'),
    },
    {
        path: '/audit',
        name: 'video-player',
        component: () => import('@/views/VideoPlayer/VideoPlayer.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
