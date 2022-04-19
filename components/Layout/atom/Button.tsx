import { HTMLProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  block?: boolean;
  width?: number;
  height?: number;
}

export const DefaultButton = styled.button<ButtonProps>`
  width: ${(props) => (props.block ? '100%' : `${props.width || 100}px`)};
  height: ${(props) => `${props.height || 40}px`};
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;

  &:active {
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
