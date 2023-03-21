import Boweman from '../Boweman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('test new error name', () => {
  expect(() => { new Boweman('R') }).toThrowError('Недопустима длинна имени, должно быть строка, min - 2 символа, max - 10');
});
test('test new error type', () => {
  expect(() => { new Boweman('Robin', 'Bowerman') }).toThrowError('Тип должен быть один из типов (строка): Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('test create Boweman', () => {
  const character = new Boweman('Robert');
  const expected = {
    name: 'Robert',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
    type: "Boweman"
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

test('test levelUp method', () => {
  const character = new Boweman('Aleksandr');
  character.levelUp()
  const expected = {
    name: 'Aleksandr',
    level: 2,
    health: 100,
    type: 'Boweman',
    attack: 30,
    defence: 30,
  };

  expect(character).toEqual(expected);
});

test('test new Error levelUp method', () => {
  const character = new Boweman('Aleksandr');
  character.health = 0;

  expect(() => {character.levelUp()}).toThrowError('нельзя повысить левел умершего');
});

test('test damage method', () => {
  const character = new Boweman('Aleksandr');
  character.damage(40)
  const expected = {
    name: 'Aleksandr',
    level: 1,
    health: 70,
    attack: 25,
    defence: 25,
    type: "Boweman"
  };

  expect(character).toEqual(expected);
});

test('test new error damage method', () => {
  const character = new Boweman('Aleksandr');
  character.health = 0;

  expect(() => {character.damage(50)}).toThrowError('нельзя убить убитого');
});