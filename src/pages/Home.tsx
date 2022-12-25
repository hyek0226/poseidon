import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Input from '@/src/components/Input';
import Modal from '@/src/components/Modal';
import Button from '../components/Button';
import { useDownloadFile } from '../hooks/useDownloadFile';

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
  .image-sm {
    width: 380px;
    height: 250px;
    margin: 10px;
  }
`;

const StyledBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

interface IPictures {
  data: {
    hits: [];
  };
}

interface IPicturesDetail {
  id?: number;
  largeImageURL?: string;
  userImageURL?: string;
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pictures, setPictures] = useState([]);
  const [selectedPic, setSelectedPic] = useState<IPicturesDetail>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPictures = async () => {
    const data: IPictures = await axios.get(
      'https://pixabay.com/api?key=32182981-9dc14849a91793a2ccc664163',
    );
    setPictures(data.data.hits);
    setIsLoading((prevIsLoading) => !prevIsLoading);
  };
  useEffect(() => {
    getPictures();
  }, []);

  const onClickHandler = (item: IPicturesDetail) => {
    setIsModalOpen((prev) => !prev);
    setSelectedPic(item);
  };

  const downloadBtnHandler = () => {
    useDownloadFile(selectedPic.largeImageURL);
    console.log(selectedPic);
  };

  return (
    <StyledHome>
      <SearchWapper>
        <div className="input-wrapper">
          <Input label="search" width="300px" />
        </div>
      </SearchWapper>
      <ContentWrapper>
        {isLoading ? (
          <h2>isLoading...</h2>
        ) : (
          pictures.map((item: IPicturesDetail) => (
            <img
              className="image-sm"
              key={item.id}
              src={item.largeImageURL}
              onClick={() => onClickHandler(item)}
            />
          ))
        )}
        {isModalOpen ? (
          <Modal
            header={
              <StyledBtnWrapper>
                <Button
                  content="download"
                  height="85%"
                  bgColor="#4e73df"
                  color="#fff"
                  onClickHandler={downloadBtnHandler}
                />
              </StyledBtnWrapper>
            }
            content={
              <img
                width="100%"
                height="100%"
                src={selectedPic.largeImageURL}
              ></img>
            }
          />
        ) : null}
      </ContentWrapper>
    </StyledHome>
  );
}

export default Home;
