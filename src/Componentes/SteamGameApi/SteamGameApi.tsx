import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

// Tipos de dados da API
interface Game {
  appid: number;
  name: string;
}

interface Genre {
  id: string;
  name: string;
}

// Lista de gêneros suportados
const GENRES: Genre[] = [
  { id: "19", name: "Action" },
  { id: "9", name: "Strategy" },
  { id: "122", name: "RPG" },
  { id: "simulation", name: "Simulação" },
  { id: "3810", name: "SandBox" },
  { id: "racing", name: "Corrida" },
];

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("action");

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      setLoading(true);
      try {
        const response = fetch(`https://api.steampowered.com/IStoreQueryService/Query/v1/?input_json={"query":{"filters":{"tagids_must_match":[{"tagids":["9"]}],"global_top_n_sellers":100}},"context":{"language":"english","country_code":"US","steam_realm":"2"},"data_request":{"include_basic_info":true}}`);
        response.then((response)=>response.json()).then((data) => {
            setGames(data);
            setLoading(false);
        });

        console.log(games);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
      setLoading(false);
    };

    fetchGamesByGenre();
  }, [selectedGenre]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Escolha um gênero de jogo</h1>

      {/* Dropdown de seleção do gênero */}
      <Select onValueChange={setSelectedGenre} defaultValue={selectedGenre}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um gênero" />
        </SelectTrigger>
        <SelectContent>
          {GENRES.map((genre) => (
            <SelectItem key={genre.id} value={genre.id}>
              {genre.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Lista de jogos */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {loading ? (
          [...Array(6)].map((_, index) => <Skeleton key={index} className="h-20 w-full" />)
        ) : (
          games.map((game) => (
            <Card key={game.appid} className="p-4">
              <CardHeader>
                <CardTitle>{game.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>ID: {game.appid}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default GameList;
