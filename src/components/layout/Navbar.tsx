import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Hécate"
            width={100}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-amber-400 tracking-wide">
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-gray-300">
          <Link href="/#hero" className="hover:text-amber-400 transition duration-400">
            Início
          </Link>
          <Link href="/#about" className="hover:text-amber-400 transition duration-400">
            Sobre
          </Link>
          <Link href="/#aboutdesigner" className="hover:text-amber-400 transition duration-400">
            Designer
          </Link>
          <Link href="/#portfolio" className="hover:text-amber-400 transition duration-400">
            Capas
          </Link>
          <Link href="/#ordersection" className="hover:text-amber-400 transition duration-400">
            Personalizada
          </Link>
        </nav>

      </div>
    </header>
  );
}
