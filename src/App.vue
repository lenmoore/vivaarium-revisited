<template>
    <div class="main">
        <div class="flag-container">
            <button @click="switchLang">
                <img height="30" :src="flagImage" alt="" />
            </button>
        </div>
        <router-view />
    </div>
</template>
<script>
console.log(sessionStorage.getItem('lang'));
if (sessionStorage.getItem('lang') == null) {
    sessionStorage.setItem('lang', 'et');
}
export default {
    computed: {
        flagImage() {
            return sessionStorage.getItem('lang') === 'et'
                ? '/united-kingdom.png'
                : '/estonia.png';
        },
    },

    methods: {
        switchLang() {
            if (sessionStorage.getItem('lang') === 'et') {
                sessionStorage.setItem('lang', 'en');
            } else {
                sessionStorage.setItem('lang', 'et');
            }
            location.reload();
        },
    },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&family=VT323&display=swap');
@import './vars';

.flag-container {
    position: absolute;
    width: 100%;
    display: flex;
    z-index: 20000;
    padding-top: 0.5rem;
    left: 0;
    top: 0;
    button {
        background-color: transparent;
    }
}

#app {
    font-family: 'Raleway', sans-serif;
    h1,
    h2,
    h3,
    h4,
    h5,
    button {
        font-family: 'VT323', monospace;
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0 !important;
}
html,
body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
}

.main {
    //margin: 4rem 1rem 1rem;
    height: 100%;
    width: 100%;
}

h1 {
    color: $heading1;
    font-size: 4rem;
}

// button effect

@mixin btn-border-drawing(
    $color: $dark-turquoise,
    $hover: #ad0707,
    $width: 2px,
    $vertical: top,
    $horizontal: left,
    $duration: 0.25s
) {
    box-shadow: inset 0 0 0 $width $color;
    color: $color;
    transition: color $duration $duration/3;
    position: relative;

    &::before,
    &::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: '';
        pointer-events: none;
        position: absolute;
        width: 0;
        height: 0;

        #{$vertical}: 0;
        #{$horizontal}: 0;
    }

    &::before {
        $h-side: if($horizontal == 'left', 'right', 'left');

        border-#{$vertical}-width: $width;
        border-#{$h-side}-width: $width;
    }

    &::after {
        $v-side: if($vertical == 'top', 'bottom', 'top');

        border-#{$v-side}-width: $width;
        border-#{$horizontal}-width: $width;
    }

    &:hover {
        color: $hover;

        &::before,
        &::after {
            border-color: $hover;
            transition: border-color 0s, width $duration, height $duration;
            width: 100%;
            height: 100%;
        }

        &::before {
            transition-delay: 0s, 0s, $duration;
        }

        &::after {
            transition-delay: 0s, $duration, 0s;
        }
    }
}

.draw-border {
    @include btn-border-drawing(white, $turquoise, 1px, bottom, right);
}

button {
    font-size: 1.5rem;
    background-color: $dark-turquoise;
    border: none;
    text-align: center;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    line-height: 1.5;
}

/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: orange;
}

.black-milk {
    background: rgba(0, 0, 0, 0.47);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 77, 77, 0.94);
}

.milk {
    background: rgba(255, 255, 255, 0.47);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.94);
}
</style>
