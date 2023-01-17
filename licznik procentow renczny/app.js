function Calculate(operator)
{
    var w1 = document.getElementById('w1').value;

    var b1 = document.getElementById('b1').value;

    var t1 = document.getElementById('t1').value;

    var kcal = document.getElementById('kcal').value;

    switch(operator)
    {
        case 'Wynik':
            var rw = parseFloat(w1) * 4;
            break;
    }
    

    

    switch(operator)
    {
        case 'Wynik':
            var rb = parseFloat(b1) * 4;
            break;
    }


    switch(operator)
    {
        case 'Wynik':
            var rt = parseFloat(t1) * 9;
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_wenglowodanow = parseFloat(rw) * 100 / parseFloat(kcal);
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_bialka = parseFloat(rb) * 100 / parseFloat(kcal);
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_tluszczy = parseFloat(rt) * 100 / parseFloat(kcal);
            break;
    }

    document.getElementById('kcal').value = kcal;
    
    var rw1 = Math.ceil(wynik_wenglowodanow);
    document.getElementById('rw').value = rw1;
    
    var rb1 = Math.ceil(wynik_bialka);
    document.getElementById('rb').value = rb1;

    var rt1 = Math.ceil(wynik_tluszczy);
    document.getElementById('rt').value = rt1;
   
}
