<template>
    <div>
        <FloatingWindow id="chapter-controller">
            <div class="chapters-list-wrapper">
                <li
                    :key="`${index}_${chapter.key}`"
                    class="chapter-link"
                    v-for="(chapter, index) in chapters"
                >
                    {{ chapter.title }}
                </li>
            </div>
        </FloatingWindow>
    </div>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
export default {
    components: { FloatingWindow },
    data() {
        return {
            chapters: [],
        };
    },
};
</script>
