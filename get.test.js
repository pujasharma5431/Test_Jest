const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

describe("GET /posts", () => {
  for (let id = 1; id <= 100; id++) {
    it(`should return a 200 status code for ID ${id}`, async () => {
      const response = await axios.get(`${baseUrl}${id}`);
      expect(response.status).toBe(200);
    });
  }
});
