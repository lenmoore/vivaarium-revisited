<template>
    <div class="page">
        <div class="windows-container">
            <div v-if="!isMobile" class="tip milk">
                Tipp: proovi aknaid ringi lohistada ja nende suurust muuta!
            </div>
            <div class="video-controls">
                <ColorSelector
                    v-if="isColorOpen"
                    @select-color="(val) => selectColor(val)"
                />
                <ChapterController
                    v-if="isChapterOpen && !isMobile"
                    :disabled="!ready"
                    @select-chapter="(val) => selectChapter(val)"
                />
            </div>
            <VideoPlayback
                @quiz-started="$refs.taskbar.closeAll()"
                @finish-quiz="reopenWindows"
                @reopen-windows="reopenWindows"
                @next-chapter="nextChapter"
                ref="playback"
            />
            <ChapterController
                v-if="isChapterOpen && isMobile"
                :disabled="!ready"
                @select-chapter="(val) => selectChapter(val)"
            />

            <CapsuleData :color="activeColor" v-if="isLootOpen" />
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
                this.$refs.playback.quizDone[chapterCode] = false;
                this.ready = this.$refs.playback.video.play() !== undefined;
                console.log('ready: ', this.ready);
                this.reopenWindows();
            }
        },
        nextChapter() {
            const nextChapter =
                parseInt(
                    this.activeCode.substring(1, this.activeCode.length + 1)
                ) + 1;
            console.log(nextChapter);
            this.activeChapter = nextChapter.toString();
            // this.$router.push({
            //     name: this.$route.name,
            //     query: {
            //         code: `${this.activeCode[0]}${nextChapter}`,
            //     },
            // });
            // this.selectChapter(this.activeCode);
        },
        selectColor(colorCode) {
            console.log(colorCode);
            this.activeColor = colorCode[0];
            localStorage.setItem('active_player_color', colorCode);
        },
        reopenWindows() {
            this.$refs.taskbar.closeAll();
            console.log('activechapter:', this.activeChapter);

            if (this.activeChapter === '3') {
                console.log('dude toggle loot');
                this.$refs.taskbar.toggleLoot();
            } else {
                this.$refs.taskbar.toggleChapter();
            }
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
.tip {
    padding: 1rem;
    margin: 1rem;
    width: 100%;
}
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
