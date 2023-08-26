<template>
    <div class="page">
        <div class="windows-container">
            <VideoPlayback ref="playback" />
            <div class="video-controls">
                <ColorSelector
                    v-if="isColorOpen"
                    @select-color="(val) => selectColor(val)"
                />
                <ChapterController
                    v-if="isChapterOpen"
                    @select-chapter="(val) => selectChapter(val)"
                />
            </div>
            <CapsuleData v-if="isLootOpen && parseInt(activeChapter) <= 3" />
        </div>
        <TaskBar @toggle="(val) => toggleWindow(val)" />
    </div>
</template>
<script>
import ColorSelector from '@/views/VideoPlayer/ColorSelector';
import ChapterController from '@/views/VideoPlayer/ChapterController';
import VideoPlayback from '@/views/VideoPlayer/VideoPlayback';
import CapsuleData from '@/views/VideoPlayer/CapsuleData';
import TaskBar from '@/components/TaskBar';

export default {
    components: {
        TaskBar,
        CapsuleData,
        VideoPlayback,
        ChapterController,
        ColorSelector,
    },

    data() {
        return {
            activeChapter: '1',
            activeColor: 'v',

            isColorOpen: true,
            isChapterOpen: true,
            isLootOpen: false,
            isDataOpen: false,
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
        toggleWindow(val) {
            console.log('toggleWindow -> ', val);
            // this.isColorOpen: true,
            //     isChapterOpen: true,
            //     isLootOpen: false,
            //     isDataOpen: false,

            switch (val) {
                case 'color':
                default:
                    this.isColorOpen = !this.isColorOpen;
                    break;
                case 'chapter':
                    this.isChapterOpen = !this.isChapterOpen;
                    break;
                case 'loot':
                    this.isLootOpen = !this.isLootOpen;
                    break;
            }
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
