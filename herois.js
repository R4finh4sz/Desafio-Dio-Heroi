// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;

    // Verificando o tipo do herói e definindo o ataque
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "desconhecido";
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias da classe Heroi
const mago = new Heroi("Mago Azul", 25, "mago");
const guerreiro = new Heroi("Guerreiro Valente", 30, "guerreiro");
const monge = new Heroi("Monge Sábio", 28, "monge");
const ninja = new Heroi("Ninja Furtivo", 22, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();