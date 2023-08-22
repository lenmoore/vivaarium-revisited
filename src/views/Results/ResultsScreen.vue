<template>
    <div v-if="colorResult">
        <div class="results-wrapper">
            <header>
                <div class="left">
                    <div class="flex">
                        <img src="/android-chrome-512x512.png" />
                        <div class="data-text">
                            <small>Sinu kuuluvus</small> <br />
                            <small>{{ todaysDate.toISOString() }}</small>
                            <h1 :class="`${colorResult}`">
                                {{ colorResultString }}
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="capsule-wrapper">
                    <div class="capsule-desc">
                        <img
                            height="200"
                            :src="`/captains/${colorResult}.jpg`"
                            alt=""
                        />
                        <div>
                            <p>Sinu kapsel on tore ja lahe.</p>
                            <p>
                                Su kapten on __ __ ja __ __. Ta usub, et __ ja
                                seda usud ka sina.
                            </p>
                            <p>
                                Veel mingi tekst. Nt et su kapslis on 28 inimest
                                peale sinu.
                            </p>
                            <RouterLink
                                :to="{ name: 'welcome-video' }"
                                class="btn"
                            >
                                {{ $t('Sisene oma kapslisse') }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <h2>Detailne raport</h2>
                <div class="percents">
                    <span class="violet">
                        {{
                            Math.floor((allResults.violet / sum) * 10000) / 100
                        }}%
                    </span>
                    <span class="lime">
                        {{ Math.floor((allResults.lime / sum) * 10000) / 100 }}%
                    </span>
                    <span class="turquoise">
                        {{ Math.floor((allResults.turq / sum) * 10000) / 100 }}%
                    </span>
                    <span class="silver">
                        {{
                            Math.floor((allResults.silver / sum) * 10000) / 100
                        }}%
                    </span>
                </div>
            </section>
            <section>
                <div class="container">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

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

            {{ quiz1Answers }}
            <h2>results</h2>
            {{ quiz1Results }}
            <h1>Sinu andmed</h1>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '@/views/Shop/store';

const store = useStore();

import { computed } from 'vue';
const todaysDate = new Date();
const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);

const quiz1Answers = [];

for (let i = 1; i < 8; i++) {
    let ans = JSON.parse(localStorage.getItem(`quiz_1_${i}`));
    quiz1Answers.push(ans);
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
    quiz1Answers.push(ans);
}

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
    turq: 'turkiis',
    violet: 'violett',
    silver: 'hobevalge',
}[colorResult];
</script>
<style lang="scss">
@import '../../vars';
.results-wrapper {
    header {
        h2 {
        }

        .left {
            .flex {
            }
            .data-text {
            }
        }
    }
}

.percents {
    span {
        width: 2rem;
        margin: 1rem;
        padding: 1rem;
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
    color: $heading1;
    &.violet {
        background-color: $violet;
    }
    &.lime {
        background-color: $lime;
    }
    &.turquoise {
        background-color: $turquoise;
    }
    &.silver {
        background-color: $silver;
    }
}
.container {
}
.capsule-wrapper {
    .capsule-desc {
        img {
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
</style>
