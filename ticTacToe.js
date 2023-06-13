/**
 * TIC TAC TOE
 */

let jugador1 = 'X';
let jugador2 = 'O';

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
// let tablero = ['','','','','','','','',''];
let tablero = document.getElementsByClassName('casilla');
let turno=true;
let ganador=null;
/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 */
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let puntosX=0;
let puntosO=0;
let marcador=document.getElementById('marcador');

marcador.textContent= puntosX + '-' + puntosO;

for (let index = 0; index < tablero.length; index++) {
    tablero[index].setAttribute('onclick', `pintaconsola(${index})`);
}

/**
 * @param
 * @return
 * Esta funcion se encarga de pintar en las casillas las fichas necesarias para jugar al Tic Tac Toe.
*/
function pintaconsola(numero) {
     if (turno == true) {
        if(tablero[numero].textContent==''){
            tablero[numero].textContent = 'X';
            turno = !turno;
        }else{
            alert('Casilla ocupada');
        }
    } else {
        if(tablero[numero].innerHTML==''){
            tablero[numero].textContent = 'O';
            turno = !turno;
        }else{
            alert('Casilla ocupada');
        }
    }
    GANAR();
}
/**
 * @param
 * @return
 * Esta funcion compara las combinaciones ganadoras con el tablero y saca un alert para el ganador
*/
function GANAR(){
    let actual_X = [];
    let actual_O = [];
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            actual_X.push(i);
        }
    }
    
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual_X.includes(combinacionGanadora[i][0]) && actual_X.includes(combinacionGanadora[i][1]) && actual_X.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS X');
            ganador=0;
            for(let j=0; j<3;j++){
                tablero[combinacionGanadora[i][j]].setAttribute('id','verde');  
            }
            for (let index = 0; index < tablero.length; index++) {
                tablero[index].removeAttribute('onclick');
            }
        }
    }

    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'O'){
            actual_O.push(i);
        }
    }
    
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual_O.includes(combinacionGanadora[i][0]) && actual_O.includes(combinacionGanadora[i][1]) && actual_O.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS O');
            ganador=1;
            for(let j=0; j<3;j++){
                tablero[combinacionGanadora[i][j]].setAttribute('id','verde');  
            }
            for (let index = 0; index < tablero.length; index++) {
                tablero[index].removeAttribute('onclick');
            }
        }
    }
}
/**
 * @param
 * @return
 * Esta funcion reinicia el tablero para poder seguir jugando sin tener que hacer refresh, de esa forma mantendremos la puntuacion.
*/
function reinicio(){
    for (let index = 0; index < tablero.length; index++) {
        tablero[index].textContent="";
    }
    if(ganador==0){
        puntosX++;
    }else if(ganador==1){
        puntosO++;
    }
    marcador.textContent= puntosX + '-' + puntosO;
    ganador=null;
    for (let index = 0; index < tablero.length; index++) {
        tablero[index].setAttribute('onclick', `pintaconsola(${index})`);
        tablero[index].removeAttribute('id');
    }
}