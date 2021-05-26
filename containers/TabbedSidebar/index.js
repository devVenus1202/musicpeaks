import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import { Query } from 'react-apollo';

import { AppConsumer } from '../../components/appContext';
import Scrollbars from '../../components/utility/customScrollBar';
import ColumnItem from '../../components/utility/columnItem';
import Refinementlist from '../../components/utility/refinementlist';
import SearchBox from '../../components/utility/searchbox';

import { QueryGetVideoListNew } from '../../graphql/clip';
import { formattedNumber } from '../../helpers/utility';

import { TabbedSidebarWrapper, Tabs, Card, Slider } from './tabbedsidebar.style';

const { Sider } = Layout;
const { TabPane } = Tabs;

class TabbedSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSequence: '',
      originList: props.listItems,
      filteredList: props.listItems,
      filters: { searchWord: '', viewMin: 0, viewMax: 0, categories: [] },
    };
    this.onChangeSlider.bind(this);
    this.onChangeCategory.bind(this);
    this.onChangeSearchWord.bind(this);
    this.onSelectItem.bind(this);
  }

  onChangeSlider(value) {
    const { filters } = this.state;
    [filters.viewMin, filters.viewMax] = value;
    this.props.onChangeFilter(filters);
  }

  onChangeCategory(categories) {
    const { filters } = this.state;
    filters.categories = categories;
    this.setState({ filters });
    this.props.onChangeFilter(filters);
  }

  onChangeSearchWord(searchWord) {
    const { filters } = this.state;
    filters.searchWord = searchWord;
    this.props.onChangeFilter(filters);
  }

  onSelectItem(item) {
    // const { currentMenu, client } = this.props;
    // const variables = { start: 0, limit: 1, artist: '', uploader: '', lable: '' };
    // variables[currentMenu] = item;

    // const data = await client.query({
    //   query: QueryGetVideoListNew,
    //   variables,
    // });

    // const maxViewCount = _get(data, 'getVideoClipsNew[0].view_count_raw', 0);

    // const { filters } = this.state;
    // filters.viewMax = maxViewCount;
    // this.setState();
    this.props.onSelectItem(item);
  }

  onSelectSequence(item) {
    this.props.onSelectSequence(item);
  }

  searchItemsHandle(value) {
    const filteredList = [];
    const { originList } = this.state;
    originList.forEach(item => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) filteredList.push(item);
    });
    this.setState({ filteredList });
  }

  render() {
    const { sequenceItems, category, loading, rangeMax, currentItem, currentMenu } = this.props;
    const { currentSequence, filteredList, filters } = this.state;
    const variables = { start: '0', limit: '1', artist: '', label: '', uploader: '' };
    variables[currentMenu] = currentItem;

    const playItem = true;
    return (
      <AppConsumer>
        {state => {
          const { filter } = state;
          return (
            <TabbedSidebarWrapper collapsed={state.secondCollapsed}>
              <Sider width={state.secondCollapsed ? 40 : 350} className="isoSidePane">
                <div className="playlist-icon" onClick={() => state.switchSecondColumn()}>
                  {state.secondCollapsed ? (
                    <i className="demo-icon icon-open-column" />
                  ) : (
                    <i className="demo-icon icon-close-column" />
                  )}
                </div>
                <div className="card-container">
                  <Tabs type="card" collapsed={state.secondCollapsed}>
                    <TabPane tab="List" key="1" className="list-tab-pane">
                      {loading && !state.secondCollapsed ? (
                        <div className="loading-pane" />
                      ) : (
                        !state.secondCollapsed && (
                          <>
                            <div className="filterPane">
                              <SearchBox
                                placeholder="Search here..."
                                onSearch={value => this.searchItemsHandle(value)}
                                onChange={e => this.searchItemsHandle(e.target.value)}
                                className="mainSearch"
                                leftButton="true"
                              />
                            </div>
                            <Scrollbars style={{ maxHeight: '100%' }}>
                              {filteredList && filteredList.length > 0 ? (
                                filteredList.map(item => (
                                  <ColumnItem
                                    title={item.title}
                                    key={item.id}
                                    active={currentItem === item.id}
                                    onClick={() => this.onSelectItem(item)}
                                  />
                                ))
                              ) : (
                                <span className="isoNotlistNotice" />
                              )}
                            </Scrollbars>
                          </>
                        )
                      )}
                    </TabPane>
                    <TabPane tab="Filter" key="2" className="filter-tab-pane ">
                      {!state.secondCollapsed && (
                        <Scrollbars style={{ maxHeight: '100%' }}>
                          <div className="filterPane">
                            <SearchBox
                              placeholder="Search All Results"
                              onSearch={value => {
                                this.onChangeSearchWord(value);
                              }}
                              // onChange={event => {
                              //   this.onChangeSearchWord(event.target.value);
                              // }}
                              className="mainSearch"
                              leftButton="true"
                            />
                            <Card>
                              <Query query={QueryGetVideoListNew} variables={variables} fetchPolicy="no-cache">
                                {({ loading, error, data }) => {
                                  if (loading || error) {
                                    return '';
                                  }
                                  const highestViewCount = _get(data, 'getVideoClipsNew[0].view_count_raw', 0);
                                  return (
                                    <>
                                      <div className="range-header">
                                        <b>Video Views</b>
                                        <span>
                                          {formattedNumber(filters.viewMin)} - {formattedNumber(highestViewCount)}
                                        </span>
                                      </div>

                                      <Slider
                                        min={0}
                                        max={Number(highestViewCount)}
                                        range
                                        defaultValue={[0, highestViewCount]}
                                        step={1}
                                        onAfterChange={value => {
                                          console.log(value);
                                          this.onChangeSlider(value);
                                        }}
                                      />
                                    </>
                                  );
                                }}
                              </Query>
                            </Card>
                            <Card>
                              <b>Video Category</b>
                              <Refinementlist
                                data={category}
                                checkedItems={filters.categories}
                                onChange={categories => {
                                  filter.categories = categories;
                                  filter.changed = !filter.changed;
                                  this.onChangeCategory(categories);
                                }}
                              />
                            </Card>
                          </div>
                        </Scrollbars>
                      )}
                    </TabPane>
                    {sequenceItems && sequenceItems.length > 0 ? (
                      <TabPane tab="Sequence" key="3" className="sequence-tab-pane">
                        <div>
                          {!state.secondCollapsed && (
                            <Scrollbars style={{ maxHeight: '100%' }}>
                              {sequenceItems.map(item => (
                                <ColumnItem
                                  image={item.image}
                                  title={item.title}
                                  key={item.id}
                                  playItem={playItem}
                                  onClick={() => this.onSelectSequence(item)}
                                />
                              ))}
                            </Scrollbars>
                          )}
                        </div>
                      </TabPane>
                    ) : (
                      ''
                    )}
                  </Tabs>
                </div>
              </Sider>
            </TabbedSidebarWrapper>
          );
        }}
      </AppConsumer>
    );
  }
}

TabbedSidebar.propTypes = {
  listItems: PropTypes.array.isRequired,
  currentItem: PropTypes.object.isRequired,
  currentMenu: PropTypes.string.isRequired,
  sequenceItems: PropTypes.array,
  loading: PropTypes.bool,
  category: PropTypes.array,
  rangeMax: PropTypes.number,
  onChangeFilter: PropTypes.func,
  onSelectItem: PropTypes.func,
};

TabbedSidebar.defaultProps = {
  sequenceItems: [],
  loading: false,
  category: [],
  rangeMax: 250000000,
  onChangeFilter: () => {},
  onSelectItem: () => {},
};

export default TabbedSidebar;
