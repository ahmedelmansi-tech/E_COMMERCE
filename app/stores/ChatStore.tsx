import {create} from "zustand"
import { CART_STORE_ACTION_TYPE, CART_STPORE_TYPE } from "../types"

const   useChartStore = create<CART_STPORE_TYPE & CART_STORE_ACTION_TYPE>((set)=> ({
cart:[],
addToCart:(newProduct)=> set((state)=> ({cart:[...state.cart ,newProduct]})),
removeFromCart:(removedProduct)=> set((state)=> ({cart: state.cart.filter((pro) => pro.id !== removedProduct.id) })),
clearCart:()=> set((state) => ({cart:[]}))
}))


export default useChartStore