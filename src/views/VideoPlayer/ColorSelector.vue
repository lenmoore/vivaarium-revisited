<template>
    <FloatingWindow
        :title="$t('Vaheta kapslit')"
        :start-width="300"
        :start-height="50"
        :disable-drag="isMobile"
        id="color-selector"
    >
        <span class="result"> Sina oled {{ colorResultString }}. </span>
        <div class="colors">
            <span
                class="violet"
                :class="{
                    active:
                        $route &&
                        $route.query &&
                        $route.query.code &&
                        $route.query.code.startsWith('v'),
                }"
                @click="select('violet')"
            >
                {{ $t('violett') }}
            </span>
            <span
                class="lime"
                @click="select('lime')"
                :class="{
                    active:
                        $route &&
                        $route.query &&
                        $route.query.code &&
                        $route.query.code.startsWith('l'),
                }"
            >
                {{ $t('laim') }}
            </span>
            <span
                class="turquoise"
                @click="select('turq')"
                :class="{
                    active:
                        $route &&
                        $route.query &&
                        $route.query.code &&
                        $route.query.code.startsWith('t'),
                }"
            >
                {{ $t('türkiis') }}
            </span>
            <span
                class="silver"
                @click="select('hõbevalge')"
                :class="{
                    active:
                        $route &&
                        $route.query &&
                        $route.query.code &&
                        $route.query.code.startsWith('h'),
                }"
            >
                {{ $t('hõbevalge') }}
            </span>
        </div>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
import { ref } from 'vue';
export default {
    components: { FloatingWindow },

    computed: {
        activeCapsule() {
            const code = this.$route.query.code;
            if (!code) {
                this.select('violet');
                return 'violett';
            }
            switch (code) {
                default:
                case code.startsWith('v'):
                    return 'violett';
                case code.startsWith('l'):
                    return 'laim';
                case code.startsWith('t'):
                    return 'turq';
                case code.startsWith('h'):
                    return 'hõbevalge';
            }
        },
        isMobile() {
            return window.innerWidth < 450;
        },
        colorResultString() {
            console.log(localStorage.getItem('AUDITOR_RESULT_string'));
            return localStorage.getItem('AUDITOR_RESULT_string') || 'default';
        },
    },
    methods: {
        select(color) {
            console.log(color);
            localStorage.setItem('active_player_color', color);
            this.$emit('select-color', color);
        },
    },
};
</script>

<style lang="scss">
@import '../../vars';
#color-selector {
    color: black;
    text-align: left;
    .result {
        padding-left: 1rem;
    }
}
.colors {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem;
    color: black;
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
    color: $text-color;
    text-align: left;
    background-color: $background-color;
    width: 90%;
    margin: 0.5rem;
}
</style>
