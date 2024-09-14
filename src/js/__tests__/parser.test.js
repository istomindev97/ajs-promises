import json from '../parser';

 test('should convert ArrayBuffer to string', async () => {
    const data = new Uint16Array('test'.split('').map(c => c.charCodeAt(0)));
    
    const result = await json(data.buffer);
    
    expect(result).toBe('test');
  });
