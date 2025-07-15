'use client';

import React, {useState} from 'react';
import {useToast} from "@/components/ui/use-toast";
import {CodeBlock, codepen} from 'react-code-blocks';

interface CodeProps {
    code: string;
    className?: string;
    type: 'command' | 'code';
}

const Code: React.FC<CodeProps> = ({code, className, type}) => {
    const {toast} = useToast();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            toast({
                description: 'Copied to clipboard!',
                duration: 2000,
            });
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }, (err) => {
            toast({
                description: 'Failed to copy!',
                duration: 2000,
            });
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className='relative group'>
            <button
                onClick={handleCopy}
                className={`${className} bg-[#222] md:inline-flex border rounded text-left items-center rounded-lg px-1 md:px-4 md:pl-6`}>
                <span className="flex items-center gap-1 md:gap-4">
                    {type === 'command' && (
                        <span className="flex my-auto w-2 text-gray-500">
                            $
                        </span>
                    )}
                    <CodeBlock
                        text={code}
                        language="typescript"
                        showLineNumbers={type === 'code'}
                        theme={codepen}
                        wrapLongLines={true}
                    />
                    {copied ? (
                        <svg
                            className="shrink-0 h-5 w-5 ml-4 transition opacity-75 text-green-500 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    ) : (
                        <svg
                            className="shrink-0 h-5 w-5 ml-4 transition opacity-75 text-gray-500 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                                d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
                        </svg>
                    )}
                </span>
            </button>
        </div>
    );
};

export default Code;
