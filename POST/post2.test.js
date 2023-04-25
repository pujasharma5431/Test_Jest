
// Reference: https://goweather.herokuapp.com/weather/%7Bcity%7D



const axios = require('axios');

describe('POST /objects', () => {
  const apiUrl = 'https://goweather.herokuapp.com/weather/%7Bcity%7D';

  it('should create a new weather', async () => {
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
    
      expect(response.data.avatar).toBe(newObject.avatar);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, 30000); // <-- increase timeout to 10000 ms
});
