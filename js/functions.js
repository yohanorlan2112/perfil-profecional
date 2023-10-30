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
    {name:"yohan",last_name:"perez",age:17 },
    {name:"andres",last_name:"paez",age:18 },
    {name:"adriana",last_name:"jimenez",age:19 },
    {name:"camila",last_name:"torres",age:16 }
   ];
   // ########## OPERADORES BÃSICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta - 
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion * 
var multi = number_one * number_two;
console.log("Multi = " + multi);
// division / 
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("DivisiÃ³n = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("MÃ³dulo = " + modulo);

console.log(
    "Suma = " + suma + "\n" +
    "Resta = " + resta + "\n" +
    "Multi = " + multi + "\n" +
    "DivisiÃ³n = " + divi.toFixed(2) + "\n" +
    "MÃ³dulo = " + modulo
    )

var respuesta =     "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multi = " + multi + "<br>" + "DivisiÃ³n = " + divi.toFixed(2) + "<br>" + "MÃ³dulo = " + modulo;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
    
});
//##### operadores logicos y estructuras condicionales (inverse, incremento etc//
var bool = false;
var numeric =5;
if(!bool && numeric ==5){//bool==true
  console.log(bool);
  count++;//incremento//
}
else{
  console.log(bool);
  count--;//decremento//
}
// = es par asignar valores//
// == comparar contenido//
// === compara contenido y tipo de dato//
console.log(count);
//or con if//
var age =17;
if(age===17 || numeric=="5"){
  console.log(" una o dos variables aceptadas")
}
  else{
    console.log ("varables no aceptadas")
  }

//for //

for(let i=0;i<array_two.length; i++){
  console.log(array_two[i]+ (i+1))
}
//while//
let j =0;
while(j<=array_tex.length){
  console.log(array_two[j] + (j+1));
  j++
}
//do-while//
let w=0;
do{
  console.log(array_two[w] + (+1));
    w++;
}while(array_two.length)

//eventos
function enviar(){
  document.body.style.backgroundcolor="red";
  document.body.style.color="#fff";
}

const btn_limpiar =document.querySelector

btn_limpiar.addEventListener("click", () =>{
  document.body.style.backgroundcolor="#fff";
  document.body.style.color="#000";
});
//ejercisio//
const form_register =document.getElementById("form_register");
const nombres =document.getElementById("nombres");
const apellidos =document.getElementById("apellidos");
const information =document.getElementById("information");

form_register.addEventListener("sudmit",name_event=>{
  name_event.preventDefault();
  let info=""
  if(nombres.length<=2|| apellidos.length<3){
    info+="nombres y apellidos deben ser mayor o iguales a 1";
    information.style.color="red"
  }
  else{
    alert("information")
  }
  information.innerText=info;
});
function accion(){
  let accion=document.getElementById('accion')
  if(accion.);
  accion.style.background=("red")
}
  
