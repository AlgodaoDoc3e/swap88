const request = require('supertest');

test('Deve visualizar informações do personagem Darth Vader, quando buscar por uma pessoa existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/4/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Darth Vader');
    expect(resposta.body.height).toBe('202');
    expect(resposta.body.mass).toBe('136');
    expect(resposta.body.hair_color).toBe('none');
    expect(resposta.body.skin_color).toBe('white');
    expect(resposta.body.eye_color).toBe('yellow');
    expect(resposta.body.birth_year).toBe('41.9BBY');
    expect(resposta.body.gender).toBe('male');
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/1/');
    expect(resposta.body.species).toHaveLength(0);
    expect(resposta.body.vehicles).toHaveLength(0);
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships[0]).toBe('https://swapi.dev/api/starships/13/');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    expect(resposta.body.url).toBe('https://swapi.dev/api/people/4/');
});

test('Deve retornar erro 404 ao buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
});
