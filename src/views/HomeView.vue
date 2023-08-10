<template>
    <div class="home">
        <h1>Welcome, Auditor.</h1>

        <RouterLink class="btn btn-primary" to="/intro"
            >{{ $t('Enter the Vivarium') }}
        </RouterLink>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
    components: {
        HelloWorld,
    },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
