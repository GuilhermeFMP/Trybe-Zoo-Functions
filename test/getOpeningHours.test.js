const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste até 85%', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Teste até 95%', () => {
    const erro1 = 'The day must be valid. Example: Monday';
    const erro2 = 'The abbreviation must be \'AM\' or \'PM\'';
    const erro3 = 'The hour should represent a number';
    const erro4 = 'The minutes should represent a number';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(erro1);
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(erro2);
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(erro3);
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(erro4);
  });
  it('Teste até 100%', () => {
    const erro1 = 'The hour must be between 0 and 12';
    const erro2 = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(erro1);
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(erro2);
  });
});
