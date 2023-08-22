<template>
    <div class="shop-background">
        <header>
            <h1>{{ $t('Humanity shop') }}</h1>
            <RouterLink
                class="cart-button"
                v-if="cart && cart.length"
                :to="{ name: 'cart' }"
            >
                Korvi
            </RouterLink>
        </header>
        <div class="infobox">
            {{
                $t(
                    'humanity shopi mingi intro tekst mis võiks öelda et noh 9 toodet saab kaasa võtta ja üldse olge kõvad. btw selle lehe taustal on inimeste skännimisvideo.'
                )
            }}
        </div>

        <ul class="product-list">
            <li class="product" v-for="product in products" :key="product.id">
                <img width="85" :src="product.image" alt="" />
                <div class="title">
                    <span> {{ product.title }} </span>
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
    background-image: url('/public/videoblocks-seamless-futuristic-surface-neon-blue-light-hexagon-pattern-abstract-motion-background_r-mkls1ols_thumbnail-1080_01.png');
    background-color: black;
    color: white;
    header {
        h1 {
            padding-top: 3rem;
            padding-bottom: 2rem;
            margin-top: 0;
            background-color: rgba(0, 0, 0, 0.75);
        }
    }
}
.product-list {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    padding: 0;

    .product {
        width: 6rem;
        height: 10rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 25%;
        border: 2px solid transparent;
        padding: 2rem;

        &:hover {
            //background-image: radial-gradient(#00fff0, black, transparent);
            //box-shadow: 0 0 50px #3f6969;
            .btn {
                cursor: pointer;
            }
        }

        img {
            border-radius: 25%;
        }
        .title {
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: 1.25rem;
            justify-content: flex-end;
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
    border: 1px dotted fuchsia;
    margin: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.75);
}

.hover-grey:hover {
    background-color: gray;
}

.cart-button {
    background-color: white;
    color: black;
    padding: 2rem;
    font-size: 2rem;
    text-decoration: none;
}
</style>
