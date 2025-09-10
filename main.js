// Tipos básicos
var username = "Carlos";
var age = 18;
var eps = false;
var n = null;
var indefinido = undefined;
// Union types para role
var role;
// Creamos un producto
var producto = {
    name: "moto",
    amount: 10,
    price: 3000,
    isActive: true
};
// Función que hace operaciones simples
var prueba = function () {
    var amount = 10;
    var pi = 3.1416;
    amount = 20;
    console.log("Amount actualizado:", amount);
    console.log("Producto:", producto);
    console.log("Valor de pi:", pi);
};
// Llamamos la función
prueba();
// Objetos tipo User
var user1 = {
    id: 1,
    name: "Ana",
    lastname: "Gomez",
    email: "carlos@example.com",
    cc: 123456789,
    nickname: "anaBanana"
};
var user2 = {
    id: 2,
    name: "Jose",
    lastname: "Daniel",
    email: "joseD@gmail.com",
    cc: 991122334
};
var user3 = {
    id: 3,
    name: "Santy",
    lastname: "Ochoa",
    email: "santy8ap@gmail.com",
    cc: 1122334409
};
var userConTelefono = {
    id: 4,
    name: "Compumax",
    lastname: "Perez",
    email: "correoCompumax@gmail.com",
    cc: 746769134836,
    telefono: 3012435574
};
var userSinTelefono = {
    id: 5,
    name: "James",
    lastname: "Rodriguez",
    email: "eljamespro@gmail.com",
    cc: 572965381
};
// Usuario con dirección
var user10 = {
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
function ShowUser(user) {
    return user.nickname ? user.nickname : user.name;
}
console.log(ShowUser(user1)); // anaBanana
console.log(ShowUser(user2)); // Jose
function retornarString(user) {
    return "".concat(user.name, " - ").concat(user.email);
}
var usuario = {
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
var user33 = {
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
var numCc = 1234254;
var nombrexd = "Hola";
var coordenadas = { x: 12, y: 24 };
console.log(coordenadas);
var punto1 = [12, "norte"];
var punto2 = [77, "sur"];
// Array de números
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);
// Función para capitalizar
var lastName = "Zapata";
var toUpperCase = function (info) {
    console.log(info);
    return info.toUpperCase();
};
var result = toUpperCase(lastName);
console.log(result);
var user20 = {
    id: "33",
    nombre: "Esteban",
    email: "estebanelpro@gmail.com"
};
// Solo podemos cambiar nombre o email, no id
user20.nombre = "David";
console.log(user20);
// Intento de modificar ID (esto daría error si descomentas)
// muyprivado.id = 100; // ❌ Error porque es readonly
var FizzBuzzz = [];
var Fizzz = [];
var Buzzz = [];
var muyprivado = {
    id: 41,
    name: "James",
    lastname: "Rodriguez",
    email: "eljamespro@gmail.com",
    cc: 572965381,
};
function FizzBuzz(limit) {
    for (var i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            FizzBuzzz.push(i);
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
            Fizzz.push(i);
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
            Buzzz.push(i);
        }
        else {
        }
    }
}
FizzBuzz(50);
// Declaración del arreglo tipado correctamente
var names = ["Ana", "Luis", "Carlos", "María"];
// Función que recibe un arreglo de strings y recorre con forEach
function saludarNombres(nombres) {
    nombres.forEach(function (nombre) {
        console.log("Hola ".concat(nombre, ", bienvenido/a al sistema."));
    });
}
// Llamamos a la función con el arreglo
saludarNombres(names);
var student = [
    { name: "ana", grade: 85 },
    { name: "luis", grade: 45 },
    { name: "maria", grade: 70 },
    { name: "carlos", grade: 50 },
];
function ObotenerAprobados(lista) {
    return lista.filter(function (estudiante) { return estudiante.grade >= 60; });
}
var EstudiantesAprobados = ObotenerAprobados(student);
console.log("Estudiante aprobados son: ", EstudiantesAprobados);
