import Link from "next/link";
import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="m-auto mt-4 xl:px-14 md:px-12 px-8">
     
        {/* CONTACT */}
        <div className="mt-10 mb-10  ">  
          <div className=" rounded-2xl bg-black relative sm:py-20 overflow-hidden dark:overflow-visible dark:my-0 sm:my-10 flex justify-center ">
            <div className=" gap-10 justify-around md:flex "> 
              <h2 className="sm:py-5 text-white xl:text-4xl font-semibold sm:text-3xl sm: max-w-sm md:max-w-xl">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
              <div className="grid grid-cols-1 gap-2 col-span-1 sm:py-5">
                <input class="px-6 py-4 bg-slate-100 rounded-full w-96 text-sm focus:border-gray-400" type="text" placeholder="Enter your email address" value=""/>
                <button className="px-6 py-4 bg-slate-100  rounded-full w-96 text-sm focus:border-gray-400">Subscribe to Newsletter</button>
              </div>
            </div>
          </div>

        </div>
        {/* footer */}
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full mx-auto">
          <div className="">
      
              <div >
              <Image src="/SHOP.CO.png" alt="" width={100} height={100} />
              </div >
              <div className="flex mt-3 ">
                <p className="max-w-sm py-4">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
              </div>
              <div className="flex gap-2 mt-5 py-5">
              <Image src="/twitter.png" alt="" width={40} height={40} />
              <Image src="/fb.png" alt="" width={40} height={40} />
              <Image src="/insta.png" alt="" width={40} height={40} />
              <Image src="/github.png" alt="" width={40} height={40} />
              </div>
           
          </div>
          <div className="flex justify-between flex-wrap flex-grow xl:rtl:pl-60">
            <div className="mt-5 md:mt-0">
              <h3 className="text-md text-xl text-black-100 font-semibold ">COMPANY</h3>
              <div className="flex flex-col mt-2 ">
                <a className="py-2" href="" >About</a>
                <a className="py-2" href="">Feature</a>
                <a className="py-2" href="">Works</a>
                <a className="py-2"href="">Career</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-md text-xl text-black-100 font-semibold">HELP</h3>
              <div className="flex flex-col mt-2">
                <a className="py-2" href="">Customer Support</a>
                <a className="py-2" href="">Delivery Details</a>
                <a className="py-2" href="">Terms & Conditions</a>
                <a className="py-2"href="">Privacy Policyr</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-md text-xl text-black-100 font-semibold">FAQ</h3>
              <div className="flex flex-col mt-2">
                <a className="py-2" href="">Account</a>
                <a className="py-2" href="">Manage Deliveries</a>
                <a className="py-2" href="">Orders</a>
                <a className="py-2" href="">Payments</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-md text-xl text-black-100 font-semibold">RESOURCES</h3>
              <div className="flex flex-col mt-2">
                <a className="py-2" href="">Free eBooks</a>
                <a className="py-2" href="">Development Tutorial</a>
                <a className="py-2" href="">How to - Blog</a>
                <a className="py-2" href="">Youtube Playlist</a>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className="border-top py-2 mt-2">
        <div className=""> 
        <div className="mt-8 py-8 border-t flex items-center justify-between sm:flex">
          <div className="">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
          </div>
          <div className="list-unstyled mb-0 ms-lg-4 mt-3 mt-lg-0 flex">
            <Image src="/visa.png" alt="" width={55} height={40} />
            <Image src="/napas.png" alt="" width={55} height={40} />
            <Image src="/paypal.png" alt="" width={55} height={40} />
            <Image src="/apay.png" alt="" width={55} height={40} />
            <Image src="/gpay.png" alt="" width={55} height={40} />
          </div>
        </div>
        </div>
        </div>

    </div>

  );
}
