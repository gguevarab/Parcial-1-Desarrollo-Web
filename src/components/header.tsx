import Image from "next/image";

export default function Header() {
    return (
        <header className="main-header">
            <Image src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png" alt="Logo" width={100} height={100} className="logo" />
        </header>
    )
}