import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid tomato;
  width: 100%;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 60px auto 50px;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';
`;

function Root() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
export default Root;
