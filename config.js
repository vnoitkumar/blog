'use strict';

const appName = 'Writer\'s ARK';

module.exports = {
  url: 'https://writersark.com',
  pathPrefix: '/',
  title: appName,
  subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
  copyright: 'Developed by GITSBIDEA © 2020 All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-178759071-1',
  useKatex: false,
  menu: [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Submissions',
      path: '/submissions'
    },
    {
      label: 'Authors',
      path: '/authors'
    },
    {
      label: 'Members',
      path: '/pages/members'
    },
    {
      label: 'Contact us',
      path: '/pages/contacts'
    },
    {
      label: 'Terms and Conditions',
      path: '/pages/terms-and-conditions'
    }
  ],
  author: {
    name: appName,
    photo: '/logo.png',
    bio: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    contacts: {
      email: 'writersark2020@gmail.com',
      facebook: '',
      telegram: '',
      twitter: '',
      github: '',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: ''
    }
  }
};
