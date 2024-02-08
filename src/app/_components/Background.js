
import Image from "next/image";


export default function Background() {
    return (
    <div>
  
  {/* BACKGROUND */}
  
      <div class="relative py-5 ">
      <Image  className="w-full" src="/bg.png" alt="" width={120} height={90} />
  
        <div class="absolute top-48 left-0 ">
            <div className="px-1.5">
              <div className="max-w-xl px-9">
                <h1 className="fw-bold display-6 mb-4 text-black text-5xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className=" text-lg text-black  sm:mt-1 font-medium mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button class=" relative h-auto inline-flex items-center justify-center rounded-full text-white ring-offset-2 focus:ring bg-gray-800  px-4 py-2.5 font-medium text-sm text-center ">Shop Now</button>
              </div> 
              <div className="mt-12 px-9">
                <ul className="flex-wrap gap-x-12 gap-y-10 space-y-8 sm:space-y-0 sm:flex ">
                <li className="">
                  <h4 className="text-4xl text-black-600 font-semibold">200+</h4>
                  <p className="mt-3 font-medium">International Brands</p>
                </li>
                <li className="">
                  <h4 className="text-4xl text-black-600 font-semibold">2,000+</h4>
                  <p className="mt-3 font-medium">High Quality Products</p>
                </li>
                <li className="">
                  <h4 className="text-4xl text-black-600 font-semibold">30,000+</h4>
                  <p className="mt-3 font-medium">Happy Customers</p>
                </li>
                </ul>
              </div>
            </div>
        </div>
  </div>
  </div>
  );
}