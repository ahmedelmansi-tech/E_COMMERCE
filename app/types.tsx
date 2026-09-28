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

export type SHIPPINGFORM = z.infer<typeof formValidationSchema>