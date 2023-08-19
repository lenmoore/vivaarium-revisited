<template>
    <FloatingWindow
        :title="activeVideo.title"
        :start-width="videoStartWidth"
        :start-height="videoStartHeight"
        id="video-playback"
    >
        {{ activeVideo.subtitle }}
        <video
            id="intro-vid"
            autoplay
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
export default {
    components: { FloatingWindow },
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
</style>
