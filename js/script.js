//user interface logic
$("document").ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#add1").val());
    const number2 = parseInt($("input#add2").val());
 
    const result= add(number1,number2)
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#sub1").val());
    const number2 = parseInt($("input#sub2").val());
 
    const result= subtract(number1,number2)
    $("#outputsub").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#mul1").val());
    const number2 = parseInt($("input#mul2").val());
 
    const result= multiply(number1,number2)
    $("#outputmul").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#div1").val());
    const number2 = parseInt($("input#div2").val());
 
    const result= divide(number1,number2)
    $("#outputdiv").text(result);
  });
});

//business logic
function add(num1,num2)
{
  return num1+num2;
}
function subtract(num1,num2)
{
  return num1-num2;
}
function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
};