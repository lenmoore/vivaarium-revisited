<template>
    <div class="video-wrapper">
        <video
            id="intro-vid"
            autoplay
            controls
            @ended="
                $router.push({
                    name: 'video-player',
                    query: { ...$route.query },
                })
            "
            src="http://vivaarium.ee/videos/taskuviva_intro.mp4"
        >
            <track
                :src="`/${lang}/viva_intro_sub.vtt`"
                label="Eesti"
                kind="subtitles"
                default
                srclang="et"
            />
        </video>
        <button
            style="display: none"
            id="begin-audit-link"
            class="btn draw-border"
        >
            {{ $t('Alusta auditit') }}
        </button>

        <div class="padding">
            <RouterLink
                :to="{ name: 'video-player', query: { ...$route.query } }"
            >
                {{ $t('Jäta video vahele') }}
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        lang() {
            return sessionStorage.getItem('lang') || 'et';
        },
    },
};
</script>
<style lang="scss">
@import '../../vars';
.video-wrapper {
    background-color: $background-color;
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
            color: $text-color;
            padding-right: 1rem;
        }
    }
}
</style>
