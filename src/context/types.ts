import { ReactNode } from "react";

export type ShoppingCartProviderProps = {
    children: ReactNode;
};
export type CartItem = {
    id: number;
    quantity: number;
};
export type ShoppingCartContextTypes = {
    getItemQuantity: (id: number) => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};
