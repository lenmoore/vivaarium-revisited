<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { LocalStore } from '@/store/local-store';
import { useStore } from '@/views/Quiz/store';
import ResultsScreen from '@/views/Results/ResultsScreen';

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
    <div class="h-100">
        <ResultsScreen
            v-if="nextContent && nextContent.goingToCapsuleVideo === true"
        />
        <div
            class="wrapper"
            v-if="nextContent && nextContent.nextLink.name === 'question-step'"
        >
            <h1>NÕUSTUN/EI NÕUSTU</h1>
            <p>
                Kolmandas ja viimases testis esitame sulle väiteid ja soovime
                teada saada, kas oled nendega nõus või mitte.
            </p>

            <p>
                Sa saad vastuseid muuta, kuni aeg otsa saab või kuni sa oma
                valikud kinnitad.
            </p>
            <button
                class="btn draw-border"
                @click="$router.push(nextContent.nextLink)"
            >
                Alusta
            </button>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../vars';
.wrapper {
    background-color: $background-color;
    color: white;
    height: 100%;
    padding-top: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        padding: 0;
        color: orange;
        margin: 0;
    }
}

.h-100 {
    height: 100%;
}
</style>
