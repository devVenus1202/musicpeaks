import React from 'react';
import Pagination from '@components/uielements/pagination';

const showTotal = total => {
  return `${total} copies in Total`;
};

export const onlineClipData = {
  page: <Pagination size="small" total={18} showTotal={showTotal} />,
  uploaderClipTitle: 'Uploader Title',
  uploader: 'Uploader',
  uploadDate: 'Upload Date',
  sourceId: 'YouTube Vid ID',
  viewCount: 'Views',
  body: 'Comments',
};
export const suffixCopy = { one: 'Copy', plural: 'Copies' };
export const onlineClipFields = [
  {
    title: 'Clips',
    value: 'page',
  },
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Uploader Title',
    value: 'uploaderClipTitle',
    reference: 'sourceId',
    render: (label, ref) => {
      return (
        <a key={ref} href={`https://www.youtube.com/watch?v=${ref}`} target="_blank">
          {label}
        </a>
      );
    },
  },
  {
    title: 'Uploader',
    value: 'uploader',
  },
  {
    title: 'Upload Date',
    value: 'uploadDate.date',
  },
  {
    title: 'Youtube Vid ID',
    value: 'sourceId',
  },
  {
    title: 'Views',
    value: 'viewCount',
    format: 'number',
  },
  {
    title: 'Comments',
    value: 'commentCount',
    format: 'number',
  },
];

export const productionData = {
  name: 'Show Name',
  seasonEpisode: 'Season & Episode',
  recordingDate: 'Recording Date',
  broadcastDate: 'Broadcast Date',
  videoISRC: 'Video ISRC',
  notes: 'Notes',
  page: <Pagination total={2} showTotal={showTotal} size="small" />,
  company: 'Company',
  address: 'Address',
  license: 'Licensing Contact',
  notes2: 'Notes',
};

export const productionFields = [
  {
    title: 'Show Name',
    value: 'name',
  },
  {
    title: 'Season & Episode',
    value: 'seasonEpisode',
  },
  {
    title: 'Recording Date',
    value: 'recordingDate',
  },
  {
    title: 'Broadcast Date',
    value: 'broadcastDate',
  },
  {
    title: 'Video ISRC',
    value: 'videoISRC',
  },
  {
    title: 'Notes',
    value: 'notes',
  },
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Companies',
    value: 'page',
    suffix: { one: 'Associated', plural: 'Associated' },
  },
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Company',
    value: 'company',
  },
  {
    title: 'Address',
    value: 'address',
  },
  {
    title: 'Licensing Contact',
    value: 'license',
  },
  {
    title: 'Notes',
    value: 'notes2',
  },
];

export const masterData = {
  title: 'Song Title',
  artist: 'Artist',
  album: 'Album',
  year: 'Year',
  label: 'Label',
  upc: 'UPC',
  grid: 'GRID',
  catalog: 'Catalog Number',
  mbid: 'MBID',
  earliest: 'Earliest ISRC',
  linked: 'Linked ISRCs',
};

export const masterFields = [
  {
    title: 'Song Title',
    value: 'title',
  },
  {
    title: 'Artist',
    value: 'artist.entity.entityLabel',
  },
  {
    title: 'Album',
    value: 'albumRelease.entity.entityLabel',
  },
  {
    title: 'Year',
    value: 'releaseYear',
  },
  {
    title: 'Label',
    value: 'albumRelease.entity.label.entity.entityLabel',
  },
  {
    title: 'UPC',
    value: 'upc',
  },
  {
    title: 'GRID',
    value: 'grid',
  },
  {
    title: 'Catalog Number',
    value: 'catalog',
  },
  {
    title: 'MBID',
    value: 'artistMbid',
  },
  {
    title: 'Earliest ISRC',
    value: 'isrc[0]',
  },
  {
    title: 'Linked ISRCs',
    value: 'linked',
  },
];

export const publishData = {
  iswc: 'ISWC',
  writersPage: <Pagination total={2} showTotal={showTotal} size="small" />,
  writerName: 'Writer Name',
  ipi: 'IPI Number',
  isni: 'ISNI Code',
  pro: 'PRO Affiliation',
  publishers: <Pagination total={2} showTotal={showTotal} size="small" />,
  companyName: 'Company Name',
  pro2: 'PRO Affiliation',
};

export const publishCommonFields = [
  {
    title: 'ISWC',
    value: 'iswc',
  },
];
export const publisherFields = [
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Publishers',
    value: 'page',
    suffix: { one: 'Associated', plural: 'Associated' },
  },
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Company Name',
    value: 'entity.publisher.entity.entityLabel',
  },
  {
    title: 'PRO Affiliation',
    value: 'entity.publisherProAffiliation.entity.entityLabel',
  },
];
export const writerFields = [
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Writers',
    value: 'page',
    suffix: { one: 'Associated', plural: 'Associated' },
  },
  {
    title: 'divider',
    value: 'divider',
  },
  {
    title: 'Writer Name',
    value: 'entity.entityLabel',
  },
  {
    title: 'IPI Number',
    value: 'entity.ipi',
  },
  {
    title: 'ISNI Code',
    value: 'entity.isniCode',
  },
  {
    title: 'PRO Affiliation',
    value: 'entity.proAffiliation.entity.entityLabel',
  },
];
export const publishFields = [
  {
    title: 'ISWC',
    value: 'iswc',
  },
  {
    title: 'Writers',
    value: 'writersPage',
  },
  {
    title: 'Writer Name',
    value: 'writerName',
  },
  {
    title: 'IPI Number',
    value: 'ipi',
  },
  {
    title: 'ISNI Code',
    value: 'isni',
  },
  {
    title: 'PRO Affiliation',
    value: 'pro',
  },
  {
    title: 'Publishers',
    value: 'publishers',
  },
  {
    title: 'Company Name',
    value: 'companyName',
  },
  {
    title: 'PRO Affiliation',
    value: 'pro2',
  },
];
export const territoryFields = [
  {
    title: 'United States',
    value: 'us',
    reference: 'value',
    render: (label, ref) => {
      return (
        <span className="hover" key={ref} href="#">
          {label}
        </span>
      );
    },
  },
  {
    title: 'Canada',
    value: 'ca',
    reference: 'value',
    render: (label, ref) => {
      return (
        <span className="hover" key={ref} href="#">
          {label}
        </span>
      );
    },
  },
  {
    title: 'Australia',
    value: 'au',
    reference: 'value',
    render: (label, ref) => {
      return (
        <span className="hover" key={ref} href="#">
          {label}
        </span>
      );
    },
  },
  {
    title: 'ROW',
    value: 'row',
    reference: 'value',
    render: (label, ref) => {
      return (
        <span className="hover" key={ref} href="#">
          {label}
        </span>
      );
    },
  },
];
export const territoryData = {
  us: 'Dualtone Music Group',
  ca: 'Dine Alone Records',
  au: 'Rouge/Inertia',
  row: 'Decca Records',
};
