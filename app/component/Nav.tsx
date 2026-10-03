"use client"
import Link from "next/link"
import Image from "next/image"
import { Bell, Home, ShoppingCart} from "lucide-react";
import Searchbar from "./SearchBar"
import useChartStore from "../stores/ChatStore";

const Nav = () => {


  const {cart} = useChartStore()


  return (
    <nav className="container mb-1 mx-auto p-2 flex justify-between border-b border-gray-300 shadow-md drop-shadow-2xl">
      {/* LOGO */}
      <Link href={"/"} className="flex gap-1 items-center">
        <Image  src="/globe.svg" width={25} height={25} alt="IMAGE"/>
        <span className="text-xs tracking-wider">E-CM</span>
      </Link>

      {/* RIGHT SIDE */}

    <div className="flex gap-6">
      
      <Searchbar/>
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
              <Bell/>
          </Link>
        <Link href={"/"}>
            <Home/>
        </Link>
        <Link href={"/cart"} className="relative">
            <ShoppingCart/>
            <div className="absolute -top-3 left-3 size-5 bg-red-400 flex justify-center items-center text-white text-xs rounded-full shadow-xs">{cart.reduce((acc, current)=> acc + current.quantity ,0)}</div>
        </Link>
        </div>

        <button className="btn btn-neutral">Sign In</button>
    </div>
    </nav>
  )
}

export default Nav
