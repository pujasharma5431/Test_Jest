// https://catfact.ninja/fact



const axios = require('axios');

test('Fetch a random Chuck Norris joke', async () => {
  const response = await axios.get('https://catfact.ninja/fact');
  
  expect(response.status).toBe(200); // expect HTTP response status code to be 200
  expect(response.data).toHaveProperty('fact'); // expect the response data to have 'value' property
  expect(typeof response.data.length).toBe('number'); // expect the value of 'value' property to be a string
});
