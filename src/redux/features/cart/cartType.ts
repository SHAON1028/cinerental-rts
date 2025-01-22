export type CartItem = {
    id:string;
    name:string;
    cover:string;
    genre:string;
    price:number;
    quantity:number
}

export type CartState = {
    items:CartItem[];
    totalQuantity:number;
    totalPrice:number
}