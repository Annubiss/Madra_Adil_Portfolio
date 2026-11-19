import type React from "react";
import { stackIcons } from "~/content/stackIcons";

export function StackChip({ name } : { name: string}) {
    const icon = stackIcons[name]
    return (
        
        <li className={"inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 font-mono " + 
        "text-sm text-muted group transition-colors hover:text-foreground"}>
            {icon && (
                
                <svg 
                    viewBox="0 0 24 24" 
                    aria-hidden="true" 
                    className="size-3.5 fill-current transition-colors group-hover:text-(--brand)"
                    style={{ "--brand": `#${icon.hex}`} as React.CSSProperties}
                    >
                    <path d={icon.path}></path>
                </svg>
            )}
            {name}
        </li>
        
    )
}