<template>
    <div class="quiz-intro-wrapper">
        <div class="black-milk">
            <h1>{{ $t('VALIKVASTUSED') }}</h1>
            <p v-html="$t('quiz-intro')"></p>
            <button class="btn draw-border" @click="startQuiz1">
                {{ $t('Alusta') }}
            </button>
        </div>
    </div>
</template>

<script>
import { useStore } from '@/views/Quiz/store';
const store = useStore();

export default {
    methods: {
        async startQuiz1() {
            await store.startGame(1);
            await this.$router.push({
                name: 'question-step',
                params: { quiz: 1, step: 1 },
            });
        },
    },
};
</script>

<style lang="scss">
.quiz-intro-wrapper {
    h1 {
        padding: 0;
        margin: 0;
    }
    background-color: #0e1926;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    p {
        max-width: 600px;
    }
}
</style>
