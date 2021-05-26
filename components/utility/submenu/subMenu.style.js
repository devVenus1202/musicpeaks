import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition } from '../../../config/style-util';
import WithDirection from '../../../config/withDirection';

const SubMenuSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media only screen and (max-width: 767px) {
    max-height: 60vh;
  }

  
  .isoSubMenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
   
    
    height:100%;
   
    .menu-header{
      min-height: 42px;
      background-image: linear-gradient(0deg,rgba(241,243,246,1) 1px,#dde6e9 0%,#dde6e9 100%);
      background-size: 350px 60px;
      position: fixed;
      height: 60px;
      margin-top: 0px;
      width: ${props => (props['collapsed'] ? '50px' : '350px')};
      transition: all .2s;
      z-index: 1000;

      .collapse-icon{
        position:absolute;
        right:12px;
        top:10px;
        font-size:24px;
        cursor:pointer;
      }
      
    }
    section {
      background-color: transparent;
      background-image :
      ${props =>
        props['isLoading']
          ? 'linear-gradient(0deg, rgba(241,243,246,1) 1px,  #dde6e9 0%, #dde6e9 40%, transparent 41%, transparent 60%, #dde6e9 61%,#dde6e9 100%),' +
            'linear-gradient(90deg, #dde6e9 20px, rgba(105,106,107,1) 20px, #dde6e9 300px, #dde6e9 300px,#dde6e9 100%),' +
            'linear-gradient(0deg, rgba(241,243,246,1) 1px,  #dde6e9 0%, #dde6e9 40%, transparent 41%, transparent 60%, #dde6e9 61%,#dde6e9 100%);'
          : 'linear-gradient(0deg, rgba(241,243,246,1) 1px,  #dde6e9 0%, #dde6e9 100%)'};
        

      background-size:350px 42px;
      margin-top:60px;

      .isoList {
        margin-top: 20px; 
        width: 100%;
        margin: 0px 0px 0px 0px;
        display: flex;
        justify-content: flex-start;
        flex-shrink: 0;
        padding: 0;
        border-bottom: 1px solid rgb(241, 243, 246);
        background-color: #dde6e9;
  
        text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
        position: relative;
  
        
  
        &.active {
          background-color: #5091b1;
          margin-top: -1px;
          border-top: 1px solid #5091b1;
          border-bottom: 1px solid #5091b1;
          .isoSubMenuText {
            span {
              color: #f8fcfe;
            }
          }
          .collapse-icon{
            color: #f8fcfe;
          }
        }
  
        .isoNoteBGColor {
          width: 5px;
          display: flex;
          margin: ${props => (props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0')};
          flex-shrink: 0;
        }
  
        .isoSubMenuText {
          width: 100%;
          padding: 10px 5px 10px 15px;
          cursor: pointer;
  
          h3 {
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: ${palette('secondary', 2)};
            font-weight: 500;
          }
          span {
            width: 100%;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
            color: #696a6b
            font-weight: 400;
          }
  
          .isoNoteCreatedDate {
            font-size: 13px;
            color: ${palette('grayscale', 0)};
          }
        }
      }
    }

    

    .isoNotlistNotice {
      font-size: 14px;
      font-weight: 400;
      color: ${palette('grayscale', 0)};
      line-height: inherit;
      padding: 30px 20px;
    }
  }
`;

export default WithDirection(SubMenuSidebar);
