import Image from "next/image";
import Categories from "./component/Categories";
import ProductsList from "./component/ProductsList";

export default function Home() {
  return (
  <>
    <div className="relative aspect-video container mx-auto">
      <div className="absolute inset-0 flex items-center justify-center z-20">
    <p className="text-3xl md:text-5xl lg:text-8xl xl:text-9xl text-white font-bold">MAN-Si</p>
  </div>
     
      <Image src={"/hero.jpg"} fill  alt="hero" />
    </div>
    <Categories/>
    <ProductsList/>
  </>
  );
}
