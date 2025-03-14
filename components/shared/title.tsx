
import clsx from 'clsx'; 
import React from 'react';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
    // Размер заголовка, по умолчанию 'sm' (средний размер) 
    size?: TitleSize;
    // Кастомные классы для стилизации заголовка
    className?: string;
    // Текст, который будет отображаться в заголовке
    text: string;
}
export const Title: React.FC<Props> = ({ text, size = 'sm', className }) => {
    // В объекте mapTagBySize определяется, какой HTML-тег будет использоваться в зависимости от размера заголовка. 
    // // Например, для маленького заголовка (xs) будет использоваться тег <h5>.
    const mapTagBySize = {
        xs: 'h5',
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1',
    } as const;

    // В объекте mapClassNameBySize задаются CSS классы для каждого размера заголовка.
    // Например, для размера 'xs' класс будет 'text-[16px]', что задает размер шрифта 16px.
    const mapClassNameBySize = {
        xs: 'text-[16px]',
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]', 
        xl: 'text-[40px]',
        '2xl': 'text-[48px]',
    } as const;

    // Создаем сам компонент заголовка с помощью метода createElement.
    // Передаем HTML-тег в зависимости от размера заголовка, соответствующие классы для стилизации
    // и сам текст, который нужно отобразить.
    return React.createElement(
        mapTagBySize[size],
        { className: clsx(mapClassNameBySize[size], className)},
        text,
    );
};