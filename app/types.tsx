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