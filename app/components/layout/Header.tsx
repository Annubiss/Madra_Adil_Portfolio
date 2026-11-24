import { Link, useLocation } from "react-router"
import { Download, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage, useSiteText, useLocalizedPath } from "~/lib/language"

export function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")
    const localizedPath = useLocalizedPath()

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark")
    })

    function toggleTheme() {
        const nextTheme = theme === "dark" ? "light" : "dark"
        document.documentElement.dataset.theme = nextTheme
        localStorage.setItem("theme", nextTheme)
        setTheme(nextTheme)
    }

    const location = useLocation()
    const isRomanian = useLanguage() === "ro"
    const text = useSiteText()
    const otherLanguagePath = isRomanian
        ? location.pathname.slice(3) || "/"
        : `ro${location.pathname === "/" ? "" : location.pathname}`

    return (
        <header className="sticky top-0 z-20 border-b border-line bg-background/70 backdrop-blur-md backdrop-saturate-150" >            
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
                <Link to={localizedPath("/")} className="font-mono text-sm text-muted">
                    madra-adil <span className="text-accent">v1.0.0</span>
                </Link>
                <nav 
                    aria-label="Main"
                    className="flex items-center flex-wrap gap-6 text-sm"
                >
                    <Link to={localizedPath("/#projects")} className="text-muted transition-colors hover:text-foreground">{text.navProjects}</Link>
                    <Link to={localizedPath("/#skills")} className="text-muted transition-colors hover:text-foreground">{text.navSkills}</Link>
                    <Link to={localizedPath("/#about")} className="text-muted transition-colors hover:text-foreground">{text.navAbout}</Link>
                    <Link to={localizedPath("/#contact")} className="text-muted transition-colors hover:text-foreground">{text.navContact}</Link>

                    <Link
                        to={otherLanguagePath}
                        aria-label={isRomanian ? "English" : "Română"}
                        lang={isRomanian ? "en" : "ro"}
                        className="size-11 font-mono text-xs text-muted border border-line rounded-lg inline-grid place-items-center transition-colors hover:text-foreground hover:border-line-strong"
                        >
                        {isRomanian ? "EN" : "RO"}
                    </Link>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={"cursor-pointer size-11 text-muted border border-line rounded-lg inline-grid place-items-center " +
                            "transition-colors hover:text-foreground hover:border-line-strong"
                        }
                    >
                        {theme === "dark" && (
                            <Sun aria-hidden="true" />
                        )}
                        {theme === "light" && (
                            <Moon aria-hidden="true"/>
                        )}
                    </button>

                    <a 
                        
                        href="/Madra_Adil_CV_EN.pdf" 
                        download="Madra_Adil_CV_EN.pdf" 
                        className="btn btn-secondary">
                            <Download
                                size={15}
                                aria-hidden="true"
                                strokeWidth={1.75}
                            />
                            CV
                    </a>
                </nav>
            </div>
        </header>
    )
}