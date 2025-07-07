'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'white' | 'primary' | 'gray';
}

export function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    const colorClasses = {
        white: 'border-white border-t-transparent',
        primary: 'border-[#BF0603] border-t-transparent',
        gray: 'border-gray-400 border-t-transparent'
    };

    return (
        <motion.div
            className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
} 