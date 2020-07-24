import games from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.stamina <= 0) {
    alert('Game Over!');
    alert(`You have scored ${user.goals} goals.`);
    window.location('../index.html');
}

const section = document.querySelector('section');

let completedGames = 0;

for (let i = 0; i < games.length; i++) {
    const game = games[i];

    if (user.completed[game.id]) {
        completedGames++;
    }
}

if (completedGames === games.length) {
    alert('You have won the game.  You have this many goals: ' + user.goals);
}

for (let i = 0; i < games.length; i++) {
    const game = games[i];

    if (user.completed[game.id]) {
        const span = document.createElement('span');
        span.textContent = game.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {
        const a = document.createElement('a');
        a.textContent = game.title;
        a.href = '/match/?id=' + game.id;

        section.append(a);
    }
}
