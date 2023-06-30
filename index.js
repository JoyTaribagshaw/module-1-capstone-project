const navtext = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.menubar');
const closeBtn = document.querySelector('.closebtn');
const menuLists = document.querySelectorAll('.menu-list');
const featureSection = document.querySelector('.feature-section');
const seeMoreBtn = document.querySelector('.more-button');
const spanMore = document.querySelector('.more-span');
let twoSpeakers = [];
let seeMore = false;
hamburger.addEventListener('click', () => {
  navtext.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navtext.style.display = 'none';
});

for (let i = 0; i < menuLists.length; i += 1) {
  menuLists[i].addEventListener('click', () => {
    navtext.style.display = 'none';
  });
}

const speakers = [
  {
    image: 'Assets/AichaEvans.jpg',
    name: 'Aisha Evans',
    profession: 'CEO at Zoox',
    description: 'Aicha Sar Evans is the Chief Executive Officer and Director of Zoox., Inc. (Amazon’s self-driving car subsidiary) since 2019. The African-American female is the first of her kind to be the CEO of an autonomous vehicle technology company. ',
  },
  {
    image: 'Assets/AlissaAbdullah.jpg',
    name: 'Alissa Abdulah',
    profession: 'SVP at Mastercard',
    description: 'She is a highly skilled information security expert that has held supervisory positions at some of the world’s most distinguished companies, (some of which include Stryker and Xerox).',
  },
  {
    image: 'Assets/DaraTreseder.jpg',
    name: 'Dara Treseder',
    profession: 'Chief Marketing Officer at Autodesk',
    description: 'Dara Treseder is a leading marketing executive that has made a name for herself by pioneering various successful initiatives in some of the world’s most prestigious brands.',
  },
  {
    image: 'Assets/ElizabethTheophile.jpg',
    name: 'Elizabeth Theophile',
    profession: 'CTTO at Novartis',
    description: 'Elizabeth Theophille is another black icon making waves in the tech industry. She is currently serving as Novartis AG’s Chief Technology Transformation Officer and on the board of 8×8, Inc., (a voice-over IP company).',
  },
  {
    image: 'Assets/FernJohnson.jpg',
    name: 'Fern Johnson',
    profession: 'CTO at PepsiCo',
    description: 'Fern Johnson is the Chief Technology Officer and Vice President, Infrastructure and Global IT Operations at PepsiCo.',
  },
  {
    image: 'Assets/JackyWright.jpg',
    name: 'Jacky Wright',
    profession: 'CTO at McKinsey',
    description: 'Jacky Wright is McKinsey’s first-ever Chief Technology and Platform Officer. She was offered the role in 2022 because of her invaluable years of experience in technology for over two decades.',
  },
];

function createspeakers() {
  featureSection.innerHTML = '';
  const speakersElement = twoSpeakers.map((speaker) => {
    const element = `<div class="feature">
  <div>
  <img src="${speaker.image}" alt="" class="speaker-img"/>
</div>
<div>
  <h5 class="name">${speaker.name}</h5>
  <h5 class="profession">${speaker.profession}</h5>
  <p class="description">${speaker.description}</p>
</div>
</div>`;
    return element;
  }).join('');
  featureSection.insertAdjacentHTML('beforeend', speakersElement);
}

function determineScreenSize() {
  return window.innerWidth < 768;
}

window.addEventListener('resize', () => {
  createTwoSpeakers();
});
window.addEventListener('DOMContentLoaded', () => {
  createTwoSpeakers();
});

function createTwoSpeakers() {
  twoSpeakers = speakers.slice();
  if (determineScreenSize()) {
    twoSpeakers = speakers.slice(0, 2);
  }
  createspeakers();
}

seeMoreBtn.addEventListener('click', () => {
  seeMore = !seeMore;
  twoSpeakers = seeMore ? speakers.slice() : speakers.slice(0, 2);
  createspeakers();
  spanMore.textContent = seeMore ? 'Less' : 'More';
});