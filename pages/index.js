import Head from 'next/head';
import React from 'react';
import { StyledHomepage } from '../components/styles';
import DirectoryMenu from '../components/DirectoryMenu';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <StyledHomepage>
      <div className="container">
        <DirectoryMenu />
      </div>
    </StyledHomepage>
  </>
);

export default Home;
