import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Header from './Header';
import { auth } from '../firebase/firebase.utils';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header currentUser={this.state.currentUser} />
          {this.props.children}
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}

export default Page;
