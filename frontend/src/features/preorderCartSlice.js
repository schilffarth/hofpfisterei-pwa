import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    store: '',
};

const preorderCartSlice = createSlice({
    name: 'preorderCart',
    initialState,
    reducers: {
        setStore: (state, action) => {
            state.store = action.payload;
        },

        addItem: (state, action) => {
            let toAdd = true;

            state.items = state.items.map((item) => {
                if (item.productId === action.payload.productId) {
                    action.payload.comment = action.payload.comment
                        ? action.payload.comment + '; ' + item.comment
                        : item.comment;

                    const oldQuantity = item.quantity;
                    action.payload.quantity = (
                        parseFloat(oldQuantity) + parseFloat(action.payload.quantity)
                    ).toString();

                    toAdd = false;
                    return action.payload;
                } else {
                    return item;
                }
            });

            if (toAdd) {
                state.items = [...state.items, action.payload];
            }

            state.items = state.items.filter((item) => item.quantity > 0);
        },

        updateComment: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.productId === action.payload.productId) {
                    // Override comment
                    item.comment = action.payload.comment;
                }

                return item;
            });
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.productId !== action.payload
            );
        },

        clearPreorderCart: (state, action) => {
            state.items = [];
        }
    },
});

export const { addItem, updateComment, removeItem, setStore, clearPreorderCart } = preorderCartSlice.actions;

export default preorderCartSlice.reducer;
