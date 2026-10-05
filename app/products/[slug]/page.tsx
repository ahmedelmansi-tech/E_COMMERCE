import ProductInteraction from "@/app/component/ProductInteraction"
import { Product } from "@/app/types"
import Image from "next/image"


// DEMO
const singleProduct: Product =
{
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  }
}

const page = async ({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ size: string, color: string }> }) => {
  const { slug: productId } = await params

  const pressedColor = (await searchParams).color
  const pressedSize = (await searchParams).size
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12 p-5">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={singleProduct.images[pressedColor]}
          alt={singleProduct.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{singleProduct.name}</h1>
        <p className="text-gray-500">{singleProduct.description}</p>
        <h2 className="text-2xl font-semibold">${singleProduct.price.toFixed(2)}</h2>
        <ProductInteraction
          product={singleProduct}
          selectedSize={pressedSize}
          selectedColor={pressedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/products/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/products/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/products/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  )
}

export default page
