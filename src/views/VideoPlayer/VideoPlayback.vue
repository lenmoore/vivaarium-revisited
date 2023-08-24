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
        <div class="active-video-description">{{ activeVideo.subtitle }}</div>
        <video
            v-if="activeVideo.videoUrl.length"
            id="ssvid"
            autoplay
            @timeupdate="checkTimestamp"
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
        <div class="no-video-error" v-else><span>Videot pole</span></div>
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
        routeCode() {
            if (this.routeCode) {
                return this.routeCode;
            }
            return 'v1';
        },
        activeVideo() {
            const videoNumber = this.routeCode.substring(
                1,
                this.routeCode.length + 1
            );
            return videos[this.routeCode[0]][videoNumber];
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
            const videoNumber = this.routeCode.substring(
                1,
                this.routeCode.length + 1
            );

            if (['6', '4', '16'].includes(videoNumber)) {
                this.$router.push({
                    name: this.$route.name,
                    query: {
                        code: `${this.routeCode[0]}${
                            this.activeVideo.number + 1
                        }`,
                    },
                });
            } else {
                document.getElementById('ssvid').play();
            }
        },
    },
};
</script>

<style lang="scss">
video {
    width: 99%;
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
.no-video-error {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        background-color: lightcoral;
        padding: 4rem;
    }
}

#video-playback {
    z-index: 2;
}
.active-video-description {
    width: 100%;
    text-align: left;
    padding: 0.5rem;
}
</style>
