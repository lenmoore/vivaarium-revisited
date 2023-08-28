<template>
    <div class="video-player-page">
        <WindowsContainer />
    </div>
</template>

<script>
import WindowsContainer from '@/views/VideoPlayer/WindowsContainer';
export default {
    components: {
        WindowsContainer,
    },
};
</script>

<style lang="scss">
.video-player-page {
    background-image: url('/public/pexels-philipp-deus-2234006.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    overflow: clip;
}
</style>
