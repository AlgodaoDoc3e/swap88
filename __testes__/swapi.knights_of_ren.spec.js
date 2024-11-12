const request = require('supertest');
test('Deve retornar erro 404 ao buscar pelos Cavaleiros de Ren, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/knights_of_ren/');
   
    expect(resposta.status).toBe(404);
});
