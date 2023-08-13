<template>
    <div class="timer-wrapper">
        {{ timerCount }}
    </div>
</template>

<script>
export default {
    props: {
        startTime: Date(),
    },
    data() {
        return {
            timerCount: 100,
        };
    },

    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
            },
            immediate: true, // This ensures the watcher is triggered upon creation
        },
    },
};
</script>

<style lang="scss">
.timer-wrapper {
    margin-top: 6rem;
    font-size: 4rem;
    color: white;
}
</style>
