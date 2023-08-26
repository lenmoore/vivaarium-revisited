<template>
    <div v-if="quiz.gameSteps" class="quiz-wrapper video-quiz">
        <div>
            <div class="title">{{ activeStep.questionText }}</div>
            <div
                :class="{
                    'd-flex':
                        quiz && quiz.name && quiz.name.includes('Audiitor'),
                }"
            >
                <div
                    v-for="option in activeStep.questionOptions"
                    :key="option.option_text"
                    class="option btn draw-border"
                    :class="{ selected: option.selected }"
                    @click="selectAnswer(option, activeStep.questionOptions)"
                >
                    {{ option.option_text }}
                </div>
            </div>

            <div class="buttons">
                <button
                    :disabled="activeStepNumber === 0"
                    class="btn draw-border"
                    :class="{ disabled: activeStepNumber === 0 }"
                    @click="activeStepNumber -= 1"
                >
                    {{ $t('<<') }}
                </button>
                <button
                    v-if="
                        quiz.gameSteps.length > 1 &&
                        activeStepNumber < activeStep.questionOptions.length
                    "
                    class="btn draw-border"
                    @click="activeStepNumber += 1"
                >
                    {{ $t('>>') }}
                </button>
                <button class="btn draw-border" v-else @click="submitQuiz">
                    Valmis
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from '@/views/Quiz/store';

const store = useStore();
export default {
    name: 'VideoQuiz',
    props: {
        quiz: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            activeStepNumber: 0,
        };
    },
    computed: {
        quizSteps() {
            return this.quiz.gameSteps;
        },
        activeStep() {
            return this.quizSteps[this.activeStepNumber];
        },
    },
    methods: {
        selectAnswer(val, allOptions) {
            console.log(val);
            allOptions.forEach((option) => (option.selected = false));
            val.selected = true;
            store.localStore.setItem(
                `${this.$route.query.code}_${this.activeStepNumber}`,
                val
            );
        },
        submitQuiz() {
            this.$emit('submit');
        },
    },
};
</script>
<style lang="scss">
@import '../../vars';
.quiz-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $text-color;
    .title {
        margin: 0.5rem 8rem;
        font-size: 2rem;
    }
    .option {
        font-size: 1.5rem;
        padding: 1rem;
        margin: 0.5rem;
        cursor: pointer;
        max-width: 50rem !important;
        max-height: 3rem !important;
        &.selected {
            background-color: #42b983;
        }
    }
    .buttons {
        button {
            margin: 1rem;
        }
    }
}

.disabled {
    background-color: silver;
}

.d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.video-quiz {
    @media screen and (max-width: 450px) {
        z-index: 230 !important;
        * {
            z-index: 230 !important;
        }
        background-color: rgba(0, 0, 0, 0.75) !important;
        height: 100vh !important;
        width: 100vw !important;
    }
}
</style>
