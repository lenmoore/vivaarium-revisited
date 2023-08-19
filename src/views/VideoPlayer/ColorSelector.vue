<template>
    <div>
        <FloatingWindow id="color-selector">
            <div class="percents">
                <span
                    class="violet"
                    :class="{
                        active: $route.query.code.startsWith('v'),
                    }"
                    @click="select('violet')"
                >
                    Violett
                </span>
                <span
                    class="lime"
                    @click="select('lime')"
                    :class="{
                        active: $route.query.code.startsWith('l'),
                    }"
                >
                    Laim
                </span>
                <span
                    class="turquoise"
                    @click="select('turq')"
                    :class="{
                        active: $route.query.code.startsWith('t'),
                    }"
                >
                    Turkiis
                </span>
                <span
                    class="silver"
                    @click="select('hobevalge')"
                    :class="{
                        active: $route.query.code.startsWith('h'),
                    }"
                >
                    Hobevalge
                </span>
            </div>
        </FloatingWindow>
    </div>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { ref } from 'vue';
export default {
    components: { FloatingWindow },
    methods: {
        select(color) {
            console.log(color);

            this.$emit('select-color', color);
        },
    },
};
</script>

<style lang="scss">
@import '../../vars';
.percents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
        margin: 1rem;
        padding: 1rem;
        border: 4px solid transparent;
    }
    .violet {
        background-color: $violet;
    }
    .lime {
        background-color: $lime;
    }
    .turquoise {
        background-color: $turquoise;
    }
    .silver {
        background-color: $silver;
    }
    .active {
        border: 4px solid white;
    }
}
</style>
