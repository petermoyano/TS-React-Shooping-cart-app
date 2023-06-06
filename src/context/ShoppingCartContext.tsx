import { createContext, useContext, useState } from "react";
import {
    ShoppingCartContextTypes,
    CartItem,
    ShoppingCartProviderProps,
} from "./types";

const ShoppingCartContext = createContext({} as ShoppingCartContextTypes);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function getItemQuantity(id: number) {
        return (
            cartItems.find((item: CartItem) => id === item.id)?.quantity || 0
        );
    }
    function increaseQuantity(id: number) {
        setCartItems((prevItems: CartItem[]) => {
            if (prevItems.find((item) => item.id === id) === undefined) {
                return [...prevItems, { id, quantity: 1 }];
            } else {
                return prevItems.map((item: CartItem) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity++ };
                    }
                    return item;
                });
            }
        });
    }
    function decreaseQuantity(id: number) {
        setCartItems((prevItems: CartItem[]) => {
            if (prevItems.find((item) => item.id === id)?.quantity === 1) {
                return prevItems.filter((item) => item.id !== id);
            }
            return prevItems.map((item: CartItem) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity-- };
                }
                return item;
            });
        });
    }
    function removeFromCart(id: number) {
        return setCartItems((prevItems: CartItem[]) => {
            return prevItems.filter((item) => item.id !== id);
        });
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                cartItems,
                setCartItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
