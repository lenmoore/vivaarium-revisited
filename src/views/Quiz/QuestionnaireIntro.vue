<template>
    <div class="quiz-intro-wrapper">
        <h1>VALIKVASTUSED</h1>
        <p>
            Selles testis leiad hulga väiteid. Vali nelikust välja väide, mis
            sind kõige enam kõnetab. Sa saad vastuseid muuta, kuni aeg otsa saab
            või kuni sa oma valikud kinnitad.
        </p>
        <button class="btn draw-border" @click="startQuiz1">
            {{ $t('Alusta') }}
        </button>
    </div>
</template>

<script setup>
import { useStore } from '@/views/Quiz/store';

const store = useStore();

async function startQuiz1() {
    await store.startGame(1);
    await this.$router.push({
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
