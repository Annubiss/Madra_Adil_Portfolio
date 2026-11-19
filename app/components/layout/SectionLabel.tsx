export function SectionLabel({number, label} : {number: string, label: string}) {
    return (
        <h2 className="mb-9 flex items-center gap-3 font-mono text-sm text-muted">
            <span className="text-accent">{number}{" "}</span>
                {label}
            <span aria-hidden="true" className="h-px flex-1 bg-linear to-r from-line to-transparent" />
        </h2>
    )
}