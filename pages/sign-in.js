import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInSignUp = () => {
  const StyledSignInSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      className="container"
    >
      <StyledSignInSignUp>
        <SignIn />
        <SignUp />
      </StyledSignInSignUp>
    </motion.div>
  );
};

export default SignInSignUp;
