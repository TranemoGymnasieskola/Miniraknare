const calculator = document.getElementById("calculator");

for (let i=0; i<10; i++) {

let btn = document.createElement("button");
    btn.id = "n" + i;
    btn.innerHTML = i;
    btn.className = "number";
    calculator.appendChild(btn);
}
let stack = [];
   // stack.length = 9;
const output = document.getElementsByTagName("output")[0];

let operand = [];

calculator.addEventListener ("click", (e)=> {
	let btn = e.target;
	// console.log(btn);
	if (btn.className === "number") {
		stack.push(btn.innerHTML);
		// console.log(stack);
	} else if (btn ===  document.getElementById("plus")) {
        operand.push(+stack.join(""));
        stack = [];
		operand.push("+");
		console.log(operand);

	} else if (btn ===  document.getElementById("minus")) {
        operand.push(+stack.join(""));
        stack = [];
		operand.push("-");
		console.log(operand);

	} else if (btn ===  document.getElementById("multiplication")) {
        operand.push(+stack.join(""));
        stack = [];
		operand.push("*");
		console.log(operand);

	} else if (btn ===  document.getElementById("division")) {
        operand.push(+stack.join(""));
        stack = [];
		operand.push("/");
		console.log(operand);

	} else if (btn === document.getElementById("equal")) {
        operand.push(+stack.join(""));
        stack = [];
        let tempString = operand.join("");
		console.log(tempString);
		let answer = eval(tempString);
		console.log(answer);
	}
	doOutput();
});

const doOutput = () => {
	let text = stack.join("");
	let disText = text.substring(0, 9);
	output.value = disText;
};

function resetButton() {
	
}

/* Ex. 3,2,1 behöver bli 321

operand, operator

if (plustecken) operands.push
o = +stack.join("")      + är bara för att ändra strängen till ett tal +"32" = 32.
operands.push

Array.join(arr)   join gör det till en string

Om plustecken nedtryckt
Konvertera strecken till sträng (görs med: join) och sedan till number (görs med: +)
lägg "stacken" i array operands. 

EVAL*/



/* Kategorier med knappar
-Sifferknappar
-Operativ
-Backspace

Måste kunna hantera var
*/

