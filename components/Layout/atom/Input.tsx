import { HTMLProps } from 'react';
import styled from 'styled-components';

interface InputProps extends HTMLProps<HTMLInputElement> {}

export const DefaultInput = styled.input<InputProps>`
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--grey-500);
    font-weight: normal;
  }

  &:disabled {
    color: var(--grey-500);
    user-select: none;
  }

  &:read-only {
    color: var(--grey-400);
    user-select: none;
  }
`;
