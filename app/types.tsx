import z from "zod"

export type Product = {
    id:number|string;
    name:string;
    shortDescription:string;
    description:string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>
}


export type CartItemsType = Product & {
    quantity:number;
    selectedSize: string;
    selectedColor: string;
}


export const formValidationSchema = z.object({
        name: z.string().min(1, "Name is required!"),
        email: z.email().min(1, "Email is required!"),
        phone: z
        .string()
        .min(7, "Phone number must be between 7 and 10 digits!")
        .max(10, "Phone number must be between 7 and 10 digits!")
        .regex(/^\d+$/, "Phone number must contain only numbers!"),
        address: z.string().min(1, "Address is required!"),
        city: z.string().min(1, "City is required!"),
})

export type SHIPPINGFORMFIELDS = z.infer<typeof formValidationSchema>



export const formPaymentsSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
 
})

export type FORMPAYMENTSFEILDS = z.infer<typeof formPaymentsSchema>

export type CART_STPORE_TYPE =  {
    cart:CartItemsType[],
}

export type CART_STORE_ACTION_TYPE = {
    addToCart:  (newProduct:CartItemsType)=> void,
    removeFromCart:  (removedProduct:CartItemsType)=> void
    clearCart:()=> void
}