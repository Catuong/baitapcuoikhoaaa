import Image from "next/image";

export default function Logo() {
  return (     
     <div className="bg-black-900 py-28 my-16 sm:py-32 ">
  <div className="flex">
<Image src="/logo1.png" alt="" width={166} height={33} />
<Image src="/logo2.png" alt="" width={91} height={33} />
<Image src="/logo3.png" alt="" width={156} height={36} />
<Image src="/logo4.png" alt="" width={194} height={32} />
<Image src="/logo5.png" alt="" width={200} height={33} />

</div>
</div>

);
}
