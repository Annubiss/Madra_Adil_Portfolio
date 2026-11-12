import { Link } from "react-router"

export function Header() {
    return (
        <header className="border-b border-line">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
                <Link to="/" className="font-mono text-sm text-muted">
                    madra-adil <span className="text-accent">v1.0.0</span>
                </Link>
                <nav 
                    aria-label="Main"
                    className="flex items-center flex-wrap gap-6 text-sm"
                >
                    <Link to="/#projects" className="transition-colors hover:text-accent">Projects</Link>
                    <Link to="/about" className="transition-colors hover:text-accent">About</Link>
                    <Link to="/#contact" className="transition-colors hover:text-accent">Contact</Link>
                    <a href="/Madra_Adil_CV_EN.pdf" 
                        download="Madra_Adil_CV_EN.pdf" 
                        className={"transition-colors inline-flex min-h-11 items-center " + 
                            "rounded-md bg-foreground px-4 font-medium text-background  hover:bg-accent"
                        }>
                            CV
                    </a>
                </nav>
            </div>
        </header>
    )
}