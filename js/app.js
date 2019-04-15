var operand, input1, input2, answer, validChoice;

var choice = prompt("Would you like to use (1)basic functions or (2)advanced functions?");


  if (1)
  {
    operand = prompt("Do you want to do (1)addition, (2)subtraction, (3)multiplication or (4)division?");
    switch (operand)
    {
      case "1":
        input1 = parseInt(prompt("Enter your first value"));
        input2 = parseInt(prompt("Enter your second value"));
        answer = input1 + input2;
        alert(`The answer to your equation is ${answer}`);
        break;
      case "2":
        input1 = parseInt(prompt("Enter your first value"));
        input2 = parseInt(prompt("Enter your second value"));
        answer = input1 - input2;
        alert(`The answer to your equation is ${answer}`);
        break;
      case "3":
        input1 = parseInt(prompt("Enter your first value"));
        input2 = parseInt(prompt("Enter your second value"));
        answer = input1 * input2;
        alert(`The answer to your equation is ${answer}`);
        break;
      case "4":
        input1 = parseInt(prompt("Enter your first value"));
        input2 = parseInt(prompt("Enter your second value"));
        answer = input1 / input2;
        alert(`The answer to your equation is ${answer}`);
        break;
      default:
        alert("You did not choose a valid operation so we have gone with addition");
        input1 = parseInt(prompt("Enter your first value"));
        input2 = parseInt(prompt("Enter your second value"));
        answer = input1 + input2;
        alert(`The answer to your equation is ${answer}`);
    }
  }
  else if (2)
  {
    operand = prompt("Do you want to calulate (1)a number to the power of n or (2) the square root of a number?");
    
  }
