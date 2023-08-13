<template>
    <div class="video-wrapper">
        <video
            autoplay
            controls
            onended="showLink"
            src="/videos/fake-chapters/Ugly%20Betty%20S01E01%20Pilot.mkv"
        >
            <track default src="/videos/fake-chapters/subs.vtt" />
        </video>

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
