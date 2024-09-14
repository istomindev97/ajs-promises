import GameSavingLoader from '../loader';

jest.mock('../reader', () => () => Promise.reject(new Error('Test Error')));

test('GameSavingLoader.load logs error', async () => {
  console.error = jest.fn();

  await GameSavingLoader.load();

  expect(console.error).toHaveBeenCalledWith('Возникла ошибка: Error: Test Error');
});
