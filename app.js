function Calculate_w(operator)
{
    var w1 = document.getElementById('w1').value;
    var kcal = document.getElementById('kcal').value;

    switch(operator)
    {
        case 'Wenglowodany Wynik':
            var rw = parseFloat(w1) * 4 * 100 / parseFloat(kcal);
            break;
    }
    document.getElementById('rw').value = rw;
}


function Calculate_b(operator)
{
    var b1 = document.getElementById('b1').value;
    var kcal = document.getElementById('kcal').value;

    switch(operator)
    {
        case 'Bialko Wynik':
            var rb = parseFloat(b1) * 4 * 100 / parseFloat(kcal);
            break;
    }
    document.getElementById('rb').value = rb;
}

function Calculate_t(operator)
{
    var t1 = document.getElementById('t1').value;
    var kcal = document.getElementById('kcal').value;

    switch(operator)
    {
        case 'Tluszcz Wynik':
            var rt = parseFloat(t1) * 9 * 100 / parseFloat(kcal);
            break;
    }
    document.getElementById('rt').value = rt;
}