import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Link from 'next/link';
import Router from 'next/router';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import { jwtConfig } from '../../config';
import IntlMessages from '../../components/utility/intlMessages';
import Logo from '../../components/utility/logo';
import SignInStyleWrapper from './signin.style';
import notification from '../../components/notification';
import { login } from '../../helpers/auth';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleLogin = async () => {
    const { username, password } = this.state;

    const response = await login(this.props.client, username, password);
    if (!response.error) {
      Router.push('/dashboard/profile');
    } else {
      notification('error', 'Login Failed', response.error);
      this.setState({ loading: false });
    }
  };

  login = () => {
    const { username, password } = this.state;
    if (username.trim() && password.trim()) {
      this.enterLoading();
      if (jwtConfig.enabled) this.handleJWTLogin();
      else this.handleLogin();
    } else {
      notification('error', 'Incorrect Value', 'Field is empty or invalid. Please try again!');
    }
  };

  render() {
    const { username, password, loading } = this.state;
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Logo type />
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input
                  id="inputUserName"
                  value={username}
                  onChange={this.handleChange('username')}
                  size="large"
                  placeholder="Username"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  id="inpuPassword"
                  value={password}
                  onChange={this.handleChange('password')}
                  size="large"
                  type="password"
                  placeholder="Password"
                  onKeyPress={event => {
                    if (event.key === 'Enter') this.login();
                  }}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" loading={loading} onClick={this.login}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <Link href="/forgotpassword">
                  <div className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                  </div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default withApollo(SignIn);
