import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends StyledInputProps {
  label: string;
  input?: {
    id?: string;
    type?: string;
    min?: string;
    max?: string;
    step?: string;
    placeholder?: string;
  };
  _onChange?: () => {};
}

interface StyledInputProps {
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #fff;
  ${({
    width = '600px',
    height = '50px',
    fontSize = '16px',
    fontWeight = '600',
    color = 'inherit',
    bgColor = '#fff',
    border = '1px solid #dbdbdb',
    borderRadius = '30px',
    boxShadow = 'none',
  }) => css`
    width: ${width};
    height: ${height};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    color: ${color};
    background-color: ${bgColor};
    border: ${border};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
  `}
`;

function Input(props: InputProps) {
  return (
    <React.Fragment>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <StyledInput {...props.input} onChange={props._onChange} />
    </React.Fragment>
  );
}

export default Input;
