import { cn } from '@/lib/utils';
import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 rounded-2xl px-5 items-center h-[52px] cursor-pointer')}>
            <ArrowUpDown size={16} />
            <b>Сортировка:</b>
            <b className='text-primary'> Популярности </b> 
        </div>
    )
}

