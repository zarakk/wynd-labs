import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo/wynd-labs-logo-white.png"
                  alt="Wynd Labs"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm">™</p>
            </Link>
            <p className="text-sm font-light">
              Take Back Control of Your Internet.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Get in Touch
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://getgrass.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Grass
                </a>
              </li>
              {/* Add more products here */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  Contact
                </p>
              </li>
              <li>
                <a
                  href="https://boards.greenhouse.io/wyndlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Copyright of Half Space Labs Limited
            D/B/A Wynd Labs™
          </p>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/Wyndlabs_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
            </a>
            <button
              className="text-gray-400 hover:text-purple-500 transition duration-300"
              aria-label="Contact"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
