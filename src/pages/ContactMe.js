const ContactMe = () => {
  const textWhatsApp = 'Oi João, vi seu portifólio e entrei em contato!';
  return (
    <address>
      <p>
        Tel: (61)98242-3750
      </p>
      <p>Email: joao.ralph1@gmail.com</p>
      <a href="https://www.linkedin.com/feed/" rel="noopener nofollow"><img src="https://camo.githubusercontent.com/52b5d632516e1714252b6e4dd3e53efd1b6747ca5200a9f9be5c35d9bb07e5cb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e6b6564496e2d626c75653f7374796c653d666c61742d737175617265266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465266c696e6b3d68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f64616e69656c652d70657273652f" alt="Linkedin Badge" data-canonical-src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&amp;logo=Linkedin&amp;logoColor=white&amp;link=https://https://www.linkedin.com/in/joao-ralph-castaldi/" style={ { width: '90px' } } /></a> { '' }
      <a href={ `https://api.whatsapp.com/send?phone=55619982423750&text=${textWhatsApp}` } target="_blank" rel='noopener noreferrer nofollow'><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt='whatsappImg' style={ { width: '100px' } } /></a>
    </address>);
};

export default ContactMe;
