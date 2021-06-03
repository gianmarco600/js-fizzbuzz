
// sto cercando di semplificare, intanto pusho il bonus

for (var i = 0; i <= 100; i++){
    var m3 = false;
    var m5 = false;
    var m2 = false;
    var nm = true;
    if ( i % 2 == 0 && i != 0){
        m2 = true;
    }
    if ( i % 3 == 0 && i != 0){
        m3 = true;
    }
    if ( i % 5 == 0 && i != 0){
        m5 = true;
    }
    if (m2 == true || m3 == true || m5 == true){
        if (m3 && m2 && m5){
            document.getElementById('list').innerHTML += '<li>' + i + 'buzz' + 'fizz' + 'Boolean' + '</li>';
            nm = m2 = m3 = m5 = false
        }
        if (m3 && m2){
            document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + 'Boolean' + '</li>';
            nm = m2 = m3 = m5 = false
        }
        if (m3 && m5){
            document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + 'buzz' + '</li>';
            nm = m2 = m3 = m5 = false
        }
        if (m3){
            document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + '</li>';
            nm = m2 = m3 = m5 = false
        }
        if (m5){
            document.getElementById('list').innerHTML += '<li>' + i + 'buzz' + '</li>';
            nm = m2 = m3 = m5 = false
        }
    }
    else if(nm == true){
        document.getElementById('list').innerHTML += '<li>' + i + '</li>';
    }    
}    

