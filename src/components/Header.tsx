import React from 'react';
import styled from 'styled-components';
import Button from '@/src/components/Button';

const StyledHeader = styled.header`
  grid-area: header;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  .logo {
    width: 200px;
    font-size: 32px;
    font-weight: 600;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="logo">Poseidon</div>
      <div className="btnWrapper">
        <Button content="Menu" />
        <Button content="Sign in" />
        <Button content="Sign up" />
        <Button content="Upload" />
      </div>
    </StyledHeader>
  );
}

export default Header;
