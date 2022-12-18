function display(value) {
  document.getElementById("textarea").value += value;
}
function clr() {
  document.getElementById("textarea").value = "";
}
function equal() {
  var x = document.getElementById("textarea").value;
  var y = eval(x);
  document.getElementById("textarea").value = "=" + y;
}
// function backspace(){
//     var value = document.getElementById("textarea").value;
//     document.getElementById("textarea").value = value.substr(0, value.length - 1);
// }
