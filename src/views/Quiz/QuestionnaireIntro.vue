<template>
    <div>
        <h1>
            {{ $t('take the quiz') }}
        </h1>

        <div>
            {{ $t('quiz intro') }}
        </div>

        <button @click="startQuiz1">
            {{ $t('Start quiz 1') }}
        </button>
    </div>
</template>

<script setup>
import { useStore } from '@/views/Quiz/store';

const store = useStore();
function startQuiz1() {
    store.startGame(1);
}
</script>
