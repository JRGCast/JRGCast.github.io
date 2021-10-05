const generateObj = (title, symbol = '', symbolLabel = '', goTo) => {
  return ({ title, symbol, symbolLabel, goTo });
};

const myProjsPage = generateObj(
  'Meus Projetos',
  '📑',
  'Bookmark Tabs',
  '/projects');

const aboutPage = generateObj(
  'Sobre Mim',
  '😁',
  'Beaming Face with Smiling Eyes',
  '/about');

const contactPage = generateObj(
  'Contate-me',
  '🤝',
  'Handshake',
  '/contactme');

const getNews = generateObj(
  'Últimas notícias',
  '📰',
  'Newspaper',
  '/latestnews'
);

export const cardContent = [
  myProjsPage,
  aboutPage,
  contactPage,
  getNews,
];

