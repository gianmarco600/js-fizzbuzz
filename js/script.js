
// sto cercando di semplificare, intanto pusho il bonus

for (var i = 0; i <= 100; i++){
    var str ='<li>' + i;
    if ( i % 2 == 0 && i % 3 == 0 && i != 0){
        str +='Boolean';
    }
    if ( i % 3 == 0 && i != 0){
        str +='fizz';
    }
    if ( i % 5 == 0 && i != 0){
        str +='buzz';
    }
    str += '</li>'
    document.getElementById('list').innerHTML += str;

}
//     if (m2 == true || m3 == true || m5 == true){
//         if (m3 && m2 && m5){
//             document.getElementById('list').innerHTML += '<li>' + i + 'buzz' + 'fizz' + 'Boolean' + '</li>';
//             nm = m2 = m3 = m5 = false
//         }
//         if (m3 && m2){
//             document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + 'Boolean' + '</li>';
//             nm = m2 = m3 = m5 = false
//         }
//         if (m3 && m5){
//             document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + 'buzz' + '</li>';
//             nm = m2 = m3 = m5 = false
//         }
//         if (m3){
//             document.getElementById('list').innerHTML += '<li>' + i + 'fizz' + '</li>';
//             nm = m2 = m3 = m5 = false
//         }
//         if (m5){
//             document.getElementById('list').innerHTML += '<li>' + i + 'buzz' + '</li>';
//             nm = m2 = m3 = m5 = false
//         }
//     }
//     else if(nm == true){
//         document.getElementById('list').innerHTML += '<li>' + i + '</li>';
//     }    
// }    

