<template>
    <div>
        <FloatingWindow
            :title="'Vaheta kapslit'"
            :start-width="300"
            :start-height="100"
            id="color-selector"
        >
            <div class="colors">
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
            <div class="active-capsule-data">
                <div>Aktiivne kapsel: {{ activeCapsule }}</div>
                <div>Populatsioon: 26</div>
                <div>Kapslis veedetud aeg: 2 aastat 7 kuud</div>
            </div>
        </FloatingWindow>
    </div>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { ref } from 'vue';
export default {
    components: { FloatingWindow },
    computed: {
        activeCapsule() {
            const code = this.$route.query.code;
            switch (code) {
                default:
                case code.startsWith('v'):
                    return 'violett';
                case code.startsWith('l'):
                    return 'laim';
                case code.startsWith('t'):
                    return 'turq';
                case code.startsWith('h'):
                    return 'hobevalge';
            }
        },
    },
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
.colors {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem;
    span {
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
.active-capsule-data {
    color: white;
    text-align: left;
    width: 100%;
    margin: 0.5rem;
}
</style>
