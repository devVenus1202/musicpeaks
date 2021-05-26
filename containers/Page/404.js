import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import IntlMessages from '../../components/utility/intlMessages';
import FourZeroFourStyleWrapper from './404.style';
import Image from '../../static/image/rob.jpg';

class FourZeroFour extends React.Component {
  state = {
    loading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <FourZeroFourStyleWrapper className="iso404Page">
        <div className="iso404Content">
          <h1>
            <IntlMessages id="page404.title" />
          </h1>
          <h3>
            <IntlMessages id="page404.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page404.description" />
          </p>
          <Button type="button" loading={this.state.loading} onClick={this.enterLoading}>
            <Link href="/dashboard/profile" as="/dashboard/profile">
              <a className="isoMenuHolder">
                <span className="nav-text">
                  <IntlMessages id="page404.backButton" />
                </span>
              </a>
            </Link>
          </Button>
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}

export default FourZeroFour;
