<template>
    <div class="main">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
    color: turquoise;
    font-size: 4rem;
}

.monospaced {
    font-family: monospace;
}
</style>
