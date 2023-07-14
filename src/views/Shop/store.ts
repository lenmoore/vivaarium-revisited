import { reactive } from 'vue';

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
};

const removeFromCart = (product: Product) => {
    const index = state.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        state.cart.splice(index, 1);
    }
};

const submitCart = () => {
    // Implement your logic for saving/submitting the cart
    console.log('Cart submitted:', state.cart);
};

export const useStore = () => {
    return {
        state,
        addToCart,
        removeFromCart,
        submitCart,
    };
};
