<template>
    <div>
        <FloatingWindow id="chapter-controller">
            <ul class="chapters-list-wrapper">
                <li
                    :class="{
                        active: $route.query.code.includes(chapter.number),
                    }"
                    :key="`${index}_${chapter.title}`"
                    class="chapter-link"
                    v-for="(chapter, index) in chapters"
                    @click="$emit('select-chapter', chapter)"
                >
                    {{ chapter.title }}
                </li>
            </ul>
        </FloatingWindow>
    </div>
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
            return {
                v1: {
                    capsule: 'violett',
                    title: 'esimene peatykk',
                    videoUrl: '',
                    number: 1,
                },
                v2: {
                    capsule: 'violett',
                    title: 'teine peatykk',
                    videoUrl: '',
                    number: 2,
                },
                v3: {
                    capsule: 'violett',
                    title: 'kolmas peatykk',
                    videoUrl: '',
                    number: 3,
                },
                z1: {
                    number: 4,
                    capsule: 'zoom',
                    title: 'esimene videosild (4. ptk)',
                    videoUrl:
                        'https://www.dropbox.com/l/scl/AABCFt-At8HmHG8EFXi0VhZOGNkxMxNd-oc&dl=1&raw=1',
                },
            };
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
