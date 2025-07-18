'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-gray-300 focus-visible:ring-navy",
                error: "border-red-500 focus-visible:ring-red",
            },
            size: {
                default: "h-10 px-3 py-2",
                sm: "h-8 px-2 py-1 text-xs",
                lg: "h-12 px-4 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, error, ...props }, ref) => {
        return (
            <input
                className={inputVariants({
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

Input.displayName = "Input";

export { Input, inputVariants }; 