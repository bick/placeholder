import type {Metadata} from "next";
import {Toaster} from "@/components/ui/toaster"
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "PlaceholderJS - Ridiculously simple and lightweight placeholders",
    description: "Ridiculously simple and lightweight placeholders",
};

async function fetchVersion() {
    try {
        const res = await fetch('https://registry.npmjs.org/placeholder');
        const data = await res.json();
        return data['dist-tags'].latest;
    } catch (error) {
        console.error('Failed to fetch npm version:', error);
        return 'Unknown';
    }
}

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const version = await fetchVersion();

    return (
        <html lang="en">
        <body>
        <Header version={version}/>
        {children}
        <GoogleAnalytics gaId="G-ZV6L97KWJX"/>
        <Footer/>
        <Toaster/>
        </body>
        </html>
    );
}