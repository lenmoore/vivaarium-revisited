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
        <RouterLink
            class="first-link"
            :to="{ name: 'intro.slide', params: { id: 1 } }"
        >
            start
        </RouterLink>
        <RouterView />
    </div>
</template>

<style lang="scss">
@import '../../vars';
// white
.body-intro {
    a {
        background-color: blue;
        color: $text-color;
        font-size: 2rem;
        padding: 1rem;
        text-decoration: none;
    }
}
// blue
.intro-wrapper {
    background-color: gray;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    h1 {
        padding-top: 0;
    }

    .first-link {
        display: none;
    }
}
</style>
