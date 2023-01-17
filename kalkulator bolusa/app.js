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