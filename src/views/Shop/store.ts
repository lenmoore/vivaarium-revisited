import { reactive } from 'vue';
import { LocalStore } from '../../store/local-store';

const localStore = new LocalStore('cart');

interface Product {
    id: number;
    title: string;
    price: number;
    humanityValues: {
        fuchsia: number;
        lime: number;
        silver: number;
        turq: number;
    };
    image: string;
}

interface State {
    products: Product[];
    cart: Product[];
}

const state: State = reactive({
    products: [],
    cart: [],
});

// Load products from a nearby JSON file
fetch('/products.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        state.products = data;
    });

const addToCart = (product: Product) => {
    if (state.cart.length >= 9) {
        console.log('Cart is full');
        return;
    }

    state.cart.push(product);
    console.log(state.cart);
    localStore.setItem('items', state.cart);
};

const removeFromCart = (product: Product) => {
    const index = state.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        state.cart.splice(index, 1);
    }
    localStore.setItem('items', state.cart);
};

function submitCart() {
    console.log('Cart submitted:', state.cart);
    localStore.setItem('submitted', state.cart);
}

export const useStore = () => {
    return {
        state,
        addToCart,
        removeFromCart,
        submitCart,
    };
};
