import { getUser, setUser } from '../userUtils.js';

export function renderSection(game) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.textContent = game.title;

    const img = document.createElement('img');
    img.src = game.image;

    const form = document.createElement('form');
    const description = document.createElement('div');
    description.textContent = game.description;
    form.append(description);
    
    for (let i = 0; i < game.choices.length; i++) {
        const label = document.createElement('label');
        const labelDiv = document.createElement('div');
        const choice = game.choices[i];

        labelDiv.textContent = choice.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.value = choice.id;
        input.name = 'choices';

        label.append(labelDiv, input);
        form.append(label);
    }

    const button = document.createElement('button');

    button.textContent = 'Submit';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const choiceId = formData.get('choices');
        const results = findById(game.choices, choiceId);

        const user = getUser();

        user.goals += results.goals;
        user.stamina += results.stamina;
        user.completed[game.id] = true;

        setUser(user);

        const resultDiv = document.querySelector('#result');
        resultDiv.textContent = results.result;

        const nextButton = document.querySelector('#next');

        nextButton.classList.remove('hidden');

    });

    form.append(button);
    section.append(div, img, form);
    return section;
}

// double check this function works.
export function findById(array, id) { 
    return array.find(i => i.id === id); 
}
/*
export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id && Array.isArray(array)) {
            return id;
    }
        
}
*/
