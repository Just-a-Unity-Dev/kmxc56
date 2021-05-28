/** Interpreter variables */
const MEMORY_SIZE = 30000;
const memory = new Array(MEMORY_SIZE).fill(0);
let ipointer = 0;
let mpointer = 0;
let astack = [];

let program = document.getElementById("code").value;
let input = "";
let output = document.getElementById("console").value;

function resetState() {
    memory.fill(0);
    ipointer = 0;
    mpointer = 0;
    output = "";
    input = "";
    program = "";
    astack = [];
}

function sendOutput(value) {
    output += String.fromCharCode(value);
}

function getInput() {
    let val = 0;

    if (input) {
        val = input.charCodeAt(0);
        input = input.substring(1);
    }

    return val;
}

function interpret() {
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
                output += memory[mpointer]
                break;
            case undefined:
                end = true;
                break;
            default:
                break;
        }
        ipointer++;

    }
    console.log(output);
    return output;
}

interpret()