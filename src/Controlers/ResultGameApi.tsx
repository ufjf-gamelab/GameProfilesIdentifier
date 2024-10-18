
type Motivações = {ação:number, social : number, maestria : number, conquista : number, imersão : number, criatividade : number};

class Perfil{
    nome: string;
    #agradabilidade: number = 0;
    Inputs:Motivações = {ação:0, social : 0, maestria : 0, conquista : 0, imersão : 0, criatividade : 0};
    Pesos:Motivações = {ação:0, social : 0, maestria : 0, conquista : 0, imersão : 0, criatividade : 0};
    
    get agradabilidade(){
        const somaPonderada = 
            this.Inputs.ação * this.Pesos.ação +
            this.Inputs.social * this.Pesos.social + 
            this.Inputs.maestria * this.Pesos.maestria + 
            this.Inputs.conquista * this.Pesos.conquista + 
            this.Inputs.imersão * this.Pesos.imersão + 
            this.Inputs.criatividade * this.Pesos.criatividade;

        const somaPesos = 
            this.Pesos.ação +
            this.Pesos.social + 
            this.Pesos.maestria + 
            this.Pesos.conquista + 
            this.Pesos.imersão + 
            this.Pesos.criatividade;

        const mediaPonderada = somaPonderada / somaPesos;
        this.#agradabilidade = mediaPonderada;

        return this.#agradabilidade;
    }
    constructor(Inputs:Motivações,Pesos:Motivações, nome: string){
        this.nome = nome;
        this.Pesos = Pesos;
        this.Inputs = Inputs;
    }
}

class ResultApi {
    Inputs: Motivações = {ação:0, social : 0, maestria : 0, conquista : 0, imersão : 0, criatividade : 0};
    Agradabilidades: Perfil[] = [ //social  //ação // conquista // maestria // imersão // criatividade
        new Perfil(this.Inputs,{ação:89, social : 62, maestria : 70, conquista : 62, imersão : 21, criatividade : 64},'Acrobata'),
        new Perfil(this.Inputs,{ação:54, social : 85, maestria : 41, conquista : 89, imersão : 43, criatividade : 50},'Jardineiro'),
        new Perfil(this.Inputs,{ação:50+23, social : 35+26, maestria : 27+14, conquista : 23+17, imersão : 62+58, criatividade : 18+14},'Caçador'),
        new Perfil(this.Inputs,{ação:78+27, social : 71+78, maestria : 37+39, conquista : 27+66, imersão : 30+12, criatividade : 37+37},'Brigão'),
        new Perfil(this.Inputs,{ação:69+75, social : 76+76, maestria : 68+79, conquista : 78+74, imersão : 61+62, criatividade : 66+63},'Gladiador'),
        new Perfil(this.Inputs,{ação:74+50, social : 56+82, maestria : 69+76, conquista : 22+49, imersão : 27+43, criatividade : 15+22},'Ninja'),
        new Perfil(this.Inputs,{ação:61+75, social : 24+28, maestria : 28+31, conquista : 45+61, imersão : 70+63, criatividade : 61+62},'Caçador \n de Recompensas'),
        new Perfil(this.Inputs,{ação:15+23, social : 20+23, maestria : 63+35, conquista : 59+52, imersão : 59+59, criatividade : 51+51},'Arquiteto'),
        new Perfil(this.Inputs,{ação:35+34, social : 68+37, maestria : 52+32, conquista : 26+18, imersão : 62+67, criatividade : 66+69},'Bardo')
    ];
    
    get Nomes(){
        return this.Agradabilidades.map((p) => p.nome);
    }
    get Resultados(){
        // Array.prototype.sort.call(this.Agradabilidades, (a:Perfil, b:Perfil) => {
        //     return b.agradabilidade - a.agradabilidade;
        // } );
        return this.Agradabilidades
    }
    constructor() {
        
    }

    getTextoResultado(){
        const ordenados = this.Agradabilidades.slice()
       ordenados.sort((a:Perfil, b:Perfil) => {
            return b.agradabilidade - a.agradabilidade;
        });
        const nomeMaiorElemento = ordenados[0].nome;
        const nomeSegundoMaiorElemento = ordenados[1].nome;
        let resultado = {
            textoPrimeiro: '',
            textoSegundo: '',
            nomeMaiorElemento: '',
            nomeSegundoMaiorElemento: ''
        }
        resultado.nomeMaiorElemento = nomeMaiorElemento
        resultado.nomeSegundoMaiorElemento = nomeSegundoMaiorElemento
        switch (nomeMaiorElemento) {
            case 'Acrobata':
                resultado.textoPrimeiro = "Valoriza desafios solo, enfrentando missões difíceis com habilidade e prática ";
                break;
            case 'Jardineiro':
                resultado.textoPrimeiro = "Se dedica a acumular itens, recursos ou conquistas, visando completar coleções.";
                break;
            case 'Caçador':
                resultado.textoPrimeiro = "Busca intensa por ação e destruição, apreciando combates e explosões.";
                break;
            case 'Brigão':
                resultado.textoPrimeiro = "Jogadores que buscam ação rápida e combate tático em batalhas dinâmicas e interações diretas.";
                break;
            case 'Gladiador':
                resultado.textoPrimeiro = "Jogadores hardcore que buscam experiências épicas e jogabilidade dinâmica em MMOs e shooters.";
                break;
            case 'Ninja':
                resultado.textoPrimeiro = " Jogadores que enfrentam desafios e competem, focando em decisões estratégicas e ritmo rápido em jogos de luta.";
                break;
            case 'Caçador de Recompensas':
                resultado.textoPrimeiro = "Jogadores motivados por desafios e recompensas, que se dedicam a completar objetivos e coletar itens valiosos em ambientes competitivos";
                break;
            case 'Arquiteto':
                resultado.textoPrimeiro = "Gosta de criar e personalizar mundos e sistemas dentro do jogo, exercendo sua criatividade.";
                break;
            case 'Bardo':
                resultado.textoPrimeiro = "Prioriza a interação social, formando comunidades e colaborando com outros jogadores.";
                break;
        }
        return resultado;

    
}
}



export default ResultApi;