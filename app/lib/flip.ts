import { useEffect, useRef } from "react"
import { animate } from "motion/react"

export const flipRects = new Map<string, DOMRect>()

export function useFlip<T extends HTMLElement>(id: string) {
    const ref = useRef<T>(null)

    useEffect(() => {
        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        const el = ref.current
        const from = flipRects.get(id)

        if (!el || !from) return

        const to = el.getBoundingClientRect()

        animate(
            el, {
                x: [from.left - to.left, 0],
                y: [from.top - to.top, 0],
                scale: [from.width / to.width, 1]
            },
            { duration: 0.6, ease: [0.22, 1, 0.36, 1]}
        )
    }, [])
    
    return ref
}