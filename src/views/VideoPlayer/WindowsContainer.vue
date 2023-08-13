<template>
    <div class="windows-container">
        <VideoPlayback />
        <div class="video-controls">
            <ColorSelector @select-color="(val) => selectColor(val)" />
            <ChapterController @select-chapter="(val) => selectChapter(val)" />
        </div>
        <CapsuleData v-if="parseInt(activeChapter) > 1" />
    </div>
</template>
<script>
import ColorSelector from '@/views/VideoPlayer/ColorSelector';
import ChapterController from '@/views/VideoPlayer/ChapterController';
import VideoPlayback from '@/views/VideoPlayer/VideoPlayback';
import { videos } from '@/views/VideoPlayer/video-data';
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
            // todo set active video url
            this.activeChapter = chapterCode.number.toString();
            if (chapterCode.capsule === 'zoom') {
                this.selectColor('zoom');
            }
        },
        selectColor(colorCode) {
            console.log(colorCode);
            this.activeColor = colorCode[0];
            // todo set active video url
        },
    },
};
</script>

<style lang="scss">
.windows-container {
    display: flex;
}

.video-controls {
    display: flex;
    flex-direction: column;
}
</style>
