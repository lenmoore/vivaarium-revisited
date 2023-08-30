<template>
    <div class="taskbar-wrapper">
        <div
            @click="toggleColor"
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
            v-if="showLoot"
            @click="toggleLoot"
            :class="{ open: isLootOpen }"
            class="loot-box icon"
        >
            kohver
        </div>
        <div class="exit-player" @click="exit">finaal</div>
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
    computed: {
        showLoot() {
            if (this.$route.query.code) {
                return (
                    parseInt(
                        this.$route.query.code.substring(
                            1,
                            this.$route.query.code.length + 1
                        )
                    ) >= 3
                );
            }
            return false;
        },
    },
    methods: {
        closeAll() {
            if (this.isColorOpen) {
                this.toggleColor();
            }
            if (this.isLootOpen) {
                this.toggleLoot();
            }
            if (this.isChapterOpen) {
                this.toggleChapter();
            }
        },
        toggleColor() {
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
        exit() {
            this.$router.push({ name: 'overview' });
        },
    },
};
</script>

<style lang="scss">
@import '../vars';
.taskbar-wrapper {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 99%;
    margin-left: 0.25rem;
    z-index: 100;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: rgba(255, 255, 255, 0.47);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.94);

    .icon {
        margin-left: 0.5rem;
        background-color: white;
        padding: 0.5rem;
        border: 1px solid black;

        width: 4rem;
        text-align: left;

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
.exit-player {
    padding-left: 0.5rem;
}
</style>
