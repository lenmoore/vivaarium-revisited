<template>
    <FloatingWindow
        :title="$t('Kapslis kaasas')"
        :disable-drag="isMobile"
        id="capsule-data-window"
    >
        <div class="prods-wrapper">
            <div
                class="product"
                :key="product.title"
                v-for="product in products"
            >
                <img width="50" :src="product.image" alt="" />
                {{ $t(product.title) }} x
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
            default: localStorage.getItem('active_player_color')[0] || 'v',
        },
    },
    computed: {
        isMobile() {
            return (
                window.innerWidth < 450 || navigator.userAgent.includes('ios')
            );
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
.prods-wrapper {
    height: 40vh;
    overflow-y: scroll;
    .product {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        justify-content: flex-start;
        padding: 0.25rem;
        color: black;
        img {
            margin-right: 0.5rem;
        }
    }
}
</style>
