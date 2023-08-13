<template>
    <div class="video-wrapper">
        <video
            id="intro-vid"
            autoplay
            controls
            @ended="$router.push({ name: 'video-player' })"
            src="/videos/taskuviva_intro.mp4"
        >
            <track default src="/videos/fake-chapters/subs.vtt" />
        </video>
        <button
            style="display: none"
            id="begin-audit-link"
            class="btn draw-border"
        >
            {{ $t('Begin audit') }}
        </button>

        <div class="padding">
            <RouterLink :to="{ name: 'video-player' }">
                {{ $t('skip intro') }}
            </RouterLink>
        </div>
    </div>
</template>
<style lang="scss">
.video-wrapper {
    background-color: black;
    height: 100%;
    width: 100%;
    video {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    .padding {
        padding-bottom: 5rem;
        a {
            color: white;
            padding-right: 1rem;
        }
    }
}
</style>
