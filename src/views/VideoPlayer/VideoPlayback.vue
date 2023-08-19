<template>
    <FloatingWindow id="video-playback">
        {{ activeVideo }}
        <video
            width="600"
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
        <!--        <iframe-->
        <!--            src="https://player.vimeo.com/video/763941723?h=6623122890&title=0&byline=0&portrait=0"-->
        <!--            width="640"-->
        <!--            height="360"-->
        <!--            frameborder="0"-->
        <!--            allow="autoplay; fullscreen; picture-in-picture"-->
        <!--            allowfullscreen-->
        <!--        ></iframe>-->
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
    },
};
</script>

<style lang="scss">
video::cue {
    font-size: 1.5rem;
    font-family: monospace;
}
</style>
