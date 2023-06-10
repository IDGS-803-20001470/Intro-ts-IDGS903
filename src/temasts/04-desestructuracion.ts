// Desestructuracion de objetos y arreglos

interface Alumno1{
    nombre: string;
    edad: number;
    matricula: string;
    correo: string;
    grupo: Grupo;
}

interface Grupo{
    grupo: string;
    year: number;
}

const alumno2: Alumno1={
    nombre:"Juan",
    edad:20,
    matricula: "1234",
    correo: "juan@gmail.com",
    grupo: {
        grupo: "idgs",
        year: 2023,
    }
}
console.log(`El nombre del alumno es ${alumno2.nombre}`);
console.log(`El nombre del alumno es ${alumno2.edad}`);

const {matricula,nombre:nom, grupo:xx}=alumno2; // los : es un alias 

const {grupo, year: anio}=xx;

console.log(`El nombre del alumno es ${matricula}`);
console.log(`El nombre del alumno es ${nom}`);
console.log(`El grupo del alumno es ${grupo}`);
console.log(`El año del grupo del alumno es ${anio}`);

// Desestructuracion de arreglos
const gps:string[]=["IDGS", "IEVN", "REDES"];
console.log(`Grupo 1: ${gps[0]} `);
console.log(`Grupo 2: ${gps[1]} `);
console.log(`Grupo 3: ${gps[2]} `);

const [a,,b]=gps;
console.log(`Grupo 1: ${a} `);
console.log(`Grupo 3: ${b} `);

