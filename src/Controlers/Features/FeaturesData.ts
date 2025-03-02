


 export type GameFeatureProps = {
    textLabel: string
    textdescription: string
    setValue: (value: number) => void
}

export type SelectGameProps = {
    Features: GameFeatureProps[];
  }
