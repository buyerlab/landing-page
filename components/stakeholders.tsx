export default function Stakeholders() {
    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-r from-amber-500 to-amber-300 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Stakeholders & Users</h2>
                        <p className="text-xl text-gray-600">
                            We are always pushing ourselves to create better experience for our stakeholders & users
                        </p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        {/* 1st item */}
                        <div
                            className="relative flex flex-col items-center p-6 bg-gradient-to-r from-gray-100 to-amber-100 rounded shadow-xl"
                            data-aos="zoom-y-out"
                        >
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                fill="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19.148 2.971A2.008 2.008 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A.995.995 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a.995.995 0 0 0-.143-.515l-2.709-4.514zm.836 5.28A2.003 2.003 0 0 1 18 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214l2.55 4.251zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935L10.819 4zM6.566 4H8.78l-.76 3.804.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2.003 2.003 0 0 1-1.984-1.749L6.566 4zM10 19v-3h4v3h-4zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a3.99 3.99 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A3.99 3.99 0 0 0 18 12c.348 0 .679-.059 1-.142V19h-3z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Retailers</h4>
                            <p className="text-gray-600 text-center">
                                Find the most optimized ways to discover any comparable products
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div
                            className="relative flex flex-col items-center p-6 bg-gradient-to-r from-gray-100 to-amber-100 rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="200"
                        >
                            <svg
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Shoppers</h4>
                            <p className="text-gray-600 text-center">
                                Simplify your shopping experience! Receive notifications for desired products!
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div
                            className="relative flex flex-col items-center p-6 bg-gradient-to-r from-gray-100 to-amber-100 rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 p-1 -mt-1 mb-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path>
                            </svg>

                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Dropshippers</h4>
                            <p className="text-gray-600 text-center">
                                Empower your dropshipping business! Stay ahead with timely in-stock alerts!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
