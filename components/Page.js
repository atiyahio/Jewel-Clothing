import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Header from './Header';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
