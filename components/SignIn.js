import React, { useState } from 'react';
import FormInput from './FormInput';
import ButtonInput from './ButtonInput';
import styled from 'styled-components';
import { signInWithGoogle } from '../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log('hey');
  };

  const StyledSignIn = styled.div`
    h2 {
      font-size: 2.8rem;
    }
    span {
      font-size: 1.8rem;
    }
    width: 380px;
    display: flex;
    flex-direction: column;
    .title {
      margin: 10 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
    }
  `;

  return (
    <StyledSignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          type="email"
          label="Email"
          required
        />
        <FormInput
          name="email"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          type="password"
          label="Password"
          required
        />
        <div className="buttons">
          <ButtonInput type="submit">Sign in</ButtonInput>
          <ButtonInput isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </ButtonInput>
        </div>
      </form>
    </StyledSignIn>
  );
};

export default SignIn;
