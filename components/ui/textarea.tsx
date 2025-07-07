'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
    {
        variants: {
            variant: {
                default: "border-gray-300 focus-visible:ring-navy",
                error: "border-red-500 focus-visible:ring-red",
            },
            size: {
                default: "min-h-[80px] px-3 py-2",
                sm: "min-h-[60px] px-2 py-1 text-xs",
                lg: "min-h-[120px] px-4 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface TextareaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
    error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, size, error, ...props }, ref) => {
        return (
            <textarea
                className={textareaVariants({
                    variant: error ? "error" : variant,
                    size,
                    className
                })}
                ref={ref}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants }; 