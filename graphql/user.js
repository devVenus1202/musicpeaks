import gql from 'graphql-tag';

export const QueryGetUserInfo = gql`
  query userById($uid: String!) {
    userById(id: $uid) {
      uid
      reverseUidProfile {
        entities {
          ... on Profile {
            ... on ProfileMpCustomer {
              image {
                thumbnail: derivative(style: THUMBNAIL) {
                  url
                  width
                  height
                }
                large: derivative(style: LARGE) {
                  url
                  width
                  height
                }
                url
                width
                height
                alt
                title
              }
              headerImage {
                thumbnail: derivative(style: THUMBNAIL) {
                  url
                  width
                  height
                }
                large: derivative(style: LARGE) {
                  url
                  width
                  height
                }
                url
                width
                height
                alt
                title
              }
              youtubeChannels {
                entity {
                  entityId
                  entityLabel
                  ... on TaxonomyTermYoutubeUploaders {
                    channelUrl
                    channelStatus
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const QueryGetUserSubscription = gql`
  query {
    getUserSubscriptions {
      nid
      type
      title
    }
  }
`;

export const QueryGetUserBaseStatistics = gql`
  query {
    getUserBaseStatistics {
      artists_count
      canonical_recordings_count
      assoc_canonical_recordings_count
      clips_count
      connected_labels_count
      album_releases_count
      total_views_count_raw
      total_views_count_formatted
      uploaders_count
      uploaders_views_count_total_raw
      uploaders_views_count_total_formatted
    }
  }
`;

export const QueryGetLabelsBySizeOfAudioCatalog = gql`
  query {
    getLabelsBySizeOfAudioCatalog {
      label_nid
      label_title
      album_releases_count
      percentage
      clips_count
    }
  }
`;

export const QueryGetListArtists = gql`
  query {
    getListArtists {
      nid
      title
      clips_count
    }
    # getVideoClipsNew(start: "0", limit: "1", artist: $artist) {
    #   view_count_raw
    # }
  }
`;

export const QueryGetListClips = gql`
  query {
    getListClips {
      nid
      title
      artist_target_id
      artist_title
      show_id
      show_title
      view_count
    }
  }
`;

export const QueryGetListUploaders = gql`
  query {
    getListUploaders {
      name
      clips_count
      views_count_raw
      views_count_formatted
    }
  }
`;

export const QueryGetVideoCatalogBreakdown = gql`
  query {
    getVideoCatalogBreakdown {
      name
      count
      terms {
        tid
        name
        count
        percentage
      }
    }
  }
`;
export const QueryGetVideoCatalog = gql`
  query {
    getListUploaders {
      name
      clips_count
      views_count_raw
      views_count_formatted
    }
    getVideoCatalogBreakdown {
      name
      count
      terms {
        name
        count
        percentage
      }
    }
  }
`;

export const QueryGetLabelsTypesList = gql`
  query {
    getLabelsTypesList {
      tid
      name
      count
    }
  }
`;

export const QueryGetAudioCatalog = gql`
  query {
    getUserBaseStatistics {
      artists_count
      canonical_recordings_count
      connected_labels_count
      album_releases_count
    }
    getLabelsTypesList {
      tid
      name
      count
    }
    getLabelsBySizeOfAudioCatalog {
      label_nid
      label_title
      album_releases_count
      percentage
      clips_count
    }
  }
`;

export const QueryGetProfileStats = gql`
  query {
    getUserBaseStatistics {
      artists_count
      clips_count
      total_views_count_formatted
      uploaders_count
    }
  }
`;
export const QueryGetProfileStatsNew = gql`
  query {
    getUserBaseStatisticsNew {
      artists_count
      clips_count
      total_views_count_formatted
      uploaders_count
    }
  }
`;

export const QueryGetTop10 = gql`
  query {
    getTop10 {
      nid
      title
      clip_title
      parent_clip_target_id
      artist_target_id
      artist_title
      show_target_id
      show_title
      uploader
      view_count_raw
      view_count_formatted
      url
      duration
      still_image_url
      in_hours
      in_mins
      in_secs
    }
  }
`;

export const QueryGetJoniMitchellClips = gql`
  query {
    getJoniMitchellClips {
      nid
      title
      clip_title
      parent_clip_target_id
      artist_target_id
      artist_title
      show_target_id
      show_title
      uploader
      view_count_raw
      view_count_formatted
      url
      duration
      in_point
      out_point
      still_image_url
      duration_hours
      duration_mins
      duration_secs
      in_hours
      in_mins
      in_secs
      out_hours
      out_mins
      out_secs
    }
  }
`;
