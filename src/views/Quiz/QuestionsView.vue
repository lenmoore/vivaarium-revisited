<template>
    <div>
        <h1>{{ $t('Dont lie') }}</h1>

        <div class="slider" v-if="quizSteps">
            <div class="slide">
                <div>
                    {{ quizSteps[stepNumber].question_text }}
                </div>

                <div
                    :key="option.option_text"
                    @click="selectAnswer(option)"
                    v-for="option in quizSteps[stepNumber].questionOptions"
                >
                    {{ option.option_text }}
                </div>
            </div>

            <div class="buttons">
                <button @click="back">{{ $t('back') }}</button>
                <button @click="forward">{{ $t('forward') }}</button>
            </div>
        </div>

        <div style="border: 1px solid fuchsia; margin-top: 20rem">
            <div>
                {{ stepNumber }}
            </div>
            <small>{{ quizSteps[stepNumber] }}</small>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router/dist/vue-router';
import { computed, reactive, ref, watch } from 'vue';
import { useStore } from '@/views/Quiz/store';

const router = useRouter();
const route = useRoute();

let stepNumber = parseInt(route.params.step);
let quizNumber = parseInt(route.params.quiz);
// setup
const store = useStore();
watch(
    () => route.params.step,
    () => {
        stepNumber = route.params.step;
    }
);

const quizzes = computed(() => store.state.quizzes);
const activeQuiz = quizzes.value.find((quiz) => {
    console.log(quiz);
    if (quizNumber === 1 && quiz.name.includes('2.3')) {
        return quiz;
    }
    if (quizNumber === 2 && quiz.name.includes('2.4')) {
        return quiz;
    }
});

const quizSteps = activeQuiz.gameSteps;

// answer questions, save in localstorage
function selectAnswer(val) {
    console.log(val);
    store.localStore.setItem(`${quizNumber}_${stepNumber}`, val);
}

function back() {
    router.push({
        name: route.name,
        params: { quiz: quizNumber, step: parseInt(stepNumber) - 1 },
    });
}

async function forward() {
    console.log(parseInt(stepNumber) < quizSteps.length - 1);
    console.log(stepNumber, quizSteps.length);
    if (parseInt(stepNumber) < quizSteps.length - 1) {
        console.log('if');
        await router.push({
            name: route.name,
            params: { quiz: quizNumber, step: parseInt(stepNumber) + 1 },
        });
    } else {
        console.log('else');
        await router.push({
            name: 'quiz-done',
            query: {
                quiz: quizNumber,
            },
        });
    }
}
</script>
