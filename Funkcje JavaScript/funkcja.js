document.write ("Zadanie 1 <br>");
function netto (brutto)
{
    var netto = brutto - (brutto * 0.05) - (brutto * 0.1) - (brutto * 0.09) - (brutto * 0.15);
    return netto;
}
a = prompt("Wprowadz");
document.write( netto(a));

document.write ("<br> <br> Zadanie 2 <br>");
function wampir (wiek)
{
    var tydzien
    if (wiek < 200) {
        tydzien = 5*7;
    }
    else if  (wiek > 200) {
        tydzien = 4*7;
    }
    return tydzien;

}
document.write (wampir(250));

document.write ("<br> <br> Zadanie 3 <br>");
function parzysta(liczba)
 {
    if (liczba % 2 == 0 && liczba > 0)
     {
        zwrot  = "TAK";
    } 
    else {
        zwrot  = "NIE";
    }
    return zwrot;
 
}
document.write ( parzysta(3));

document.write ("<br> <br> Zadanie 4 <br>");
function energia (wartosc,matma,granie){
    var iloscmatma = wartosc/matma * 100
    var iloscgranie = wartosc/granie * 100
    return (iloscmatma,iloscmatma, iloscgranie,iloscgranie, wartosc: wartosc);
    
}


