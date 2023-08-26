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
    //background-image: url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    overflow: clip;
}
</style>
