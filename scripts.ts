//01

const fs = require('fs');

const readFile = (): unknown => {
  return JSON.parse(fs.readFileSync('../exercicios-backend-typescript-tipos-dados-2/bd.json'));
}

const writeFile = (data: any): void => {
  fs.writeFileSync('../exercicios-backend-typescript-tipos-dados-2/bd.json', JSON.stringify(data));
}

const data = readFile() as string[];

data.push('Silva');
writeFile(data);

console.log(readFile());

//02 && 03

type Address = {
  cep: string,
  street: string,
  complement?: string,
  district: string,
  city: string
}

type User = {
  name: string,
  email: string,
  cpf: string,
  occupation?: string,
  address?: Address
}

const createUser = (userData: User): User => {
  const bd = readFile() as User[];

  bd.push(userData);

  writeFile(bd);

  return userData;
}

const listUsers = (): User[] => {
  return readFile() as User[];
}

const detailUser = (cpf: string): User => {
  const bd = readFile() as User[];
  const user = bd.find(user => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error('Usuário não encontrado!');
  }

  return user;
}

const updateUser = (cpf: string, data: User): User => {
  const bd = readFile() as User[];
  const user = bd.find(user => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error('Usuário não encontrado!');
  }

  Object.assign(user, data);

  console.log(bd);

  writeFile(bd);

  return data;
}

const victor = createUser({
  name: 'Victor',
  email: 'victor@gmail.com',
  cpf: '12345678901',
  address: {
    cep: '12345-678',
    street: 'Rua dos bobos',
    district: 'Centro',
    city: 'Recife'
  }
});

const deleteUser = (cpf: string): User => {
  const bd = readFile() as User[];
  const user = bd.find(user => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error('Usuário não encontrado!');
  }

  const deletingUser = bd.filter(user => {
    return user.cpf !== cpf
  });

  writeFile(deletingUser);

  return user;
}

const victorUser = detailUser('12345678901');

updateUser('12345678901', {
  name: 'Victor',
  email: 'victor@gmail.com',
  cpf: '12345678901',
  address: {
    cep: '12345-678',
    street: 'Rua dos bobos',
    district: 'Centro',
    city: 'Recife'
  }
});

console.log(deleteUser('12345678901'));

const bd = readFile();
console.log(victor, bd);


