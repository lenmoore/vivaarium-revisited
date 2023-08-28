<template>
    <div>
        <div><h1>Viva statistika</h1></div>
        <div v-if="showDateSelect" class="select-performance">
            <button class="performance-button" @click="showSummary">
                Kõigi kokkuvõte
            </button>
            <br />
            <button
                :class="{ active: performance.selected }"
                class="performance-button"
                :key="performance.date"
                v-for="performance in performances"
                @click="selectPerformance"
            >
                {{ performance.date }}. jaanuar
            </button>
        </div>
        <button
            v-else
            @click="showDateSelect = true"
            class="btn draw-border m-0"
        >
            Vali kuupaev
        </button>
        <RouterView v-if="!showDateSelect" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            showDateSelect: false,
        };
    },

    computed: {
        performances() {
            return [
                { title: 'esikas', date: 18, selected: false },
                { title: 'teine', date: 19, selected: false },
                { title: 'kolmas', date: 20, selected: false },
                { title: 'kolmas', date: 21, selected: false },
                { title: 'kolmas', date: 23, selected: false },
                { title: 'kolmas', date: 24, selected: false },
                { title: 'kolmas', date: 25, selected: false },
                { title: 'kolmas', date: 26, selected: false },
                { title: 'kolmas', date: 27, selected: false },
                { title: 'kolmas', date: 28, selected: false },
            ];
        },
    },
    methods: {
        selectPerformance(val) {
            console.log(val);
            this.showDateSelect = false;
        },
        showSummary() {
            console.log('show summary of all performances');
            this.$router.push({ name: 'overview.stats.all' });
            this.showDateSelect = false;
        },
    },
};
</script>

<style lang="scss">
.select-performance {
    width: 100%;
}
.performance-button {
    background-color: white;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid blue;

    &.active {
        background-color: #0c2f7c;
        color: orange;
    }
}
.m-0 {
    margin: 0;
}
</style>
