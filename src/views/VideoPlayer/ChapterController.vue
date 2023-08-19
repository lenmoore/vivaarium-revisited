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
                    active: $route.query.code.includes(chapter.number),
                }"
                :key="`${index}_${chapter.title}`"
                class="chapter-link"
                @click="$emit('select-chapter', chapter)"
            >
                {{ chapter.title }}
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
            return this.videos[this.$route.query.code[0]];
        },
    },
};
</script>
<style lang="scss">
.chapters-list-wrapper {
    height: 550px;
    overflow-y: scroll;
    list-style: none;
    padding: 0;
    .chapter-link {
        margin: 0.4rem;
        background-color: lightgrey;
        border: 1px solid grey;
        &.active {
            background-color: #42b983;
        }
    }
}
</style>
