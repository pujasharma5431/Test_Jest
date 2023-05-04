// const axios = require('axios');

// describe('PATCH /objects', () => {
//   let userData;

//   beforeEach(() => {
//     userData = {
//       id: '1',
//       name: 'Google Pixel 6 Pro',
//       data: {
//         color: 'Cloudy White',
//         capacity: '5TB'
//       }
//     };
//   });

//   it('should create a new user', async () => {
//     const { status, data } = await axios.patch('https://api.restful-api.dev/objects', userData);

//     expect(status).toBe(200);
//     expect(data).toMatchObject({
//       name: userData.name,
//       data: userData.data
//     });
//     expect(data.id).toBeDefined();
//   });
// });
// f