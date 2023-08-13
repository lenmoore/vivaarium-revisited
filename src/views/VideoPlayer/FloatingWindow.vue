<template>
    <div :id="$props.id" class="window">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    id: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss">
.window {
    background-color: white;
    border: 1px solid black;
    width: 600px;
    height: 500px;

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
