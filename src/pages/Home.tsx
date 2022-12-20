import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '@/src/components/Input';
import axios from 'axios';

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
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 1500px;
  text-align: center;
  padding-top: 40px;
  img {
    width: 380px;
    height: 250px;
    margin: 10px;
  }
`;

interface IPicture {
  data: {
    hits: [];
  };
}

interface IPictureDetail {
  id?: number;
  largeImageURL?: string;
  userImageURL?: string;
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [picture, setPicture] = useState([]);
  const getPictures = async () => {
    const data: IPicture = await axios.get(
      'https://pixabay.com/api?key=32182981-9dc14849a91793a2ccc664163',
    );
    setPicture(data.data.hits);
    setLoading((prevLoading) => !prevLoading);
  };
  useEffect(() => {
    getPictures();
  }, []);
  return (
    <StyledHome>
      <SearchWapper>
        <div className="input-wrapper">
          <Input label="search" width="300px" />
        </div>
      </SearchWapper>
      <ContentWrapper>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          picture.map((item: IPictureDetail) => (
            <img key={item.id} src={item.largeImageURL} />
          ))
        )}
      </ContentWrapper>
    </StyledHome>
  );
}

export default Home;
