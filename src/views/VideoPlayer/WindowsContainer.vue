<template>
    <div class="windows-container">
        <ColorSelector />
        <CapsuleData />
        <ChapterController @select-chapter="(val) => selectChapter(val)" />
    </div>
</template>
<script>
import ColorSelector from '@/views/VideoPlayer/ColorSelector';
import CapsuleData from '@/views/VideoPlayer/CapsuleData';
import ChapterController from '@/views/VideoPlayer/ChapterController';
export default {
    components: { ChapterController, CapsuleData, ColorSelector },

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
