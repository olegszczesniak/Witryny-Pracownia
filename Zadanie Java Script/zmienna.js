
document.write("Zadanie 1 <br> ");
var x,a,b;
a=1;
b=2;
document.write( x=a/b +  "<br>");

document.write("Zadanie 2 <br> ");
var c,d;
c=3;
d=4;
document.write(x = a/b + c/d + "<br>");

document.write("Zadanie 3 <br> ");
document.write( x = (a+6) / (b-4)+ "<br>");

document.write("Zadanie 4 <br> ");
if (a%2)
{
document.write("LIczba parzysta <br> ");
}
else 
{
    document.write("Liczba nieparzysta <br> ");
}

document.write ("Zadanie 5 <br>");
if (b%a)
{
    document.write ("Liczba jest podzielna <br>");
}
else
{
    document.write ("Liczba  nie jest podzielna <br>");
}

document.write ("Zadanie 6 <br>");
if(a>0)
{
    document.write ("Liczba jest dodatnia <br> ");
}
else if (a=0)
{
    document.write ("Liczba jest równa zero <br> ");
}
else
{
    document.write ("Liczba jest ujemna <br> ");
}

document.write ("Zadanie 7 <br> ");
if(c>b && c>a)
{
document.write ( c + " jest najwieksza liczba <br> ");
}
else if (b>a && b>c)
{
    document.write ( b + " jest najwieksza liczba <br> ");
}
else if (a>b && a>c)
{
    document.write ( a + " jest najwieksza liczba ");
}
else {
    document.write ( "Liczby sa rowne ");
}

document.write ("Zadanie 8 <br> ");
if(a>b && a>c)
{
    document.write (a + "<br>")

    if (b>c)
    {
    document.write ( b + "<br>")
    document.write(c + "<br>");
    }
    else if (c>b)
    {
    document.write (c + "<br>");
    document.write(b + "<br>");
    }
    else
    {
        document.write ("Liczby sa rowne <br> ")
    }
}

if(b>a && b>c)
{
    document.write (b + "<br>")
    if (a>c)
    {
    document.write (a + "<br>");
    }
    else if (c>a)
    {
        document.write (c + "<br>");
    }
    else
    {
        document.write ("Liczby sa rowne <br> ");
    }
}

if(c>a && c>b)
document.write (c + "<br>")
{
    if ( a>b )
    {
    document.write (a + "<br>");
    document.write(b + "<br>");
    }
    else if (b>a)
    {
    document.write (b + "<br>");
    document.write(a + "<br>");
    }
    else
    {
        document.write ("Liczby sa rowne <br> ");
    }
}

document.write ("Zadanie 9 <br>");
var e;
if (e=>18)
{
    document.write ("Jestes pelnoletni <br>");
}
else
 {
document.write ("Jestes niepelnoletni <br>");
}

document.write ("Zadanie 10 <br>");
var rok= 2023;
if ( ( ( rok % 4 == 0 ) && (rok % 100 != 0  ) ) || (rok % 400 == 0 ) ) 
{
    document.write ("Rok przystepny <br>");
}
else
{
    document.write ("Rok nieprzestepny <br>");
}

document.write ("Zadanie 11 <br> ");
var miesiac= 12;
switch (miesiac)
{
    case 1:
    document.write ("Styczen <br>");
    break;
    case 2:
    document.write ("Luty <br>");
    break;
    case 3:
    document.write ("Marzec <br>");
    break;
    case 4:
    document.write ("Kwiecein <br>");
    break;
    case 5:
    document.write ("Maj <br>");
    break;
    case 6:
    document.write ("Czerwiec <br>");
    break;
    case 7:
    document.write ("Lipiec <br>");
    break;
    case 8:
    document.write ("Sierpien <br>");
    break;
    case 9:
    document.write ("Wrzesien <br>");
    break;
    case 10:
    document.write ("Pazdziernik <br>");
    break;
    case 11:
    document.write ("Listopad <br>");
    break;
    case 12:
    document.write ("Grudzien <br>");
    break;

}

document.write ("Zadanie 12 <br> ");
var waga = 60;
var wzrost = 170;
var BMI;
document.write ( BMI = waga/ Math.pow (wzrost, 2 ) + "<br>");

document.write ("Zadanie 13 <br> ");
var dzien = 7;
switch (dzien)
{
    case 1:
    document.write ("Poniedzialek <br>");
    break;
    case 2:
        document.write ("Wtorek <br>");
        break;
        case 3:
            document.write ("Sroda <br>");
            break;
            case 4:
                document.write ("Czwartek <br>");
                break;
                case 5:
                    document.write ("Piatek  <br>");
                    break;
                    case 6:
                        document.write ("Sobota <br>");
                        break;
                        case 7:
                            document.write ("Niedziela <br>");
                            break;
}

document.write ( " <br> KONIEC <br> ");







