import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('stiky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
            
        </div>
    )
}