test("GET to /api/v1/status should return 200", async () => {
  url = "http://localhost:3000/api/v1/status";
  const response = await fetch(url);
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
