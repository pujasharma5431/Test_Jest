// https://api.chucknorris.io/jokes/random


const axios = require('axios');

test('Fetch a random Chuck Norris joke', async () => {
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  
  expect(response.status).toBe(200); // expect HTTP response status code to be 200
  expect(response.data).toHaveProperty('value'); // expect the response data to have 'value' property
  expect(typeof response.data.value).toBe('string'); // expect the value of 'value' property to be a string
});
