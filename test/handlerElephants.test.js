const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando em 80%', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testando em 90%', () => {
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).not.toContain('Monday');
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testando 100%', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('Kuro')).toBeNull();
  });
});
