// GOAL: Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript. Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.
// N.B.: nessuna modifica consentita a HTML o CSS



function mostraHamb(){
 $('.hamburger-menu').show();
}

function togliHamb(){
 $('.hamburger-menu').hide();
}


//Metodo 1
// function init() {
//   $('.fas.fa-bars').click(function() {
//     mostraHamb();
//   });
//
//   $('.fas.fa-times').click(function() {
//     togliHamb();
//   });
// }
//
// init();



//Metodo 2

function init() {
  $('.fas.fa-bars').click(mostraHamb);
  $('.fas.fa-times').click(togliHamb);


}

init();
