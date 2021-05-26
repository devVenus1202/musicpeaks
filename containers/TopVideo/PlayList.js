import React, { Component } from 'react';
import { Layout } from 'antd';
import { range as _range } from 'lodash';
import { AppConsumer } from '@components/appContext';
import PlaylistItem from './PlaylistItem';
import { PlaylistWrapper } from './video.style';

const { Sider } = Layout;

class Playlist extends Component {
  renderPlaylist = (topVideos, onlyIcon) => {
    const { index, label = '0', uploader = '0', artist = '0' } = this.props;
    if (!topVideos) {
      return '';
    }
    return (
      <>
        {_range(0, 9).map(key => {
          if (index !== key) {
            if (topVideos[key]) {
              return (
                <PlaylistItem
                  data={topVideos[key]}
                  key={key}
                  onlyIcon={onlyIcon}
                  query={{ index: Number(key) + Number(index) + 1, label, uploader, artist }}
                />
              );
            }
          }
        })}
      </>
    );
  };
  toggleColumn = () => {};

  render() {
    const { items } = this.props;
    return (
      <AppConsumer>
        {state => {
          return (
            <PlaylistWrapper collapsed={state.secondCollapsed}>
              <div className="video-thumbs">{this.renderPlaylist(items, state.secondCollapsed)}</div>
            </PlaylistWrapper>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Playlist;
