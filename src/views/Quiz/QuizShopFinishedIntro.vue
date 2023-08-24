<template>
    <div class="quiz-intro-wrapper">
        <div class="margin"></div>
        <h1>Kinnitasid oma ostukorvi</h1>
        <RouterLink :to="{ name: 'quiz.intro' }" class="btn draw-border">
            Küsitluste juurde
        </RouterLink>
    </div>
</template>

<style lang="scss">
@import '../../vars';
.quiz-intro-wrapper {
    .margin {
        margin-bottom: 4rem;
    }
    h1 {
        padding: 0;
        margin: 0;
    }
    background-color: #0e1926;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    color: $text-color;
    p {
        background-color: rgba(0, 0, 0, 0.75);
        padding: 5rem;
    }
    .btn {
        padding: 1rem;
        font-size: 1.5rem;
        background-color: rgba(0, 0, 0, 0.75);
    }
}
</style>
