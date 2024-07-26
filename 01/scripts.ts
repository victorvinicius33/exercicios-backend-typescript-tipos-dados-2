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
