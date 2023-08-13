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
    background-color: grey;
    padding-top: 6rem;
    height: 100%;
    width: 100%;
}
</style>
