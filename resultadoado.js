import { leao } from "./LuisGuilhermeADO1.js";
const leao1 = new leao("luis");
const leao2 = new leao("lucas");



console.log("O leão 1 se chama "+leao1.nome);
leao1.comidas(8);
leao1.dormir(10);

///////////////////////

console.log("O leão 2 se chama "+leao2.nome);
leao2.comidas(1);
leao2.dormir(2);
