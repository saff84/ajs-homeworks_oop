import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('test create Bowerman', () => {
  const character = new Bowerman('R');
  console.log(character)
  const expected = {
    name: 'R',
    level: 1,
    health: 100,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('test create Swordsman', () => {
  const character = new Swordsman('Jade');
  const expected = {
    name: 'Jade',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('test create Magician', () => {
  const character = new Magician('Merlin');
  const expected = {
    name: 'Merlin',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});

test('test create Undead', () => {
  const character = new Undead('Maklaud');
  const expected = {
    name: 'Maklaud',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('test create Zombie', () => {
  const character = new Zombie('Shon');
  const expected = {
    name: 'Shon',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('test create Daemon', () => {
  const character = new Daemon('Aid');
  const expected = {
    name: 'Aid',
    level: 1,
    health: 100,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});