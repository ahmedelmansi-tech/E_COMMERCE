import { Product } from "../types"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
const SingleProduct = ({singleProduct}:{singleProduct:Product}) => {
  return (
      <div className="shadow-lg rounded-lg overflow-hidden">
        <Link href={`/products/${singleProduct.id}`} >
            {/* IMAGE PART */}
            <div className="relative aspect-2/3">
                <Image src={singleProduct.images[singleProduct.colors[0]]} alt={singleProduct.name} fill className="object-cover hover:scale-105 trasition ease-in-out duration-200"/>
            </div>
        </Link>
          {/* PRODUCT DETAIL */}
        <div className="flex flex-col gap-4 p-4">
            <h1 className="font-medium">{singleProduct.name}</h1>
            <p className="text-sm text-gray-500">{singleProduct.shortDescription}
            </p>
            {/* SIZES  && COLORS*/}
           <div className="flex items-center justify-between">
              {/* SIZE */}
             <div className="flex flex-col gap-2 text-sm ">
              <span className="text-xs text-gray-500">SIZE</span>
              <select name="size" id="size" className="ring px-2 py-1 rounded-md">
                {singleProduct.sizes.map((productSizes)=> {
                  return <option value={`${productSizes}`}>{productSizes.toUpperCase()}</option>
                })}
              </select>
            </div> 

              {/* COLORS */}
             <div className="flex flex-col gap-2 text-sm">
              <span className="text-xs text-gray-500">COLORS</span>
              <div className="flex gap-2 items-center">
              {singleProduct.colors.map((singleColor)=> {
                return <div className="size-5 rounded-full ring ring-gray-400 border-none cursor-pointer" style={{
                  backgroundColor:singleColor
                }}/>
              })}
              </div>
            </div>

           </div>

                {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${singleProduct.price.toFixed(2)}</p>
          <button
            // onClick={handleAddToCart}
            className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      </div>
  )
}

export default SingleProduct
