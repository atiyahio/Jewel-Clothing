import React from 'react';
import FormInput from './FormInput';
import ButtonInput from './ButtonInput';
import styled from 'styled-components';
import {
  auth,
  signInWithGoogle,
  signInWithFb,
  signInWithTw
} from '../firebase/firebase.utils';

const SignIn = () => {
  const handleSubmit = async e => {
    e.preventDefault();

    let { email, password } = e.target;

    email = email.value;
    password = password.value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const StyledSignIn = styled.div`
    h2 {
      font-size: 2.8rem;
    }
    span {
      font-size: 1.8rem;
    }
    width: 38%;
    display: flex;
    flex-direction: column;
    .title {
      margin: 10 0;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      .socials {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        button {
          width: 48%;
        }
      }
      button {
        margin-bottom: 1rem;
      }
    }
  `;

  return (
    <StyledSignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" label="Email" required />
        <FormInput name="password" type="password" label="Password" required />
        <div className="buttons">
          <ButtonInput color="black" type="submit">
            Sign in
          </ButtonInput>
          <div className="socials">
            <ButtonInput color="#f45b42" onClick={signInWithGoogle}>
              Login with Google
            </ButtonInput>
            <ButtonInput color="#1d1dfd" onClick={signInWithFb}>
              Login with Facebook
            </ButtonInput>
            <ButtonInput color="#389aff" onClick={signInWithTw}>
              Login with Twitter
            </ButtonInput>
          </div>
        </div>
      </form>
    </StyledSignIn>
  );
};

export default SignIn;
