const axios = require('axios');
const baseUrl = "https://api.publicapis.org/entries";

describe("GET /entries", () => {
  it('should return a list of entries', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
    expect(response.data.entries).toBeDefined();
    expect(response.data.entries.length).toBeGreaterThan(0);
    expect(response.data.entries.some(entry => entry.Category.includes("Animals"))).toBe(true);
  });
});
