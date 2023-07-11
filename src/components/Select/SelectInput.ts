import { ComponentPropsWithoutRef, FC } from 'react';
import styled, { css } from 'styled-components';
import { compose, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { SelectLabel } from './SelectLabel';
import { bottomLinedSizeVariants, boxedSizeVariants } from './selectVariantSizes';
import { getSemanticValue } from '../../utils/cssVariables';

interface BaseSelectProps extends Omit<ComponentPropsWithoutRef<'select'>, 'size'> {
    /**
     * Define the display variant with boxed as the default
     */
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    /**
     * Adjust colors for display on a dark background
     */
    inverted?: boolean;
    /**
     * Indicate that the input contains an error
     */
    error?: boolean;
    /**
     * Set the size of the input with medium as the default
     */
    size?: ResponsiveValue<'small' | 'medium'>;
}

const ANIMATION_DURATION = 100;

const inputVariants = variant({
    variants: {
        boxed: {
            borderRadius: get('radii.2'),
            border: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,
            '&:active:not(:disabled), &:focus:not(:disabled)': {
                borderColor: getSemanticValue('border-focus-default'),
                boxShadow: `inset 0 0 0 0.0625rem ${getSemanticValue('border-focus-default')}`
            }
        },
        'bottom-lined': {
            border: 'none',
            borderTopLeftRadius: get('radii.1'),
            borderTopRightRadius: get('radii.1'),
            borderBottom: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,

            '&:active:not(:disabled), &:focus:not(:disabled)': {
                borderColor: getSemanticValue('border-focus-default'),
                boxShadow: `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-focus-default')}`
            }
        }
    }
});

const getErrorStyles = ({ error, variant: variantProp }: BaseSelectProps) => {
    if (error) {
        return css`
            border-color: ${getSemanticValue('border-danger-default')};
            box-shadow: ${variantProp === 'boxed'
                ? `inset 0 0 0 0.0625rem ${getSemanticValue('border-danger-default')}`
                : `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-danger-default')}`};

            & ~ ${SelectLabel} {
                color: ${getSemanticValue('text-danger')};
            }
        `;
    }

    return undefined;
};

const disabledStyles = css<BaseSelectProps>`
    color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
    cursor: not-allowed;
    border-color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};

    & ~ ${SelectLabel} {
        color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
    }

    & ~ .svg-icon svg > * {
        fill: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
    }
`;

const SelectInput: FC<BaseSelectProps> = styled.select.attrs({ theme })<BaseSelectProps>`
    margin: 0;
    box-sizing: border-box;
    background: ${p => getSemanticValue(p.inverted ? 'background-transparent' : 'background-primary-default')};
    border-radius: 0;
    color: ${p => getSemanticValue(p.inverted ? 'text-primaryInverted' : 'text-primary')};
    font-size: ${get('fontSizes.2')};
    font-family: ${get('fonts.normal')};
    transition: box-shadow ${ANIMATION_DURATION}ms, border ${ANIMATION_DURATION}ms;
    outline: none;
    appearance: none;
    width: 100%;
    padding-right: 2rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    & ~ .svg-icon svg > * {
        fill: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-secondary')};
    }

    ${p => {
        switch (p.variant) {
            case 'boxed':
                return compose(boxedSizeVariants, inputVariants)(p);
            case 'bottom-lined':
                return compose(bottomLinedSizeVariants, inputVariants)(p);
            default:
                return undefined;
        }
    }}
    ${getErrorStyles}
    ${p => (p.disabled ? disabledStyles : undefined)}
    &:-moz-focusring {
        outline: none;
        text-shadow: 0 0 0 ${getSemanticValue('text-secondary')};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-secondary')};
        transition: background-color 99999999ms ease 99999999ms;
    }

    &:active:not(:disabled), &:focus:not(:disabled) {
        & ~ ${SelectLabel} {
            color: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-secondary')};
        }

        & ~ .svg-icon svg > * {
            fill: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-secondary')};
        }
    }
`;

export { SelectInput, BaseSelectProps };
