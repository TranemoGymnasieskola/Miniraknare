const calculator = document.getElementById("calculator");
const display    = document.getElementById("display");
/*const theme      = document.getElementById("changeTheme");
const style      = document.getElementById("theme2");
const style2     = document.getElementById("style"); */

// SKAPAR SIFFRORNA
for (let i=0; i<10; i++) {

// SKAPAR KNAPPARNA	
let btn = document.createElement("button");
    btn.id = "n" + i;
    btn.innerHTML = i;
    btn.className = "number";
    calculator.appendChild(btn);
}
let stack = [];
 
// GÖR SÅ ATT DET STÅR EN NOLLA PÅ PLATSEN FÖR SIFFRORNA
const output = document.getElementsByTagName("output")[0];

let operand = [];

//let comma = [];

// GÖR SÅ ATT DET DYKER UPP EN SIFFRA NÄR MAN TRYCKER PÅ DEN OCH ATT TALEN BERÄKNAS.
calculator.addEventListener("click", (e)=> {
	let btn = e.target;
	// console.log(btn);
	if (btn.className === "number") {
		stack.push(btn.innerHTML);
		// console.log(stack);
	} else if (btn ===  document.getElementById("plus")) {
        operand.push(+stack.join(""));
        display.innerHTML = stack[0];
        stack = [];
		operand.push("+");console.log(operand);

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

	} else if (btn === document.getElementById("Pi")) {
		stack.push(3.14159265359);
		// console.log(stack);


	} else if (btn ===  document.getElementById("comma")) {
        stack.push(".");	
	console.log(operand);  
		

	} else if (btn === document.getElementById("potency")) {
		operand.push(+stack.join(""));
		stack = [];
		operand.push("**");
		console.log(operand);


    // NOLLSTÄLLER MINIRÄKNAREN
	} else if (btn === document.getElementById("reset")) {
		stack = [];
		operand = [];
		display.innerHTML = "0";


	} else if (btn === document.getElementById("convert")) {
		stack[0] *= -1;


	} else if (btn === document.getElementById("equal")) {
        if(stack.length !== 0 && stack[0] !== 0 && stack[0] !== NaN) {
        	operand.push(+stack.join(""));
        }
        stack = [];
        let tempString = operand.join("");
		//console.log(tempString);
		let answer = eval(tempString);
		console.log(answer);
		stack.push(answer);
		operand = [];


	} else if (btn === document.getElementById("ln")) {
		// operand.push(+stack.join(""));
		// stack.push(')');
		operand.push("Math.log(");
		console.log(operand);


	} else if (btn === document.getElementById("(")) {
		// operand.push(+stack.join(""));
		// stack.push('(');
		operand.push("(");
		console.log(operand);


	} else if (btn === document.getElementById(")")) {
		operand.push(+stack.join(""));
		stack = [];
		operand.push(")");
		console.log(operand);

	}

	if (btn != reset && btn != document.getElementById("display")) {
		doOutput();
	}
});


// HÄNGER IHOP MED FUNKTIONEN OVAN OCH GÖR SÅ ATT SAKER VISAS.
const doOutput = () => {
	let text = stack.join("");
	let disText = text.substring(0, 20);
	output.value = disText;
};





/*theme.addEventListener("click", (e) => {

	style2.disabled = false;
});*/

function btnTheme1() {
	document.getElementById("theme2").disabled = false;
};

function btnTheme2() {
	document.getElementById("theme2").disabled = true;
};

/* function changeTheme() {
	if (themeNr === 1) {
		themeNr = 0;
		theme.setAttribute("href", "theme2.css");
	} else if (themeNr === 0) {
		themeNr = 1;
		theme.setAttribute("href", "style.css");
	}
}; */


/*window.onload = function() {
	document.getElementById("style").removeAttribute("disabled");
} */

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




// ÄNDRAR TALET TILL ATT VARA NEGATIVT/POSITIVT
/*let convert = document.getElementById("convert");

convert.addEventListener("click", (event) => {
	stack[0] *= -1;
});  */

