<template>
    <div class="quiz-wrapper">
        <div class="slider" v-if="quizSteps">
            <h2>
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
                    {{ $t('back') }}
                </button>
                <button class="btn draw-border" @click="forward">
                    {{ $t('forward') }}
                </button>
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
import { computed, watch } from 'vue';
import { useStore } from '@/views/Quiz/store';

const router = useRouter();
const route = useRoute();

let stepNumber = parseInt(route.params.step);
let quizNumber = parseInt(route.params.quiz);
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
    console.log(val);
    allOptions.forEach((option) => (option.selected = false));
    console.log(quizSteps[stepNumber].questionOptions);
    val.selected = true;
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
.quiz-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.slider {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.slide {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.option {
    padding: 0.5rem;
    background-color: $option-background;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    &.selected {
        background-color: #42b983;
    }
}
</style>
