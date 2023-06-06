import { ReactNode, SetStateAction } from "react";

export type ShoppingCartProviderProps = {
    children: ReactNode;
};
export type CartItem = {
    id: number;
    quantity: number;
};
export type ShoppingCartContextTypes = {
    // openCart: () => void;
    // closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    // totalCartQuantity: number;
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};
