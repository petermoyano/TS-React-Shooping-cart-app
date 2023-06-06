import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { v4 as uuidv4 } from "uuid";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={uuidv4()} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
