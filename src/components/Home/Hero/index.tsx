"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 py-20 gap-10">

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-sans">
            Fresh Himalayan Momo will be Delivered to You
          </h1>

          <p className="mt-6 text-lg text-gray-800 dark:text-gray-800 sm:text-xl font-serif">
            Authentic taste crafted with love. Order now and feel the flavor
            of the Himalayas.
          </p>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold font-sans text-white hover:bg-orange-500"
            >
              Order Now
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-stone-500"
            >
              Learn more →
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/plate.png"     
            alt="Himalayan Momo"
            width={500}
            height={500}
            className="w-full max-w-sm lg:max-w-md h-auto rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
