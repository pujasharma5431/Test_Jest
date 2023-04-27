// Reference: https://api.restful-api.dev/objects

const axios = require("axios");

const baseUrl = "https://api.restful-api.dev/objects/";

describe("GET /objects", () => {
  for (let id = 1; id <=1; id++) {
    it(`should return a data  for ID ${id}`, async () => {
      const response = await axios.get(`${baseUrl}${id}`);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('name');
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('color');
      expect(response.data.data).toHaveProperty('capacity');
  
    });
  }
});

