import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 gap-4 text-sm">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src={"/blog.png"}
                            width={36}
                            height={36}
                            alt="logo"
                            priority
                        />
                    </Link>
                    <h1 className="text-2xl font-bold">Blog</h1>
                </div>
                <div className="text-center md:text-left">
                    © 2025 Jaasir. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Link href="https://github.com/JaasirAhamed15" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/jaasirahamed15/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Linkedin
                    </Link>
                    <Link href="https://jaasirahamed.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Portfolio
                    </Link>
                </div>
            </div>
        </footer>
    );
}