export default {
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1',
  },
};

const siteConfig = {
  siteName: 'Musicpeaks',
  siteIcon: 'ion-flash',
  dashboard: '/dashboard',
  footerText: 'Musicpeaks ©2018',
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};

const language = 'english';

const langDir = 'ltr';

const jwtConfig = {
  enabled: false,
  fetchUrl: 'http://localhost:5000/login',
  secretKey: 'secretKey',
};

const googleConfig = {
  apiKey: '', //
};

const youtubeSearchApi = '';

export { siteConfig, language, themeConfig, jwtConfig, googleConfig, youtubeSearchApi, langDir };
