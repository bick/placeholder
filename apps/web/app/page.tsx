import Code from "@/components/ui/code";
import {Badge} from "@/components/ui/badge";
import {FaNpm} from "react-icons/fa";
import styles from "@/styles/layout.module.scss";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Placeholder} from "placeholder";

export default function Home() {
    return (
        <div className={styles.layout}>
            <div className="flex container mx-auto w-full md:max-w-5xl text-center hero">
                <div className="flex flex-col my-auto">
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        Ridiculously simple and lightweight placeholders
                    </h1>
                    <p className="text-2xl mb-12">
                        A free placeholder service designed for developers. Integrates seamlessly with
                        React &amp; NextJS.
                    </p>
                    <div className="flex flex-col md:grid md:grid-cols-2 px-4">
                        <div className="flex flex-col mb-6 md:mb-0">
                            <span className="text-xl font-bold mb-2 h-8">CDN</span>
                            <Code
                                type="command"
                                code="https://placeholderjs.com/500x500"
                                className="md:text-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
              <span className="text-[42px] font-bold mb-2 mx-auto h-8 flex align-center">
                <FaNpm/>
              </span>
                            <Code
                                type="command"
                                code="npm install placeholder"
                                className="md:text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="usage container text-center" id="examples">
                <Tabs defaultValue="cdn" className="w-full">
                    <div className="flex flex-col justify-center">
                        <p className="px-12 py-2 mt-0 text-xl opacity-100">
                            How do you want to use PlaceholderJS?
                        </p>
                        <TabsList className="mb-6 flex-col justify-center mx-auto">
                            <div className="flex items-center">
                                <TabsTrigger value="cdn" className="text-2xl font-bold border">
                                    CDN
                                </TabsTrigger>
                                <span className="mx-4">or</span>
                                <TabsTrigger value="npm" className="text-2xl font-bold flex items-center border">
                                    <FaNpm className="mr-2"/> NPM
                                </TabsTrigger>
                            </div>
                        </TabsList>
                    </div>

                    {/* =====================
                        CDN Tab
                    ===================== */}
                    <TabsContent value="cdn">
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl font-black leading-tight mb-4">Using the CDN</h2>
                            <p className="text-xl mb-12 opacity-75 max-w-3xl">
                                Use PlaceholderJS directly in your HTML without any installation. Perfect for
                                prototyping and static sites.
                            </p>

                            {/* Quick Example */}
                            <div className="bg-gray-50 p-8 rounded-lg mb-8 w-full max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4">Quick Example</h3>
                                <Code type="command" code="https://placeholderjs.com/500x300&text=Hello+World!"/>
                                <div className="mt-4 p-4 bg-white rounded border">
                                    <Placeholder width="500" height="300" text="Hello World!" />
                                </div>
                            </div>

                            {/* Documentation Link */}
                            <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg w-full max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4 text-blue-900">📚 Complete CDN Documentation</h3>
                                <p className="text-lg mb-6 text-blue-800">
                                    Learn about all available parameters, color formats, sizing options, and advanced usage.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a 
                                        href="/docs/cdn-usage" 
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        View CDN Documentation →
                                    </a>
                                    <a 
                                        href="/docs/api-reference" 
                                        className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                    >
                                        API Reference
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* =====================
                        NPM Tab
                    ===================== */}
                    <TabsContent value="npm">
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl font-black leading-tight mb-4">Using with React</h2>
                            <p className="text-xl mb-12 opacity-75 max-w-3xl">
                                Install PlaceholderJS as a React component with full TypeScript support and seamless integration.
                            </p>

                            {/* Installation */}
                            <div className="bg-gray-50 p-8 rounded-lg mb-8 w-full max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4">Installation</h3>
                                <Code type="command" code="npm install placeholder" />
                                <div className="mt-4">
                                    <Code type="command" code={`import { Placeholder } from 'placeholder'`} />
                                </div>
                            </div>

                            {/* Quick Example */}
                            <div className="bg-gray-50 p-8 rounded-lg mb-8 w-full max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4">Quick Example</h3>
                                <Code type="command" code={`<Placeholder width="500" height="300" text="Hello React!" />`} />
                                <div className="mt-4 p-4 bg-white rounded border">
                                    <Placeholder width="500" height="300" text="Hello React!" />
                                </div>
                            </div>

                            {/* Documentation Link */}
                            <div className="bg-green-50 border border-green-200 p-8 rounded-lg w-full max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4 text-green-900">⚛️ Complete React Documentation</h3>
                                <p className="text-lg mb-6 text-green-800">
                                    Explore all component props, TypeScript interfaces, styling options, and React-specific features.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a 
                                        href="/docs/react-usage" 
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        View React Documentation →
                                    </a>
                                    <a 
                                        href="/docs/api-reference" 
                                        className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                                    >
                                        API Reference
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Additional Documentation Links */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3">🚀 Getting Started</h3>
                        <p className="text-gray-600 mb-4">
                            New to PlaceholderJS? Start here for a quick introduction and setup guide.
                        </p>
                        <a href="/docs/intro" className="text-blue-600 font-semibold hover:text-blue-800">
                            Read Guide →
                        </a>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3">💡 Examples</h3>
                        <p className="text-gray-600 mb-4">
                            Browse interactive examples and see PlaceholderJS in action.
                        </p>
                        <a href="/docs/placeholder-examples" className="text-blue-600 font-semibold hover:text-blue-800">
                            View Examples →
                        </a>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3">📖 API Reference</h3>
                        <p className="text-gray-600 mb-4">
                            Complete reference for all parameters, props, and configuration options.
                        </p>
                        <a href="/docs/api-reference" className="text-blue-600 font-semibold hover:text-blue-800">
                            Browse API →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
