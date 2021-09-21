const generateObj = (title, summary, image = '', imageAlt = '', goTo) => {
  return ({ title, summary, image, imageAlt, goTo });
};

const myProjsPage = generateObj('Meus Projetos', 'Contendo meus projetosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Meus Projetos foto', 'Meus Projetos alt', '/projects');
const aboutPage = generateObj('Sobre Mim', 'Bio', 'Bio Foto', 'Bio foto Alt', '/about');
const contactPage = generateObj('Contate-me', 'Contato', 'ContFoto', 'ContAlt', '/contactme');

export const cardContent = [
  myProjsPage,
  aboutPage,
  contactPage
];

