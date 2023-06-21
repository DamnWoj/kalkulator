window.onload = function() {

    window.wynik.onclick = function() {
        var dodawanie1 = Number(document.getElementById('dodawanie1').value); 
        var dodawanie2 = Number(document.getElementById('dodawanie2').value); 
       
        
        function wynikDodawanie() {                     
            var wynik = dodawanie1 + dodawanie2;                              
            return wynik;
        }
        
        
        var wynikdod = wynikDodawanie(dodawanie1, dodawanie2); 
        console.log(dodawanie1, dodawanie2, wynikdod);
        //alert('Wynik dodawania to ' + wynikdod);
        
        var input1 = document.getElementById('wynik-dod');
        input1.value = wynikdod;
        //document.getElementById('wynik-dod').innerHTML = wynikdod; // wyświetla w HTML, nie w polu formularza input
       
    }

    window.wynik1.onclick = function() {
        var odejmowanie1 = Number(document.getElementById('odejmowanie1').value); 
        var odejmowanie2 = Number(document.getElementById('odejmowanie2').value);

        function wynikOdejmowanie() {               
            var wynik1 = odejmowanie1 - odejmowanie2;                          
            return wynik1;
        }

        var wynikod = wynikOdejmowanie(odejmowanie1, odejmowanie2); 
        console.log(odejmowanie1, odejmowanie2, wynikod);
        //alert('Wynik odejmowania to ' + ekran);

        var input1 = document.getElementById('wynik-od');
        input1.value = wynikod;
        //document.getElementById('wynik-od').innerHTML = wynikod;
    }

    window.wynik2.onclick = function() {
        var czynnik1 = Number(document.getElementById('mnozenie1').value); 
        var czynnik2 = Number(document.getElementById('mnozenie2').value);

        function wynikMnozenie() {               
            var wynik2 = czynnik1 * czynnik2;                          
            return wynik2;
        }

        var wynikmnoz = wynikMnozenie(mnozenie1, mnozenie2); 
        console.log(mnozenie1, mnozenie2, wynikmnoz);
        //alert('Wynik mnożenia to ' + ekran);

        var input1 = document.getElementById('wynik-mnoz');
        input1.value = wynikmnoz;
        //document.getElementById('wynik-mnoz').innerHTML = wynikmnoz;
    }

    window.wynik3.onclick = function() {
        var dzielenie1 = Number(document.getElementById('dzielenie1').value); 
        var dzielenie2 = Number(document.getElementById('dzielenie2').value);

        function wynikDzielenie() {               
            var wynik3 = dzielenie1 / dzielenie2;                          
            return wynik3;
        }

        var wynikdziel = wynikDzielenie(dzielenie1, dzielenie2); 
        console.log(dzielenie1, dzielenie2, wynikdziel);
        if (dzielenie2 == 0) {
            alert('Nie można dzielić przez 0!');
        }  
        else {
            //alert('Wynik dzielenia to ' + ekran);
            var input1 = document.getElementById('wynik-dziel');
            input1.value = wynikdziel;
            //document.getElementById('wynik-dziel').innerHTML = wynikdziel;
       }    
    }

}
