<template>
    <div class="quiz-intro-wrapper">
        <h1>Esimene küsimustik</h1>
        <p>Mina olen tekst</p>
        <button class="btn draw-border" @click="startQuiz1">
            {{ $t('Alusta') }}
        </button>
    </div>
</template>

<script setup>
import { useStore } from '@/views/Quiz/store';
import { useRouter } from 'vue-router/dist/vue-router';

const router = useRouter();
const store = useStore();

async function startQuiz1() {
    await store.startGame(1);
    await router.push({
        name: 'question-step',
        params: { quiz: 1, step: 1 },
    });
}
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
}
</style>
