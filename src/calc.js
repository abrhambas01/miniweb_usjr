function add (a,b) { 
	let total = a + b ; 
	alert(total) ; 
}

function subtract (a,b) { 
	let total = a - b ; 
	alert(total) ; 
}
function divide (a,b) { 
	let answer = a  / b ; 
	alert(answer) ; 
}
function multiply (a,b) { 
	let answer = a  * b ; 
	alert(answer) ; 
}


export default { 
	add : add , 	
	subtract : subtract ,
	divide : divide , 
	multiply : multiply
} ; 
