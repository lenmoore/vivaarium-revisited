<template>
    <div :style="''" :id="$props.id" class="window">
        <div class="window-row"></div>
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
// const positionX = ref(40);
// const positionY = ref(40);
// const getStyle = ref(
//     `left: ${positionX.value}px; right: ${positionY.value}px;`
// );
</script>

<style lang="scss">
.window {
    margin: 1rem;
    .window-row {
        background-color: #42b983;
        width: 100%;
        height: 24px;
    }
    background-color: white;
    border: 1px solid black;
    //width: 600px;
    //height: 500px;
    position: relative;

    &#capsule-data-window {
        height: 400px;
        width: 200px;
    }
    &#color-selector {
        //height: 90px;
        //width: 450px;
        background-color: black;
    }
    &#chapter-controller {
        //height: 600px;
        //width: 450px;
    }
    &#video-playback {
        //height: 500px;
        //width: 750px;
        height: 450px;
        video {
            padding: 1rem;
        }
    }
}
</style>
