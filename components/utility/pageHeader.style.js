import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '../../config/withDirection';

const WDComponentHeaderWrapper = styled.h1`
  font-size: ${props => (props['style'].fontSize ? props['style'].fontSize : '19px')};
  font-weight: 500;
  color: ${props => (props['style'].color ? props['style'].color : palette('secondary', 2))};
  width: 100%;
  margin: 20px 17px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  span.pipe {
    color: #a2aabd;
    padding: 10px;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 10px;
    margin-bottom: 30px;
  }

  &:before {
    content: '';
    width: 6px;
    height: 40px;
    background-color: ${palette('secondary', 3)};
    display: flex;
    margin: ${props => (props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0')};
  }

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${palette('secondary', 3)};
    display: flex;
    margin: ${props => (props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px')};
  }
`;

const ComponentHeaderWrapper = WithDirection(WDComponentHeaderWrapper);
export { ComponentHeaderWrapper };
