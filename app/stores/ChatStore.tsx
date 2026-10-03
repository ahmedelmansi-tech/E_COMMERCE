import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"
import { CART_STORE_ACTION_TYPE, CART_STPORE_TYPE } from "../types"


// WITHOUT PRESIST
// const   useChartStore = create<CART_STPORE_TYPE & CART_STORE_ACTION_TYPE>((set,get)=> ({
// cart:JSON.parse(localStorage.getItem("cart") || "[]") || [],
// addToCart:(newProduct)=> {
//     set((state)=> ({cart:[...state.cart ,newProduct]}))
//     localStorage.setItem("cart", JSON.stringify(get().cart))
// },
// removeFromCart:(removedProduct)=> {
//     set((state) => {
//         const updatedCartAfterRemoving = state.cart.filter((rmPro)=> rmPro.id !== removedProduct.id )
//         localStorage.setItem("cart" , JSON.stringify(updatedCartAfterRemoving))
//         return {
//             cart:updatedCartAfterRemoving
//         }
//     })
// },
// clearCart:()=> set((state) => ({cart:[]}))
// }))


// WITH PRESIST
const   useChartStore = create<CART_STPORE_TYPE & CART_STORE_ACTION_TYPE>()(
    persist(
          (set,get)=> ({
           cart: [],
           addToCart:(newProduct)=>{
            
            let isAlreadyAdded = get().cart.findIndex((everyAddedProduct)=> everyAddedProduct.id === newProduct.id && everyAddedProduct.selectedColor === newProduct.selectedColor && everyAddedProduct.selectedSize === newProduct.selectedSize)

            console.log(isAlreadyAdded);

            if (isAlreadyAdded === -1){
               return  set((state)=>({cart:[...state.cart , newProduct]}) )
            }

            const repeatedSelectedProduct = get().cart[isAlreadyAdded]

            if(repeatedSelectedProduct && repeatedSelectedProduct.selectedColor === newProduct.selectedColor &&  repeatedSelectedProduct.selectedSize === newProduct.selectedSize ){
                const updatedCart = get().cart
                updatedCart[isAlreadyAdded].quantity += 1
                console.log(updatedCart);
                return set((_)=> ({cart:updatedCart}))
            }
                
            
           }
           ,
           removeFromCart:(removedProduct)=> set((state) =>  ({cart:state.cart.filter((rePro)=> !(rePro.id === removedProduct.id && rePro.selectedColor === removedProduct.selectedColor && rePro.selectedSize ===
removedProduct.selectedSize) )}) ),



           clearCart:()=> set((state) => ({cart:[]}))
        }),{
            name:"cart",
            storage:createJSONStorage(()=> localStorage)
        }
    )
)

export default useChartStore