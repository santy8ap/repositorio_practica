// Tipos básicos
let username: string = "Carlos";
let age: number = 18;
let eps: boolean = false;
let n: null = null;
let indefinido: undefined = undefined;

// Union types para role
let role: "admin" | "editor" | "viewer";


// Definimos el tipo Producto
interface Producto {
    name: string;
    amount: number;
    price: number;
    isActive: boolean;
}

// Creamos un producto
const producto: Producto = {
    name: "moto",
    amount: 10,
    price: 3000,
    isActive: true
};

// Función que hace operaciones simples
const prueba = () => {
    let amount: number = 10;
    const pi = 3.1416;

    amount = 20;

    console.log("Amount actualizado:", amount);
    console.log("Producto:", producto);
    console.log("Valor de pi:", pi);
};

// Llamamos la función
prueba();


interface Address {
    street: string;
    city: string;
    country: string;
}

interface User {
    readonly id: number;
    name: string;
    lastname: string;
    email: string;
    cc: number;
    telefono?: number;
    nickname?: string;
    address?: Address;
    scores?: {
        materia: string;
        user: string;
        puntaje: number;
    }
}

// Objetos tipo User
const user1: User = {
    id: 1,
    name: "Ana",
    lastname: "Gomez",
    email: "carlos@example.com",
    cc: 123456789,
    nickname: "anaBanana"
};

const user2: User = {
    id: 2,
    name: "Jose",
    lastname: "Daniel",
    email: "joseD@gmail.com",
    cc: 991122334
};

const user3: User = {
    id: 3,
    name: "Santy",
    lastname: "Ochoa",
    email: "santy8ap@gmail.com",
    cc: 1122334409
};

const userConTelefono: User = {
    id: 4,
    name: "Compumax",
    lastname: "Perez",
    email: "correoCompumax@gmail.com",
    cc: 746769134836,
    telefono: 3012435574
};

const userSinTelefono: User = {
    id: 5,
    name: "James",
    lastname: "Rodriguez",
    email: "eljamespro@gmail.com",
    cc: 572965381
};

// Usuario con dirección
const user10: User = {
    id: 6,
    name: "Dany",
    lastname: "Romero",
    email: "elromeroxdd",
    cc: 3762391689,
    address: {
        street: "Barrio Antioquia",
        city: "Medellín",
        country: "Colombia"
    }
};

function ShowUser(user: User): string {
    return user.nickname ? user.nickname : user.name;
}

console.log(ShowUser(user1));  // anaBanana
console.log(ShowUser(user2));  // Jose

function retornarString(user: User): string {
    return `${user.name} - ${user.email}`;
}

const usuario: User = {
    id: 17,
    name: "Usuario Común",
    lastname: "Ensayo",
    email: "usercorreo@gmail.com",
    cc: 37631796,
    address: {
        street: "Manrique",
        city: "Bogotá",
        country: "España"
    }
};

console.log(retornarString(usuario));

let user33: User = {
    id: 87,
    name: "Juan",
    lastname: "Pedro",
    email: "elpedro@gmail.com",
    cc: 9823864872,
    address: {
        street: "Aranjuez",
        city: "Medellín",
        country: "Colombia"
    }
};

console.log(user33);

// Tipo ID (número o string)
type ID = number | string;

let numCc: ID = 1234254;
let nombrexd: ID = "Hola";

// Coordenadas
type Punto = { x: number, y: number };

const coordenadas: Punto = { x: 12, y: 24 };
console.log(coordenadas);

// Tuplas
type Coordenada = [number, string];

let punto1: Coordenada = [12, "norte"];
let punto2: Coordenada = [77, "sur"];

// Array de números
let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);

// Interface con índice dinámico
interface Score {
    [subject: string]: number;
}

// Función para capitalizar
let lastName: string = "Zapata";

const toUpperCase = (info: string): string => {
    console.log(info);
    return info.toUpperCase();
};

let result = toUpperCase(lastName);
console.log(result);

interface Perfil {
    readonly id: string;
    nombre: string;
    email: string;
}

const user20: Perfil = {
    id: "33",
    nombre: "Esteban",
    email: "estebanelpro@gmail.com"
};

// Solo podemos cambiar nombre o email, no id
user20.nombre = "David";

console.log(user20);

// Intento de modificar ID (esto daría error si descomentas)
// muyprivado.id = 100; // ❌ Error porque es readonly
let FizzBuzzz:number[] = []
let Fizzz: number[] = []
let Buzzz: number[] = []

const muyprivado: User = {
    id: 41,
    name: "James",
    lastname: "Rodriguez",
    email: "eljamespro@gmail.com",
    cc: 572965381,
};


function FizzBuzz(limit: number): void {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            FizzBuzzz.push(i)
        } else if (i % 3 === 0) {
            console.log("Fizz");
            Fizzz.push(i)
        } else if (i % 5 === 0) {
            console.log("Buzz");
            Buzzz.push(i)
        } else {
            
        }
    }
}



FizzBuzz(50);
// Declaración del arreglo tipado correctamente
const names: string[] = ["Ana", "Luis", "Carlos", "María"];

// Función que recibe un arreglo de strings y recorre con forEach
function saludarNombres(nombres: string[]): void {
  nombres.forEach((nombre: string) => {
    console.log(`Hola ${nombre}, bienvenido/a al sistema.`);
  });
}

// Llamamos a la función con el arreglo
saludarNombres(names);


interface Student {
    name: string;
    grade: number;
}

const student: Student[] = [
    {name: "ana", grade: 85},
    {name: "luis", grade: 45},
    {name: "maria", grade: 70},
    {name: "carlos", grade: 50},
];

function ObotenerAprobados(lista:Student[]):Student[] {
    return lista.filter((estudiante: Student) => estudiante.grade >= 60);
}

const EstudiantesAprobados = ObotenerAprobados(student);

console.log("Estudiante aprobados son: ", EstudiantesAprobados);



interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

function renderButton(props:ButtonProps):string {
    if (props.disabled) {
        return `[X] ${props.label}`;
    } else {
        return `[] ${props.label}`
    }
    
}

console.log(renderButton({label: "Guardar"}));
console.log(renderButton({label: "Enviar", disabled: true}));