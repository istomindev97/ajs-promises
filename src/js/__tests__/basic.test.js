import handler from '../app';

test('should return sorted array based on the order', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level'];
  const result = handler(obj, order);

  expect(result).toEqual([
    ['name', 'мечник'],
    ['level', 2],
    ['attack', 80],
    ['defence', 40],
    ['health', 10],
  ]);
});

test('should handle empty order array', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = [];
  const result = handler(obj, order);

  expect(result).toEqual([
    ['attack', 80],
    ['defence', 40],
    ['health', 10],
    ['level', 2],
    ['name', 'мечник'],
  ]);
});

test('should handle empty object', () => {
  const obj = {};
  const order = ['name', 'level'];
  const result = handler(obj, order);

  expect(result).toEqual([]);
});

test('should handle object with properties not in order', () => {
  const obj = {
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level'];
  const result = handler(obj, order);

  expect(result).toEqual([
    ['attack', 80],
    ['defence', 40],
  ]);
});

test('should handle properties in object but not in order', () => {
  const obj = {
    attack: 80,
    level: 2,
  };
  const order = ['level'];
  const result = handler(obj, order);

  expect(result).toEqual([
    ['level', 2],
    ['attack', 80],
  ]);
});

test('should handle order array with properties not in object', () => {
  const obj = {
    attack: 80,
  };
  const order = ['level', 'name'];
  const result = handler(obj, order);

  expect(result).toEqual([
    ['attack', 80],
  ]);
});
