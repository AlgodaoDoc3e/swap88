const request = require('supertest');

test('Deve retornar erro 404 ao buscar por monstros espaciais, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/space_monsters/');
   
    expect(resposta.status).toBe(404);
});
