<template>
    <div class="page">
        <div class="windows-container">
            <VideoPlayback
                @quiz-started="$refs.taskbar.closeAll()"
                @finish-quiz="$refs.taskbar.toggleChapter()"
                ref="playback"
            />
            <div class="video-controls">
                <ColorSelector
                    v-if="isColorOpen"
                    @select-color="(val) => selectColor(val)"
                />
                <ChapterController
                    v-if="isChapterOpen"
                    :disabled="!ready"
                    @select-chapter="(val) => selectChapter(val)"
                />
            </div>
            <CapsuleData v-if="isLootOpen" />
        </div>
        <TaskBar ref="taskbar" @toggle="(val) => toggleWindow(val)" />
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

            ready: true,
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
            if (this.ready) {
                this.ready = false;
                console.log('ready: ', this.ready);
                console.log(chapterCode);
                this.activeChapter = chapterCode.number.toString();
                this.$refs.playback.quizDone = false;
                this.ready = this.$refs.playback.video.play() !== undefined;
                console.log('ready: ', this.ready);
            }

            this.$refs.taskbar.closeAll();
            if (this.activeChapter === 3) {
                this.$refs.taskbar.toggleLoot();
            } else {
                this.$refs.taskbar.toggleColor();
                this.$refs.taskbar.toggleChapter();
            }
        },
        selectColor(colorCode) {
            console.log(colorCode);
            this.activeColor = colorCode[0];
        },
        toggleWindow(val) {
            console.log('toggleWindow -> ', val);
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

    @media screen and (max-width: 450px) {
        .window,
        .video-controls {
            width: 100% !important;
        }
    }
}
.video-controls {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 450px) {
        padding-top: 0.5rem;
    }
}
</style>
