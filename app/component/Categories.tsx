"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
// usePathname, useRouter, 
import { useSearchParams ,useRouter , usePathname} from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
    const pathname = usePathname()
    const params = useSearchParams()
    const route = useRouter()

    const selectedCategory = params.get("category")
    
    const handleClick = (SLUG:string | null) => { 
        const newParams  = new URLSearchParams(params.toString())

        console.log("AFTER CLICK" , newParams);
        
            // if (SLUG === "all") {
            // newParams.delete("category");
            // } else {
            // newParams.set("category" , `${SLUG}`)
            // }

           newParams.set("category" , `${SLUG}`)

            route.push(`${pathname}?${newParams.toString()}`)
    }

    


  return (
    <div className="grid gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8  bg-gray-100 text-sm p-2 mt-1 ">
      {categories.map((cat)=> {
        return <div className={`flex justify-center items-center gap-2 p-2 place-items-center cursor-pointer ${selectedCategory === cat.slug ? "bg-gray-300" :""} hover:bg-gray-50`} key={cat.name}        onClick={()=> handleClick(cat.slug)}>
            {cat.icon}
            <span>{cat.name}</span>
        </div>
      })}
    </div>
  )
}

export default Categories
