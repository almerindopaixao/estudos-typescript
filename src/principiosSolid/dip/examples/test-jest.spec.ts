describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });

  it('Should split tests', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBe(null);
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
  });
});

describe('Object Values', () => {
  it('should test jest assertion with objects', () => {
    const person = {
      name: 'Almerindo',
      age: 19,
    };

    const anotherPerson = Object.assign({}, person);

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 19);
    expect(person).not.toHaveProperty('lastname');

    expect(person.name).toBe('Almerindo');
  });
});
