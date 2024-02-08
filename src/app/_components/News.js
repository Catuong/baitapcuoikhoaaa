
import Image from "next/image";
import Link from "next/link";


export default function News() {
    return (
    <div>
  
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
  </div>
  );
}