import games from '../data.js';
import { findById, renderSection } from './questUtils.js';


const main = document.querySelector('main');

// placeholder for query params
const params = new URLSearchParams(window.location.search);
const nextButton = document.querySelector('#next');

const gameId = params.get('id');

const gameData = findById(games, gameId);

const sectionEl = renderSection(gameData);

nextButton.addEventListener('click', () => {
    window.location = '/map'; 
});

main.append(sectionEl);

