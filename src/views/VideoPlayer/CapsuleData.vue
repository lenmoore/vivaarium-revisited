<template>
    <FloatingWindow
        title="Kapslis kaasas"
        :disable-drag="isMobile"
        id="capsule-data-window"
    >
        <div class="wrapper">
            <div
                class="product"
                :key="product.title"
                v-for="product in products"
            >
                <img width="50" :src="product.image" alt="" />
                {{ product.title }} x
                {{ product.count }}
            </div>
        </div>
    </FloatingWindow>
</template>
<script>
import FloatingWindow from '@/views/VideoPlayer/FloatingWindow';
const productsFile = await fetch('/data/products-data/27-01.products.json');
const productsJSON = await productsFile.json();
export default {
    components: { FloatingWindow },
    props: {
        color: {
            type: String,
            default: 'v',
        },
    },
    computed: {
        isMobile() {
            return window.innerWidth < 450;
            // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            //     navigator.userAgent
            // );
        },
        products() {
            console.log('prods', productsJSON);
            let prods = [];
            switch (this.color) {
                case 'h':
                    prods = productsJSON.silver;
                    break;
                case 't':
                    prods = productsJSON.turq;
                    break;
                case 'l':
                    prods = productsJSON.lime;
                    break;
                case 'v':
                default:
                    prods = productsJSON.violet;
                    break;
            }
            let sortedProducts = prods.sort((a, b) => a.count > b.count);
            console.log(sortedProducts);
            return sortedProducts;
        },
    },
};
</script>

<style lang="scss">
.wrapper {
    height: 35vh;
    overflow-y: scroll;
    .product {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        justify-content: flex-start;
        padding: 0.25rem;
        img {
            margin-right: 0.5rem;
        }
    }
}
</style>
