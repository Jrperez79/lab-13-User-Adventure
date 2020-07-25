// different options for path to take
const barcelona = {
    id: 'barcelona',
    title: 'FC Barcelona',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    description: `
        You are playing against the might FC Barcelona!
    `,
    choices: [{
        id: 'defend',
        description: 'Park the bus!',
        result: `
            You know your team may not have the talent that Barcelona has so you have decided to play it safe.  No chance to score a goal, but you were able conserve energy, thus +10 for you stamina.
        `,
        stamina: +10,
        goals: 0,
    }, {
        id: 'attack',
        description: 'Attack!',
        result: `
            You don't want to wait and see how your opponent will play. You want to attack and score at all costs! But Barca is to good.  You don't score any goals but you do waste a lot of energy. Stamina -40.
        `,
        stamina: -40,
        goals: 0
    }, {
        id: 'possession',
        description: 'Hold the ball and keep possession',
        result: `
            You want to keep the ball out of your opponents possession. You hold the ball, not wasting much energy, looking for an opportunity to score, and guess what, you shocked Barca and put one in the back of the net. -10 stamina and 1 goal scored.
        `,
        stamina: -10,
        goals: 1
    }]
};

// Various dragons you will have to take action with.
const manchesterUnited = {
    id: 'manchester',
    title: 'Manchester United',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '',
    description: `
        You are playing against Manchester United. Home of one of the most famous football clubs in the world!
    `,
    choices: [{
        id: 'defend',
        description: 'Park the bus!',
        result: `
            You know your team may not have the talent that the opponent has so you have decided to play it safe.  It is always tough to score when you park the bus, but you found a way and counter-attacked and scored! -35 stamina, but 1 goal scored. 
        `,
        stamina: -35,
        goals: 1
    }, {
        id: 'attack',
        description: 'Attack!',
        result: `
            You don't want to wait and see how your opponent will play. You want to attack and score at all costs! Man U has to good of a defense. You are unable to score.  -25 for your stamina.
        `,
        stamina: -25,
        goals: 0
    }, {
        id: 'possession',
        description: 'Hold the ball and keep possession',
        result: `
            You want to keep the ball out of your opponents possession. You hold the ball, not wasting much energy, looking for an opportunity to score. You don't score and it impacts your stamina -15.
        `,
        stamina: -15,
        goals: 0
    }]
};

// What is inside the quests is below
const seattleFlounders = {
    id: 'seattle',
    title: 'Seattle Flounders',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '',
    description: `
        You have chosen to play against the worst team in the whole world. Your victory is absolutely no matter how you decide to play against them!  
    `,
    choices: [{
        id: 'defend',
        description: 'Park the bus!',
        result: `
            Since Seattle is so bad, they make huge mistakes when you they try to attack. Thus you are able to counter-attack and score 2 goals!
        `,
        stamina: 0,
        goals: 2
    }, {
        id: 'attack',
        description: 'Attack!',
        result: `
            When you decide to set you game strategy to attack against Seattle, they crumble under the pressure.  You scored 3 goals with this attacking strategy!
        `,
        stamina: 0,
        goals: 3
    }, {
        id: 'possession',
        description: 'Hold the ball and keep possession',
        result: `
           Seattle is so bad, you can just hold possession and wait for them to make mistakes.  Thus you scored a 1 goal!
        `,
        stamina: 0,
        goals: 1
    }]
};

const games = [
    barcelona, 
    manchesterUnited,
    seattleFlounders
];

export default games;
