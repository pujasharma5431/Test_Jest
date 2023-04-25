// https://dummyjson.com/products

const axios = require('axios');
const baseUrl = "https://dummyjson.com/products";

describe("GET /products", () => { 
  for (let id = 1; id <= 5; id++) {
    it(`should return category for product ${id}`, async () => {
      const response = await axios.get(`${baseUrl}/${id}`);
expect(response.status).toBe(200);
      expect(response.data.category).toBe('smartphones');
      expect(response.data.price).toBeGreaterThan(100);
    });
  }
},
)

