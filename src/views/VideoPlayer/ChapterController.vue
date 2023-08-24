<template>
    <FloatingWindow
        :title="'Vali peatykk'"
        :start-width="300"
        id="chapter-controller"
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
                <div class="title">{{ chapter.title }}</div>
                <div class="subtitle">{{ chapter.subtitle }}</div>
            </li>
        </ul>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { videos } from '@/views/VideoPlayer/video-data';

export default {
    components: { FloatingWindow },

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
    },
};
</script>
<style lang="scss">
@import '../../vars';
.chapters-list-wrapper {
    overflow-y: scroll;
    list-style: none;
    padding: 0;
    background-color: $background-color;
    margin: 0;
    height: 500px;
    .chapter-link {
        margin: 0.4rem;
        text-align: left;
        padding: 0.25rem;
        color: $text-color;
        .title {
            font-size: 1.25rem;
            font-weight: bold;
        }
        &.active {
            background-color: #42b983;
        }
    }
}
</style>
