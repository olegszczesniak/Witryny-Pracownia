document.write ("Zadanie 1 <br>");
function netto (brutto)
{
    var netto = brutto - (brutto * 0.05) - (brutto * 0.1) - (brutto * 0.09) - (brutto * 0.15);
    return netto;
}
a = prompt("Wprowadz zarobek");
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
b = prompt("Wprowadz wiek wampira");
document.write (wampir(b));

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
function procentEnergiiZuzycie(energiaPrzyRozwiazywaniu, energiaPrzyGraniu) {
    var calkowitaEnergia = 100;
    var procentRozwiazywanie = energiaPrzyRozwiazywaniu / calkowitaEnergia * 100;
    var procentGranie = energiaPrzyGraniu / calkowitaEnergia * 100;

    return { procentRozwiazywanie, procentGranie };
}

var wyniki = procentEnergiiZuzycie(30, 20);
document.write("Procent zużycia energii przy rozwiązywaniu zadań: " + wyniki.procentRozwiazywanie + "<br>");
document.write("Procent zużycia energii przy graniu: " + wyniki.procentGranie);

document.write ("<br> <br> Zadanie 5 <br> ")
function czyPelnoletniIZdatnyNaPrezydenta(wiek) {
    var pelnoletniosc = wiek >= 18;
    var zdolnoscNaPrezydenta = wiek >= 35;

    return { pelnoletni: pelnoletniosc, zdolnyNaPrezydenta: zdolnoscNaPrezydenta };
}
var wiek = window.prompt("Ile masz lat: ");
var wynikiSprawdzenia = czyPelnoletniIZdatnyNaPrezydenta(wiek);
document.write("Pełnoletni: " + wynikiSprawdzenia.pelnoletni + "<br>");
document.write("Zdatny na prezydenta: " + wynikiSprawdzenia.zdolnyNaPrezydenta);

document.write ("<br> <br> Zadanie 6 <br> ")
function wyswietlTrojkat(n) {
    for (var i = 1; i <= n; i++) {
        var spacje = " ".repeat(n - i);
        var gwiazdki = "*".repeat(2 * i - 1);
        document.write(spacje + gwiazdki + "<br>");
    }
}
var poziomy = window.prompt("Podaj ilośc poziomoów trójkąta:");
wyswietlTrojkat(poziomy);

document.write ("<br> <br> Zadanie 7 <br> ")
function wyswietlFigury(n, iloscPowtorzen) {
    for (var j = 0; j < iloscPowtorzen; j++) {
        for (var i = 1; i <= n; i++) {
            var spacje = " ".repeat(n - i);
            var gwiazdki = "*".repeat(2 * i - 1);
            document.write(spacje + gwiazdki + "<br>");
        }
    }
}
var poziomy = window.prompt("Podaj ilośc poziomoów trójkąta:");
var czesci = window.prompt("Podaj ilość cześci: ")
wyswietlFigury(poziomy, czesci);

document.write ("<br> <br> Zadanie 8 <br> ")
function czyWeekend(numerTygodnia) {
    var dniWWeekend = [6, 7];

    if (dniWWeekend.includes(numerTygodnia)) {
        document.write("To jest weekend!");
    } else {
        document.write("To jest dzień roboczy.");
    }
}

var dzienTygodnia = window.prompt("Podaj dzień tygodnia: ");
czyWeekend(dzienTygodnia);

document.write ("<br> <br> Zadanie 9 <br> ")
function przeliczTemperature(celsjusz) {
    const farenheit = celsjusz * (9 / 5) + 32;
    const kelvin = celsjusz + 273.15;

    return { farenheit, kelvin };
}

const temperaturaCelsjusz = parseFloat(prompt("Podaj temperaturę w stopniach Celsiusza:"))  ;
const wynikiTemperatury = przeliczTemperature(temperaturaCelsjusz);
document.write("Temperatura w Farenheitach :", wynikiTemperatury.farenheit + "<br>");
document.write("Temperatura w Kelvinach :", wynikiTemperatury.kelvin + "<br>");

document.write ("<br> <br> Zadanie 10 <br> ")
function rokUrodzenia(wiek) {
    var obecnyRok = 2023;
    return obecnyRok - wiek;
}

var wiekOsoby = window.prompt("Podaj swój wiek: ");
document.write("Rok urodzenia: ", rokUrodzenia(wiekOsoby) + "<br>");

document.write ("<br> <br> Zadanie 11 <br> ")
function iloscSkarbowNaWyspie(ilośćPapug, ilośćNógPiratów) {
    var sumaPapugINogi = ilośćPapug + ilośćNógPiratów;
    var ilośćSkarbów = 300 - sumaPapugINogi; 

    if (ilośćSkarbów < 0) {
        ilośćSkarbów = 0;
    }

    return ilośćSkarbów;
}


var ilośćPapugNaWyspie = parseInt(prompt("Podaj ilość papug na wyspie: "));
var ilośćNógPiratówNaWyspie = parseInt(prompt("Podaj ilość nóg piratów: "));

document.write("Ilość skarbów na wyspie:", iloscSkarbowNaWyspie(ilośćPapugNaWyspie, ilośćNógPiratówNaWyspie));

document.write ("<br> <br> Zadanie 12 <br> ")
function iloscRundNaKaruzeli(cena) {

    var iloscRund = (((cena/10)*5)/3)*10;

    return iloscRund;
}

var cenaKaruzeli = window.prompt("Ile masz pieniedzy: ");
document.write("Możliwa ilość rund na karuzeli: ", iloscRundNaKaruzeli(cenaKaruzeli) + "<br>");

document.write ("<br> <br> KONIEC <br> ")



