import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import Box from '../../components/utility/box';

class VideoCard extends Component {
  static defaultProps = {
    inTime: {
      hour: 0,
      min: 0,
      sec: 0,
    },
  };

  constructor(props) {
    super(props);

    this.playerId = 'jw-player-musicpeaks';
  }

  onVideoLoad = event => {};

  onReady = () => {
    const {
      inTime: { hour, min, sec },
    } = this.props;
    const seconds = hour * 3600 + min * 60 + sec;
    const player = window.jwplayer(this.playerId);

    player.seek(seconds);
  };

  render() {
    const { url, inTime, imageURL } = this.props;
    return (
      <Box>
        <div>
          <ReactJWPlayer
            className="clip-jw-player"
            playerId={this.playerId}
            playerScript="https://cdn.jwplayer.com/libraries/OwYHiPKw.js"
            image={imageURL}
            file={url}
            isAutoPlay={false}
            onVideoLoad={this.onVideoLoad}
            onReady={this.onReady}
          />
        </div>
      </Box>
    );
  }
}

export default VideoCard;
