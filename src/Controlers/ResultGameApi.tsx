import { useState } from "react";

type Motivações = {ação:number, social : number, maestria : number, conquista : number, imersão : number, criatividade : number};
class Perfil{
    nome: string;
    #agradabilidade: number = 0;
    Inputs:Motivações = {ação:0, social : 0, maestria : 0, conquista : 0, imersão : 0, criatividade : 0};
    Pesos:Motivações = {ação:0, social : 0, maestria : 0, conquista : 0, imersão : 0, criatividade : 0};
    
    get agradabilidade(){
        
        this.#agradabilidade=  this.Inputs.ação * this.Pesos.ação +
                 this.Inputs.social * this.Pesos.social + 
                 this.Inputs.maestria * this.Pesos.maestria + 
                 this.Inputs.conquista * this.Pesos.conquista + 
                 this.Inputs.imersão * this.Pesos.imersão + 
                 this.Inputs.criatividade * this.Pesos.criatividade;
        return this.#agradabilidade
    }
    constructor(Inputs:Motivações,Pesos:Motivações, nome: string){
        this.nome = nome;
        this.Pesos = Pesos;
        this.Inputs = Inputs;
    }
}

class ResultApi {
    Inputs: Motivações = {ação:10, social : 10, maestria : 10, conquista : 10, imersão : 10, criatividade : 10};
    Agradabilidades: Perfil[] = [
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Acrobata'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Jardineiro'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Caçador'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Brigão'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Gladiador'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Ninja'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Caçador \n d   e Recompensas'),
        new Perfil(this.Inputs,{ação:1, social : 1, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Arquiteto'),
        new Perfil(this.Inputs,{ação:1, social : 4, maestria : 1, conquista : 1, imersão : 1, criatividade : 1},'Bardo')
    ];
    
    get Nomes(){
        return this.Agradabilidades.map((p) => p.nome);
    }
    get Resultados(){
        Array.prototype.sort.call(this.Agradabilidades, (a:Perfil, b:Perfil) => {
            return b.agradabilidade - a.agradabilidade;
        } );
        return this.Agradabilidades
    }
    constructor() {
        
    }
}


let resultApi = new ResultApi();
window.setInterval(() => {
    console.log(resultApi.Inputs)
},1000)
export default resultApi;