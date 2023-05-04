import Link from 'next/link';
import LogoImage from '@/public/images/logo-img.png';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="block" aria-label="Cruip">
            <Image
                className="h-16 w-auto"
                src={LogoImage}
                alt="The logo image of BuyScout browser extension application"
            />
        </Link>
    );
}
