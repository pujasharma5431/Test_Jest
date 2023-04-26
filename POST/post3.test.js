const axios = require('axios');

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const userData = {
     title:"Poo",
      body:"bare",
      userId:3,
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', userData);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(userData.title);
    expect(response.data.body).toBe(userData.body);
    expect(response.data.userId).toBe(userData.userId);
  });
});
