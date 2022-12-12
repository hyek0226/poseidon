import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.main`
  grid-area: main;
  padding: 0 30px;
`;

function Home() {
  return (
    <StyledHome>
      <h1>Main</h1>
    </StyledHome>
  );
}

export default Home;
