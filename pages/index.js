import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const StyledHomepage = styled.div`
    .homepage {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 80px;
    }

    .directory-menu {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .menu-item {
      min-width: 30%;
      height: 240px;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin: 0 7.5px 15px;

      &:first-child {
        margin-right: 7.5px;
      }

      &:last-child {
        margin-left: 7.5px;
      }

      .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;

        .title {
          font-weight: bold;
          margin-bottom: 6px;
          font-size: 22px;
          color: #4a4a4a;
        }

        .subtitle {
          font-weight: lighter;
          font-size: 16px;
        }
      }
    }
  `;
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledHomepage>
        <div className="container">
          <div className="directory-menu">
            <div className="menu-item">
              <div className="content">
                <h1 className="title">HATS</h1>
                <span className="subtitle">SHOW NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <h1 className="title">JACKETS</h1>
                <span className="subtitle">SHOW NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <h1 className="title">SNEAKERS</h1>
                <span className="subtitle">SHOW NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <h1 className="title">WOMENS</h1>
                <span className="subtitle">SHOW NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <h1 className="title">MENS</h1>
                <span className="subtitle">SHOW NOW</span>
              </div>
            </div>
          </div>
        </div>
      </StyledHomepage>
    </>
  );
};

export default Home;
