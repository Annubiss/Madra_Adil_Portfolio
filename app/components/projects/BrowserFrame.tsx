import type React from "react";


export function BrowserFrame({url, children, ref, flipId} : 
    {url: string,
    children: React.ReactNode,
    ref?: React.Ref<HTMLDivElement>,
    flipId?: string;
    }) {
    return (
        <div 
            ref={ref}
            data-flip={flipId}
            className="origin-top-left overflow-hidden  rounded-xl border border-line bg-surface shadow-2xl shadow-black/40"
        >
            <div className="flex h-10 items-center gap-2 border-b border-line px-4">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
                <span className={"ml-3 truncate rounded-md border border-line bg-background px-2.5 " + 
                    "py-1 font-mono text-xs text-muted"
                }>
                    {url.replace("https://", "")}
                </span>
            </div>
            {children}
        </div>
    )
}