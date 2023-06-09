import { createContext, useContext, useState } from "react";
import {
    ShoppingCartContextTypes,
    CartItem,
    ShoppingCartProviderProps,
} from "./types";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({} as ShoppingCartContextTypes);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    );
    const totalCartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find((item) => id === item.id)?.quantity || 0;
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
                totalCartQuantity,
                openCart,
                closeCart,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
