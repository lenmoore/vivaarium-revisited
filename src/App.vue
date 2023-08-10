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

button {
    font-size: 2rem;
    background-color: $turquoise;
}
</style>
