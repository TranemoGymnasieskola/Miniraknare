const calculator = document.getElementById("calculator");

for (let i=0; i<10; i++) {

let btn = document.createElement("button");
    btn.id = "n" + i;
    btn.innerHTML = i;
    btn.className = "number";
    calculator.appendChild(btn);
}
let stack = [];
const output = document.getElementsByTagName("output")[0];

calculator.addEventListener ("click", (e)=> {
	let btn = e.target;
	// console.log(btn);
	if (btn.className === "number") {
		stack.push(btn.innerHTML);
		// console.log(stack);
	}
	doOutput();
});
const doOutput = () => {
	let text = stack.join("");
	output.value = text;
};








function buttons() {

}
document.getElementById("calculator").addEventListener("click", buttons, false);





/* Kategorier med knappar
-Sifferknappar
-Operativ
-Backspace

Måste kunna hantera var
*/

