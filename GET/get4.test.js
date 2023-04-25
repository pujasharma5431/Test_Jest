// Reference: https://api.publicapis.org/entries


const axios = require('axios');

test('Fetch entries', async () => {
  const response = await axios.get('https://api.publicapis.org/entries');
  expect(response.status).toBe(200); // expect HTTP response status code to be 200
  expect(response.data).toHaveProperty('count'); // expect the response data to have count property
},30000)