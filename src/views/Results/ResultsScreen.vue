<template>
    <div class="results-wrapper" v-if="colorResult">
        <section>
            <h1 :class="`milk result-${colorResult}`">
                Sina oled {{ colorResultString }}.
            </h1>
        </section>
        <section>
            <div class="capsule-desc milk">
                <div class="imgs">
                    <img width="300" src="/android-chrome-512x512.png" />
                    <img
                        width="200"
                        :src="`/captains/${colorResult}.png`"
                        alt=""
                    />
                </div>
                <div class="description">
                    <div v-html="description"></div>
                    <div class="percents">
                        <span class="violet">
                            {{
                                Math.floor((allResults.violet / sum) * 10000) /
                                100
                            }}%
                        </span>
                        <span class="lime">
                            {{
                                Math.floor((allResults.lime / sum) * 10000) /
                                100
                            }}%
                        </span>
                        <span class="turquoise">
                            {{
                                Math.floor((allResults.turq / sum) * 10000) /
                                100
                            }}%
                        </span>
                        <span class="silver">
                            {{
                                Math.floor((allResults.silver / sum) * 10000) /
                                100
                            }}%
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="centered">
                <button
                    @click="
                        $router.push({
                            name: 'welcome-video',
                            query: { code: colorResult[0] + '1' },
                        })
                    "
                    class="btn draw-border"
                >
                    {{ $t('Sisene oma kapslisse') }}
                </button>
            </div>
        </section>

        <section>
            <div class="container milk">
                <div class="cart-wrapper">
                    <h2>Tooted</h2>
                    <img
                        v-for="item in cart"
                        :key="item.id"
                        width="100"
                        height="100"
                        :src="item.image"
                        alt=""
                    />
                </div>
            </div>
        </section>
        <section class="milk">
            <h2>Küsimustikud</h2>
            <div class="quiz-answers">
                <div :key="ans" v-for="ans in quiz1Answers">
                    <p>
                        <strong>
                            {{ ans && ans.option_text && ans.option_text }}
                        </strong>
                    </p>
                </div>
            </div>
            <div class="quiz-answers">
                <div :key="ans" v-for="ans in quiz2Answers">
                    <p>
                        <strong>{{ ans.question }} </strong>
                        <br /><span>{{ ans.option_text }}</span>
                    </p>
                </div>
            </div>
        </section>
        <section>
            <button
                @click="$router.push({ name: 'welcome-video' })"
                class="btn draw-border"
            >
                {{ $t('Sisene oma kapslisse') }}
            </button>
        </section>
    </div>
</template>
<script setup>
import { useStore } from '@/views/Shop/store';

const store = useStore();

import { computed } from 'vue';
import { descriptions } from '@/views/Results/descriptions';
import ProductsList from '@/views/Shop/ProductsList';

const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);

const quiz1Answers = [];

for (let i = 1; i < 8; i++) {
    let ans = JSON.parse(localStorage.getItem(`quiz_1_${i}`));
    if (ans) {
        quiz1Answers.push(ans);
    }
}

let quiz1Results = {
    violet: quiz1Answers
        .map((res) => res?.humanity_values?.fuchsia)
        .reduce((acc, cv) => acc + cv, 0),
    lime: quiz1Answers
        .map((res) => res?.humanity_values?.lime)
        .reduce((acc, cv) => acc + cv, 0),
    turq: quiz1Answers
        .map((res) => res?.humanity_values?.turq)
        .reduce((acc, cv) => acc + cv, 0),
    silver: quiz1Answers
        .map((res) => res?.humanity_values?.silver)
        .reduce((acc, cv) => acc + cv, 0),
};
const quiz2Answers = [];

for (let i = 1; i < 8; i++) {
    let ans = JSON.parse(localStorage.getItem(`quiz_2_${i}`));
    if (ans) {
        quiz2Answers.push(ans);
    }
}
console.log(quiz2Answers);
let quiz2Results = {
    violet: quiz2Answers
        .map((res) => res?.humanity_values?.fuchsia)
        .reduce((acc, cv) => acc + cv, 0),
    lime: quiz2Answers
        .map((res) => res?.humanity_values?.lime)
        .reduce((acc, cv) => acc + cv, 0),
    turq: quiz2Answers
        .map((res) => res?.humanity_values?.turq)
        .reduce((acc, cv) => acc + cv, 0),
    silver: quiz2Answers
        .map((res) => res?.humanity_values?.silver)
        .reduce((acc, cv) => acc + cv, 0),
};
console.log(quiz2Results);
const allResults = {
    violet: quiz1Results.violet + quiz2Results.violet,
    lime: quiz1Results.lime + quiz2Results.lime,
    turq: quiz1Results.turq + quiz2Results.turq,
    silver: quiz1Results.silver + quiz2Results.silver,
};
const sum =
    allResults.violet + allResults.lime + allResults.turq + allResults.silver;

const colorResult = Object.keys(allResults).reduce((a, b) =>
    allResults[a] > allResults[b] ? a : b
);
const colorResultString = {
    lime: 'laim',
    turq: 'türkiis',
    violet: 'violett',
    silver: 'hõbevalge',
}[colorResult];

const description = descriptions[colorResult];
localStorage.setItem('AUDITOR_RESULT', colorResult);
localStorage.setItem('active_player_color', colorResult);
localStorage.setItem('AUDITOR_RESULT_string', colorResultString);
</script>
<style lang="scss">
@import '../../vars';

.results-wrapper {
    padding: 1rem;
    h1 {
        padding: 0;
        margin: 0;
    }

    background-image: url('/public/pexels-rohi-bernard-codillo-17908342.jpg');
    background-size: cover;
}
.centered {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.percents {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 300px;
    width: 100%;
    span {
        padding: 0.5rem;
    }

    .violet {
        background-color: $violet;
    }

    .lime {
        background-color: $lime;
    }

    .turquoise {
        background-color: $turquoise;
    }

    .silver {
        background-color: $silver;
    }
}

h1 {
    color: black;
    &.result-violet {
        background-color: $violet;
    }

    &.result-lime {
        background-color: $lime;
    }

    &.result-turquoise {
        background-color: $turquoise;
    }

    &.result-silver {
        background-color: $silver;
    }
}

.container {
}

.capsule-desc {
    display: flex;
    padding: 1rem;
    .imgs {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .description {
        text-align: left;
        padding: 1rem;
        button {
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 450px) {
        flex-direction: column;
        img {
            width: 40%;
            display: inline;
        }
    }
}

@media screen and (max-width: 450px) {
    header {
        flex-direction: column;

        .left {
            height: 10rem;
            display: flex;
            align-items: center;
        }

        padding: 0 0 2rem !important;
    }
}

.cart-wrapper {
    img {
        margin: 0.5rem;
    }
}
.quiz-answers {
    padding: 0.5rem;
}
section {
    padding-bottom: 4rem;
}
</style>
