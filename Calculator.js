const calculator = document.getElementById("calculator");

for (let i=0; i<10; i++) {

let btn = document.createElement("button");
    btn.id = "n" + i;
    btn.innerHTML = i;
    btn.className = "number";
    calculator.appendChild(btn);
}
let stack = [];
stack.length = 9;
const output = document.getElementsByTagName("output")[0];

let operand = [];

calculator.addEventListener ("click", (e)=> {
	let btn = e.target;
	// console.log(btn);
	if (btn.className === "number") {
		stack.push(btn.innerHTML);
		// console.log(stack);
	} else if (btn ===  document.getElementById('plus')) {
		operand.push(btn.innerHTML);
		console.log(operand);
	}
	doOutput();
});
const doOutput = () => {
	let text = stack.join("");
	let disText = text.substring(0, 9);
	output.value = disText;
};


/* Ex. 3,2,1 behöver bli 321

operand, operator

if (plustecken) operands.push
o = +stack.join("")      + är bara för att ändra strängen till ett tal +"32" = 32.
operands.push

Array.join(arr)   join gör det till en string

Om plustecken nedtryckt
Konvertera strecken till sträng (görs med: join) och sedan till number (görs med: +)
lägg "stacken" i array operands. */



/* Kategorier med knappar
-Sifferknappar
-Operativ
-Backspace

Måste kunna hantera var
*/

