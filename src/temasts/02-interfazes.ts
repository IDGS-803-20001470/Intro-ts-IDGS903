
interface Alumno{
    nombre: string;
    email: string;
    matricula: number;
}


const alumno : Alumno = {
    nombre: 'Ricardo',
    email: "r@gmail.com",
    matricula: 20001470
}

console.log(alumno);

let mascotas: Array<string>=['perro', 'gato', 'perico'];
mascotas[1]="sshh";


let arre:(number | string)[]=[];
arre.push("Hola");
arre.push(45);
console.table(arre);


mascotas.push("loro");
console.table(mascotas);

export {}