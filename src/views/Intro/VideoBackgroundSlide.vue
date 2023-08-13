<template>
    <div class="video-background-slide-wrapper">
        <div class="inner-container">
            <div class="overlay">
                <div class="content">
                    <div v-html="htmlContent" v-if="htmlContent"></div>
                    {{ $t('take the quiz') }}

                    <button class="btn draw-border" @click="nextSlide">
                        {{ $t('continue') }}
                    </button>
                </div>
            </div>
            <video class="bg-overlay" autoplay muted loop>
                <source
                    src="/videos/01_welcome_2_vivaarium.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { slides } from '@/views/Intro/slides';
import { LocalStore } from '@/store/local-store';

const router = useRouter();
const route = useRoute();

let slideId = parseInt(route.params.id);
const lang = 'et';

let htmlContent = reactive(slides[0].html[lang]);
let isLast = reactive(slides[0].isLast);
const localStore = new LocalStore('intro_slide');
watch(
    () => route.params.id,
    () => {
        slideId = parseInt(route.params.id);
        const slide = slides.find((slide) => slide.id === slideId);
        htmlContent = ref(slide.html[lang]);
        isLast = slide.isLast || false;
        console.log(isLast);

        localStore.setItem(`${slideId}_viewed`, 1);
    }
);
onMounted(async () => {
    slideId = parseInt(route.params.id);

    localStore.setItem(`${slideId}_viewed`, 1);
    const slide = slides.find((slide) => slide.id === slideId);
    htmlContent = slide?.html[lang];
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
<style lang="scss">
@import '../../vars';
.bg-overlay {
    background-color: rgba(0, 0, 0, 0.6);
}
.video-background-slide-wrapper {
    border: 1px dotted black;
    width: 100%;
    height: 100%;
    text-align: center;

    .inner-container {
        border: 1px solid black;
        display: inline-block;
        width: 100%;
        bottom: -100px;
        height: 102vh;

        object-fit: cover;
        //position: fixed;

        .overlay {
            z-index: 1;
            //position: absolute;
            font-size: 20px;
            width: auto;
            min-width: 100%;
            height: 100vh;
            object-fit: cover;
            position: fixed;
            //height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: $turquoise;
            background-color: rgba(0, 0, 0, 0.6);

            .content {
                display: flex;
                padding: 10rem 3rem;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 50%;
                background-color: rgba(0, 0, 0, 0.4);
            }
        }

        video {
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: relative;
        }
    }
}
</style>
