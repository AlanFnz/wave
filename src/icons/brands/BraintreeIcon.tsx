// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const BraintreeIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                d="M4 21v-2.637h2.131V5.638H4V3h8.528c3.915 0 6.3 1.768 6.3 4.84 0 2.018-1.208 3.26-2.735 3.849 2.195.59 3.754 2.11 3.754 4.19 0 3.29-2.609 5.12-6.872 5.12H4V21zM9.06 5.639v4.903h3.182c2.386 0 3.627-.87 3.627-2.452 0-1.614-1.272-2.452-3.659-2.452H9.061zm0 12.724h3.628c2.801 0 4.201-.9 4.201-2.638 0-1.708-1.497-2.638-4.424-2.638H9.06v5.276z"
                fill="#001E3E"
            />
        </svg>
    );
};
export default BraintreeIcon;
