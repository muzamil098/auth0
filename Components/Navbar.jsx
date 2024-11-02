// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          <Image
            src={"/logo.png"}
            height={1000}
            width={1000}
            alt="Image"
            className="w-[10rem]"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          {user && (
            <Link href="/" className="text-black hover:text-gray-300">
              Home
            </Link>
          )}
          {user && (
            <Link href="/about" className="text-black hover:text-gray-300">
              {" "}
              About
            </Link>
          )}
          {user && (
            <Link href="/services" className="text-black hover:text-gray-300">
              Services
            </Link>
          )}

          {user && (
            <Link
              href="/api/auth/logout"
              className="text-black"
            >
              Logout
            </Link>
          )}
          {!user && (
            <Link href={"/api/auth/login"} className="text-black">
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* <a href="/api/auth/login">Login</a> */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-300">
            About
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            href="/api/auth/login"
            className="block text-white hover:text-gray-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
