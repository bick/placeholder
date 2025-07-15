'use client';

const Sidebar = () => {
    return (
        <div className="flex">
            <input type="checkbox" id="menu-open" className="hidden"/>

            <label htmlFor="menu-open"
                   className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 md:hidden"
                   data-dev-hint="floating action button">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </label>

            <header className="flex justify-between md:hidden"
                    data-dev-hint="mobile menu bar">
                <a href="#" className="block p-4 font-bold whitespace-nowrap truncate">
                    Documentation
                </a>

                <label htmlFor="menu-open" id="mobile-menu-button"
                       className="m-2 p-2 focus:outline-none rounded-md">
                    <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
            </header>

            <aside id="sidebar"
                   className="md:w-64 w-3/4 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col overflow-y-auto"
                   data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                <nav data-dev-hint="main navigation" className="space-y-3">
                    <a href="/docs"
                       className="flex items-center transition duration-200 ">
                        <span>Getting Started</span>
                    </a>
                    <a href="/docs/installation"
                       className="flex items-center transition duration-200">
                        <span>Installation</span>
                    </a>
                </nav>
                <span className="mt-8 mb-4 opacity-50 font-semibold text-sm uppercase tracking-wider">Usage</span>
                <nav data-dev-hint="main navigation" className="space-y-3">
                    <a href="/docs/usage/react"
                       className="flex items-center transition duration-200">
                        <span>React</span>
                    </a>
                    <a href="/docs/usage/nextjs"
                       className="flex items-center transition duration-200">
                        <span>NextJS</span>
                    </a>
                    <a href="/docs/usage/cdn"
                       className="flex items-center transition duration-200">
                        <span>CDN</span>
                    </a>
                </nav>
                <span className="mt-8 mb-4 opacity-50 font-semibold text-sm uppercase tracking-wider">Contributing</span>
                <nav data-dev-hint="main navigation" className="space-y-3">
                    <a href="/docs/usage/react"
                       className="flex items-center transition duration-200">
                        <span>Contribution Guidelines</span>
                    </a>
                    <a href="/docs/usage/nextjs"
                       className="flex items-center transition duration-200">
                        <span>Pull Request Template</span>
                    </a>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
