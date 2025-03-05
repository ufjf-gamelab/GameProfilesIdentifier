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



 export type GameFeatureProps = {
    textLabel: string
    textdescription: string
    valorProp: number
    setValue: (value: number) => void
}

export type SelectGameProps = {
    Features: GameFeatureProps[];
    disabled : boolean;
  }
