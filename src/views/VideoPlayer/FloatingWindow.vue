<template>
    <Vue3DraggableResizable
        :initW="startWidth + 60"
        class="window"
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
            <span class="title">
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
    -webkit-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);
    box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);
    user-select: none;

    @media screen and (min-width: 450px) {
        margin: 1rem;
    }

    .window-row {
        background-color: #2d493c;
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: $text-color;
        .title {
            margin-left: 1rem;
            font-size: 1.5rem;
        }
    }
    background-color: $background-color;
    border: 1px solid black;
    color: $text-color;
    position: relative;

    #video-playback {
        z-index: 3;
    }
    &#capsule-data-window {
        height: 400px;
        width: 200px;
    }
    &#color-selector {
        z-index: 1;
        background-color: $background-color;
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
