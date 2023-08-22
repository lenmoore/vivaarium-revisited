<template>
    <div class="main">
        <router-view />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
@import './vars';
#app {
    font-family: 'VT323', monospace;
    * {
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
    color: $turquoise;
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
</style>
