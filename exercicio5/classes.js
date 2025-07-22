// Classe base
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Classe derivada
class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade); // chama o construtor da classe Pessoa
    this.curso = curso;
  }

  estudar() {
    console.log(`${this.nome} está estudando ${this.curso}.`);
  }

  apresentar() {
    // sobrescreve apresentar() para incluir o curso
    console.log(`Sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

// Testes
const pessoa1 = new Pessoa("João", 30);
const aluno1 = new Aluno("Ana", 22, "Engenharia");

pessoa1.apresentar(); // da classe Pessoa
aluno1.apresentar();  // sobrescrita na classe Aluno
aluno1.estudar();     // método exclusivo do Aluno
