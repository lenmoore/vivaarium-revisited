<template>
    <FloatingWindow id="video-playback"
        ><div>
            Mängib video <br />
            peatükk: {{ activeVideo && activeVideo.number }} <br />
            Värv: {{ activeVideo && activeVideo.capsule }}
        </div>
        <video
            width="600"
            id="intro-vid"
            muted
            autoplay
            controls
            src="/videos/taskuviva_intro.mp4"
        ></video>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { videos } from '@/views/VideoPlayer/video-data';
export default {
    components: { FloatingWindow },
    computed: {
        activeVideo() {
            return videos[this.$route.query.code];
        },
    },
};
</script>
