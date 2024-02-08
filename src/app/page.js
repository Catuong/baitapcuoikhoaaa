import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export default function Home() {
  return (
  <div>

{/* BACKGROUND */}

    {/* <div class="relative py-5 ">
    <Image  className="w-full" src="/bg.png" alt="" width={1200} height={900} />

      <div class="absolute top-48 left-0 ">
          <div className="px-1.5">
            <div className="max-w-xl pl-32">
              <h1 className="fw-bold display-6 mb-4 text-black text-5xl font-semibold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className=" text-lg text-black  sm:mt-1 font-medium mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button class=" my-5 relative h-auto inline-flex items-center justify-center rounded-full text-white ring-offset-2 focus:ring bg-gray-800  px-4 py-2.5 font-medium text-sm text-center ">Shop Now</button>
            </div> 
            <div className="mt-12 pl-32">
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
    </div> */}

<div class="py-5 mb-5 explore-banner">
  <div class="bg-gray-500 position-relative py-md-5">
    <div class="position-md-absolute left-0 bottom-0 right-0">
      <div class="custom-container px-0">
        <div class="flex-row">
          <div class="col-md-5 offset-md-7">
            <div class="position-relative">
              <div class="position-md-absolute right-0 left-0 bottom-0">
              </div>
                </div>
                  </div>
</div>
</div>
</div>
<div class="custom-container py-md-5">
<div class="row py-5">
<div class="col-12 col-md-6 py-5">
<div className="max-w-xl pl-32">
              <h1 className="fw-bold display-6 mb-4 text-black text-5xl font-semibold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className=" text-lg text-black  sm:mt-1 font-medium mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button class=" my-5 relative h-auto inline-flex items-center justify-center rounded-full text-white ring-offset-2 focus:ring bg-gray-800  px-4 py-2.5 font-medium text-sm text-center ">Shop Now</button>
            </div>
</div>
</div>
</div>


</div>


  
{/* BRANDS */}

<div className="bg-black w-full py-19 my-12">
  <div className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex justify-center xl:justify-center sm: flex justify-center items-center ">
  <Image src="/logo1.png" alt="" width={166} height={33} />
  <Image src="/logo2.png" alt="" width={150} height={33} />
  <Image src="/logo3.png" alt="" width={156} height={36} />
  <Image src="/logo4.png" alt="" width={194} height={32} />
  <Image src="/logo5.png" alt="" width={190} height={33} />
  </div>
</div>

{/* NEW ARRIVED */}

<div className=" m-auto mt-4 xl:px-14 md:px-12 px-8">
 <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl max-w-xl xl:mx-auto xl:text-center">NEW ARRIVALS</h2>
 <div className="mt-12">
 <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
  <div className="card">
   <span>
    
    <Image src="/Frame32.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <Link href="/productdetailpage">
    <h3 className="text-xl text-black-100 font-semibold">T-shirt with Tape Deatails</h3>
    </Link>
    <div>
    <Link href="/productdetailpage">
    <Image src="/rate.png" alt="" width={150} height={33} />
    </Link>
    </div>
    <p className="text-xl text-black-100 font-semibold">$120</p>
      </div>
  </div>
        
  <div className="card">
   <span>
    <Image src="/Frame33.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <Link href="/productdetailpage">
    <h3 className="text-xl text-black-100 font-semibold">Skinny Fit Jeans</h3>
    </Link>
    <div>
    <Link href="/productdetailpage">
    <Image src="/rate.png" alt="" width={150} height={33} />
    </Link>
    </div>
    <p className="text-xl text-black-100 font-semibold">$240</p>
      </div>
  </div>

  <div className="card">
   <span>
   <Link href="/productdetailpage">
    <Image src="/Frame34.png" alt="" width={400} height={400} />
    </Link>
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">Checkered Shirt</h3>
    <div>
    <Link href="/productdetailpage">
    <Image src="/rate.png" alt="" width={150} height={33} />
    </Link>
    </div>
    <p className="text-xl text-black-100 font-semibold">$180</p>
      </div>
  </div>

  <div className="card">
   <span>
   <Link href="/productdetailpage">
    <Image src="/Frame38.png" alt="" width={400} height={400} />
    </Link>
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">Sleeve Striped T-Shirt</h3>
    <div>
    <Link href="/productdetailpage">
    <Image src="/rate.png" alt="" width={150} height={33} />
    </Link>
    </div>
    <p className="text-xl text-black-100 font-semibold">$130</p>
      </div>
  </div>
</div>
   </div>
    </div>
    

    
    <div className="text-center mt-3">
      <button className="w-64 bg-white border text-black py-4 px-12 text-center font-medium text-sm rounded-full ">View All</button>
    </div>

    {/* TOP SELLING */}
    
    <div>
    <div className="m-auto mt-6 xl:px-14 md:px-12 px-8">
 <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl max-w-xl xl:mx-auto xl:text-center">TOP SELLING</h2>
 <div className="mt-12">
 <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
  <div className="card">
   <span>
    <Image src="/Sell1.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">Vertical Striped Shirt</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$212</p>
      </div>
  </div>
        
  <div className="card">
   <span>
    <Image src="/Sell2.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">Courage Graphic T-Shirt</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$145</p>
      </div>
  </div>

  <div className="card">
   <span>
    <Image src="/Sell3.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">Loose Fit Bermuda Shorts</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$80</p>
      </div>
  </div>

  <div className="card">
   <span>
    <Image src="/Sell4.png" alt="" width={400} height={400} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-xl text-black-100 font-semibold">T-shirt with Tape Deatails</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$210</p>
      </div>
  </div>
</div>
   </div>
    </div>
    <div className="text-center mt-3">
      <button className="w-64 bg-white border text-black py-4 px-12 text-center font-medium text-sm rounded-full ">View All</button>
    </div>
    {/* DRESS STYLE */}
      <div className="py-14 sm:py-20 ">
    <div className="m-auto mt-4 xl:px-14 md:px-12 px-8">
    <div className="flex flex-col items-center my-4 md:my-8 ">
      <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl max-w-xl xl:mx-auto xl:text-center">BROWSE BY DRESS STYLE</h2>
      </div>
      <div className="mx-auto max-w-6xl w-full grid sm:grid-cols-2  grid-cols-1 gap-2 mt-12">
      <Link href="/casual">
      <Image src="/Casual.png" alt="" width={407} height={289} />
      </Link>
      <Image src="/Formal.png" alt="" width={684} height={33} />
      <Image src="/Party.png" alt="" width={684} height={33} />
      <Image src="/Gym.png" alt="" width={407} height={33} />
      </div>
      </div>
      </div>
      {/* CUSTOMER */}
      <div className="py-10 sm:py-24 ">
      <div className="m-auto mt-4 xl:px-14 md:px-12 px-8 ">
        <div className="py-10">
          <h2 className="h2 font-semibold text-3xl lg:text-5xl">OUR HAPPY CUSTOMERS</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-3">
          <div className="border-2 py-5 px-5 rounded-2xl">
            <Image src="/rate2.png" alt="" width={150} height={50} />
            <h4 className="text-xl text-black-100 font-semibold">Sarah M.</h4>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          <div className="border-2 py-5 px-5 rounded-2xl">
            <Image src="/rate2.png" alt="" width={150} height={50} />
            <h4 className="text-xl text-black-100 font-semibold">Sarah M.</h4>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          <div className="border-2 py-5 px-5 rounded-2xl">
            <Image src="/rate2.png" alt="" width={150} height={50} />
            <h4 className="text-xl text-black-100 font-semibold">Sarah M.</h4>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          <div className="border-2 py-5 px-5 rounded-2xl">
            <Image src="/rate2.png" alt="" width={150} height={50} />
            <h4 className="text-xl text-black-100 font-semibold"> Sarah M.</h4>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
        </div>
        </div>
        </div>
        
        </div>
        

</div>
</div>
  );
}
