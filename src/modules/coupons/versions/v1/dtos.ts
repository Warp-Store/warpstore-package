export type CouponDto = {
    amount: number,
    type: "FIXED" | "PERCENTAGE",
    minValue: number,
}