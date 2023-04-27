const axios = require('axios');

describe('PUT /objects', () => {
  it('should create a new user', async () => {
    const userData = {
      id: '7',
      name: 'ASUS',
      data: {
       year: 2019,
       country: 'nepal'
      }
    };
    const response = await axios.post('https://api.restful-api.dev/objects', userData);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      name: userData.name,
      data: userData.data
    });
    console.log(response.data)
    expect(response.data.id).toBeDefined();
  });
});
