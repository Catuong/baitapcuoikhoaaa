import Link from "next/link";
import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="">
    <div className=""> 
      <div>
      <div class="relative flex items-center justify-center gap-4 bg-black px-4 py-3 text-white">
        <p class="text-sm font-medium">Sign up and get 20% off to your first order.<a href="#" class="inline-block underline">Sign Up Now</a></p>
        <Image src="/close.png" alt="" width={20} height={20} />
        
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-8"> 
<div className="flex h-16 justify-between gap-4 md:gap-8">
  <div className="flex items-center font-bold">
  <Image src="/SHOP.CO.png" alt="" width={200} height={200} />

  </div>
  <div className="flex w-full gap-4 lg:gap-6">
<ul className="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
  <li className="inline-flex">
<a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-lg font-medium" href="">Shop</a>
  </li>
  <li className="inline-flex">
<a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-lg font-medium" href="">On Slae</a>
  </li>
  <li className="inline-flex">
<a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-lg font-medium" href="">New Arrivals</a>
  </li>
  <li className="inline-flex">
<a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-lg font-medium" href="">Brands</a>
  </li>
</ul>
<div className="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
<div className="flex items-center">
<a className="relative flex items-center" href=""></a>
</div >
<div className="max-w-[50rem] w-full md:w-[90%] px-4 md:ltr:ml-4 md:rtl:mr-4 rounded-lg bg-slate-600/10 dark:bg-slate-800 flex items-center flex-grow">
<Image src="/Vector.png" alt="" width={20} height={20} />
<input class="px-4 py-2 bg-slate-100 focus:outline-none w-80 text-sm focus:border-gray-400" type="text" placeholder="Search for products..." value=""/>
</div>
<div className=" flex gap-2">
<Link href="/cart">
<Image src="/Frame.png" alt="" width={40} height={40} />
</Link>
<Image src="/Frame1.png" alt="" width={40} height={40} />

</div>
</div>
  </div>
</div>
      </div>
    
    </div>
    </div>

  );
}
