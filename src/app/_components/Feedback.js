
import Image from "next/image";


export default function Feedback() {
    return (
    <div>
  
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
  );
}