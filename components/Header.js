import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { auth } from '../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  const StyledHeader = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .option {
        padding: 10px 15px;
        color: #333333;
        font-size: 1.6rem;
        cursor: pointer;
      }
    }
  `;
  return (
    <div className="container">
      <StyledHeader>
        <Link href="/">
          <a className="logo-container">
            <img className="logo" src="/crown.svg" alt="Logo" />
          </a>
        </Link>
        <div className="options">
          <Link href="/">
            <a className="option">SHOP</a>
          </Link>
          <Link href="/">
            <a className="option">CONTACT</a>
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link href="/sign-in">
              <a className="option">SIGN IN</a>
            </Link>
          )}
        </div>
      </StyledHeader>
    </div>
  );
};

export default Header;
