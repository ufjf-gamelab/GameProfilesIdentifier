import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { TreeData } from "@/Controlers/Types";

interface Game {
  appid: number;
  name: string;
}

interface Genre {
  id: string;
  name: string;
}

const GENRES: Genre[] = [
  { id: "19", name: "Action" },      // ação
  { id: "9", name: "Strategy" },     // maestria
  { id: "122", name: "RPG" },        // imersão
  { id: "3810", name: "Simulação" }, // social
  { id: "3790", name: "SandBox" },   // criatividade  
  { id: "21", name: "Adventure" },   // conquista   
];

function GameList({jogo}:{jogo:TreeData}){
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>(GENRES[0].id);

  const entries = Object.entries(jogo.pesos);
  const maiores = entries.sort((a, b) => b[1] - a[1]).slice(0, 3);

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://api.steampowered.com/IStoreQueryService/Query/v1/?input_json=${JSON.stringify({
              query: {
                filters: {
                  tagids_must_match: [{ tagids: [selectedGenre] }],
                  global_top_n_sellers: 100,
                },
              },
              context: {
                language: "english",
                country_code: "US",
                steam_realm: "2",
              },
              data_request: {
                include_basic_info: true,
              },
            })}`
          )}`
        );

        const json = await response.json();
        const data = JSON.parse(json.contents);

        if (data.response?.store_items) {
          setGames(data.response.store_items.slice(0,4));
        } else {
          setGames([]);
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGamesByGenre();
  }, [selectedGenre]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Escolha um gênero de jogo</h1>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {loading ? (
          [...Array(6)].map((_, index) => <Skeleton key={index} className="h-20 w-full" />)
        ) : games.length > 0 ? (
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
        ) : (
          <p className="text-center col-span-2">Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default GameList;
