function Calculate(operator){

    var DDI = document.getElementById('ddi').value;
    var sugar = document.getElementById('cukier').value;
    var wenglo = document.getElementById('wenglowodany').value;
    var gh = document.getElementById('g/h').value;

    switch(operator)
    {
        case 'Oblicz':
            var wrazliwosc = 1800 / parseFloat(DDI);
            var insulin = parseFloat(sugar) - 100;
            var insulina = parseFloat(insulin) / parseFloat(wrazliwosc);
            var posilek = parseFloat(wenglo) / parseFloat(gh);
            break;
    }

    var insulinaa = insulina * 100;
    var insulina_zaokraglona = Math.round(insulinaa)/100;

    var insulina_posilkowa = posilek * 100;
    var posilek_zaokragonglony = Math.round(insulina_posilkowa)/100;
    
    var wrazliwosc_zaokraglona = Math.ceil(wrazliwosc);
    var insulina_ogolna = parseFloat(insulina_zaokraglona) + parseFloat(posilek_zaokragonglony);
    document.getElementById('insulina').value = insulina_zaokraglona;
    document.getElementById('wrazliwosc').value = wrazliwosc_zaokraglona;
    document.getElementById('posilek').value = posilek_zaokragonglony;
    document.getElementById('insulina_ogolna').value = insulina_ogolna;
}
