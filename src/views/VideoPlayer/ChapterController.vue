<template>
    <FloatingWindow
        :title="'Vali peatykk'"
        :start-width="300"
        :start-height="startHeight"
        id="chapter-controller"
        :disable-drag="isMobile"
    >
        <ul class="chapters-list-wrapper">
            <li
                v-for="(chapter, index) in chapters"
                :class="{
                    active:
                        routeCode.substring(1, routeCode.length + 1) ===
                        chapter.number.toString(),
                }"
                :key="`${index}_${chapter.title}`"
                class="chapter-link"
                @click="$emit('select-chapter', chapter)"
            >
                <div class="title">
                    {{ chapter.number }}. {{ chapter.title }}
                </div>
                <div class="subtitle">{{ chapter.subtitle }}</div>
            </li>
        </ul>
        <div>...</div>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { videos } from '@/views/VideoPlayer/video-data';

export default {
    components: { FloatingWindow },

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        videos() {
            return videos;
        },
        chapters() {
            const code =
                this.$route?.query && this.$route?.query?.code
                    ? this.$route?.query?.code[0]
                    : 'v';
            console.log(code);
            return this.videos[code];
        },
        routeCode() {
            if (this.$route.query.code) {
                return this.$route.query.code;
            }
            return 'v1';
        },
        startHeight() {
            if (this.isMobile) {
                return window.innerHeight * 0.4;
            }
            return 500;
        },
        isMobile() {
            return window.innerWidth < 450;
            // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            //     navigator.userAgent
            // );
        },
    },
};
</script>
<style lang="scss">
@import '../../vars';
#chapter-controller {
    height: 100%;
    padding-top: 1rem;
    overflow-y: clip;
}
.chapters-list-wrapper {
    overflow-y: scroll;
    list-style: none;
    padding: 0 0 40rem;
    height: 70%;
    margin: 0 0 40rem;

    .chapter-link {
        cursor: pointer;
        margin: 0.4rem;
        text-align: left;
        padding: 0.25rem;
        color: black;
        .title {
            font-size: 1.5rem;
        }
        .subtitle {
            font-size: 1.25rem;
        }
        &.active {
            background-color: #42b983;
        }

        &:hover {
            background-color: rgba(80, 176, 73, 0.5);
        }
    }
}
</style>
