class PilasEnteros{
    private datos: number[] = [];
    insertar(dato: number){
        this.datos.push(dato);
    }
    extraer(){
        if(this.datos.length>0)
            return this.datos.pop();
        else
            return undefined;
    }
}

class PilaStrings{
    private datos: string[] = [];
    insertar(dato: string){
        this.datos.push(dato);
    }
    extraer(){
        if(this.datos.length>0)
            return this.datos.pop();
        else
            return undefined;
    }
}

let pila1= new PilasEnteros();
pila1.insertar(100);
pila1.insertar(200);
pila1.insertar(300);
console.log(pila1.extraer());

// Cadenas
let pila2= new PilaStrings();
pila2.insertar("Hola");
pila2.insertar("Comoe");
pila2.insertar("Estas");
console.log(pila2.extraer());

//Clase Genrica
class PilaGenerica<T>{
    private datos: T[] = [];
    insertar(dato: T){
        this.datos.push(dato);
    }
    extraer(){
        if(this.datos.length>0)
            return this.datos.pop();
        else
            return null;
    }
}

let pila3= new PilaGenerica<number>();// en las <> se pone el tipo de dato
pila3.insertar(10);
pila3.insertar(20);
pila3.insertar(30);
console.log(pila3.extraer());

let pila4= new PilaGenerica<string>();// en las <> se pone el tipo de dato
pila4.insertar("Ricardo");
pila4.insertar("Reyna");
pila4.insertar("Martinez");
console.log(pila4.extraer());