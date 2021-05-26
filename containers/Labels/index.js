import React, { Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import VideoList from '../VideoList';
import { QueryGetLabelsBySizeOfAudioCatalog, QueryGetVideoCatalogBreakdown } from '../../graphql/user';
import TabbedSidebar from '../TabbedSidebar';
import SubMenuComponentWrapper from './labels.style';

class LabelList extends Component {
  selectMenu = item => {
    const label = item.id;
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        label,
      },
    });
  };

  onChangeFilter = (filters, item) => {
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        label: item,
        ...filters,
      },
    });
  };

  render() {
    const {
      query: { label },
    } = this.props;
    return (
      <SubMenuComponentWrapper className="isomorphicSubMenuComponent">
        <Query query={QueryGetLabelsBySizeOfAudioCatalog} fetchPolicy="cache-first">
          {({ loading, error, data }) => {
            if (error || loading) {
              if (loading) {
                return <TabbedSidebar loading="true" />;
              }
              return 'error';
            }
            const labels = _get(data, 'getLabelsBySizeOfAudioCatalog', {});
            const menuItems = [{ id: '0', title: 'All' }];
            labels.forEach(item => {
              if (Number(item.clips_count) === 0) return;

              menuItems.push({
                id: item.label_nid,
                title: item.label_title,
              });
            });
            return (
              <Query query={QueryGetVideoCatalogBreakdown}>
                {({ loading, error, data }) => {
                  if (loading || error) {
                    if (loading) {
                      return (
                        <TabbedSidebar
                          {...this.props}
                          listItems={menuItems}
                          selectListItem={item => this.selectMenu(item)}
                          currentItem={label}
                          category={[]}
                        />
                      );
                    }
                  }
                  const categories = _get(data, 'getVideoCatalogBreakdown', []);
                  const categoryItems = [];
                  categories.forEach(cat => {
                    cat.terms.forEach(item => {
                      if (Number(item.count) === 0 || !item.name) return;
                      categoryItems.push({
                        id: item.tid,
                        title: item.name,
                        count: item.count,
                      });
                    });
                  });

                  return (
                    <TabbedSidebar
                      listItems={menuItems}
                      currentMenu="label"
                      currentItem={label}
                      category={categoryItems}
                      onSelectItem={item => this.selectMenu(item)}
                      onChangeFilter={filters => this.onChangeFilter(filters, label)}
                    />
                  );
                }}
              </Query>
            );
          }}
        </Query>
        <VideoList {...this.props} />
      </SubMenuComponentWrapper>
    );
  }
}

LabelList.propTypes = {
  query: PropTypes.object.isRequired,
};
export default withApollo(LabelList);
