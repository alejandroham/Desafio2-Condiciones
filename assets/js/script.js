/*funcion mas rapida */
/* 
function cambioestilo1(){
    const img = document.getElementById('plantita1');
    img.classList.toggle('borde-rojo');
}
*/
/*Funcion Solicitada*/
window.addEventListener('DOMContentLoaded', cambioestilo);

function cambioestilo() {
    
    const img = document.getElementById('plantita');
    img.addEventListener('click', function() {
        let click = img.classList.contains('borde-rojo');
        if (click) {
            img.classList.remove('borde-rojo');
        } else {
            img.classList.add('borde-rojo');
        }
    });
}

function ventasticker(){        
    let sticker1 = Number (document.querySelector('#sticker1').value)
    let sticker2 = Number (document.querySelector('#sticker2').value)
    let sticker3 = Number (document.querySelector('#sticker3').value)
    let resultado = Number(sticker1 + sticker2 + sticker3)
    par = document.querySelector('#conteo')

    if(resultado > 0 && resultado <=10){
        par.innerHTML = 'llevas: ' + resultado + ' stickers'
    }else if(resultado >=10) {
    par.innerHTML = 'llevas: ' + resultado + '<strong> no puedes Llevas más de 10 stickers</strong>'
    }else if(resultado < 0 || resultado ==0){
        par.innerHTML = 'Debes seleccionar al menos un sticker'}
    }

    function password(){
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    
    par = document.querySelector('#password')
    if(n1 == 9 && n2 == 1 && n3 == 1){
        par.innerHTML = '<strong style="color: blue;"> Password 1 Correcto!!!</strong>';
    }
    else if(n1 ==7 && n2 ==1 && n3 ==4){
        par.innerHTML = '<strong style="color: green;"> Password 2 Correcto!!!</strong>';
        }
    else{
        par.innerHTML = '<strong style="color: red;">Password ingresado: ' + n1 + n2 + n3 + ' es incorrecto!!!</strong>';
        }
    }