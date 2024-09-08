class novoHeroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque;

        switch(this.tipoHeroi.toLowerCase()) {
            case "guerreiro":
                ataque = "uma espada.";
                break;
            case "mago":
                ataque = "magia.";
                break;
            case "monge":
                ataque = "artes marciais.";
                break;
            case "ninja":
                ataque = "shurikens.";
                break;
            default:
                ataque = "um golpe desconhecido.";
        }

        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}

const guerreiro = new novoHeroi("Garret", "28", "Guerreiro");
guerreiro.atacar();

const mago = new novoHeroi("Garret", "52", "Mago");
mago.atacar();

const monge = new novoHeroi("Elmar", "98", "Monge");
monge.atacar();

const ninja = new novoHeroi("Dasbald", "34", "Ninja");
ninja.atacar();