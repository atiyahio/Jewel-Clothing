import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import ButtonInput from './ButtonInput';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

const SignUp = () => {
  const StyledSignup = styled.div`
    display: flex;
    flex-direction: column;
    width: 57%;
    .title {
      margin: 10px 0;
      font-size: 2.8rem;
    }
    span {
      font-size: 1.8rem;
    }
  `;

  const handleSubmit = async e => {
    e.preventDefault();

    let { displayName, email, password, confirmPassword } = e.target;

    displayName = displayName.value;

    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );

      await createUserProfileDocument(user, { displayName });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledSignup>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" label="Email" required />
        <FormInput type="password" name="password" label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
        />
        <ButtonInput color="black" type="submit">
          SIGN UP
        </ButtonInput>
      </form>
    </StyledSignup>
  );
};

export default SignUp;
