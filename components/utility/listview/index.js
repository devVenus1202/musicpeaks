import React, { Component } from 'react';
import { Divider } from 'antd';
import { head as _first, get as _get, findIndex as _findIndex } from 'lodash';
import Pagination from '@components/uielements/pagination';
import Map from './map';
import { ListViewWrapper } from './listView.style';
import { formattedNumber } from '../../../helpers/utility';

class ListView extends Component {
  // eslint-disable-next-line constructor-super
  constructor(props) {
    super(props);
    const { data, current } = props;
    let currentItem = {};
    if (Array.isArray(data) && data.length > 0) {
      currentItem = current ? current : _first(data);

      const page = _findIndex(data, o => {
        return o.entityId === currentItem.entityId;
      });
      currentItem.page = (
        <Pagination
          current={page + 1}
          total={data.length}
          pageSize={1}
          showTotal={this.showTotal}
          size="small"
          onChange={this.onChangeControlled}
        />
      );
    } else {
      currentItem = data;
    }
    this.state = {
      current: currentItem,
      data: data,
      countryCode: '',
    };
  }

  showTotal = total => {
    const { suffix } = this.props;
    return `${total} ${suffix ? (total == 1 ? suffix.one : suffix.plural) : 'Associated'} in Total`;
  };

  onChangeControlled = page => {
    const { data } = this.props;
    const current = data[Number(page) - 1];
    current.page = (
      <Pagination
        total={data.length}
        current={page}
        pageSize={1}
        showTotal={this.showTotal}
        size="small"
        onChange={this.onChangeControlled}
      />
    );
    this.setState({
      current,
    });
    if (this.props.onChange) {
      this.props.onChange(current);
    }
  };

  selectField(code) {
    this.setState({ countryCode: code.toUpperCase() });
  }

  render() {
    const { fields } = this.props;
    const { current } = this.state;
    const extraInfos = [];
    fields.forEach(attribute => {
      if (attribute.value === 'divider') {
        extraInfos.push(<Divider />);
      } else {
        const value = _get(current, attribute.value, '');
        if (typeof value === 'object' && attribute.value === 'page') {
          extraInfos.push(
            <div className="isoListViewInfos" key={attribute.value}>
              <p className="isoInfoLabel isoPaginationLabel">{`${attribute.title}`}</p>
              <p className="isoInfoDetails">{value}</p>
            </div>,
          );
        } else {
          const isHighlighted =
            this.state.countryCode === attribute.value.toUpperCase() ||
            (attribute.value === 'row' &&
              !['US', 'AU', 'CA'].includes(this.state.countryCode) &&
              this.state.countryCode);
          extraInfos.push(
            <div className="isoListViewInfos" key={attribute.value}>
              <p className="isoInfoLabel">{`${attribute.title}`}</p>
              <p
                className={`isoInfoDetails ${isHighlighted ? 'highlight' : ''}`}
                onMouseOver={() => this.selectField(attribute.value)}
                onMouseLeave={() => this.selectField('')}
              >
                {attribute.format === 'number'
                  ? formattedNumber(value)
                  : attribute.render
                  ? attribute.render(value, _get(current, attribute.reference, ''))
                  : value}
              </p>
            </div>,
          );
        }
      }
    });
    const { showMap } = this.props;
    return (
      <ListViewWrapper className="isoListView" showMap={showMap}>
        <div className="isoListViewWrapper">{extraInfos}</div>
        {this.props.showMap === true ? (
          <Map countryCode={this.state.countryCode} overMap={code => this.selectField(code)} />
        ) : (
          ''
        )}
      </ListViewWrapper>
    );
  }
}
export default ListView;
