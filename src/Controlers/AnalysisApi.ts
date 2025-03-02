export type Categorias={
    Community: number,
    Competition: number,
    Excitement: number,
    Destruction: number,
    Completion: number,
    Power: number,
    Strategy: number,
    Challenge: number,
    Fantasy: number,
    Story: number,
    Discovery: number,
    Design: number,
  }
  
export type Motivações = {
    ação:number,
    social : number,
    maestria : number,
    conquista : number,
    imersão : number,
    criatividade : number
  };
export type Persona = {
  nome: string,
  imagem: string,
  descricao: string,
  categoria: string,
  quantidade: number,
  pesos:Categorias
}
export type Jogo = {
    nome: string,
    imagem: string,
    descricao: string,
    categoria: string,
    quantidade: number,
    Valores: Motivações,
  }
export type Data={
  subtitle: string,
  dataKey: number
}
export function gameValtoData(Jogo:Motivações){
    return [
      { subtitle: "Ação", dataKey: Jogo.ação },
      { subtitle: "Social", dataKey: Jogo.social },
      { subtitle: "Maestria", dataKey: Jogo.maestria },
      { subtitle: "Conquista", dataKey: Jogo.conquista },
      { subtitle: "Imersão", dataKey: Jogo.imersão },
      { subtitle: "Criatividade", dataKey: Jogo.criatividade },
    ]
  }