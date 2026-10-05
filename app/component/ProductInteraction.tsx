"use client"
import { Product } from "@/app/types"
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import useChartStore from "@/app/stores/ChatStore"
import { toast } from "react-toastify";
const ProductInteraction = ({ product, selectedColor, selectedSize }: { product: Product, selectedColor: string, selectedSize: string }) => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const [q, setQ] = useState(1)

  const { addToCart } = useChartStore()
  // FUNC
  const handleChange = ({ type, val }: { type: "size" | "color", val: string }) => {

    const newURL = new URLSearchParams(searchParams.toString())
    newURL.set(type, val)
    router.push(`${pathName}?${newURL.toString()}`, { scroll: false })

  }

  // @assuming we have only 10 in the STOCK in DATABASE
  const MAX_STOCK = 10;
  const handleQuantity = (state: "+" | "-") => {
    switch (state) {
      case "+":
        setQ((prev) => (prev >= MAX_STOCK ? prev : prev + 1))
        break;

      case "-":
        setQ((prev) => (prev === 1 ? prev : prev - 1))
        break;

      default:
        break;
    }
  }

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        quantity: q,
        selectedColor: searchParams.get("color") || selectedColor,
        selectedSize: searchParams.get("size") || selectedSize
      }
    )
    toast.success("Added succesfully ")
  }






  return (
    <div className="flex flex-col gap-4 mt-4 p-5">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-3">
          {product.sizes.map((size) => (
            <div key={size} className="p-1 border rounded-md">
              <div
                className={`cursor-pointer size-6 flex items-center justify-center 
                ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                onClick={() => handleChange({ type: "size", val: size })}
              >
                <span>{size.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border- p-2 ${selectedColor === color ? "border-gray-700" : "border-white"
                }`}
              key={color}
              onClick={() => handleChange({ type: "color", val: color })}
            >
              <div className={`size-6`} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantity("-")}
            disabled={q === 1}
          >
            <Minus className="size-4" />
          </button>
          <span>{q}</span>
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantity("+")}
            disabled={q === MAX_STOCK}
          >
            <Plus className="size-4" />

          </button>
        </div>
      </div>
      {/* BUTTONS */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium hover:[&>div]:-rotate-50">
        <div>
          <ShoppingCart className="w-4 h-4" />
        </div>
        Buy this Item
      </button>
    </div>
  )
}

export default ProductInteraction
