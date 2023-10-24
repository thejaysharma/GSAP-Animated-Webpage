import Image from "next/image";
import LOGO from "../../../public/assets/logo.jpg";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="sticky px-12 py-4 w-full flex items-center justify-between font-medium">
      <div className="logo">
        <Image
          height={50}
          width={50}
          className="rounded-lg"
          src={LOGO}
          alt="logo"
        />
      </div>
      <div className="links flex gap-8">
        <Link href="/">Emotions</Link>
        <Link href="/">Manifesto</Link>
        <Link href="/">Self-awareness test</Link>
        <Link href="/">Work With Us</Link>
      </div>
      <div>
        <button className=" bg-black text-white p-4 rounded-full">
          Download app
        </button>
      </div>
    </div>
  );
}
