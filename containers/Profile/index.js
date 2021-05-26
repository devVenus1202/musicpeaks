import React, { Component } from 'react';
import { Query, withApollo } from 'react-apollo';
import Router from 'next/router';
import { Row, Col, Table } from 'antd';
import { get as _get, set as _set, cloneDeep } from 'lodash';

import { AppConsumer } from '@components/appContext';
import {
  QueryGetAudioCatalog,
  QueryGetVideoCatalog,
  QueryGetUserInfo,
  // QueryGetVideoCatalogBreakdown,
  // QueryGetLabelsBySizeOfAudioCatalog,
  // QueryGetListUploaders,
  // QueryGetTop10,
  // QueryGetJoniMitchellClips,
} from '../../graphql/user';
import { QueryGetVideoList, QueryGetNodeData } from '../../graphql/clip';
import PageHeader from '../../components/utility/pageHeader';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../config/basicStyle';
import ProfileHeader from './ProfileHeader';
import { PageWrapper, CatalogWrapper } from './Profile.style';
import { GoogleChart } from './googleChart';
import { DonutChart as DonutChartConfig, BarChart as BarChartConfig } from './googleChart/config';
import { formatWithCommas } from '../../helpers/format';
import { formattedDate } from '../../helpers/utility';
import { fields1, fields2, fields3, fields4, topVideoColumns, staticAudioCatalog, staticVideoCatalog } from './fields';
import { removeCookie } from '../../helpers/session';

class Profile extends Component {
  renderFields = fields => {
    return (
      <CatalogWrapper>
        {fields.map((field, index) => {
          const style = `catalog-item${field.type && field.type === 'header' ? '-header' : ''}`;
          return (
            <li className={style} key={index}>
              <p className="catalog-item-name">{field.name}</p>
              <p className="semi-colon">:</p>
              <p className="catalog-item-value">{field.value}</p>
            </li>
          );
        })}
      </CatalogWrapper>
    );
  };

  isBellMediaUser = () => {
    return this.props.user === '99';
  };

  renderAudioCatalog = basicStyle => {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { userInfo } = this.props;
    return (
      <Query query={QueryGetAudioCatalog}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return (
              <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={12} xs={24} style={colStyle}>
                  <Box title="Catalog Breakdown">
                    <ContentHolder>
                      {this.renderFields(fields1)}
                      {this.renderFields(fields2)}
                    </ContentHolder>
                  </Box>
                </Col>
                <Col md={12} xs={24} style={colStyle}>
                  <Box title="Labels by size of Audio Catalog">
                    <ContentHolder />
                  </Box>
                </Col>
              </Row>
            );
          }
          // Catalog Data
          const {
            getUserBaseStatistics: {
              artists_count,
              canonical_recordings_count,
              connected_labels_count,
              album_releases_count,
            },
            getLabelsTypesList: labelsTypesList,
            getLabelsBySizeOfAudioCatalog: labelsBySizeofAudioCatalog,
          } = data;
          const statFields = fields1;
          statFields[0].value = canonical_recordings_count;
          statFields[1].value = album_releases_count;
          statFields[2].value = artists_count;
          statFields[3].value = connected_labels_count;
          const typesFields = [];
          labelsTypesList.forEach(labelType => {
            typesFields.push({
              name: labelType.name,
              value: labelType.count,
            });
          });

          // Chart Data
          const chartConfig = DonutChartConfig;
          const chartData = [];
          chartData.push(['getLabelsBySizeOfAudioCatalog', 'data']);
          labelsBySizeofAudioCatalog.forEach((labelData, ind) => {
            const { label_title, percentage } = labelData;
            chartData.push([label_title, Number(percentage)]);
          });
          chartConfig.data = chartData;
          return (
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={12} xs={24} style={colStyle}>
                <Box title="Catalog Breakdown">
                  <ContentHolder>
                    {this.renderFields(statFields)}
                    {this.renderFields(typesFields)}
                  </ContentHolder>
                </Box>
              </Col>
              <Col md={12} xs={24} style={colStyle}>
                <Box title="Labels by size of Audio Catalog">
                  <ContentHolder key={userInfo.id}>
                    <GoogleChart {...chartConfig} />
                  </ContentHolder>
                </Box>
              </Col>
            </Row>
          );
        }}
      </Query>
    );
  };

  renderVideoCatalog = basicStyle => {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { userInfo } = this.props;
    return (
      <Query query={QueryGetVideoCatalog}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return (
              <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={12} xs={24} style={colStyle}>
                  <Box title="Catalog Breakdown">
                    <ContentHolder>
                      {this.renderFields(fields3)}
                      {this.renderFields(fields4)}
                    </ContentHolder>
                  </Box>
                </Col>
                <Col md={12} xs={24} style={colStyle}>
                  <Box title="Catalog Details">
                    <ContentHolder>
                      <ContentHolder />
                    </ContentHolder>
                  </Box>
                </Col>
              </Row>
            );
          }

          const { getVideoCatalogBreakdown: videoCatalog, getListUploaders: listUploaders } = data;

          // Get Video CatalogData
          const count = _get(videoCatalog, '0.count', '0');
          const otherCount = _get(videoCatalog, '1.count', '0');
          const terms = _get(videoCatalog, '0.terms', []);

          const clipFields = fields3;
          const noneMusicFields = fields4;

          clipFields[0].value = count;
          clipFields[1].value = _get(terms, '0.count', '');
          clipFields[2].value = _get(terms, '1.count', '');
          clipFields[3].value = 0;
          for (let ind = 2; ind < terms.length; ind++) {
            clipFields[3].value += Number(_get(terms, `${ind}.count`, 0));
          }

          noneMusicFields[0].value = otherCount;
          noneMusicFields[3].value = otherCount;

          // Get Chart Data
          const sortedList = listUploaders.sort((a, b) => b.views_count_raw - a.views_count_raw);
          const sortedCount = sortedList.length;
          let total = 0;
          sortedList.forEach(value => {
            total += Number(value.views_count_raw);
          });

          const chartConfig = BarChartConfig;
          const chartData = chartConfig.data;
          for (let ind = 0; ind < 4; ind++) {
            chartData[ind + 1][0] = _get(sortedList, `${ind}.name`, '');
            chartData[ind + 1][1] = Number(_get(sortedList, `${ind}.views_count_raw`, 0));
          }
          chartConfig.data = chartData;
          const title = `${formatWithCommas(total)} Views across ${sortedCount} uploader channels`;
          chartConfig.options.title = title;

          return (
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={12} xs={24} style={colStyle}>
                <Box title="Catalog Breakdown">
                  <ContentHolder>
                    {this.renderFields(clipFields)}
                    {this.renderFields(noneMusicFields)}
                  </ContentHolder>
                </Box>
              </Col>
              <Col md={12} xs={24} style={colStyle}>
                <Box title="Catalog Details">
                  <ContentHolder key={userInfo.id}>
                    <GoogleChart {...chartConfig} />
                  </ContentHolder>
                </Box>
              </Col>
            </Row>
          );
        }}
      </Query>
    );
  };

  renderOfficalVSUnoffical = () => {
    const { userInfo } = this.props;
    return (
      <Query query={QueryGetUserInfo} variables={{ uid: userInfo.id }}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return '';
          }
          try {
            const {
              userById: {
                reverseUidProfile: {
                  entities: [{ youtubeChannels }],
                },
              },
            } = data;
            if (youtubeChannels.length === 0) return '';

            // Chart Data
            const chartConfig = DonutChartConfig;
            const chartData = [];
            chartData.push(['getLabelsBySizeOfAudioCatalog', 'data']);
            const countOfChannels = { official: 0, unofficial: 0 };
            youtubeChannels.forEach(channel => {
              const { channelStatus } = channel;
              const oldValue = countOfChannels[channelStatus];
              countOfChannels[channelStatus] = oldValue + 1;
            });
            chartData.push(['Official', countOfChannels.official]);
            chartData.push(['Unofficial', countOfChannels.unofficial]);
            chartConfig.data = chartData;
            return <GoogleChart {...chartConfig} />;
          } catch (err) {
            return '';
          }
        }}
      </Query>
    );
  };

  renderTop10videos = () => {
    let query = QueryGetVideoList;
    // if (this.isBellMediaUser()) {
    //   query = QueryGetJoniMitchellClips;
    // }
    topVideoColumns[3] = {
      title: 'Date',
      key: 'uploaderDate',
      render: (text, record) => {
        const nodeQuery = QueryGetNodeData;
        const variables = { nid: record.nid };
        return (
          <Query query={nodeQuery} variables={variables}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return '';
              }
              const fieldYear = _get(data, 'nodeById.fieldYear', '');
              const fieldMonth = _get(data, 'nodeById.fieldMonth', '');
              const fieldDay = _get(data, 'nodeById.fieldDay', '');
              return <span>{formattedDate(fieldYear, fieldMonth, fieldDay)}</span>;
            }}
          </Query>
        );
      },
    };
    return (
      <Query query={query} variables={{ start: '0', limit: '10', label: '0', uploader: '0', artist: '0' }}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return '';
          }

          // const topVideos = this.isBellMediaUser()
          //   ? _get(data, 'getJoniMitchellClips', [])
          //   : _get(data, 'getTop10', []);
          const topVideos = _get(data, 'getVideoClips', []);
          const rowConfig = (record, rowIndex) => {
            return {
              onClick: e => {
                const nid = _get(topVideos, `${rowIndex}.nid`, null);
                if (nid) {
                  Router.push(
                    `/dashboard/topvideo?index=${rowIndex}&label=0&uploader=0`,
                    `/dashboard/topvideo/${rowIndex}/0/0`,
                  );
                }
              },
            };
          };

          return <Table className="top10-table" dataSource={topVideos} columns={topVideoColumns} onRow={rowConfig} />;
        }}
      </Query>
    );
  };

  componentWillUpdate(nextProps, nextState) {
    console.log('Willupdate-----------');
    console.log(nextProps);
    console.log(this.props);
  }

  render() {
    const { user, userInfo } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <PageWrapper>
        <ProfileHeader user={userInfo} />
        <LayoutWrapper className="profilePage">
          <PageHeader>Audio Catalog</PageHeader>
          {this.renderAudioCatalog(basicStyle)}
          <PageHeader>Video Catalog</PageHeader>
          {this.renderVideoCatalog(basicStyle)}
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} xs={24} style={colStyle}>
              <Box title="Top 10 Videos">
                <ContentHolder>{this.renderTop10videos()}</ContentHolder>
              </Box>
            </Col>
          </Row>
          {this.renderOfficalVSUnoffical()}
        </LayoutWrapper>
      </PageWrapper>
    );
  }
}

export default withApollo(Profile);
