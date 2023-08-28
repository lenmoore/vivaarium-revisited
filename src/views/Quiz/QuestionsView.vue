<template>
    <div class="quiz-wrapper">
        <video id="background-video" autoplay loop muted>
            <source src="/videos/quiz_video 2.mp4" type="video/mp4" />
        </video>
        <QuizTimer :start-time="timerStartTime" />
        <div class="slider black-milk" v-if="quizSteps">
            <h2 class="question-text">
                {{ quizSteps[stepNumber - 1].questionText }}
            </h2>
            <div class="slide">
                <div
                    v-for="option in quizSteps[stepNumber].questionOptions"
                    :key="option.option_text"
                    class="option btn draw-border"
                    :class="{ selected: option.selected }"
                    @click="
                        selectAnswer(
                            option,
                            quizSteps[stepNumber].questionOptions
                        )
                    "
                >
                    {{ option.option_text }}
                </div>
            </div>

            <div class="buttons">
                <button class="btn draw-border" @click="back">
                    {{ $t('<<') }}
                </button>
                <button class="btn draw-border" @click="forward">
                    {{ $t('>>') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router/dist/vue-router';
import { computed, reactive, watch } from 'vue';
import { useStore } from '@/views/Quiz/store';
import QuizTimer from '@/views/Quiz/QuizTimer';

const router = useRouter();
const route = useRoute();

let stepNumber = parseInt(route.params.step);
let quizNumber = parseInt(route.params.quiz);
let timerStartTime = reactive(null);
console.log(quizNumber);
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
    if (quizNumber === 1 && quiz.name.includes('2.3')) {
        return quiz;
    }
    if (quizNumber === 2 && quiz.name.includes('2.4')) {
        console.log('hey!');
        return quiz;
    }
});

const quizSteps = activeQuiz?.gameSteps;

// answer questions, save in localstorage
function selectAnswer(val, allOptions) {
    if (!timerStartTime) {
        timerStartTime = Date.now();
    }
    console.log(val);
    allOptions.forEach((option) => (option.selected = false));
    console.log(quizSteps[stepNumber].questionOptions);
    val.selected = true;
    val.question = quizSteps[stepNumber].questionText;
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
<style lang="scss">
@import '../../vars';
#background-video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
}
.quiz-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.slider {
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .question-text {
        color: $text-color;
    }
}
.slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.option {
    padding: 1rem 0.5rem;
    margin: 0.5rem;

    background-color: rgba(0, 0, 0, 0.5);

    cursor: pointer;
    height: 100%;
    width: 95%;
    font-size: 1.25rem;
    &.selected {
        background-color: #42b983;
    }
}

.buttons {
    button {
        margin: 1.5rem;
        padding: 1rem;
        background-color: $option-background;
        &:hover {
            background-color: #42b983;
        }
    }
}
</style>
