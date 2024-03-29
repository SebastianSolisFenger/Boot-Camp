const hamburgerBtn = document.querySelector('.hamb-toggle');
const mainMenu = document.querySelector('.menu-box');

hamburgerBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});

const proffesionals = [
  {
    image: './IMG/proffesionals/Quincy-Larson-photo.jpg',
    name: 'Quincy Larson',
    position: 'Software Engineer & founder of freeCodeCamp.org.',
    about:
      'Founded freeCodeCamp.org, a community of millions of people who learn to code together .',
  },
  {
    image: './IMG/proffesionals/Anita.jpg',
    name: 'Anita',
    position: 'American computer scientist',
    about:
      'She founded the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing.',
  },
  {
    image:
      './IMG/proffesionals/Carol_Shaw_Holding_Gold_River_Raid_Cartridge_(cropped).jpg',
    name: 'Carol Shaw',
    position: 'Video game designer',
    about:
      'One of the first female game designers and programmers in the video game industry.',
  },
  {
    image: './IMG/proffesionals/Goldwasser.jpg',
    name: 'Shafi Goldwasser ',
    position: 'Software Engineer',
    about:
      'Laid the complexity-theoretic foundations for the science of cryptography',
  },
  {
    image: './IMG/proffesionals/color-code.jpg',
    name: 'Sina Jazayeri',
    position: 'Software Engineer',
    about:
      '16+ years of experience as an SWE focused on architecture, user experience, testability, and resilience.',
  },
  {
    image: './IMG/proffesionals/midu-dev.jpg',
    name: 'Midudev',
    position: 'Software Engineer',
    about:
      'Development JAVASCRIPT, FULL STACK with React, Node.js, HTML, CSS, Tailwind, Next.js and Deno.',
  },
];

const profContainer = document.getElementById('proffesionals-container');
const viewMoreBtn = document.querySelector('.more-prof');

profContainer.innerHTML = proffesionals
  .map(
    (proffesional, index) => `
<div class="proffesional ${index > 1 ? 'hidden-boxes-mobile' : ''} ">
<div class="proffesional-photo-container">
<img src="${proffesional.image}" alt="${proffesional.name}">
</div>
<div class="proffesional-info">
<h3>${proffesional.name}</h3>
<span>${proffesional.position}</span>
<p>${proffesional.about}</p>
</div>
</div>
`,
  )
  .join('');

viewMoreBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const contenedor = document.getElementById(
    'proffesionals-container',
  ).children;
  for (let i = 2; i < contenedor.length; i += 1) {
    contenedor[i].classList.toggle('hidden-boxes-mobile');
  }
});
