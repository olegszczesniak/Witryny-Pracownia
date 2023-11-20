
document.write (" <br> Oleg Szcześniak 2e <br>");

document.write(" <br> Zadanie 1<br>");
var x = 1000;
while(x++ < 5000)
    {
        if(x % 11 == 0)
            {
                document.write(x + ", ");
            }
    }


document.write("<br><br>Zadanie 2<br>"); 

var y = prompt("Podaj liczbe wierszy");
for(var i = 1; i <= y; i++) 
    {
            
        if (i > y/2)
            {
                for(var z = y; z >= i; z--) {
                    document.write("*");
                }
            }
        else
            {
                for(var z = 0; z < i; z++){
                    document.write("*"); 
                }
            }
                                
        document.write("<br>"); 
    }
    


document.write("<br><br>Zadanie 3<br>");
/*
var nieparzysta = 0, parzysta = 0;
do{
    x = prompt("Podaj liczbe, liczba zero konczy dzialanie");
    if(x == 0)
        {
            break;
        }
    if(x % 2 == 0)
        {
            parzysta++;
        }
    else
        {
            nieparzysta++;
        }
}while(x != 0)
    
document.write("Wypisano tyle liczb parzystych: " + parzysta + ", a tyle nieparzystych: " + nieparzysta);

*/

document.write("<br><br>Zadanie 4<br>");
for(var i = 0; i <= 100; i++)
    {
        if(i % 3 !== 0 && 1 % 10 !== 6)
            {
                document.write(i + ", ");
            }
    }
document.write("<br><br>Zadanie 5<br>");

var y = 0;
var i = 1;

ciag = i + y;
document.write(ciag + ", ");
ciag1 = ciag;
ciag = ciag1 + i;
document.write(ciag + ", ");

for(var z = 1; z < 30; z++)
    {
        ciag2 = ciag;
        ciag = ciag1 + ciag2;
        document.write(ciag + ", ");
        ciag1 = ciag;
        ciag = ciag1 + ciag2;
        document.write(ciag + ", ");
    }

document.write("<br><br>Zadanie 6<br>");

y = 5;
i = 8;
ciag = i + y;
document.write(y + ", " + i + ", ");
document.write(ciag + ", ");
ciag1 = ciag;
ciag = ciag1 + i;
document.write(ciag + ", ");

do{
        ciag2 = ciag;
        ciag = ciag1 + ciag2;
        if(ciag > 100)
            {
                break;
            }
        document.write(ciag + ", ");
        ciag1 = ciag;
        ciag = ciag1 + ciag2;
        if(ciag > 100)
            {
                break;
            }
        document.write(ciag + ", ");
    }while(ciag < 100 && ciag1 < 100 && ciag2 < 100)

    
        
document.write("<br><br>Zadanie 7<br>");

/*
var Binarna = prompt("Podaj liczbe binarna"); 
var Dziesietna = 0;
var Potega = 1;

for (var i = Binarna.length - 1; i >= 0; i--) {
  if (Binarna[i] === '1') {
    Dziesietna += Potega;
  }
  Potega *= 2;
}

document.write("Liczba dziesiętna to: " + Dziesietna);

*/
document.write("<br><br>Zadanie 8<br>");     
var y = 2;
var i = 5;
var suma = 0;
for(x = y + 1; x < i; x++)
    {
        suma = suma + x;
    }

document.write(suma);




document.write("<br><br>Zadanie 9<br>");        
for(var i = 1; i <= 9; i++) 
    {
        for(var z = 0; z < i; z++)
            {
                document.write(i);
            }
                                
        document.write("<br>"); 
    }

document.write("<br><br>Zadanie 10<br>");        
for(var i = 1; i <= 5; i++) 
    {
        for(var z = 0; z < i; z++)
            {
                document.write("*");
            }
                                
        document.write("<br>"); 
    }

document.write("<br><br>Zadanie 11<br>");     

for(var wysokosc = 1; wysokosc <= 5; wysokosc++)
    {
        for(var odstep = 5 - wysokosc; odstep >= 0; odstep--)
            {
                document.write(".");
            }
        for(var szerokosc = 0; szerokosc < wysokosc; szerokosc++)
            {
                document.write("*");
            }
        document.write("<br>");
    }


document.write("<br><br>Zadanie 12<br>");        
for(var i = 1; i <= 10; i++) 
    {
        for(var z = 1; z <= 10; z++)
            {
                document.write(i * z + " ");
            }
                                
        document.write("<br>"); 
    }


document.write("<br><br>Zadanie 13<br>");     

const tab = ["Ameryka Polnocna", "Ameryka Poludniowa", "Afryka", "Europa", "Azja", "Australia i Oceania", "Antarktyda"];
for(var z = 0; z < 7; z++)
    {
        document.write(tab[z] + "<br>");
    } 


document.write ("<br> KONIEC <br>");
