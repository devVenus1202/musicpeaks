import React, { Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import SubMenuComponentWrapper from './labels.style';
import VideoList from '../VideoList';

import { QueryGetListArtists, QueryGetVideoCatalogBreakdown } from '../../graphql/user';
import TabbedSidebar from '../TabbedSidebar';

class ArtistList extends Component {
  selectMenu = item => {
    const artist = item.id;
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        artist,
      },
    });
  };

  onChangeFilter = (filters, item) => {
    Router.push({
      pathname: `${Router.route}`,
      query: {
        page: 1,
        artist: item,
        ...filters,
      },
    });
  };

  render() {
    const {
      query: { artist },
    } = this.props;

    return (
      <SubMenuComponentWrapper className="isomorphicSubMenuComponent">
        <Query query={QueryGetListArtists} fetchPolicy="cache-first">
          {({ loading, error, data }) => {
            if (loading || error) {
              if (loading) return <TabbedSidebar loading="true" />;
            }
            const artists = _get(data, 'getListArtists', {});
            const menuItems = [{ id: '0', title: 'All' }];
            artists.forEach(item => {
              if (Number(item.clips_count) === 0) return;
              menuItems.push({
                id: item.nid,
                title: item.title,
              });
            });
            return (
              <Query query={QueryGetVideoCatalogBreakdown}>
                {({ loading, error, data }) => {
                  if (loading || error) {
                    if (loading) {
                      return (
                        <TabbedSidebar
                          listItems={menuItems}
                          onSelectItem={item => this.selectMenu(item)}
                          currentItem={artist}
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
                      currentMenu="artist"
                      currentItem={artist}
                      category={categoryItems}
                      onSelectItem={item => this.selectMenu(item)}
                      onChangeFilter={filters => this.onChangeFilter(filters, artist)}
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

ArtistList.propTypes = {
  query: PropTypes.object.isRequired,
};
export default withApollo(ArtistList);
