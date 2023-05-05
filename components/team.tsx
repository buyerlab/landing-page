import Image from 'next/image';

import Henry from '@/public/images/henry-image.png';
import Chuteng from '@/public/images/chuteng-image.png';
import Ellie from '@/public/images/ellie-image.jpeg';
import Lesi from '@/public/images/lesi-image.png';

export default function Team() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    <div className="w-full mx-auto text-center">
                        <h2 className="h2 mb-4">Team Members</h2>
                        <div className="flex flex-col gap-10 justify-between md:flex-row items-center">
                            <div className="flex flex-col items-center w-1/4">
                                <Image
                                    className="mb-5"
                                    src={Henry}
                                    alt="A Team Member profile image"
                                    width="200"
                                    height="200"
                                ></Image>
                                <p className="text-center text-xl font-bold leading-snug tracking-tight mb-1">
                                    Henry Bao
                                </p>
                                <p className="text-center text-lg font-normal leading-snug tracking-tight mb-1">
                                    Developer, PM
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <Image
                                    className="mb-3"
                                    src={Chuteng}
                                    alt="A Team Member profile image"
                                    width="200"
                                    height="200"
                                ></Image>
                                <p className="text-center text-xl font-bold leading-snug tracking-tight mb-1">
                                    Chuteng Li
                                </p>
                                <p className="text-center text-lg font-normal leading-snug tracking-tight mb-1">
                                    Developer
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <Image
                                    className="mb-5"
                                    src={Ellie}
                                    alt="A Team Member profile image"
                                    width="200"
                                    height="200"
                                ></Image>
                                <p className="text-center text-xl font-bold leading-snug tracking-tight mb-1">
                                    Ellie Xie
                                </p>
                                <p className="text-center text-lg font-normal leading-snug tracking-tight mb-1">
                                    Designer
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <Image
                                    className="mb-5"
                                    src={Lesi}
                                    alt="A Team Member profile image"
                                    width="200"
                                    height="200"
                                ></Image>
                                <p className="text-center text-xl font-bold leading-snug tracking-tight mb-1">
                                    Lesi Li
                                </p>
                                <p className="text-center text-lg font-normal leading-snug tracking-tight mb-1">
                                    Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
