const request = require('supertest');

test('Deve visualizar informações da espécie Droid', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/2/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Droid');
    expect(resposta.body.classification).toBe('artificial');
    expect(resposta.body.designation).toBe('sentient');
    expect(resposta.body.average_height).toBe('n/a');
    expect(resposta.body.skin_colors).toBe('n/a');
    expect(resposta.body.hair_colors).toBe('n/a');
    expect(resposta.body.eye_colors).toBe('n/a');
    expect(resposta.body.average_lifespan).toBe('indefinite');
    expect(resposta.body.homeworld).toBeNull();
    expect(resposta.body.language).toBe('n/a');

    expect(resposta.body.people).toBeDefined();
    expect(resposta.body.people.length).toBeGreaterThan(0);
    expect(resposta.body.people[0]).toBe('https://swapi.dev/api/people/2/');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBe(6);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');

    expect(resposta.body.created).toBe('2014-12-10T15:16:16.259000Z');
    expect(resposta.body.edited).toBe('2014-12-20T21:36:42.139000Z');
    expect(resposta.body.url).toBe('https://swapi.dev/api/species/2/');
});
