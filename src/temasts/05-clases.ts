class Persona2{
    nombre: string="2";
    edad: number=2;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y EDAD: ${this.edad}`);
    }
}

let persona: Persona2;
persona= new Persona2("Ricardo", 20);
persona.imprimir();

// Modificadores de acceso

class Dado{
    private valor: number=0;

    public tirar(){
        this.generar();
    }

    public generar(){
       this.valor= Math.floor(Math.random()*6)+1;
    }

    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }

    
}
let dado1= new Dado();
dado1.tirar();
dado1.imprimir();

class Persona3{
    constructor(private nombre: string, private edad: number){
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y EDAD: ${this.edad}`);
    }
}

let objPersona: Persona3;
objPersona= new Persona3("Ricardo ", 21);
objPersona.imprimir();
