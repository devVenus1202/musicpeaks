import gql from 'graphql-tag';

export const QueryGetNodeData = gql`
  query getClipData($nid: String!) {
    nodeById(id: $nid) {
      entityId
      entityLabel
      ... on NodeClip {
        clipTitle
        fieldYear
        fieldMonth
        fieldDay
        publicClipNodes {
          entity {
            entityId
            entityLabel
            ... on NodePublicClip {
              parentClip {
                entity {
                  entityId
                  entityLabel
                  ... on NodeClip {
                    clipTitle
                    fieldStillImage {
                      targetId
                      url
                      __typename
                    }
                    clipType {
                      entity {
                        entityId
                        entityLabel
                        __typename
                      }
                      __typename
                    }
                    show {
                      entity {
                        entityId
                        entityLabel
                        __typename
                      }
                      __typename
                    }
                    artist {
                      entity {
                        entityId
                        entityLabel
                        __typename
                      }
                      __typename
                    }
                    __typename
                  }
                  __typename
                }
                __typename
              }
              url
              uploader
              uploadDate {
                value
                date
                __typename
              }
              viewCount
              durationHours
              durationMins
              durationSecs
              inHours
              inMins
              inSecs
              outHours
              outMins
              outSecs
              created
              __typename
            }
          }
        }
      }
    }
  }
`;

export const QueryGetClipData = gql`
  query getClipData($nid: String!) {
    nodeById(id: $nid) {
      entityId
      entityLabel
      ... on NodeClip {
        publicClipNodes {
          entity {
            entityId
            entityLabel
            ... on NodePublicClip {
              url
              uploader
              uploaderClipTitle
              uploadDate {
                date
              }
              sourceId
              viewCount
              commentCount
            }
          }
        }
      }
      ... on NodePublicClip {
        parentClip {
          entity {
            entityId
            entityLabel
            ... on NodeClip {
              clipTitle
              fieldStillImage {
                targetId
                url
              }
              clipType {
                entity {
                  entityId
                  entityLabel
                }
              }
              show {
                entity {
                  entityId
                  entityLabel
                }
              }
              artist {
                entity {
                  entityId
                  entityLabel
                }
              }
            }
          }
        }
        url
        uploader
        uploadDate {
          value
          date
        }
        viewCount
        durationHours
        durationMins
        durationSecs
        inHours
        inMins
        inSecs
        outHours
        outMins
        outSecs
      }
    }
  }
`;

export const QueryGetVideoPage = gql`
  query getVideoData($start: String!, $limit: String!, $label: String!, $uploader: String!, $artist: String!) {
    getVideoClips(start: $start, limit: $limit, label: $label, uploader: $uploader, artist: $artist) {
      nid
      title
      clip_title
      public_clip_target_id
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
    }
    getVideoClipsCount(label: $label, uploader: $uploader, artist: $artist)
  }
`;
export const QueryGetVideoPageNew = gql`
  query getVideoData(
    $start: String!
    $limit: String!
    $label: String
    $uploader: String
    $artist: String
    $categories: [String]
    $viewMin: String
    $viewMax: String
    $searchWord: String
  ) {
    getVideoClipsNew(
      start: $start
      limit: $limit
      label: $label
      uploader: $uploader
      artist: $artist
      clip_type: $categories
      search_word: $searchWord
      view_count_range: { min: $viewMin, max: $viewMax }
    ) {
      nid
      title
      clip_title
      public_clip_target_id
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
    }
    getVideoClipsCountNew(
      label: $label
      uploader: $uploader
      artist: $artist
      clip_type: $categories
      search_word: $searchWord
      view_count_range: { min: $viewMin, max: $viewMax }
    )
  }
`;
export const QueryGetVideoList = gql`
  query getVideoData($start: String!, $limit: String!, $label: String!, $uploader: String!, $artist: String!) {
    getVideoClips(start: $start, limit: $limit, label: $label, uploader: $uploader, artist: $artist) {
      nid
      title
      clip_title
      public_clip_target_id
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
    }
  }
`;
export const QueryGetVideoListNew = gql`
  query getVideoData($start: String!, $limit: String!, $label: String, $uploader: String, $artist: String) {
    getVideoClipsNew(start: $start, limit: $limit, label: $label, uploader: $uploader, artist: $artist) {
      nid
      title
      clip_title
      public_clip_target_id
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
    }
  }
`;
export const QueryGetUserVideoCount = gql`
  query {
    getUserBaseStatistics {
      clips_count
    }
  }
`;

export const QueryGetClipInformation = gql`
  query getClipInformation($nid: String!, $parent_clip_id: String!) {
    nodeById(id: $nid) {
      entityId
      entityLabel
      ... on NodePublicClip {
        parentClip {
          entity {
            entityId
            entityLabel
            ... on NodeClip {
              clipTitle
              canonicalRecording {
                entity {
                  entityId
                  ... on NodeCanonicalRecording {
                    title
                    releaseName
                    releaseYear
                    releasePosition
                    musicbrainzIdRecording
                    isrc
                    albumRelease {
                      targetId
                      entity {
                        entityId
                        entityLabel
                        ... on NodeAlbumRelease {
                          entityLabel
                          label {
                            entity {
                              entityId
                              entityLabel
                            }
                          }
                        }
                      }
                    }
                    artistMbid
                    artist {
                      targetId
                      entity {
                        entityBundle
                        entityUuid
                        entityCreated
                        entityType
                        entityLabel
                        entityChanged
                        entityId
                        entityPublished
                        nid
                        uuid
                        vid
                        revisionTimestamp
                        revisionLog
                        status
                        title
                        created
                        changed
                      }
                    }
                    iswcRef {
                      entity {
                        entityId
                        entityLabel
                        ... on NodeWork {
                          songTitle
                          iswc
                          writers {
                            entity {
                              entityId
                              entityLabel
                              ... on NodeWriter {
                                ipi
                                isniCode
                                proAffiliation {
                                  entity {
                                    entityId
                                    entityLabel
                                  }
                                }
                              }
                            }
                          }
                          publishers {
                            entity {
                              ... on ParagraphPublisher {
                                publisher {
                                  entity {
                                    entityId
                                    entityLabel
                                  }
                                }
                                publisherProAffiliation {
                                  entity {
                                    entityId
                                    entityLabel
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    nodeQuery(
      filter: {
        conditions: [
          { operator: EQUAL, field: "type", value: ["public_clip"] }
          { operator: EQUAL, field: "parent_clip.target_id", value: [$parent_clip_id] }
        ]
      }
    ) {
      entities {
        entityId
        entityLabel
        ... on NodePublicClip {
          url
          uploader
          uploaderClipTitle
          uploadDate {
            date
          }
          sourceId
          viewCount
          commentCount
          body {
            processed
          }
        }
      }
    }
  }
`;

export const QueryPublicClips = gql`
  query getPublicClips($parent_clip_id: String!) {
    nodeQuery(
      filter: {
        conditions: [
          { operator: EQUAL, field: "type", value: ["public_clip"] }
          { operator: EQUAL, field: "parent_clip.target_id", value: [$parent_clip_id] }
        ]
      }
    ) {
      entities {
        entityId
        entityLabel
        ... on NodePublicClip {
          url
          uploader
          uploaderClipTitle
          uploadDate {
            date
          }
          sourceId
          viewCount
          body {
            processed
          }
        }
      }
    }
  }
`;
