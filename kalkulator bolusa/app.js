function Calculate(operator){

    var DDI = document.getElementById('ddi').value;
    var sugar = document.getElementById('cukier').value;

    switch(operator)
    {
        case 'Oblicz':
            var wrazliwosc = 1800 / parseFloat(DDI);
            var insulin = parseFloat(sugar) - 100;
            var insulina = parseFloat(insulin) / parseFloat(wrazliwosc);
            break;
    }

    var insulinaa = insulina * 100;
    var insulina_zaokraglona = Math.round(insulinaa)/100;
    
    var wrazliwosc_zaokraglona = Math.ceil(wrazliwosc);
    document.getElementById('insulina').value = insulina_zaokraglona;
    document.getElementById('wrazliwosc').value = wrazliwosc_zaokraglona;
}
