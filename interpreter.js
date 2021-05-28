/** Interpreter variables */
const memory = new Array(30000).fill(0);
let ipointer = 0;
let mpointer = 0;
let astack = [];

function resetState() {
	memory.fill(0);
	ipointer = 0;
	mpointer = 0;
	astack = [];
	document.getElementById("console").innerHTML  = "";
}

function sendOutput(value) {
	document.getElementById("console").innerHTML += String.fromCharCode(value) + "\n";
}

function getInput() {
	let input = document.getElementById("insert").value;
	let val = 0;
	if (input) {
		val = input.charCodeAt(0);
		document.getElementById("insert").value = input.substring(1);
	}
	return val;
}

function interpret() {
	let program = document.getElementById("code").value;
	let input = document.getElementById("insert").value;
	let end = false;
	while (!end) {
		switch (program[ipointer]) {
			case '>':
				if (mpointer == memory.length - 1)
					memory.push(0, 0, 0, 0, 0);
				mpointer++;
				break;
			case '<':
				if (mpointer > 0)
					mpointer--;
				break;
			case '+':
				memory[mpointer] += parseInt(program[ipointer + 1]);
				break;
			case '-':
				memory[mpointer] -= parseInt(program[ipointer - 1]);
				break;
			case '.':
				sendOutput(memory[mpointer]);
				break;
			case '_':
				memory[mpointer] = 0;
				break;
			case ',':
				memory[mpointer] = getInput();
				break;
			case '[':
				if (memory[mpointer]) {
					astack.push(ipointer);
				} else {
					let count = 0;
					while (true) {
						ipointer++;
						if (!program[ipointer]) break;
						if (program[ipointer] === "[") count++;
						else if (program[ipointer] === "]") {
							if (count) count--;
							else break;
						}
					}
				}
				break;
			case ']':
				ipointer = astack.pop() - 1;
				break;
			case '=':
				memory[mpointer] = program[ipointer + 2]
				break;
			case '~':
				end = true;
				break;
			case ';':
				document.getElementById("console").innerHTML += memory[mpointer] + "\n"
				break;
			case undefined:
				end = true;
				break;
			default:
				break;
		}
		ipointer++;
	}
	return;
}