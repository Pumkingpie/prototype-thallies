import * as React from "react"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
    ({ className, orientation = "horizontal", ...props }, ref) => (
        <div
            ref={ref}
            className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
                } ${className || ""}`}
            {...props}
        />
    )
)
Separator.displayName = "Separator"

export { Separator } 