
import Image from "next/image";


export default function Sellings() {
    return (
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
  </div>
  );
}