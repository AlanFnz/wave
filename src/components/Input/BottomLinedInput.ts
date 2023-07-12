import { FC } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBottomLinedPosition, BottomLinedInputLabel } from './BottomLinedInputLabel';
import { getSemanticValue } from '../../utils/cssVariables';
import { InputProps } from './InputProps';

const errorStyles = css`
    box-shadow: inset 0 -0.0625rem 0 0 ${getSemanticValue('border-danger-default')};
    border-color: ${getSemanticValue('border-danger-default')};

    & ~ ${BottomLinedInputLabel} {
        color: ${getSemanticValue('text-dangerInverted')};
    }
`;

const sizeVariant = variant<Record<string, unknown>, InputProps['size']>({
    prop: 'size',
    variants: {
        small: {
            height: '2.5rem',
            padding: '1rem 0.125rem 0.375rem'
        },
        medium: {
            height: '3.5rem',
            padding: '1.625rem 0.25rem 0.625rem'
        }
    }
});

const getLabelColor = ({ hasValue, inverted }: InternalInputComponentProps) => {
    if (inverted) {
        return getSemanticValue('text-secondaryInverted');
    }

    if (hasValue) {
        return getSemanticValue('text-secondary');
    }

    return getSemanticValue('text-tertiary');
};

const BottomLinedInput: FC<InternalInputComponentProps> = styled(BaseInput)<InternalInputComponentProps>`
    ${sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBottomLinedPosition(p.size) : '')};
        color: ${getLabelColor};
        background: ${p => getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};
    }

    ${p => (p.error ? errorStyles : undefined)}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & ~ ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size)};
            color: ${p => getSemanticValue(p.inverted ? 'text-primaryInverted' : 'text-info')};
            background: ${p =>
                getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};
        }
    }
`;

export { BottomLinedInput };
