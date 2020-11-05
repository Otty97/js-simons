$(document).ready(function() {
  //Racolta Input
  var randomNuberlList = [];
  var userNumberList = [];
  var randomNumber;
  var userNumber;
  var max = 1;
  var min = 100;

  //ciclo che genera i numeri casuali
  for (var i = 0; i < 5; i++) {
    randomNumber = alert(Math.floor(Math.random() * (max - min + 1)) + min)
    randomNuberlList.push(randomNumber);
  }

  //alert prima del timer
  alert("Cerca di memorizzare questi cinque numeri: " + randomNuberlList);
  console.log(randomNuberlList);

  //set del timer
  var timeInSeconds = 0
  $('timer').text(timeInSeconds)

  var interval = setInterval(function(){
    timeInSeconds++;
    $('timer').text(timeInSeconds)
  },30000)

  //timeout result
  setTimeout(function() {

    clearInterval(interval)

    for (var i = 0; i < 5; i++) {
      userNumber = parseInt(prompt("inserisci i numeri che ricordi"));
      for (var f = 0; f < randomNuberlList.length; f++) {
        if (userNumber == randomNuberlList[f]) {
          userNumberList.push(userNumber);
        }
      }
    }
    alert("Hai indovinato " + userNumberList.length + " numeri. Esattamente i numeri: " + userNumberList)
    console.log(userNumberList)
  }, 30000 + 1)

});
