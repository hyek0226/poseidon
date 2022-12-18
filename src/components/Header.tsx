import React from 'react';
import styled from 'styled-components';
import Button from '@/src/components/Button';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid #dbdbdb;
  padding: 0 30px;
  background-color: #fff;
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
        <Button name="menu" content="메뉴" color="#565656" />
        <Button name="signin" content="로그인" color="#565656" />
        <Button
          name="signup"
          content="가입"
          border="2px solid #4e73df"
          borderRadius="20px"
        />
        <Button
          name="upload"
          content="업로드"
          bgColor="#4e73df"
          color="#fff"
          borderRadius="20px"
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
