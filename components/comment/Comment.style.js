import styled from 'styled-components';

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentWrapper = styled.div`

`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;

  .header-content {
    margin-left: 10px;

    &-name {
      span {
        margin-right: 4px;
      }
    }
    &-status {
      font-size: 12px;
      color: #98a6ad;
    }
  }
`;

export const CommentBody = styled.div`
  margin-top: 10px;
  margin-left: 50px;
`;
