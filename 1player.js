var firstPerson = prompt("1st person; enter a number between 1-6");
if ((firstPerson < 1) || (firstPerson >6) || (isNaN(firstPerson))) {
  window.alert("you cannot follow directions!!!");
}
else {
var secondPerson = Math.floor((Math.random()*5)+1);
if (firstPerson == secondPerson) {
  window.alert("you win!!!");
}
else {
  window.alert("your answer was " + firstPerson);
  window.alert("the computers answer was " + secondPerson);
  window.alert("you lose");
  }
}
