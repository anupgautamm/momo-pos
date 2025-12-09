"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from '@/app/api/data';
import { Icon } from "@iconify/react";

const Features = () => {
    return (
        <section>
            <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
    <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
                <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="/img/steam.jpeg" alt="Side Image" />

                <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="/img/momodip.jpeg" />

                <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="/img/plate.png" alt="Side Image 3" />

                <img
            className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
            src="/img/plateofmomo.png" alt="About us" />
            </div>
            <div
                className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                    About Us
                </h2>
                <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">We are
                    MOMOHOLIC LIMITED.
                </p>
                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
                    Momoholic is more than just a food vendor, it is a dedication to a culinary legacy forged high in the himalayas. Our journey is one built not on compromise, but on the relentless pursuit of authentic flavour and quality craftsmanship. We believe that the simplest foods often carry the deepest stories, and for us, that story is encapsulated entirely within the delicate folds of the momo.
                </p>

                <a href="/AboutUs" className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-sm text-white font-semibold hover:text-stone-500">Read More</a>

            </div>

        </div>
    </div>
</div>
        </section>
    )
}

export default Features;
