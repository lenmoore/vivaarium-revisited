<template>
    <div class="taskbar-wrapper">
        <div
            @click="openColor"
            :class="{ open: isColorOpen }"
            class="color-selector icon"
        >
            värv
        </div>
        <div
            @click="toggleChapter"
            :class="{ open: isChapterOpen }"
            class="chapter-selector icon"
        >
            peatükk
        </div>
        <div
            @click="toggleLoot"
            :class="{ open: isLootOpen }"
            class="loot-box icon"
        >
            kohver
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isColorOpen: true,
            isChapterOpen: true,
            isLootOpen: false,
            isDataOpen: false,
        };
    },
    emits: ['toggle', 'close'],

    methods: {
        openColor() {
            this.$emit('toggle', 'color');
            this.isColorOpen = !this.isColorOpen;
        },
        toggleChapter() {
            console.log('toggle chapter');
            this.$emit('toggle', 'chapter');
            this.isChapterOpen = !this.isChapterOpen;
        },
        toggleLoot() {
            console.log('toggle loot');
            this.$emit('toggle', 'loot');
            this.isLootOpen = !this.isLootOpen;
        },
    },
};
</script>

<style lang="scss">
@import '../vars';
.taskbar-wrapper {
    background-color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    z-index: 100;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    -webkit-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);
    box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.51);

    .icon {
        background-color: white;
        padding: 0.5rem;
        border: 1px solid black;

        &.open {
            background-color: $heading1;
        }

        &.color-selector {
            &.violet {
                background-color: $violet;
            }
            &.lime {
                background-color: $lime;
            }
            &.turq {
                background-color: $turquoise;
            }
            &.silver {
                background-color: $silver;
            }
        }
    }
}
</style>
