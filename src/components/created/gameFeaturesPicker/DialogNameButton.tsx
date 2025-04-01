import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef, useState } from "react"

export function DialogNameButton({callback}: {callback: (valor:string) => void}) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  variant={"outline"}>Mudar Nome</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Criação de Persona</DialogTitle>
          <DialogDescription>
           Insira o nome da persona:
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              value={inputValue} // Passa o valor controlado para o input
              onChange={handleInputChange} // Atualiza o estado quando o valor do input mudar
              id="link"
              defaultValue=""
            />
          </div>
          
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
           
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" size="sm" onClick={()=>{callback(inputValue)}} className="px-3">
              Confirmar

            </Button>
           
          </DialogClose>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
