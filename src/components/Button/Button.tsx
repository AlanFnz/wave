import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';

import { getSemanticValue } from '../../utils/cssVariables';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { ComponentSemanticTokens } from '../../essentials/Colors/types';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends BaseButtonProps, ButtonStyleProps {
    /**
     * Adjust colors for display on a dark background
     */
    inverted?: boolean;
    /**
     * Define style of the button component, defaults to primary
     */
    variant?: ResponsiveValue<Variant>;
}

const variantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        primary: {
            color: getSemanticValue('text-primaryInverted'),
            fill: getSemanticValue('icon-primary-inverted'),
            background: getSemanticValue('background-primary-emphasized'),

            '&:hover': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-primary-hover')
            },

            '&:disabled': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-primary-disabled')
            }
        },
        secondary: {
            color: getSemanticValue('text-primary'),
            fill: getSemanticValue('icon-primary-default'),
            background: getSemanticValue('background-primary-default'),
            borderColor: getSemanticValue('border-neutral-default'),

            '&:hover': {
                color: getSemanticValue('text-primary'),
                fill: getSemanticValue('icon-primary-default'),
                background: getSemanticValue('background-secondary-default')
            },

            '&:disabled': {
                color: getSemanticValue('text-disabled'),
                fill: getSemanticValue('icon-disabled-default'),
                background: getSemanticValue('background-primary-default'),
                borderColor: getSemanticValue('border-disabled')
            }
        },
        danger: {
            color: getSemanticValue('text-primaryInverted'),
            fill: getSemanticValue('icon-primary-inverted'),
            background: getSemanticValue('background-danger-emphasized'),

            '&:hover': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-danger-hover')
            },

            '&:disabled': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-primary-disabled'),
                borderColor: getSemanticValue('border-disabled')
            }
        }
    }
});

const invertedVariantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        primary: {
            color: getSemanticValue('text-primary'),
            fill: getSemanticValue('icon-primary-default'),
            background: getSemanticValue('background-primary-default'),

            '&:hover': {
                color: getSemanticValue('text-tertiaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-primary-emphasized'),
                borderColor: getSemanticValue('border-neutral-default')
            },
            '&:disabled': {
                color: getSemanticValue('text-tertiaryInverted'),
                fill: getSemanticValue('icon-tertiary-default'),
                background: getSemanticValue('background-secondary-emphasized'),
                borderColor: getSemanticValue('border-disabled')
            }
        },
        secondary: {
            color: getSemanticValue('text-primaryInverted'),
            fill: getSemanticValue('icon-primary-inverted'),
            background: getSemanticValue('background-transparent'),
            borderColor: getSemanticValue('border-neutral-faded'),

            '&:hover': {
                color: getSemanticValue('text-primary'),
                fill: getSemanticValue('icon-primary-default'),
                background: getSemanticValue('background-primary-default')
            },
            '&:disabled': {
                color: getSemanticValue('text-disabledInverted'),
                fill: getSemanticValue('icon-disabled-inverted'),
                background: getSemanticValue('background-transparent'),
                borderColor: getSemanticValue('border-disabled')
            }
        },
        danger: {
            color: getSemanticValue('text-primaryInverted'),
            fill: getSemanticValue('icon-primary-inverted'),
            background: getSemanticValue('background-danger-emphasized'),

            '&:hover': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-danger-hover')
            },
            '&:disabled': {
                color: getSemanticValue('text-primaryInverted'),
                fill: getSemanticValue('icon-primary-inverted'),
                background: getSemanticValue('background-primary-disabled'),
                borderColor: getSemanticValue('border-disabled')
            }
        }
    }
});

const Button = styled(BaseButton).attrs({ theme })<ButtonProps>`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${p => (p.inverted ? invertedVariantStyles : variantStyles)};
`;

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
};

export { Button, ButtonProps };
