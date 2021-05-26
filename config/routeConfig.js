const _ = require('lodash');

const routeConfig = [
  {
    name: 'video',
    page: '/dashboard/video',
    pattern: '/dashboard/video/:nid',
  },
  // {
  //   name: 'topvideo',
  //   page: '/dashboard/topvideo',
  //   pattern: '/dashboard/topvideo/:index',
  // },
  // {
  //   name: 'videolist',
  //   page: '/dashboard/videolist',
  //   pattern: '/dashboard/videolist/:index',
  // },
  {
    name: 'topvideo',
    page: '/dashboard/topvideo',
    pattern: '/dashboard/topvideo/:index/:label/:uploader/:artist',
  },
  {
    name: 'videolist',
    page: '/dashboard/videolist',
    pattern: '/dashboard/videolist/:page',
  },
  {
    name: 'labellist',
    page: '/dashboard/labels',
    pattern: '/dashboard/labels/:page/:label',
  },
  {
    name: 'uploaderlist',
    page: '/dashboard/uploaders',
    pattern: '/dashboard/uploaders/:page/:uploader',
  },
  {
    name: 'artistlist',
    page: '/dashboard/artists',
    pattern: '/dashboard/artists/:page/:artist',
  },
  {
    name: 'videoitem',
    page: '/dashboard/videoitem',
    pattern: '/dashboard/videoitem/:index',
  },
];

module.exports = _.keyBy(routeConfig, 'name');
