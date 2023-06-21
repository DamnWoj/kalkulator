window.onload = function() {

    window.wynik.onclick = function() {
        let dodawanie1 = Number(document.getElementById('dodawanie1').value); 
        let dodawanie2 = Number(document.getElementById('dodawanie2').value); 
       
        
        function wynikDodawanie() {                     
            let wynik = dodawanie1 + dodawanie2;                              
            wynik = Math.floor(wynik * 1000) / 1000;                           
            return wynik;
        }
        
        
        let wynikdod = wynikDodawanie(dodawanie1, dodawanie2); 
        console.log(dodawanie1, dodawanie2, wynikdod);
        //alert('Wynik dodawania to ' + wynikdod);
        
        let input1 = document.getElementById('wynik-dod');
        input1.value = wynikdod;
        //document.getElementById('wynik-dod').innerHTML = wynikdod; // wyświetla w HTML, nie w polu formularza input
       
    }

    window.wynik1.onclick = function() {
        let odejmowanie1 = Number(document.getElementById('odejmowanie1').value); 
        let odejmowanie2 = Number(document.getElementById('odejmowanie2').value);

        function wynikOdejmowanie() {               
            let wynik = odejmowanie1 - odejmowanie2;                          
            wynik = Math.floor(wynik * 1000) / 1000;                           
            return wynik;
        }

        let wynikod = wynikOdejmowanie(odejmowanie1, odejmowanie2); 
        console.log(odejmowanie1, odejmowanie2, wynikod);
        //alert('Wynik odejmowania to ' + ekran);

        let input1 = document.getElementById('wynik-od');
        input1.value = wynikod;
        //document.getElementById('wynik-od').innerHTML = wynikod;
    }

    window.wynik2.onclick = function() {
        let czynnik1 = Number(document.getElementById('mnozenie1').value); 
        let czynnik2 = Number(document.getElementById('mnozenie2').value);

        function wynikMnozenie() {               
            let wynik = czynnik1 * czynnik2;                          
            wynik = Math.floor(wynik * 1000) / 1000;                           
            return wynik;
        }

        let wynikmnoz = wynikMnozenie(mnozenie1, mnozenie2); 
        console.log(mnozenie1, mnozenie2, wynikmnoz);
        //alert('Wynik mnożenia to ' + ekran);

        let input1 = document.getElementById('wynik-mnoz');
        input1.value = wynikmnoz;
        //document.getElementById('wynik-mnoz').innerHTML = wynikmnoz;
    }

    window.wynik3.onclick = function() {
        let dzielenie1 = Number(document.getElementById('dzielenie1').value); 
        let dzielenie2 = Number(document.getElementById('dzielenie2').value);

        function wynikDzielenie() {               
            let wynik = dzielenie1 / dzielenie2;                          
            wynik = Math.floor(wynik * 1000) / 1000;                           
            return wynik;
        }

        let wynikdziel = wynikDzielenie(dzielenie1, dzielenie2); 
        console.log(dzielenie1, dzielenie2, wynikdziel);
        if (dzielenie2 == 0) {
            alert('Nie można dzielić przez 0!');
        }  
        else {
            //alert('Wynik dzielenia to ' + ekran);
            let input1 = document.getElementById('wynik-dziel');
            input1.value = wynikdziel;
            //document.getElementById('wynik-dziel').innerHTML = wynikdziel;
       }    
    }

}
