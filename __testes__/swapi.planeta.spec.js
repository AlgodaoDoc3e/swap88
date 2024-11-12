const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por Alderaan', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/2/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Alderaan');
    expect(resposta.body.rotation_period).toBe('24');
    expect(resposta.body.orbital_period).toBe('364');
    expect(resposta.body.diameter).toBe('12500');
    expect(resposta.body.climate).toBe('temperate');
    expect(resposta.body.gravity).toBe('1 standard');
    expect(resposta.body.terrain).toBe('grasslands, mountains');
    expect(resposta.body.surface_water).toBe('40');
    expect(resposta.body.population).toBe('2000000000');

    // Verifica os filmes em que Alderaan aparece
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    expect(resposta.body.films[1]).toBe('https://swapi.dev/api/films/6/');

    // Verifica os residentes de Alderaan
    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/5/');
    expect(resposta.body.residents[1]).toBe('https://swapi.dev/api/people/68/');
    expect(resposta.body.residents[2]).toBe('https://swapi.dev/api/people/81/');
});

test('Deve retornar erro 404 ao buscar por um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
