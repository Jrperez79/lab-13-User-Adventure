// IMPORT MODULES under test here:
import { renderSection } from '../match/matchUtils.js';

const test = QUnit.test;

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

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<section>
    <div>FC Barcelona</div>
    <img src="">
    <form>
        <div>
                You are playing against the might FC Barcelona!
            </div>
        <label>
            <div>Park the bus!</div>
            <input type="radio" value="defend" name="choices">
        </label>
        <label>
            <div>Attack!</div>
            <input type="radio" value="attack" name="choices">
        </label>
        <label>
            <div>Hold the ball and keep possession</div>
            <input type="radio" value="possession" name="choices">
        </label>
        <button>Submit</button>
        </form>
    </section>`.replace(/\s/g, '');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const el = renderSection(barcelona);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(el.outerHTML.replace(/\s/g, ''), expected);
});
