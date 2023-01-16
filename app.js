function Calculate(operator)
{
    var w1 = document.getElementById('w1').value;

    var b1 = document.getElementById('b1').value;

    var t1 = document.getElementById('t1').value;

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
            var kcal_r = parseFloat(rw) + parseFloat(rb) + parseFloat(rt);
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_wenglowodanow = parseFloat(rw) * 100 / parseFloat(kcal_r);
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_bialka = parseFloat(rb) * 100 / parseFloat(kcal_r);
            break;
    }

    switch(operator)
    {
        case 'Wynik':
            var wynik_tluszczy = parseFloat(rt) * 100 / parseFloat(kcal_r);
            break;
    }

    document.getElementById('kcal').value = kcal_r;
    
    var rw1 = Math.ceil(wynik_wenglowodanow);
    document.getElementById('rw').value = rw1;
    
    var rb1 = Math.ceil(wynik_bialka);
    document.getElementById('rb').value = rb1;

    var rt1 = Math.ceil(wynik_tluszczy);
    document.getElementById('rt').value = rt1;
   
}

function Calculate_Bolus(operator)
{
    var DDI = document.getElementById('ddi').value;
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;

    switch(operator)
    {
        case 'Oblicz':
            var wrazliwosc = 1800 / parseFloat(DDI);

            break;
    }
    var wrazliwosc_zaokraglona = Math.ceil(wrazliwosc);
    document.getElementById('wrazliwosc').value = wrazliwosc_zaokraglona;

}