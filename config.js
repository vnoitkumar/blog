'use strict';

const appName = "Writer's ARK";

module.exports = {
  url: 'https://writersark.com',
  pathPrefix: '/',
  title: appName,
  subtitle: 'Writer’s Ark is a platform to celebrate the passion for writing.',
  copyright: '© 2020 All rights reserved.',
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
      label: "About Writer's ARK",
      path: '/pages/about-writers-ark'
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
    bio: 'Writer’s Ark is a platform to celebrate the passion for writing.',
    contacts: {
      // to change the order of the icon change it in use-site-metadata.js file
      // email: 'writersark2020@gmail.com',
      twitter: '',
      facebook: 'groups/423330818645129',
      instagram: 'writersark2020',
      email: '',
      telegram: '',
      github: '',
      rss: '',
      vkontakte: '',
      linkedin: '',
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
