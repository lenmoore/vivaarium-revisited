<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { LocalStore } from '@/store/local-store';
import { useStore } from '@/views/Quiz/store';

const store = useStore();
const router = useRouter();
const route = useRoute();
const localStore = new LocalStore('quiz_done');

let quizId = route.query.quiz;
let nextContent = ref({
    nextLink: {
        name: 'question-step',
        params: { quiz: 2, step: 90 },
    },
    goingToCapsuleVideo: false,
});

watch(
    () => route.query.quiz,
    () => {
        quizId = parseInt(route.query.quiz);
        console.log(quizId);
        console.log('HALLOOOO', quizId);
    }
);
onMounted(async () => {
    quizId = parseInt(route.query.quiz);
    console.log(route);
    console.log(quizId);
    console.log('HALLOOOO', quizId);
    if (quizId === 1) {
        console.log(' YOP OSODFKML ');
        localStore.setItem(`${quizId}_viewed`, 1);
        nextContent.value = {
            goingToCapsuleVideo: false,
            linkName: 'Start here',
            nextLink: {
                name: 'question-step',
                params: { quiz: 2, step: 1 },
            },
        };

        await store.startGame(2);
    }

    if (quizId === 2) {
        console.log('two');
        localStore.setItem(`${quizId}_viewed`, 1);
        nextContent.value = {
            goingToCapsuleVideo: true,
            linkName: 'See your results',
            nextLink: {
                name: 'humanity-result',
            },
        };
        console.log(nextContent);
    }
});
</script>
<template>
    <div>
        <h1>Congrats u did it</h1>
        <div>{{ quizId }}</div>
        {{ nextContent }}

        <div v-if="nextContent && nextContent.goingToCapsuleVideo === true">
            capsule video start
        </div>
        <div
            v-if="nextContent && nextContent.nextLink.name === 'question-step'"
        >
            you need to start the next quiz!

            <RouterLink :to="nextContent.nextLink">Start it here.</RouterLink>
        </div>
    </div>
</template>
