import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StyledBtnProps {
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
}

const StyledBtn = styled.button<StyledBtnProps>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  max-width: 170px;
  margin-right: 10px;
  padding: 8px 16px;
  ${({
    width = 'auto',
    height = 'auto',
    fontSize = '14px',
    fontWeight = '600',
    color = 'inherit',
    bgColor = 'transparent',
    border = '0',
    borderRadius = '4px',
    boxShadow = 'none',
    padding = '5px 15px',
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
    padding: ${padding}

    &:hover {
      opacity: 0.6;
      transform: scale(1.02);
      transition: transform 0.4s ease;
    }
  `}
`;

interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledBtnProps {
  name?: string;
  content: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  name,
  className,
  content,
  icon,
  onClickHandler,
  ...rest
}: BtnProps): ReactElement {
  return (
    <StyledBtn
      name={name}
      className={className}
      {...rest}
      onClick={onClickHandler}
    >
      {icon}
      {content}
    </StyledBtn>
  );
}
export default Button;
