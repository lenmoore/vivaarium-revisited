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
@import '../../vars';
.timer-wrapper {
    font-size: 3rem;
    padding-bottom: 2rem;
    color: $text-color;
}
</style>
