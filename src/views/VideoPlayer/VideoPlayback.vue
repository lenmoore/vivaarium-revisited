<template>
    <FloatingWindow
        :title="'Peatükk ' + activeVideo && activeVideo.title"
        :start-width="videoStartWidth"
        :start-height="videoStartHeight"
        :disable-drag="isMobile"
        id="video-playback"
    >
        <VideoQuiz
            @submit="finishQuiz"
            class="overlay-quiz"
            v-if="showQuiz && !quizDone[activeVideo.showQuiz]"
            :quiz="quiz"
        />
        <div class="active-video-description">
            {{
                activeVideo && activeVideo.subtitle && $t(activeVideo.subtitle)
            }}
        </div>
        <video
            v-if="activeVideo.videoUrl.length"
            id="ssvid"
            autoplay
            @timeupdate="checkTimestamp"
            controls
            @ended="nextVideo"
            :src="activeVideo && activeVideo.videoUrl"
        >
            <track
                label="Eesti"
                kind="subtitles"
                srclang="et"
                :src="subtitleUrl"
                default
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
            quizDone: { v1: false },
            showQuiz: false,
        };
    },
    computed: {
        routeCode() {
            console.log(this.$route.query);
            if (this.$route.query.code) {
                return this.$route.query.code;
            }
            let localInfo = localStorage.getItem('AUDITOR_RESULT');
            console.log(localInfo);
            return localInfo[0] || 'v' + '1';
        },
        activeVideo() {
            const videoNumber = parseInt(
                this.routeCode.substring(1, this.routeCode.length + 1)
            );
            console.log(this.routeCode);
            console.log(videoNumber, typeof videoNumber);
            if (videoNumber && videos) {
                console.log(videos);
                console.log(this.routeCode[0]);
                const colorVideos = videos[this.routeCode[0]];
                console.log(colorVideos);
                return colorVideos[videoNumber || 1];
            }
            return {
                title: 'KAPSLI INTRO',
                subtitle: 'Inimesed saavad teada, kuhu on sattunud',
                videoUrl: 'http://167.71.52.104/violett/violett_v01.mp4',
                subs: 'http://167.71.52.104/violett_sub_v01.vtt',
                showLootBox: false,
                showQuiz: null,
                number: 1,
                quizTimestampInSeconds: null,
                autoplay: true,
            };
        },
        subtitleUrl() {
            const routeColor = this.routeCode[0];
            const lang = sessionStorage.getItem('lang') || 'et';
            console.log(lang);
            let url = '';
            const subcolor = {
                h: 'hõbevalge',
                t: 'türkiis',
                v: 'violett',
                l: 'laim',
            }[routeColor];
            // return '/et/türkiis_v02_sub.vtt';
            if (this.activeVideo.videoUrl.includes('01_ajahype')) {
                url = `/${lang}/01_ajahype_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('02_ajahype')) {
                url = `/${lang}/02_ajahype_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('finaal')) {
                url = `/${lang}/finaal_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('videokone1')) {
                url = `/${lang}/videokone1_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('videokone2')) {
                url = `/${lang}/videokone2_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('videokone3')) {
                url = `/${lang}/videokone3_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes('videokone4')) {
                url = `/${lang}/videokone4_sub.vtt`;
            } else if (this.activeVideo.videoUrl.includes(subcolor)) {
                console.log(this.activeVideo.videoUrl);

                const capsuleVideoNr = this.activeVideo.videoUrl
                    .split('_')[1]
                    .split('.')[0];
                console.log(capsuleVideoNr);
                url = `/${lang}/${subcolor}_sub_${capsuleVideoNr}.vtt`;
            }
            console.log(url);
            return url;
        },
        videoStartWidth() {
            return this.isMobile ? window.innerWidth : window.innerWidth * 0.5;
        },
        videoStartHeight() {
            return this.isMobile
                ? this.videoStartWidth * 0.65
                : this.videoStartWidth * 0.7;
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
        isMobile() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i,
            ];

            return toMatch.some((toMatchItem) => {
                return (
                    navigator.userAgent.match(toMatchItem) ||
                    window.innerWidth < 450
                );
            });
            // return window.innerWidth < 450;
        },
    },

    methods: {
        checkTimestamp(event) {
            if (this.hasQuiz && !this.quizDone[this.activeVideo.showQuiz]) {
                const video = event.target;
                const targetTimestamp = this.activeVideo.quizTimestampInSeconds; // Set your desired timestamp here

                if (video.currentTime >= targetTimestamp) {
                    // Trigger your desired event or action here
                    console.log(`Reached timestamp ${targetTimestamp} seconds`);
                    video.pause();
                    this.showQuiz = true;
                    this.$emit('quiz-started');
                }
            }
        },
        nextVideo() {
            this.$emit('next-chapter');
            this.$emit('reopen-windows');
        },
        finishQuiz() {
            this.showQuiz = false;
            this.quizDone[this.activeVideo.showQuiz] = true;
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
            this.$emit('finish-quiz');
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
    z-index: 101;
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
    padding: 1rem;
    font-size: 1.25rem;
    color: black;
    text-align: left;

    @media screen and (max-width: 450px) {
        padding: 0.5rem;
    }
}
</style>
