const axios = require('axios');

describe('POST /objects', () => {
  it('should create a new user', async () => {
    const userData = {
      id: '7',
      name: 'ASUS',
      data: {
        color: 'Red',
        capacity: '1TB'
      }
    };
    const response = await axios.post('https://api.restful-api.dev/objects', userData);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      name: userData.name,
      data: userData.data
    });
    expect(response.data.id).toBeDefined();
  });
});
