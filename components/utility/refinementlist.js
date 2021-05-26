import React, { Component } from 'react';
import { Checkbox } from 'antd';
import ProtoTypes from 'prop-types';
import { RefinementListWrapper, Badge } from './refinementlist.style';
import { arrayToObject } from '../../helpers/utility';
import SearchBox from './searchbox';
import listData from '../../containers/Artist/fakeData';

class RefinementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: props.data,
      checkedItems: props.data.map(obj => {
        return obj.id;
      }),
      items: [],
    };
  }

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  onCheckItem(e) {
    const { checkedItems } = this.state;
    console.log(e.target.value);
    if (checkedItems.includes(e.target.value)) {
      checkedItems.splice(checkedItems.indexOf(e.target.value), 1);
    } else {
      checkedItems.push(e.target.value);
    }
    this.setState({ checkedItems });
    this.props.onChange(checkedItems);
  }

  filterList(e) {
    const { initialItems } = this.state;
    const updatedList = initialItems.filter(item => {
      return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  }

  render() {
    const { items, checkedItems } = this.state;
    return (
      <RefinementListWrapper>
        <SearchBox
          placeholder="Search here..."
          leftButton="true"
          onSearch={value => console.log(value)}
          onChange={this.filterList.bind(this)}
          className="mainSearch"
        />
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                <Checkbox
                  onChange={this.onCheckItem.bind(this)}
                  value={item.id}
                  checked={checkedItems.includes(item.id)}
                >
                  {item.title.substring(0, 18)}
                </Checkbox>
                <Badge count={item.count} overflowCount={9999} />
              </li>
            );
          })}
        </ul>
      </RefinementListWrapper>
    );
  }
}
ProtoTypes.defaultProps = {
  data: [],
};
export default RefinementList;
