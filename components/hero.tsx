'use client';

import Image from 'next/image';
import SplashImage from '@/public/images/splash.png';

export default function Hero() {
    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
                aria-hidden="true"
            >
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            Make your shopping experience
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300">
                                wonderful
                            </span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                                Monitor any online products, and receive instant notifications when they are in stock
                                with a click of a button.
                            </p>
                            <div
                                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                data-aos="zoom-y-out"
                                data-aos-delay="300"
                            ></div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div>
                        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                            <div className="flex flex-col justify-center">
                                <Image
                                    className="mx-auto"
                                    src={SplashImage}
                                    width={768}
                                    height={432}
                                    priority
                                    alt="Hero"
                                />
                                <svg
                                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                                    width="768"
                                    height="432"
                                    viewBox="0 0 768 432"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <defs>
                                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                                            <stop stopColor="#FFF" offset="0%" />
                                            <stop stopColor="#EAEAEA" offset="77.402%" />
                                            <stop stopColor="#DFDFDF" offset="100%" />
                                        </linearGradient>
                                        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                                            <stop stopColor="#FFF" offset="0%" />
                                            <stop stopColor="#EAEAEA" offset="48.57%" />
                                            <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                                        </linearGradient>
                                        <radialGradient
                                            cx="21.152%"
                                            cy="86.063%"
                                            fx="21.152%"
                                            fy="86.063%"
                                            r="79.941%"
                                            id="hero-ill-e"
                                        >
                                            <stop stopColor="#4FD1C5" offset="0%" />
                                            <stop stopColor="#81E6D9" offset="25.871%" />
                                            <stop stopColor="#338CF5" offset="100%" />
                                        </radialGradient>
                                        <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
