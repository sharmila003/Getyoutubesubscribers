const request = require("supertest");
const app = require("./app");

describe("Test the main page", () => {
  test("Respond with a message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Get YouTube-subscribers");
  });
});