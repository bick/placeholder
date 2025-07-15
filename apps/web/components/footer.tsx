'use client';

import {usePathname} from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <footer className="flex py-24 mt-24 w-full">
            <div className="container inline text-center w-full justify-center">
                Made with ❤️ and ☕ in 2025 by&nbsp;
                <a href="https://owenbick.com" target="_blank">Owen Bick</a> under the MIT
                license
            </div>
        </footer>
    );
};

export default Footer;
