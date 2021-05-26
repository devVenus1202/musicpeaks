import React from 'react';
import Link from 'next/link';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from './signup.style';


class SignUp extends React.Component {
	state = {
		redirectToReferrer: false,
	};

	handleLogin = () => {

	};

	render() {
		return (
  <SignUpStyleWrapper className="isoSignUpPage">
    <div className="isoSignUpContentWrapper">
      <div className="isoSignUpContent">
        <div className="isoLogoWrapper">
          <Link href="/dashboard">
            <a>
              <IntlMessages id="page.signUpTitle" />
            </a>
          </Link>
        </div>

        <div className="isoSignUpForm">
          <div className="isoInputWrapper isoLeftRightComponent">
            <Input size="large" placeholder="First name" />
            <Input size="large" placeholder="Last name" />
          </div>

          <div className="isoInputWrapper">
            <Input size="large" placeholder="Username" />
          </div>

          <div className="isoInputWrapper">
            <Input size="large" placeholder="Email" />
          </div>

          <div className="isoInputWrapper">
            <Input size="large" type="password" placeholder="Password" />
          </div>

          <div className="isoInputWrapper">
            <Input
              size="large"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
            <Checkbox>
              <IntlMessages id="page.signUpTermsConditions" />
            </Checkbox>
          </div>

          <div className="isoInputWrapper">
            <Button type="primary" onClick={this.handleLogin}>
              <IntlMessages id="page.signUpButton" />
            </Button>
          </div>
          <div className="isoInputWrapper isoOtherLogin">
            <Button onClick={this.handleLogin} type="primary" className="btnFacebook">
              <IntlMessages id="page.signUpFacebook" />
            </Button>
            <Button onClick={this.handleLogin} type="primary" className="btnGooglePlus">
              <IntlMessages id="page.signUpGooglePlus" />
            </Button>
          </div>
          <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
            <Link href="/signin">
              <a>
                <IntlMessages id="page.signUpAlreadyAccount" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </SignUpStyleWrapper>
		);
	}
}

export default SignUp;
