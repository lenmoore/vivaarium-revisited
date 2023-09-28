<template>
    <div class="quiz-intro-wrapper">
        <div class="black-milk">
            <h1>{{ $t('Kinnitasid oma ostukorvi') }}</h1>
            <RouterLink :to="{ name: 'quiz.intro' }" class="btn draw-border">
                {{ $t('Küsitluste juurde') }}
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../vars';
.quiz-intro-wrapper {
    background-color: #0e1926;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .black-milk {
        padding: 3rem;
        height: 80%;
        h1 {
            margin-bottom: 2rem !important;
        }
    }

    .btn {
        padding: 1rem;
        font-size: 1.5rem;
        background-color: rgba(0, 0, 0, 0.75);
    }
}
</style>
