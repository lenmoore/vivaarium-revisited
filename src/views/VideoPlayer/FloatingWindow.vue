<template>
    <Vue3DraggableResizable
        :initW="startWidth + 60"
        class="window milk"
        :initH="startHeight + 60"
        v-model:x="x"
        v-model:y="y"
        v-model:w="w"
        v-model:h="h"
        :minW="300"
        :minH="100"
        v-model:active="active"
        :draggable="!disableDrag"
        :resizable="!disableDrag"
        @activated="print('activated')"
        @deactivated="print('deactivated')"
        @drag-start="print('drag-start')"
        @resize-start="print('resize-start')"
        @dragging="print('dragging')"
        @resizing="print('resizing')"
        @drag-end="print('drag-end')"
        @resize-end="print('resize-end')"
    >
        <div class="window-row">
            <span class="window-title">
                {{ title }}
            </span>
        </div>
        <div class="drag-cancel"><slot></slot></div>
    </Vue3DraggableResizable>
</template>

<script>
import Vue3DraggableResizable from 'vue3-draggable-resizable';

export default {
    components: { Vue3DraggableResizable },
    props: {
        startWidth: {
            type: Number,
            default: 200,
        },
        startHeight: {
            type: Number,
            default: 400,
        },
        title: {
            type: String,
            default: 'Video',
        },
        disableDrag: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            x: 0,
            y: 0,
            h: 100,
            w: 100,
            active: false,
        };
    },
    methods: {
        print(val) {
            console.log(val);
        },
    },
};
</script>

<style lang="scss">
@import '../../vars';

.window {
    font-family: 'VT323', monospace;
    user-select: none;
    @media screen and (min-width: 450px) {
        margin: 1rem;
    }

    .window-row {
        background-color: #21d57e;
        width: 97%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 16px;
        margin: 0.25rem;
        color: $text-color;
        .window-title {
            margin-left: 1rem;
            font-size: 1.5rem;
        }
    }

    color: $text-color;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    #video-playback {
        z-index: 3;
    }
    &#capsule-data-window {
        height: 400px;
        width: 200px;
        z-index: 4;
        padding-bottom: 20rem;
        padding-top: 1rem;
    }
    &#color-selector {
        z-index: 4;
    }
    &#chapter-controller {
        z-index: 2;
    }
}
.drag-cancel {
    z-index: 1;
    height: 100%;
    position: relative;
    width: 100%;
}
</style>
