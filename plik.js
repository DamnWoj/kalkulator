window.onload = function() {
   
    window.wynik.onclick = function() {
        var dodawanie1 = Number(document.getElementById('dodawanie1').value); // dziala jak powinno
        var dodawanie2 = Number(document.getElementById('dodawanie2').value); //.value i "dodawanie1" przerzuca tekst
       
        
        function wynikDodawanie() {                     // trzeba zamienic to na liczbe za pomoca
            var wynik = dodawanie1 + dodawanie2;                              // number
            return wynik;
        }
        
        
        var ekran = wynikDodawanie(dodawanie1, dodawanie2); //dodawanie dziala ok
        console.log(dodawanie1, dodawanie2, ekran);
        alert('Wynik dodawania to ' + ekran);
    }

    window.wynik1.onclick = function() {
        var odejmowanie1 = Number(document.getElementById('odejmowanie1').value); 
        var odejmowanie2 = Number(document.getElementById('odejmowanie2').value);

        function wynikOdejmowanie() {               
            var wynik1 = odejmowanie1 - odejmowanie2;                          
            return wynik1;

        }


        var ekran = wynikOdejmowanie(odejmowanie1, odejmowanie2); //odejmoawanie dziala ok
        console.log(odejmowanie1, odejmowanie2, ekran);
        alert('Wynik odejmowania to ' + ekran);
    }

    window.wynik2.onclick = function() {
        var czynnik1 = Number(document.getElementById('mnozenie1').value); 
        var czynnik2 = Number(document.getElementById('mnozenie2').value);

        function wynikMnozenie() {               
            var wynik2 = czynnik1 * czynnik2;                          
            return wynik2;

        }


        var ekran = wynikMnozenie(mnozenie1, mnozenie2); //mnozenie dziala ok
        console.log(mnozenie1, mnozenie2, ekran);
        alert('Wynik mnożenia to ' + ekran);
    }

    window.wynik3.onclick = function() {
        var dzielenie1 = Number(document.getElementById('dzielenie1').value); 
        var dzielenie2 = Number(document.getElementById('dzielenie2').value);

        function wynikDzielenie() {               
            var wynik3 = dzielenie1 / dzielenie2;                          
            return wynik3;

        }


        var ekran = wynikDzielenie(dzielenie1, dzielenie2); //dzielenie dziala ok
        console.log(dzielenie1, dzielenie2, ekran);
        if (dzielenie2 == 0) {
            alert('Nie można dzielić przez 0!');
        }  
        else {
            alert('Wynik dzielenia to ' + ekran);
       } 
        
        
    }

}
    
    
