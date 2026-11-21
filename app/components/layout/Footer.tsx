export function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="border-t border-line">
            <div className={"font-mono text-sm text-muted max-w-5xl mx-auto px-6 sm:px-8 py-8 " +
                "flex flex-wrap items-center justify-between gap-4"
            }>
                <p>© {year} Madra Adil</p>
                <nav aria-label="Footer" className="flex flex-wrap gap-6">
                    <a className="transition-colors hover:text-foreground" href="https://github.com/Annubiss?tab=repositories">GitHub</a>
                    <a className="transition-colors hover:text-foreground" href="https://www.linkedin.com/in/adil-madra/">LinkedIn</a>
                    <a className="transition-colors hover:text-foreground" href="mailto:adilmadra9@gmail.com">Email</a>
                </nav>
            </div>
        </footer>
    )
}