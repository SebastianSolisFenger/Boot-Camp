const hamburgerBtn = document.querySelector('.hamb-toggle');
const mainMenu = document.querySelector('.menu-box');
// const ulList = document.querySelector(".list");

hamburgerBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
  // ulList.classList.toggle("activeV");
});

const proffesionals = [
  {
    image: '/IMG/proffesionals/Quincy-Larson-photo.jpg',
    name: 'Quincy Larson',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: '/IMG/proffesionals/Anita.jpg',
    name: 'Anita',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image:
      '/IMG/proffesionals/Carol_Shaw_Holding_Gold_River_Raid_Cartridge_(cropped).jpg',
    name: 'Carol Shaw',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: '/IMG/proffesionals/Goldwasser.jpg',
    name: 'Gold wasser',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: '/IMG/proffesionals/color-code.jpg',
    name: 'SinaColor Code',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: '/IMG/proffesionals/midu-dev.jpg',
    name: 'Mide dev',
    position: 'Software Engineer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
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
