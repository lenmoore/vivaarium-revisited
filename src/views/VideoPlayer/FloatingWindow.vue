<template>
    <div :style="getStyle" :id="$props.id" class="window">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue';
defineProps({
    id: {
        type: String,
        default: '',
    },
});
const positionX = ref(40);
const positionY = ref(40);
const getStyle = ref(
    `left: ${positionX.value}px; right: ${positionY.value}px;`
);
</script>

<style lang="scss">
.window {
    background-color: white;
    border: 1px solid black;
    width: 600px;
    height: 500px;
    position: relative;

    &#capsule-data-window {
        height: 400px;
        width: 200px;
    }
    &#color-selector {
        height: 100px;
        width: 400px;
    }
    &#chapter-controller {
        height: 600px;
        width: 200px;
    }
    &#video-playback {
        height: 500px;
        width: 750px;
    }
}
</style>
