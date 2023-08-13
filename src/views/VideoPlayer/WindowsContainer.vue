<template>
    <div class="windows-container">
        <FloatingWindow id="help-window">
            Sa saad aknaid liigutada.
        </FloatingWindow>
        <ColorSelector />
        <CapsuleData />
        <ChapterController @select-chapter="(val) => selectChapter(val)" />
        <VideoPlayback />
    </div>
</template>
<script>
import ColorSelector from '@/views/VideoPlayer/ColorSelector';
import CapsuleData from '@/views/VideoPlayer/CapsuleData';
import ChapterController from '@/views/VideoPlayer/ChapterController';
import VideoPlayback from '@/views/VideoPlayer/VideoPlayback';
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
export default {
    components: {
        FloatingWindow,
        VideoPlayback,
        ChapterController,
        CapsuleData,
        ColorSelector,
    },

    data() {
        return {
            activeVideo: '',
        };
    },
    methods: {
        selectChapter(chapterCode) {
            console.log(chapterCode);
            // todo set active video url
        },
    },
};
</script>

<style lang="scss">
.windows-container {
    display: flex;
}
</style>
