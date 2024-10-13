interface Motivações{
    ação: number,
    social: number,
    maestria: number,
    conquista: number,
    imersão: number,
    criatividade: number,
} 
type Perfil = 'Acrobata' | 'Jardineiro' | 'Caçador' | 'Brigão' | 'Gladiador' | 'Ninja' | 'Caçador de Recompensas'| 'Arquiteto'|'Bardo';
interface Eixo{
    nome: string,
    PerfisCorrespondentes: Perfil[]
}

class SelectGameAPI {
    Resultado: Motivações = {} as Motivações;
    Eixos: Eixo[] = [
        {nome: 'Ação', PerfisCorrespondentes: ['Acrobata','Caçador','Brigão','Gladiador','Ninja']},
        {nome: 'Social', PerfisCorrespondentes: ['Jardineiro','Caçador de Recompensas','Arquiteto','Bardo']},
        {nome: 'Maestria', PerfisCorrespondentes: ['Gladiador','Caçador de Recompensas','Arquiteto']},
        {nome: 'Conquista', PerfisCorrespondentes: ['Caçador','Brigão','Gladiador','Ninja']},
        {nome: 'Imersão', PerfisCorrespondentes: ['Acrobata','Jardineiro','Caçador de Recompensas','Arquiteto','Bardo']},
        {nome: 'Criatividade', PerfisCorrespondentes: ['Jardineiro','Arquiteto','Bardo']},
    ];
    Perfis(eixo: String){

        return this.Eixos.find((e) => e.nome === eixo)
        ?.PerfisCorrespondentes.toString()
        .replace(/,/g, ',\n');    }
    get Categorias(){

        return Object.keys(this.Resultado);
    }
    constructor() {
        

    }
}

let selectGameAPI = new SelectGameAPI();
export default selectGameAPI;