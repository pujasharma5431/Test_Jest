// Reference: https://api.publicapis.org/entries


const axios = require('axios');

test('Fetch entries', async () => {
  const response = await axios.get('https://api.publicapis.org/entries');
  expect(response.status).toBe(200); // expect HTTP response status code to be 200
  expect(response.data).toHaveProperty('count'); // expect the response data to have count property
  const entries = response.data.entries;
  for(let i = 0; i < entries.length; i++) {
    expect(entries[i]).toHaveProperty('API');
    expect(entries[i]).toHaveProperty('Description');
    expect(entries[i]).toHaveProperty('Auth');
    expect(entries[i]).toHaveProperty('HTTPS');
    expect(entries[i]).toHaveProperty('Cors');
    expect(entries[i]).toHaveProperty('Link');
    expect(entries[i]).toHaveProperty('Category');
  }
}, 30000);
