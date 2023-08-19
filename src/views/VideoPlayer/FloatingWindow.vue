<template>
    <Vue3DraggableResizable
        :initW="startWidth + 100"
        :initH="startHeight + 100"
        v-model:x="x"
        v-model:y="y"
        v-model:w="w"
        v-model:h="h"
        v-model:active="active"
        class="window"
        :draggable="true"
        :resizable="true"
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
        <slot></slot>
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
    },
    data() {
        return {
            x: 100,
            y: 100,
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
.window {
    margin: 1rem;
    .window-row {
        background-color: #42b983;
        width: 100%;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .title {
            margin-left: 1rem;
        }
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
