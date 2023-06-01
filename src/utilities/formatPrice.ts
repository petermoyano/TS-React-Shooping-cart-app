const PRICE_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

export function formatPrice(price: number) {
    return PRICE_FORMATTER.format(price);
}
