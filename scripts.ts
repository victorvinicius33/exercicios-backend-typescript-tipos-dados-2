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

//02

type Adress = {
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
  address?: Adress
}

const signUp = (userData: User): User => {
  const bd = readFile() as User[];

  bd.push(userData);

  writeFile(bd);

  return userData;
}

const listUsers = (): User[] => {
  return readFile() as User[];
}

const victor = signUp({
  name: 'Victor',
  email: 'victor@gmail.com',
  cpf: '12345-678',
  address: {
    cep: '12345-678',
    street: 'Rua dos bobos',
    district: 'Centro',
    city: 'Recife'
  }
})

const bd = readFile();
console.log(victor, bd);