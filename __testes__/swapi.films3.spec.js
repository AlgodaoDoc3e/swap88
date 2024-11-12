const request = require('supertest');

test('Deve visualizar informações do filme Return of the Jedi', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/3/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('Return of the Jedi');
    expect(resposta.body.episode_id).toBe(6);
    expect(resposta.body.opening_crawl).toContain("Luke Skywalker has returned to");
    expect(resposta.body.director).toBe('Richard Marquand');
    expect(resposta.body.producer).toBe('Howard G. Kazanjian, George Lucas, Rick McCallum');
    expect(resposta.body.release_date).toBe('1983-05-25');
    
    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.characters.length).toBeGreaterThan(0);
    expect(resposta.body.characters[0]).toBe('https://swapi.dev/api/people/1/');

    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.planets.length).toBeGreaterThan(0);
    expect(resposta.body.planets[0]).toBe('https://swapi.dev/api/planets/1/');

    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships[0]).toBe('https://swapi.dev/api/starships/2/');

    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.vehicles[0]).toBe('https://swapi.dev/api/vehicles/8/');

    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBeGreaterThan(0);
    expect(resposta.body.species[0]).toBe('https://swapi.dev/api/species/1/');
});
