function suma(): void { // void no retorna nada
    console.log(2+2);
}
suma();

function suma2(a:number,b:number): number { // void no retorna nada
    //console.log(a+b);
    return a+b;
}

console.log(suma2(2,3));

function multiplicar(n1:number,n2:number, n3=3): number { // Si no se le pasa parametro a n3, toma el valor de 3
    let tem=n1*n3;
    return tem;
}

console.log(multiplicar(2,9));

const sumaLambda=(a:number,b:number): string =>{ // void no retorna nada
    //console.log(a+b);
    return `${a+b}`;
}

interface Mascota{
    nombre: string;
    edad: number; // ? significa que es opcional
    mostrarEdad: () => void; // Funcion que no retorna nada
}

function calcular(mascota:Mascota, x: number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota: Mascota={
    nombre: "Firulais",
    edad: 3,
    mostrarEdad(){
        console.log("La edad es:",this.edad);
    }
}

calcular(nuevaMascota, 5);
nuevaMascota.mostrarEdad();


const funcSumar=function(valor1: number, valor2:number):number{
    return valor1+valor2;
};

console.log(funcSumar(4,5));

//Funcion con parametros opcionales
function calcular1(n1:number,n2:number, n3?:number):number{
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
    
}

//Parametros REST en funciones (Parametros infinitos)
function calcular2(...numeros:number[]):number{
    let suma=0;

    for(let i=0;i<numeros.length;i++){
        suma+=numeros[i];
    }

    /*numeros.forEach((num)=>{
        suma+=num;
    });*/
    return suma;
}

console.log(calcular2(1,2,3,4,5,6,7,8,9,10));


