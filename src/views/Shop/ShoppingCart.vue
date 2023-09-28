<template>
    <div class="cart-page">
        <header>
            <h1>{{ $t('Ostukorv') }}</h1>
            <button
                class="btn cart-button"
                @click="$router.push({ name: 'products' })"
            >
                {{ $t('Poodi') }}
            </button>
        </header>
        <div
            style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 1rem;
            "
        >
            <div style="font-size: 1.5rem; margin: 1rem">
                {{ $t('Asju') }}: {{ cart.length }}/9
            </div>
            <button class="btn draw-border" @click="submit">
                {{ $t('Kinnita ostukorv') }}
            </button>
        </div>
        <ul class="cart-wrapper black-milk">
            <li class="item-in-cart" v-for="item in cart" :key="item.id">
                <div class="title">
                    <img class="image" width="80" :src="item.image" alt="" />
                    {{ $t(item.title) }}
                </div>
                <button class="btn draw-border" @click="removeFromCart(item)">
                    {{ $t('eemalda') }}
                </button>
            </li>
        </ul>
        <div v-if="cart && cart.length === 0">
            {{ $t('Su korv on tühi.') }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);

const removeFromCart = (item) => {
    store.removeFromCart(item);
};

async function submit() {
    await store.submitCart();
    await router.push({ name: 'quizzes.intro' });
}
</script>
<style lang="scss">
@import '../../vars';
.cart-page {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: $background-color;
    color: $text-color;
    height: 100%;
}
.cart-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
    text-align: left;
    list-style: none;
    padding-left: 0;

    .item-in-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.25rem;
        padding-left: 0;

        width: 100%;
        text-align: left;
        .title {
            display: flex;
            margin: 1rem;
            align-items: center;
        }
        .image {
            padding: 1rem;
        }

        button {
            padding: 1rem;
            margin-right: 1rem;
        }
    }
}
</style>
