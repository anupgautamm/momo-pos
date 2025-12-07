"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-5">

            <section className="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-16 animate-fadeIn">
                <div className="relative flex justify-center items-center lg:w-1/2 w-full mb-10 lg:mb-0">

                    <Image
                        src="/img/raw.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 -top-6 -left-4 z-20"
                    />
                    <Image
                        src="/img/package.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 top-32 -right-6 z-20"
                    />
                    <Image
                        src="/img/plate.png"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 bottom-4 left-6 z-20"
                    />

                    <Image
                        src="/img/plateofmomo.png"
                        width={500}
                        height={500}
                        alt="About"
                        className="rounded-full lg:w-[28rem] lg:h-[28rem] sm:w-[22rem] sm:h-[22rem] w-[14rem] h-[14rem] object-cover outline outline-green-500 outline-offset-[.5rem] shadow-xl shadow-green-300/40 relative"
                    />
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left px-2 sm:px-6">
                    <h2 className="text-4xl font-bold text-green-600 dark:text-green-400">Our Story Begins in the Himalayas</h2>
                    <p className="md:text-xl text-base mt-6 leading-relaxed">
                        Momoholic is more than just a food brand. it is a tribute to centuries-old Himalayan culinary craftsmanship.
                        Every momo we create carries the warmth, heritage, and soul of the mountains where this tradition was born.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-sm">
                        Learn More
                    </button>
                </div>
            </section>

            <section className="w-full lg:h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-16 animate-fadeIn">
                <div className="lg:w-1/2 w-full text-center lg:text-left px-2 sm:px-6">
                    <h2 className="text-4xl font-bold text-green-600 dark:text-green-400">Crafted With Passion</h2>
                    <p className="md:text-xl text-base mt-6 leading-relaxed">
                        Our recipes are forged through dedication rather than shortcuts. Every fold, every texture, every aroma
                        is shaped with authenticity at its core. This is not fast food—it is heartfelt food.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-sm">
                        Our Craft
                    </button>
                </div>

                <div className="relative flex justify-center items-center lg:w-1/2 w-full mb-10 lg:mb-0">

                    <Image
                        src="/img/raw.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 -top-4 right-4 z-20"
                    />
                    <Image
                        src="/img/plate.png"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 bottom-10 -left-4 z-20"
                    />
                    <Image
                        src="/img/package.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 top-32 left-10 z-20"
                    />

                    <Image
                        src="/img/plateofmomo.png"
                        width={500}
                        height={500}
                        alt="About"
                        className="rounded-full lg:w-[28rem] lg:h-[28rem] sm:w-[22rem] sm:h-[22rem] w-[14rem] h-[14rem] object-cover outline outline-green-500 outline-offset-[.5rem] shadow-xl shadow-green-300/40 relative"
                    />
                </div>
            </section>

            <section className="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-16 animate-fadeIn">
                <div className="relative flex justify-center items-center lg:w-1/2 w-full mb-5 lg:mb-0">

                    <Image
                        src="/img/raw.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 -top-6 -left-4 z-20"
                    />
                    <Image
                        src="/img/package.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 top-32 -right-6 z-20"
                    />
                    <Image
                        src="/img/plate.png"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 bottom-4 left-6 z-20"
                    />

                    <Image
                        src="/img/plateofmomo.png"
                        width={500}
                        height={500}
                        alt="About"
                        className="rounded-full lg:w-[28rem] lg:h-[28rem] sm:w-[22rem] sm:h-[22rem] w-[14rem] h-[14rem] object-cover outline outline-green-500 outline-offset-[.5rem] shadow-xl shadow-green-300/40 relative"
                    />
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left px-2 sm:px-6">
                    <h2 className="text-4xl font-bold text-green-600 dark:text-green-400">Fresh Ingredients, Honest Flavours</h2>
                    <p className="md:text-xl text-base mt-6 leading-relaxed">
                        We believe that great food begins with great ingredients. That is why every dish we serve embodies
                        purity, freshness, and the richness of natural Himalayan spices.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-sm">
                        Quality Promise
                    </button>
                </div>
            </section>

            <section className="w-full lg:h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-16 animate-fadeIn">

                <div className="lg:w-1/2 w-full text-center lg:text-left px-2 sm:px-6">
                    <h2 className="text-4xl font-bold text-green-600 dark:text-green-400">A Journey Shared With You</h2>
                    <p className="md:text-xl text-base mt-6 leading-relaxed">
                        Momoholic is not just a kitchen—it is a community. A place where culture, taste, and emotion
                        come together. With every plate served, we share a piece of our heritage with you.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-sm">
                        Join Us
                    </button>
                </div>

                <div className="relative flex justify-center items-center lg:w-1/2 w-full mb-10 lg:mb-0">

                    <Image
                        src="/img/raw.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 -top-4 right-4 z-20"
                    />
                    <Image
                        src="/img/package.jpeg"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 top-32 left-4 z-20"
                    />
                    <Image
                        src="/img/plate.png"
                        width={120}
                        height={120}
                        alt="Side"
                        className="absolute rounded-full lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 bottom-8 -left-4 z-20"
                    />

                    <Image
                        src="/img/plateofmomo.png"
                        width={500}
                        height={500}
                        alt="About"
                        className="rounded-full lg:w-[28rem] lg:h-[28rem] sm:w-[22rem] sm:h-[22rem] w-[14rem] h-[14rem] object-cover outline outline-green-500 outline-offset-[.5rem] shadow-xl shadow-green-300/40 relative"
                    />
                </div>

            </section>
        </div>
    );
}
