export default function Retailers() {
    return (
        <section className="relative">
            {/* Illustration behind content */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
                aria-hidden="true"
            >
                <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 flex flex-col">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 mb-4">We Aim to Serve All Shoppers and Retailers in the World</h2>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm md:max-w-4xl mx-auto grid md:gap-20 grid-cols-1 md:grid-cols-5">
                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12.22 11.24L4.5 18.86v10.42l7.5 7.48h31.5V11.24ZM9.63 21.75a1.94 1.94 0 1 1-1.93 1.94h0a1.93 1.93 0 0 1 1.93-1.94Z"
                                />
                            </svg>
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" viewBox="0 -12 48 48">
                                <path
                                    fill="currentColor"
                                    d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0zm0 19.826a7.827 7.827 0 1 0 0-15.652a7.827 7.827 0 0 0 0 15.652zm0-3.985a3.84 3.84 0 1 1 0-7.68a3.84 3.84 0 0 1 0 7.68z"
                                />
                            </svg>
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M21.418 9.102c-.22 0-.396.123-.396.273l.134 1.516c.015.092.127.162.262.162c.136 0 .247-.07.262-.162l.135-1.516c0-.15-.176-.273-.397-.273zM0 10.318s.597 2.447.692 2.845c.112.463.312.634.89.519l.373-1.517c.094-.377.158-.646.219-1.03h.01c.043.388.104.654.181 1.03l.23 1.051c.078.362.295.59.86.466l.89-3.364h-.718l-.303 1.455c-.082.423-.156.753-.213 1.14h-.01c-.052-.383-.118-.7-.2-1.113l-.317-1.482h-.747l-.338 1.445c-.096.439-.185.793-.242 1.167h-.01a41.168 41.168 0 0 0-.22-1.222s-.201-1.033-.272-1.39zm6.838 0v3.364h.683v-3.364zm9.62 0V12.8c0 .342.064.581.201.728c.12.128.319.21.556.21c.202 0 .401-.038.495-.073l-.01-.533a1.04 1.04 0 0 1-.259.03c-.232 0-.31-.148-.31-.456v-.949h.595v-.643h-.595v-.796zm2.778 0c-.114.003-.244.09-.327.233c-.11.191-.091.405.038.48l1.38.642c.086.032.203-.03.271-.146c.068-.117.063-.25-.009-.308l-1.246-.874a.201.201 0 0 0-.107-.027zm4.364 0a.2.2 0 0 0-.106.027l-1.247.874c-.071.058-.076.19-.009.307v.001c.068.117.185.178.271.146l1.38-.643c.13-.074.149-.288.04-.479c-.084-.143-.214-.23-.329-.233zm-18.288.78c-.424 0-.761.12-.945.225l.134.46c.168-.105.436-.193.69-.193c.419-.001.488.237.488.39v.036c-.915-.001-1.492.315-1.492.96c0 .394.294.763.805.763c.315 0 .578-.126.736-.327h.015s.105.437.68.27a3.692 3.692 0 0 1-.04-.61v-.898c0-.572-.245-1.076-1.071-1.076zm4.086 0c-.428 0-.62.217-.736.4h-.01v-.343H8v2.527h.686V12.2c0-.07.008-.143.033-.207c.056-.149.195-.324.417-.324c.277 0 .406.235.406.573v1.44h.686v-1.5c0-.066.01-.146.029-.205a.433.433 0 0 1 .412-.308c.28 0 .416.23.416.628v1.385h.686v-1.488c0-.785-.399-1.096-.848-1.096c-.2 0-.357.05-.499.137c-.12.074-.227.178-.32.315h-.01a.722.722 0 0 0-.696-.452zm3.77 0c-.425 0-.761.12-.945.225l.134.46c.168-.105.436-.193.69-.193c.419-.001.487.237.487.39v.036c-.914-.001-1.491.315-1.491.96c0 .394.294.763.805.763c.315 0 .578-.126.735-.327h.016s.104.437.68.27a3.687 3.687 0 0 1-.04-.61v-.898c0-.572-.245-1.076-1.071-1.076zm2.851 0c-.263 0-.562.17-.688.534h-.019v-.477h-.618v2.527h.705v-1.294c0-.07.004-.13.015-.186c.052-.272.26-.445.557-.445c.082 0 .14.009.203.018v-.661a.68.68 0 0 0-.155-.016zm4.36 1.22a.14.14 0 0 0-.052.01l-1.38.641c-.13.075-.149.289-.038.48c.11.19.305.281.434.207l1.246-.874c.072-.06.077-.191.01-.309c-.055-.095-.143-.153-.22-.154zm2.079 0c-.077.002-.165.06-.22.156c-.067.117-.062.249.01.308l1.246.874c.129.074.323-.016.434-.207c.11-.191.091-.405-.039-.48l-1.38-.642a.14.14 0 0 0-.051-.008zm-16.757.146v.315a.476.476 0 0 1-.017.137a.479.479 0 0 1-.461.323c-.19 0-.34-.107-.34-.334c0-.347.383-.443.818-.441zm7.855 0v.315a.48.48 0 0 1-.017.137a.479.479 0 0 1-.46.323c-.19 0-.34-.107-.34-.334c0-.347.382-.443.817-.441zm7.862.483c-.135 0-.247.07-.262.162l-.134 1.516c0 .15.176.273.396.273c.221 0 .397-.123.397-.273l-.135-1.516c-.015-.092-.126-.162-.262-.162z"
                                />
                            </svg>
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" viewBox="0 0 1792 1792">
                                <path
                                    fill="currentColor"
                                    d="M1551 1476q15-6 26-3t11 17.5t-15 33.5q-13 16-44 43.5t-95.5 68t-141 74t-188 58T875 1792q-119 0-238-31t-209-76.5t-172.5-104t-132.5-105t-84-87.5q-8-9-10-16.5t1-12t8-7t11.5-2T61 1355q192 117 300 166q389 176 799 90q190-40 391-135zm207-115q11 16 2.5 69.5T1732 1533q-34 83-85 124q-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6t-29.5-2.5t-35 0t-31.5 2t-31 3t-22.5 2q-6 1-13 1.5t-11 1t-8.5 1t-7 .5h-10l-3-.5l-2-1.5l-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58t37.5 46t33 32l13 11l-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33q-38 59-97.5 102.5T860 1332t-140 23t-137.5-21t-117.5-65.5t-83-113T351 993q0-84 28-154t72-116.5t106.5-83t122.5-57T810 548t119.5-18.5t99.5-6.5V396q0-65-21-97q-34-53-121-53q-6 0-16.5 1T830 259t-56 29.5t-56 59.5t-48 96l-294-27q0-60 22-119t67-113t108-95t151.5-65.5T915 0q100 0 181 25t129.5 61.5t81 83t45 86T1364 329v589zm-672 21q0 86 70 133q66 44 139 22q84-25 114-123q14-45 14-101V708q-59 2-111 12t-106.5 33.5t-87 71T692 939z"
                                />
                            </svg>
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="100" viewBox="0 -30 464 448">
                                <path
                                    fill="currentColor"
                                    d="m250 371l-71-30V13q6 1 16.5 3t38 10T283 43t43 25t27 34q10 32 6 55.5T346 194t-16 14q-14 2-25-2.5t-15-9.5l-4-5V89l-35-15zm18-45v38q166-53 190-74q16-14-19-38q-42-30-78-25q-2 1-4 1q-46 3-88 21v35l106-26l38 17zm-106-3q-22 11-70 11q-39-1-65-12T2 291q0-21 48-42.5T161 217v40l-85 23q-14 18 5 19q20 0 40.5-2.5T152 291l10-3v35z"
                                />
                            </svg>
                        </div>
                    </div>
                    <p className="text-center ">and more...</p>
                </div>
            </div>
        </section>
    );
}