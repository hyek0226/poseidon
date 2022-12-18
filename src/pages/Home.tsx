import React from 'react';
import styled from 'styled-components';
import Input from '@/src/components/Input';

const StyledHome = styled.main`
  grid-area: main;
`;

const SearchWapper = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/images/bg1.jpg');
  background-repeat: no-repeat;
  background-position: 0 -450px;
  background-size: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 1500px;
  overflow-y: auto;
`;

function Home() {
  return (
    <StyledHome>
      <SearchWapper>
        <div className="input-wrapper">
          <Input label="search" width="300px" />
        </div>
      </SearchWapper>
      <ContentWrapper></ContentWrapper>
    </StyledHome>
  );
}

export default Home;
