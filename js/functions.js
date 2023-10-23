//tipos de variables//
// #const valores fijos//
const pi=3.1416;
console.log(pi);
// #var para variables globales
var color="red";
console.log(color);
// #let para variables locales o para bloques
let contador=1;
console.log(contador);
//gtres formas de mostrar resultados
//alert
alert("hola bienvenido");
// console
console.log("hola bienvenido");
//pantalla
document.write("HOLA BIENVENIDO")
document.getElementById("text_ejem").innerHTML="<h1>hola bienvenido</h1>"
document.getElementById("text_ejem_two").innerText="hola bienvenido"
//librerias
var nombre="yohan perez";
var profecion=" Es estudiante de la ufpso"
Swal.fire(
    nombre,
    profecion,
    'SUCCESS'
  )
  // personalzado
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: nombre,
    folder:profecion,
    showConfirmButton: false,
    timer: 1500
  })
  //### tipos de datos
  //numerico
  let number_one=10;
  let number_two=5;
  let number_trhee=2.5;//decimal //string
   let text="hello ; i am text"
   //booleanos
   let boolean= false//true
   //array
   let array=[1,2,3,4,5,6]
   let array_two=["lunes", " martes" , "miercoles" , "jueves" ,"viernes","sabado", "domingo"]
   let array_trhee=["yohan", 20 , " andres" , "miercoles" ,10,2.5,15];
   let array_multi=[
    {name:yohan,last_name:perez,age:17 },
    {name:andres,last_name:paez,age:18 },
    {name:adriana,last_name:jimenez,age:19 },
    {name:camila,last_name:torres,age:16 }
   ]

