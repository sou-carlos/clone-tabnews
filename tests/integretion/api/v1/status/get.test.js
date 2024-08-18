test("GET to /api/v1/status should return 200", async () => {
  url = "http://localhost:3000/api/v1/status";
  const response = await fetch(url);
  expect(response.status).toBe(200);
});
