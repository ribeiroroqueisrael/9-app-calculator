/* 
  1) Select the input result (calculator display visor)
  2) Verifying if type is a action or a number
  3) If action then verifying a value
      Case value is 'clear' option, then clear input result
      Case value to be any this symbols (/, *, +, -, .) concat with input value
      Now case value to be this symbol '=', use the function eval to calculate the operation and then add to input value
  4) Else a type just only could be a number and then select the value and concat with input value
*/


/* English Grammar Correction

  1) Select the input result (calculator display)
  2) Check whether the type is an action or a number
  3) If the type is an action then check its value
      If the value is 'clear', clear the result of the calculator display
      If the value is any of these symbols (/, *, +, -, .) concatenate with the calculator display result
      Now if the value is  '=', then use the Eval function to calculate the operation and then add the result, to the calculator display
  4) Otherwise the type could only be a number, then add the value to the calculator display result

*/
function calculator(type, value) {
  let display = document.getElementById('resultado');

  if (type === 'action') {

    switch (value) {
      case 'clear':
        display.value = '';
        break;

      case '/':
      case '*':
      case '+':
      case '-':
      case '.':
        display.value += value;
        break;

      case '=':
        display.value = eval(display.value);
        break;

      default:
        break;
    }
  } else if (type === 'number') display.value += value;
}
