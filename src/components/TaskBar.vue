<template>
    <div class="taskbar-wrapper" :class="windowColor">
        <div
            @click="toggleColor"
            :class="{ open: isColorOpen }"
            class="color-selector icon"
        >
            {{ $t('varv') }}
        </div>
        <div
            @click="toggleChapter"
            :class="{ open: isChapterOpen }"
            class="chapter-selector icon"
        >
            {{ $t('peatykk') }}
        </div>
        <div
            v-if="showLoot"
            @click="toggleLoot"
            :class="{ open: isLootOpen }"
            class="loot-box icon"
        >
            {{ $t('kohver') }}
        </div>
        <div class="icon wide exit-player" @click="exit">
            {{ $t('Loe kokkuvotet') }}
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
    computed: {
        windowColor() {
            if (this.$route.query.code.includes('v')) {
                return 'violet';
            }
            return localStorage.getItem('active_player_color') || 'default';
        },
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
    border-radius: 1rem;
    margin-bottom: 0.5rem;

    .icon {
        margin-left: 0.5rem;
        background-color: white;
        padding: 0.5rem;
        border: 1px solid black;

        cursor: pointer;
        width: 4rem;
        text-align: left;
        &.wide {
            width: 8rem;
            font-size: 0.85rem;
        }

        &.open {
            background-color: #21d57e;
            font-weight: bold;
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

    &.violet {
        border: 1px solid $violet;
        .icon.open {
            background-color: $violet;
        }
    }
    &.lime {
        border: 1px solid $lime;
        .icon.open {
            background-color: $lime;
        }
    }
    &.turq {
        border: 1px solid $turquoise;
        .icon.open {
            background-color: $turquoise;
        }
    }
    &.silver {
        border: 1px solid $silver;
        .icon.open {
            background-color: $silver;
        }
    }
}
.os {
    padding-left: 0.5rem;
}
.exit-player {
    padding-left: 0.5rem;
    cursor: pointer;
}
</style>
