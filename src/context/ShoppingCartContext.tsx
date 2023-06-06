import { ReactNode, createContext, useContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode;
};
type CartItem = {
    id: number;
    quantity: number;
};
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem>([]);

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

    return (
        <ShoppingCartContext.Provider
            value={{ getItemQuantity, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
