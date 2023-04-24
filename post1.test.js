
// Reference: https://reqres.in/api/users



const axios = require('axios');

describe('POST /objects', () => {
  const apiUrl = 'https://reqres.in/api/users';

  it('should create a new object', async () => {
    const newObject = {
      id: 7,
      email: 'george.bluth1@reqres.in',
      first_name:"Puja",
      last_name:"Sharma",
 
      avatar:"https://reqres.in/img/faces/1-image.jpg"
    };

    try {
      const response = await axios.post(apiUrl, newObject);

      expect(response.status).toBe(201);
      expect(response.data.id).toBe(newObject.id);
      expect(response.data.email).toBe(newObject.email);
      expect(response.data.first_name).toBe(newObject.first_name);
      expect(response.data.last_name).toBe(newObject.last_name);
      expect(response.data.last_name1).toBe(newObject.last_name1);
      expect(response.data.avatar).toBe(newObject.avatar);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, 30000); // <-- increase timeout to 10000 ms
});
