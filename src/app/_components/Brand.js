
import Image from "next/image";


export default function Brand() {
    return (
    <div>
  
  <div className="bg-black w-full py-19 my-12">
  <div className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
  <Image src="/logo1.png" alt="" width={166} height={33} />
  <Image src="/logo2.png" alt="" width={150} height={33} />
  <Image src="/logo3.png" alt="" width={156} height={36} />
  <Image src="/logo4.png" alt="" width={194} height={32} />
  <Image src="/logo5.png" alt="" width={190} height={33} />
  </div>
</div>
  </div>
  );
}