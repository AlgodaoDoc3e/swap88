const request = require('supertest');

test('Deve visualizar informações do veículo T-16 skyhopper', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/6/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('T-16 skyhopper');
    expect(resposta.body.model).toBe('T-16 skyhopper');
    expect(resposta.body.manufacturer).toBe('Incom Corporation');
    expect(resposta.body.cost_in_credits).toBe('14500');
    expect(resposta.body.length).toBe('10.4 ');
    expect(resposta.body.max_atmosphering_speed).toBe('1200');
    expect(resposta.body.crew).toBe('1');
    expect(resposta.body.passengers).toBe('1');
    expect(resposta.body.cargo_capacity).toBe('50');
    expect(resposta.body.consumables).toBe('0');
    expect(resposta.body.vehicle_class).toBe('repulsorcraft');

    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBe(0);  // Verifica que não há pilotos

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBe(1);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');

    expect(resposta.body.created).toBe('2014-12-10T16:01:52.434000Z');
    expect(resposta.body.edited).toBe('2014-12-20T21:30:21.665000Z');
    expect(resposta.body.url).toBe('https://swapi.dev/api/vehicles/6/');
});
