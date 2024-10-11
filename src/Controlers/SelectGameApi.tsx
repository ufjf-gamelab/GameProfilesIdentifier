interface arquetipos{
    
    tipo1: number,
    tipo2: number,
    tipo3: number,
    tipo4: number,
    tipo5: number,
    tipo6: number,
}

class SelectGameAPI {
    arquetipos: arquetipos = {} as arquetipos;
    constructor() {
        
    }
}

let selectGameAPI = new SelectGameAPI();

window.setInterval(() => {
    console.log(selectGameAPI.arquetipos);

}, 1000);
export default selectGameAPI;