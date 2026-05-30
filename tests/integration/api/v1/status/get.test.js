test("Get to api/v1/status Step 1 (One)", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

test("Get to api/v1/status Step 2 (Two)", async () => {
  // const response = await fetch("http://localhost:3000/api/v1/status");
  // Verifica se o EndPoint está respondendo
  // expect(response.status).toBe(200);
  // const result = await response.json();
  // Verifica se tem algo Definido
  // expect(result.versionPg).toBeDefined();
  // Verifica se retornou uma String
  // const dataType = typeof result.versionPg;
  // expect(dataType).toEqual("string");
});

test("Get to api/v1/status Step 3 (Three)", async () => {
  // const response = await fetch("http://localhost:3000/api/v1/status");
  // Verifica se o EndPoint está respondendo
  // expect(response.status).toBe(200);
  // const result = await response.json();
  // Verifica se tem algo Definido
  // expect(result.maxConections).toBeDefined();
  // Verifica se realmente é do tipo Number
  // expect(typeof result.maxConections).toBe("number");
  // Verifica se é um número válido e falha em casos de NaN , null, undefined
  // expect(Number.isFinite(result.maxConections)).toBe(true);
});

test("Get to api/v1/status Step 4 (Four)", async () => {
  // const response = await fetch("http://localhost:3000/api/v1/status");
  // Verifica se o EndPoint está respondendo
  // expect(response.status).toBe(200);
  // const result = await response.json();
  // Verifica se tem algo Definido
  // expect(result.usedConections).toBeDefined();
  // Verifica se realmente é do tipo Number
  // expect(typeof result.usedConections).toBe("number");
  // Verifica se é um número válido e falha em casos de NaN , null, undefined
  // expect(Number.isFinite(result.usedConections)).toBe(true);
});
