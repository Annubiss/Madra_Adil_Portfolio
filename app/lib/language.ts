import { useLocation } from "react-router";
import { siteText } from "~/content/siteText";

export type Language = "en" | "ro"

export function useLanguage(): Language {
    const { pathname } = useLocation()
    return pathname === "/ro" || pathname.startsWith("/ro/") ? "ro" : "en"
}

export function useSiteText() {
    return siteText[useLanguage()]
}

export function useLocalizedPath() {
    const language = useLanguage()

    return (path: string) => {
        if(language === "en") return path
        if(path === "/") return "ro"
        if(path.startsWith("/#")) return `/ro${path.slice(1)}`
        return `/ro${path}`
    }
}