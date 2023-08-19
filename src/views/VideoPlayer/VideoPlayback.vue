<template>
    <FloatingWindow
        :title="activeVideo.title"
        :start-width="videoStartWidth"
        :start-height="videoStartHeight"
        id="video-playback"
    >
        <VideoQuiz
            @submit="finishQuiz"
            class="overlay-quiz"
            v-if="showQuiz && !quizDone"
            :quiz="quiz"
        />
        {{ activeVideo.subtitle }}
        <video
            id="ssvid"
            autoplay
            @timeupdate="checkTimestamp"
            muted
            controls
            :src="activeVideo && activeVideo.videoUrl"
        >
            <track
                default
                src="/subs/tyrkiis_v02_sub.vtt"
                kind="subtitles"
                srclang="en"
            />
        </video>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { videos } from '@/views/VideoPlayer/video-data';
import VideoQuiz from '@/views/VideoPlayer/VideoQuiz';

import { useStore } from '@/views/Quiz/store';
import { computed } from 'vue';
const quizStore = useStore();
const quizzes = computed(() => quizStore.state.quizzes);
export default {
    components: { VideoQuiz, FloatingWindow },
    data() {
        return {
            currentTime: null,
            quizDone: false,
            showQuiz: false,
        };
    },
    computed: {
        activeVideo() {
            console.log(videos);
            console.log(this.$route.query.code[0]);
            return videos[this.$route.query.code[0]][this.$route.query.code[1]];
        },
        videoStartWidth() {
            return 800;
        },
        videoStartHeight() {
            return this.videoStartWidth * 0.6;
        },
        hasQuiz() {
            return this.activeVideo.showQuiz != null;
        },
        quiz() {
            console.log(quizzes);
            quizzes.value.forEach((quiz) => console.log(quiz));
            return quizzes.value.find(
                (quiz) => quiz.name === this.activeVideo.showQuiz
            );
        },
        video() {
            return document.getElementById('ssvid');
        },
    },

    methods: {
        checkTimestamp(event) {
            if (this.hasQuiz && !this.quizDone) {
                const video = event.target;
                const targetTimestamp = this.activeVideo.quizTimestampInSeconds; // Set your desired timestamp here

                if (video.currentTime >= targetTimestamp) {
                    // Trigger your desired event or action here
                    console.log(`Reached timestamp ${targetTimestamp} seconds`);
                    video.pause();
                    this.showQuiz = true;
                }
            }
        },
        finishQuiz() {
            this.quizDone = true;
            document.getElementById('ssvid').play();
        },
    },
};
</script>

<style lang="scss">
video {
    width: 90%;
}
video::cue {
    font-size: 1.5rem;
    font-family: monospace;
}
.overlay-quiz {
    z-index: 3;
    height: 96%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
}
</style>
