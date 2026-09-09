export class Leao {
    nome;
    comida;
    sono;

    constructor(pNome) {
        this.nome = pNome;
    }

    comer(pComer) {
        if (pComer >= 2) {
            console.log("Parabéns, você está bem alimentado");
            this.comida = pComer;
        }
        else {
            console.log("Que pena, preciso de comida");
        }
    }

    dormir(hSono) {
        if (hSono >= 5) {
            console.log("Dormiu bem, que legal");
            this.sono = hSono;
        }
        else {
            console.log("Que pena, preciso de mais horas de sono");
        }
    }
}