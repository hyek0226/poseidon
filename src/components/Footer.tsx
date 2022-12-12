import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  border: 1px solid teal;
  padding: 0 30px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

export default Footer;
