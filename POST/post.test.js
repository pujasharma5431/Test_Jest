
// https://api.restful-api.dev/objects

const axios = require('axios');

describe('POST /objects', () => {
  const apiUrl = 'https://api.restful-api.dev/objects';

  it('should create a new object', async () => {
    const newObject = {
      id: 14,
      name: 'John Doe',
      data: {
        Capacity: '1 GB',
        Screensize: 4.5,
      },
    };

    try {
      const response = await axios.post(apiUrl, newObject);

      expect(response.status).toBe(200);
      expect(response.data.id).toBeDefined();
      expect(response.data.name).toBe(newObject.name);
      expect(response.data.data.Capacity).toBe(newObject.data.Capacity);
      expect(response.data.data.Screensize).toBe(newObject.data.Screensize);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, 30000); // <-- increase timeout to 10000 ms
});
