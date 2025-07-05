"use client";
import Link from "next/link";
import Image from "next/image";
import ChangeTheme from "./ChangeTheme";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow-lg">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
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

                {/* Hamburger menu for mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`block h-1 w-6 bg-blue-500 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-6 bg-blue-500 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-1 w-6 bg-blue-500 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-blue-500 text-xl hover:scale-110 duration-300 ">Home</Link>
                    <Link href="/about" className="text-blue-500 text-xl hover:scale-110 duration-300 ">About</Link>
                    <Link href="/contact" className="text-blue-500 text-xl hover:scale-110 duration-300 ">Contact</Link>
                    <Link href="/post-upload" className="text-blue-500 text-xl hover:scale-110 duration-300 ">New Blog</Link>
                </nav>

                <div className="hidden md:block">
                    <ChangeTheme />
                </div>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <nav className="md:hidden bg-white shadow-lg px-4 pb-4">
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
                        <Link href="/post-upload" className="text-blue-500 w-fit" onClick={() => setMenuOpen(false)}>New Blog</Link>
                        <ChangeTheme />
                    </div>
                </nav>
            )}
        </header>
    );
}