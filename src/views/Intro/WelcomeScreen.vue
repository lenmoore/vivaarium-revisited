<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

let bodyStyleClass = ref(
    router.currentRoute.value.name === 'intro' ? 'body-intro' : 'intro-wrapper'
);
watch(
    () => route.params.id,
    () => {
        bodyStyleClass = 'intro-wrapper';
    }
);
</script>
<template>
    <div :class="bodyStyleClass">
        {{ bodyStyleClass }} | {{ router.currentRoute }}
        <h1>{{ $t('welcome to vivaarium') }}</h1>
        <RouterLink
            class="first-link"
            :to="{ name: 'intro.slide', params: { id: 1 } }"
            >start</RouterLink
        >
        <RouterView />
    </div>
</template>

<style lang="scss">
// white
.body-intro {
    a {
        background-color: blue;
        color: white;
        font-size: 2rem;
        padding: 1rem;
        text-decoration: none;
    }
}
// blue
.intro-wrapper {
    background-color: gray;
    height: 100%;
    width: 100%;
    h1 {
        color: turquoise;
        font-size: 4rem;
    }

    .first-link {
        display: none;
    }
}
</style>
