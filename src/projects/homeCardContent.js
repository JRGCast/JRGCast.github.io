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
  '📞',
  'Telephone Receiver',
  '/contactme');

export const cardContent = [
  myProjsPage,
  aboutPage,
  contactPage
];

