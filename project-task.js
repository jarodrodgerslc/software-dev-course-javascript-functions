/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/


/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

//task 1

function greetUsers(name1, name2, name3)
{

   console.log(`Welcome ${name1}!, 
Welcome ${name2}!, 
Welcome ${name3}!`);
}

greetUsers("Alice","Bob","Charlie");


//task 2
function printSum(num1, num2){

   return console.log(`The sum of ${num1} and ${num2} is ${num1+num2}.`);
}
printSum(5,10);

//task 3
function printProduct(num1, num2){

   console.log(`The product of ${num1} and ${num2} is ${num1*num2}`);
}
printProduct(5,10);

//task 4

function printNameFromList(names){

   console.log(`Names in the list:`);

   for (let i = 0; i < names.length; i++) {

      console.log(names[i]);
   }
}

printNameFromList(["Alice", "Bob", "Charlie"]);