<template>
    <div class="windows-container">
        <div class="video-controls">
            <ColorSelector @select-color="(val) => selectColor(val)" />
            <ChapterController @select-chapter="(val) => selectChapter(val)" />
        </div>
        <VideoPlayback ref="playback" />
        <CapsuleData v-if="parseInt(activeChapter) === 3" />
    </div>
</template>
<script>
import ColorSelector from '@/views/VideoPlayer/ColorSelector';
import ChapterController from '@/views/VideoPlayer/ChapterController';
import VideoPlayback from '@/views/VideoPlayer/VideoPlayback';
import CapsuleData from '@/views/VideoPlayer/CapsuleData';

export default {
    components: {
        CapsuleData,
        VideoPlayback,
        ChapterController,
        ColorSelector,
    },

    data() {
        return {
            activeChapter: '1',
            activeColor: 'v',
        };
    },
    computed: {
        activeCode() {
            return this.activeColor + this.activeChapter;
        },
    },

    watch: {
        activeCode: {
            immediate: true,
            handler() {
                this.$router.push({
                    name: this.$route.name,
                    query: { code: this.activeCode },
                });
            },
        },
    },

    methods: {
        selectChapter(chapterCode) {
            console.log(chapterCode);
            this.activeChapter = chapterCode.number.toString();
            this.$refs.playback.quizDone = false;
            this.$refs.playback.video.play();
        },
        selectColor(colorCode) {
            console.log(colorCode);
            this.activeColor = colorCode[0];
        },
    },
};
</script>

<style lang="scss">
.windows-container {
    display: flex;
    flex-wrap: wrap;
}
.video-controls {
    display: flex;
    flex-direction: column;
}
</style>
