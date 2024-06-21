// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const GroupFilledIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.975 12C14.78 12 13 10.21 13 8s1.78-4 3.975-4c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4zM16 13h2a4 4 0 014 4v5h-6v-7a5.99 5.99 0 00-.336-1.986c.11-.01.223-.014.336-.014zM6 11h4a4 4 0 014 4v7H2v-7a4 4 0 014-4zm1.975-1C5.78 10 4 8.21 4 6s1.78-4 3.975-4c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4z"
                fill="currentColor"
            />
        </svg>
    );
};
export default GroupFilledIcon;
