<template>
    <div>
        <div>
            {{ $t('quiz intro') }}
        </div>

        <button @click="startQuiz1">
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
