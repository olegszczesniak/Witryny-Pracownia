
/*

function Suma(a, b)
{

    var c = a + b;
    return c;

}

document.write(suma(5,6));


function wynik(x,y)
{
var s = x + y;
return s;
}
var suma = wynik (19,7) + 34;
document.write ("Wynik dodawania: " + suma);


function trzy (z)
{
for (var i = 0; i <= z; i++) {
if ((i%3) != 0)
continue;
document.write(i + "; ");
}
document.write("</br>");
}
trzy (90);
trzy (120);


function lista_arg()
{


return arguments;

}



function suma_dow()
{
var i = 0;
var l_param = arguments.length;
for (i = 0; i < l_param; i++)
{
wynik += arguments[i];
}
return wynik;
}
suma_dow(3, 5, 7);
document.write("Suma argumentów:" + wynik);

*/

let a = 10;
{
let a = 15;
document.write("Zmienna w bloku: " + a);
}
document.write("Zmienna globalna: " + a);

