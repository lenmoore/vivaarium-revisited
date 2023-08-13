<template>
    <div :id="$props.id" class="window">
        <UseDraggable :initialValue="{ x: 10, y: 10 }" v-slot="{ x, y }">
            Drag me! I am at {{ x }}, {{ y }} <slot></slot>
        </UseDraggable>
    </div>
</template>

<script setup>
import { useDraggable } from '@vueuse/core';

const el = (ref < HTMLElement) | (null > null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
});
import { defineProps, ref } from 'vue';
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
