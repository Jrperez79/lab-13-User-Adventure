export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        stamina: 50,
        goals: 0, 
        completed: {}
    };
}

export function getUser() {
    return JSON.parse(localStorage.getItem('USER'));
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    return localStorage.setItem('USER', stringyUser);
}
