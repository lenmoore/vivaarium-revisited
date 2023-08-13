<template>
    <!--    <div class="home">-->
    <!--        <h1>Welcome, Auditor.</h1>-->

    <!--        <RouterLink class="btn btn-primary" to="/intro"-->
    <!--            >{{ $t('Enter the Vivarium') }}-->
    <!--        </RouterLink>-->
    <RouterView />
    <!--    </div>-->
</template>

<style lang="scss">
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
