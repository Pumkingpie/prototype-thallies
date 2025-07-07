'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const selectVariants = cva(
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-white",
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

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
    error?: boolean;
    children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, variant, size, error, children, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    className={selectVariants({
                        variant: error ? "error" : variant,
                        size,
                        className
                    })}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select, selectVariants }; 