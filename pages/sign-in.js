import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import Router from 'next/router';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInSignUp = ({ currentUser }) => {
  const StyledSignInSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const renderSignIn = () => {
    if (currentUser) {
      Router.push('/');
    } else {
      return (
        <StyledSignInSignUp>
          <SignIn />
          <SignUp />
        </StyledSignInSignUp>
      );
    }
  };

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      className="container"
    >
      {renderSignIn()}
    </motion.div>
  );
};

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps)(SignInSignUp);
