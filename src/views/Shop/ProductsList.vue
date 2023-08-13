<template>
    <div class="shop-background">
        <header>
            <h1>{{ $t('Humanity shop') }}</h1>
        </header>
        <div class="infobox">
            {{ $t('infobox-humanity-shop-intro-text') }}
        </div>
        <RouterLink
            class="cart-button"
            v-if="cart && cart.length"
            :to="{ name: 'cart' }"
            >Cart</RouterLink
        >
        <ul class="product-list">
            <li class="product" v-for="product in products" :key="product.id">
                <img width="200" :src="product.image" alt="" />
                <div class="title">
                    <span> {{ product.title }} </span>
                    <div v-if="isInCart(product)">
                        {{ $t('Already in cart') }}
                    </div>
                    <div v-else-if="cartFull">
                        {{ $t('Cart full') }}
                    </div>
                    <button
                        class="btn draw-border"
                        v-else
                        @click="addToCart(product)"
                    >
                        {{ $t('Add to Cart') }}
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';

const store = useStore();

const products = computed(() => store.state.products);

const localCart = localStorage.getItem('cart_items');

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
    background-color: black;
    color: white;
    header {
        h1 {
            padding-top: 5rem;
            margin-top: 0;
        }
    }
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    .product {
        width: 10rem;
        margin: 1.5rem;
        border: 8px solid transparent;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        .title {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            font-size: 1.5rem;
        }
        &:hover {
            //border: 8px solid $turquoise;
            //background-color: white;
        }

        .btn {
            margin-top: 1rem;
            font-size: 1.5rem;
        }
    }
}
.infobox {
    border: 1px dotted fuchsia;
    margin: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
}
.hover-grey:hover {
    background-color: gray;
}
.cart-button {
    background-color: white;
    color: black;
    padding: 2rem;
}
</style>
