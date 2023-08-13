<template>
    <div>
        <FloatingWindow id="color-selector">
            Im the color selector
        </FloatingWindow>
    </div>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { ref } from 'vue';
export default {
    components: { FloatingWindow },
};
</script>
