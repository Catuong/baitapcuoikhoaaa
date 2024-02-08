
import Image from "next/image";
import Link from "next/link";



export default function Feature() {
    return (
    <div>
  
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
  </div>
  );
}