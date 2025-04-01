export function cloneWithMethods(obj:any):any {
    const clone = Object.create(Object.getPrototypeOf(obj));  // Clona o protótipo (métodos)
    return Object.assign(clone, obj);  // Copia as propriedades e métodos para o clone
}