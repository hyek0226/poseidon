import React, { EventHandler } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
}

const StyledButton = styled.button`
  width: 100px;
  height: auto;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  margin-right: 5px;
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: aqua;
  }
`;

interface ButtonProps extends StyledButtonProps {
  content?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ content, onClick, disabled }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      {content}
    </StyledButton>
  );
}

export default Button;
