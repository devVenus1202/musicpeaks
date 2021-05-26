import React, { Component } from 'react';
import Box from './box';
import ContentHolder from './contentHolder';
import { CardWrapper } from './card.style';

class Card extends Component {
  render() {
    const { title, fields } = this.props;

    return (
      <Box title={title}>
        <ContentHolder>
          <CardWrapper>
            {fields && fields.map((field, index) => {
              const style =                `catalog-item${
                 field.type && field.type === 'header' ? '-header' : ''}`;
              return (
                <li className={style} key={index}>
                  <p className="catalog-item-name">{field.name}</p>
                  <p className="semi-colon">:</p>
                  <p className="catalog-item-value">{field.value}</p>
                </li>
              );
            })}
          </CardWrapper>
        </ContentHolder>
      </Box>
    );
  }
}

export default Card;
