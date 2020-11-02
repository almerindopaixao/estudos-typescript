import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Almerindo',
      'Paixão',
      '123.456.456-78',
    );
    expect(sut).toHaveProperty('firstName', 'Almerindo');
    expect(sut).toHaveProperty('lastName', 'Paixão');
    expect(sut).toHaveProperty('cpf', '123.456.456-78');
  });

  it('Should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer(
      'Almerindo',
      'Paixão',
      '123.456.456-78',
    );
    expect(sut.getName()).toBe('Almerindo Paixão');
    expect(sut.getIDN()).toBe('123.456.456-78');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Amazon', '222.2222/22');
    expect(sut).toHaveProperty('name', 'Amazon');
    expect(sut).toHaveProperty('cnpj', '222.2222/22');
  });

  it('Should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Amazon', '222.2222/22');
    expect(sut.getName()).toBe('Amazon');
    expect(sut.getIDN()).toBe('222.2222/22');
  });
});
