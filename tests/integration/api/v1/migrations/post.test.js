import database from "infra/database.js";

beforeAll(async () => {
  await cleanDatabase();
});

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const url = "http://localhost:3000/api/v1/migrations";

  const response = await fetch(url, {
    method: "POST",
  });
  expect(response.status).toBe(201);
  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);

  const response2 = await fetch(url, {
    method: "POST",
  });
  expect(response2.status).toBe(200);
  const responseBody2 = await response2.json();
  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);
});
