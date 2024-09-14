import read from '../reader';

  test('should convert string to ArrayBuffer', async () => {
    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    const result = await read();
    const bufferView = new Uint16Array(result);

    expect(bufferView.length).toBe(data.length);
    for (let i = 0; i < data.length; i++) {
      expect(bufferView[i]).toBe(data.charCodeAt(i));
    }
  });
