import Image from 'next/image';
import Link from 'next/link';
import { products } from '../app/data/product';
import RootLayout from '../app/layout';
import '../app/globals.css';
import type { AppProps } from 'next/app';
import  Component  from 'lucide-react';
import React from 'react'


const Home = () => {
  return (
    <div className="relative w-[1920px] h-[4898px] mx-auto">
      {/* Navigation */}


    <nav className="w-full bg-white">
      <div className="container mx-auto">
        {/* Top Part */}
        <div className="w-full bg-[#180f54] p-[14px_300px] flex justify-between">
          {/* Shipping Section */}
          <div className="flex items-center space-x-2">
            <div className="w-[16px] h-[16px] p-[4px_2.67px_4.67px_2.67px] border border-white opacity-0">
              <div className="w-[10.67px] h-[7.33px] border-t-[1.5px] border-white"></div>
            </div>
            <span className="text-white text-opacity-70 font-inter text-[13px] leading-[14.3px]">Free Shipping on all orders over $50</span>
          </div>
          {/* Links Section */}
          <div className="flex space-x-6 ">
            <Link href="/" className="text-white text-opacity-70">ENG</Link>
            <Link href="/" className="text-white text-opacity-70">USD</Link>
            <Link href="/" className="text-white text-opacity-70">FAQS</Link>
            <Link href="/" className="text-white text-opacity-70">Need Help</Link>
          </div>
        </div>

        {/* Middle Part */}
        <div className="flex justify-between items-center p-[14px_300px] bg-slate-100">
        <Image src="/images/Logo Icon.png" alt="User Info" width={40} height={40} />
          <Link href="/" className="text-3xl ml-[-480px] font-semibold text-[#029FAE]">Comforty</Link>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {/* User Links */}
              <span className="flex items-center space-x-2">
                <Image src="/icons/user.svg" alt="User Info" width={56} height={22} />
                <span className="text-lg font-medium">User</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Cart */}
              <span className="relative">
                <Image src="/icons/cart.svg" alt="Cart" width={16.96} height={16.54} className="border border-[#272343]" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </span>
              {/* Buy 2 */}
              <span className="relative flex items-center justify-center" style={{ width: '22px', height: '22px', border: '1.5px solid #272343', top: '9.9px', left: '12.95px' }}>
                <Image src="/icons/buy.svg" alt="Buy" width={1} height={1} style={{ position: 'absolute', top: '18.52px', left: '6.08px', border: '1.5px solid #272343' }} />
              </span>
              {/* No */}
              <span className="flex items-center justify-center" style={{ width: '26px', height: '13px', font: 'Inter', fontWeight: '500', fontSize: '12px', lineHeight: '13.2px', color: '#272343', textAlign: 'center' }}>
                No
              </span>
              {/* Ellipse 1 */}
              <span className="relative flex items-center justify-center" style={{ width: '20px', height: '20px', top: '12px', left: '84px', backgroundColor: '#007580' }}>
                Ellipse 1
              </span>
              {/* Ellipse 2 */}
              <span className="relative flex items-center justify-center" style={{ width: '20px', height: '20px', top: '12px', left: '84px', backgroundColor: '#007580' }}>
                Ellipse 2
              </span>
            </div>
          </div>
        </div>

        {/* Links Part */}
        <div className="flex justify-between items-center p-[24px_500px]">
          <Link href="/" className="font-medium text-lg text-[#007580]">Home</Link>
          <Link href="/products" className="font-medium text-lg text-[#636270]">Shop</Link>
          <Link href="/products" className="font-medium text-lg text-[#636270]">Product</Link>
          <Link href="/pages" className="font-medium text-lg text-[#636270]">Pages</Link>
          <Link href="/about" className="font-medium text-lg text-[#636270]">About</Link>
          
        </div>
      </div>
    </nav>



      {/* Header */}
      <header className="absolute w-[1321px] h-[850px] top-[204px] left-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-chair.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <Image src='/images/blackchair.png'alt="Cart" width={434} height={584} margin-top={115} margin-left={777} />
            <h1 className="text-4xl md:text-6xl text-white font-bold text-left ">Best Furniture Collection For Your Interior</h1>
            <Link href="/products"
              className="mt-4 px-6 py-3 bg-yellow-500 text-black rounded-full inline-block">Shop Now
            </Link>
          </div>
        </div>
      </header>

      {/* Company Logo */}
      <div className="absolute w-[1321px] h-[139px] top-[1107px] left-[300px] flex space-x-[106px] items-center">
        <Image src="/images/ZapierLogo.png" alt="Company Logo" width={85} height={87} />
        <Image src="/images/pipedrivelogo.png" alt="Company Logo" width={107} height={109} />
          <Image src="/images/cibbanklogo.png" alt="Partner Logo 1" width={135} height={139} />
          <Image src="/images/zlogo.png" alt="Partner Logo 2" width={63} height={65} />
          <Image src="/images/burntlogo.png" alt="Company Logo" width={98} height={101} />
          <Image src="/images/pandalogo.png" alt="Company Logo" width={113} height={115} />
          <Image src="/images/mozlogo.png" alt="Company Logo" width={84} height={87} />
          {/* Add more partner logos as needed */}
        
      </div>

      {/* Featured Products */}
      <section className="relative w-[1920px] h-[461px] top-[1070px] ">
        <div className="container mx-auto py-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-[512px] h-[377px] object-cover mb-4 rounded-md" />
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-2">${product.price}</p>
                <Link href={`/products/${product.id}`}
                   className="text-blue-500 underline">View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="absolute w-[2216px] h-[508px] top-[2387px] left-[-148px]">
        <div className="container mx-auto py-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img src="/images/orange chair.jpeg" alt="Wing Chair" className="w-[648px] h-[648px] object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold mb-2">Wing Chair</h3>
              <p className="text-lg text-gray-700">15 Products</p>
            </div>
            <div className="p-1  rounded-lg shadow-lg">
              <img src="/images/lightpink.png" alt="Wooden Chair" className="w-[424px] h-[424px] object-cover" />
              <h3 className="text-2xl font-semibold mb-2">Wooden Chair</h3>
              <p className="text-lg text-gray-700">12 Products</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img src="/images/lightpink.png" alt="Desk Chair" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold mb-2">Desk Chair</h3>
              <p className="text-lg text-gray-700">20 Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="absolute w-[1320px] h-[919px] top-[3425px] left-[307px] bg-white">
        <div className="container mx-auto py-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-2">${product.price}</p>
                <Link href={`/products/${product.id}`}
                   className="text-blue-500 underline">View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute w-[1920px] h-[418px] top-[4480px] left-[-12px] bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Chair Store. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/">Home</Link>
            <Link href="/products">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;


       
      
       



