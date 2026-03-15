import Image from "next/image";
import Link from "next/link";

// The logo must route to the home page of the current language

export default function Header({ lang }: { lang: string }) {
    return (
        <header className="bg-[#FDB608] flex flex-col items-center justify-center py-4 w-full">
            <Link href={`/${lang}`}>
                <Image src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png" alt="Logo" width={180} height={80} className="logo mb-2" />
            </Link>
            <div className="flex gap-2 text-sm uppercase tracking-widest text-[#555555]">
                <Link href="/en" className={lang === "en" ? "font-bold text-white drop-shadow-md" : "hover:text-black transition-colors"}>EN</Link>
                <span> </span>
                <Link href="/es" className={lang === "es" ? "font-bold text-white drop-shadow-md" : "hover:text-black transition-colors"}>ES</Link>
            </div>
        </header>
    )
}