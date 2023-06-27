<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { slides } from '@/views/Intro/slides';

const router = useRouter();
const route = useRoute();

let slideId = parseInt(route.params.id);
let htmlContent = reactive(slides[0].html);
let isLast = reactive(slides[0].isLast);
watch(
    () => route.params.id,
    () => {
        slideId = parseInt(route.params.id);
        const slide = slides.find((slide) => slide.id === slideId);
        htmlContent = ref(slide.html);
        isLast = slide.isLast || false;
    }
);
onMounted(async () => {
    slideId = parseInt(route.params.id);
    const slide = slides.find((slide) => slide.id === slideId);
    htmlContent = slide?.html;
});
function nextSlide() {
    if (isLast) {
        router.push({ name: 'shop' });
    } else {
        router.push({
            name: 'intro.slide',
            params: { id: parseInt(slideId) + 1 },
        });
    }
}
</script>
<template>
    <div>
        <div>video background slide #{{ slideId }}</div>
        <div v-html="htmlContent" v-if="htmlContent"></div>
        <button @click="nextSlide">continue</button>
    </div>
</template>
