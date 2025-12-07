"use client"
import Image from 'next/image';
import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import { useState } from "react";

const Gallery = () => {
    // Track which image info is open in mobile
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMobileTap = (index: number) => {
        // Toggle: if currently open → close, else open
        setActiveIndex(prev => prev === index ? null : index);
    };

    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center">
                    <h2 className="text-3xl lg:text-5xl font-sans font-semibold text-black dark:text-white">
                        Gallery of our Popular Product.
                    </h2>
                </div>

                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {galleryImages.map((item, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div 
                                    key={index} 
                                    className="overflow-hidden rounded-3xl mb-6 relative group"
                                    onClick={() => handleMobileTap(index)} // enable tap
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.name}
                                        width={600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />

                                    {/* Mobile: toggle using state
                                        Desktop: show on hover
                                    */}
                                    <div
                                        className={`
                                            w-full h-full absolute bg-black/40 
                                            p-12 flex flex-col items-start gap-8 justify-end
                                            duration-500
                                            
                                            /* Desktop hover */
                                            group-hover:top-0 

                                            /* Mobile toggle */
                                            ${isOpen ? "top-0" : "top-full"}

                                            /* Make tap work only on screens <1024px in JS but CSS always fine */
                                        `}
                                    >
                                        <p className='text-white text-2xl'>
                                            <span className='font-semibold'>Name:</span> {item.name}
                                        </p>
                                        <div className="flex items-center justify-between w-full">
                                            <p className='text-white text-2xl'>
                                                <span className='font-semibold'>Price:</span> £{item.price}
                                            </p>
                                            <Link href="#" className='text-white rounded-full bg-primary border border-primary py-2 px-6 hover:bg-primary/40 hover:backdrop-blur-sm'>
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Masonry>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
