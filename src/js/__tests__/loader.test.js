import GameSavingLoader from '../loader';

test('should load and parse data correctly', async () => {
  try {
    const result = await GameSavingLoader.load();

    const expectedResult = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000
      }
    };
    expect(result).toEqual(expectedResult);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }

});
