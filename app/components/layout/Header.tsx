import { Link } from "react-router"
import { Download } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-20 border-b border-line bg-background/70 backdrop-blur-md backdrop-saturate-150 [view-transition-name:site-header] transition-[background-color] duration-300">            <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
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