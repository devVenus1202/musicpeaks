import React, { Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import Router from 'next/router';
import { get as _get } from 'lodash';
import PropTypes from 'prop-types';

import VideoList from '../VideoList';
import TabbedSidebar from '../TabbedSidebar';

import { QueryGetListUploaders, QueryGetVideoCatalogBreakdown } from '../../graphql/user';

import SubMenuComponentWrapper from './labels.style';

class UploaderList extends Component {
  selectMenu = item => {
    const uploader = item.id;
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        uploader,
      },
    });
  };

  onChangeFilter = (filters, item) => {
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        uploader: item,
        ...filters,
      },
    });
  };

  render() {
    const {
      query: { uploader },
    } = this.props;

    return (
      <SubMenuComponentWrapper className="isomorphicSubMenuComponent">
        <Query query={QueryGetListUploaders} fetchPolicy="cache-first">
          {({ loading, error, data }) => {
            if (loading || error) {
              if (loading) return <TabbedSidebar loading={loading} />;
              return <TabbedSidebar />;
            }
            const uploaders = _get(data, 'getListUploaders', {});
            const menuItems = [{ id: '0', title: 'All' }];
            uploaders.forEach(item => {
              if (Number(item.clips_count) === 0) return;
              menuItems.push({
                id: item.name,
                title: item.name,
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
                          currentItem={uploader}
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
                      currentMenu="uploader"
                      currentItem={uploader}
                      category={categoryItems}
                      onSelectItem={item => this.selectMenu(item)}
                      onChangeFilter={filters => this.onChangeFilter(filters, uploader)}
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

UploaderList.propTypes = {
  query: PropTypes.object.isRequired,
};
export default withApollo(UploaderList);
