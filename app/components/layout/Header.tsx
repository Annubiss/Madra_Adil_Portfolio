import { Link } from "react-router"
import { Download, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark")
    })

    function toggleTheme() {
        const nextTheme = theme === "dark" ? "light" : "dark"
        document.documentElement.dataset.theme = nextTheme
        localStorage.setItem("theme", nextTheme)
        setTheme(nextTheme)
    }

    return (
        <header className="sticky top-0 z-20 border-b border-line bg-background/70 backdrop-blur-md backdrop-saturate-150" >            
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
                <Link to="/" className="font-mono text-sm text-muted">
                    madra-adil <span className="text-accent">v1.0.0</span>
                </Link>
                <nav 
                    aria-label="Main"
                    className="flex items-center flex-wrap gap-6 text-sm"
                >
                    <Link to="/#projects" className="text-muted transition-colors hover:text-foreground">Projects</Link>
                    <Link to="/#skills" className="text-muted transition-colors hover:text-foreground">Skills</Link>
                    <Link to="/#about" className="text-muted transition-colors hover:text-foreground">About</Link>
                    <Link to="/#contact" className="text-muted transition-colors hover:text-foreground">Contact</Link>

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