import Link from 'next/link';
import LogoImage from '@/public/images/logo-img.png';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="block" aria-label="Cruip">
            <div className="flex items-center ">
                <Image
                    className="h-16 w-auto"
                    src={LogoImage}
                    alt="The logo image of BuyScout browser extension application"
                />
                <p className="text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                    BuyScout Extension
                </p>
            </div>
        </Link>
    );
}
