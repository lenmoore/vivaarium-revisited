<template>
    <div class="shop-background">
        <div class="header">
            <h1>{{ $t('Humanity shop') }}</h1>
            <RouterLink
                class="cart-button"
                v-if="cart && cart.length"
                :to="{ name: 'cart' }"
            >
                {{ $t('view basket') }}
            </RouterLink>
        </div>
        <div v-if="!hide" class="infobox black-milk">
            <span v-html="$t('shop-intro-text')"></span>
            <button class="btn draw-border" @click="hide = true">
                {{ $t('hide') }}
            </button>
        </div>

        <button class="btn draw-border" v-else @click="hide = false">
            {{ $t('Abi') }}
        </button>

        <ul class="product-list">
            <li class="product" v-for="product in products" :key="product.id">
                <img width="85" :src="product.image" alt="" />
                <div class="title">
                    <span> {{ $t(product.title) }} </span>
                    <div v-if="isInCart(product)">
                        {{ $t('Juba korvis') }}
                    </div>
                    <div v-else-if="cartFull">
                        {{ $t('Korv on TÄIS') }}
                    </div>
                    <button
                        class="btn draw-border"
                        v-else
                        @click="addToCart(product)"
                    >
                        {{ $t('Lisa korvi') }}
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from './store';

const store = useStore();

const products = computed(() => store.state.products);

const localCart = localStorage.getItem('cart_items');

const hide = ref(false);
if (!localCart) {
    localStorage.setItem('cart_items', '[]');
}
store.state.cart = JSON.parse(localCart);
console.log(localCart);
const cart = computed(() => store.state.cart);
console.log(cart);
const isInCart = (product) => {
    console.log(cart);
    return (
        cart.value &&
        cart.value?.find((prod) => prod.title === product.title) != null
    );
};
const cartFull = computed(() => cart?.value?.length >= 9);
const addToCart = (product) => {
    store.addToCart(product);
};
</script>

<style lang="scss">
@import '../../vars';
.shop-background {
    background-color: $background-color;
    color: $text-color;
    display: flex;
    flex-direction: column;
    .header {
        height: 16rem;
        h1 {
            color: $heading1;
            padding-top: 3rem;
            margin-bottom: 3rem;
            margin-top: 0;
        }
    }
}
.product-list {
    background-color: $background-color;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    padding: 0;

    .product {
        width: 6rem;
        text-align: center;
        height: 10rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        //border-radius: 25%;
        border: 2px solid transparent;
        padding: 3rem;

        &:hover {
            .btn {
                cursor: pointer;
            }
        }

        img {
            border-radius: 5%;
        }
        .title {
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            justify-content: flex-end;
            span {
                margin: 0.5rem;
            }
        }

        .btn {
            font-size: 1rem;
            text-wrap: none;
            width: 100%;
            background-color: #00fff0;
            color: black;
        }
    }
}

.infobox {
    font-size: 1.25rem;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0.5rem;
}

.cart-button {
    background-color: white;
    color: black;
    padding: 1rem 2rem;
    font-size: 2rem;
    text-decoration: none;
}
</style>
