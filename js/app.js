var operand, input1, input2, answer;

var quit = false;

// will run this loop until the user wants to quit
do
{
  // will continue this loop until a valid function has been selected
  while (choice != 1 && choice != 2)
  {
    var choice = prompt("Would you like to use (1)basic functions or (2)advanced functions?");
  }
    // basic functions
    if (choice == 1)
    {
      operand = prompt("Do you want to do (1)addition, (2)subtraction, (3)multiplication or (4)division?");
      input1 = parseFloat(prompt("Enter your first value")) || 0;
      input2 = parseFloat(prompt("Enter your second value")) || 0;

      switch (operand)
      {
        case "1":
          answer = input1 + input2;
          alert(`The answer to your equation is ${answer}`);
          break;
        case "2":
          answer = input1 - input2;
          alert(`The answer to your equation is ${answer}`);
          break;
        case "3":
          answer = input1 * input2;
          alert(`The answer to your equation is ${answer}`);
          break;
        case "4":
          answer = input1 / input2;
          alert(`The answer to your equation is ${answer}`);
          break;
        default:
          alert("You did not choose a valid operation so we have gone with addition");
          answer = input1 + input2;
          alert(`The answer to your equation is ${answer}`);
      }
    }
    // more advanced functions
    else if (choice == 2)
    {
      operand = prompt("Do you want to calulate (1)a number to the power of n or (2) the square root of a number?");
      switch (operand)
      {
        case "1":
          input1 = parseFloat(prompt("Enter your first value")) || 0;
          input2 = parseFloat(prompt("Enter your second value")) || 0;
          answer = Math.pow(input1, input2);
          alert(`The answer to your equation is ${answer}`);
          break;
        case "2":
          input1 = parseFloat(prompt("Enter the number you want to square root")) || 0;
          answer = Math.sqrt(input1);
          alert(`The answer to your equation is ${answer}`);
          break;
        default:
          alert("You did not choose a valid option so we have gone with sqaure root");
          input1 = parseFloat(prompt("Enter the number you want to square root")) || 0;
          answer = Math.sqrt(input1);
          alert(`The answer to your equation is ${answer}`);
      }
    }

  var repeat = prompt("Do you want to do another calculation? Yes/No?");
  if (repeat === "No" || "no")
  {
    quit = true;
  }

} while (quit === false);
