import React from 'react';
import styled from 'styled-components';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInSignUp = () => {
  const StyledSignInSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <div className="container">
      <StyledSignInSignUp>
        <SignIn />
        <SignUp />
      </StyledSignInSignUp>
    </div>
  );
};

export default SignInSignUp;
