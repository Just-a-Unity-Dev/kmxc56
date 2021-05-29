/** Interpreter variables */
const memory = new Array(30000).fill(0);
let ipointer = 0;
let mpointer = 0;
let astack = [];

let temp;
var key = "89iyogrrdfjhyn87iuolGTKBIL";

let stack = ["89iyogrrdfjhyn87iuolGTKBIL", "89iyogrrdfjhyn87iuolGTKBIL"]

function resetState() {
    memory.fill(0);
    ipointer = 0;
    mpointer = 0;
    astack = [];
    temp = "";
    stack = ["89iyogrrdfjhyn87iuolGTKBIL", "89iyogrrdfjhyn87iuolGTKBIL"];
    document.getElementById("console").innerHTML  = "";
}

function sendOutput(value, addLine) {
    if (addLine){
        document.getElementById("console").innerHTML += String.fromCharCode(value) + "\n";
    }else{
        document.getElementById("console").innerHTML += String.fromCharCode(value);
    }
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

    if (stack[0] != "89iyogrrdfjhyn87iuolGTKBIL" || stack[1] != "89iyogrrdfjhyn87iuolGTKBIL"){
        stack[0] = "89iyogrrdfjhyn87iuolGTKBIL";
        stack[1] = "89iyogrrdfjhyn87iuolGTKBIL";
        console.log("YOU CANT PASS ME THIS TIME")
    }

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
                if (program[ipointer + 1] != "&")
                    sendOutput(memory[mpointer], false);
                else
                    sendOutput(memory[mpointer], true);
                break;
            case '_':
                memory[mpointer] = 0;
                break;
            case ',':
                memory[mpointer] = getInput();
                break;
            case '[':
                if (memory[mpointer]) { // If non-zero
                    astack.push(ipointer);
                } else { // Skip to matching right bracket
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
            case "'":
                stack.push(memory[mpointer]);
                break;
            case '"':
                if (stack[stack.length - 1] != "89iyogrrdfjhyn87iuolGTKBIL"){
                    memory[mpointer] = parseInt(stack[stack.length - 1]).toString()
                    stack.pop();
                }
                break;
            case "*":
                if (stack[stack.length - 1] != "89iyogrrdfjhyn87iuolGTKBIL"){
                    temp = stack[stack.length - 1] * stack[stack.length - 2]
                    stack.pop();
                    stack.pop();
                    stack.push(temp);
                }
                break;
            case "$":
                if (stack[stack.length - 1] != "89iyogrrdfjhyn87iuolGTKBIL"){
                    temp = stack[stack.length - 1] / stack[stack.length - 2]
                    stack.pop();
                    stack.pop();
                    stack.push(temp);
                }
                break;
            case "~":
                document.getElementById("console").innerHTML += stack.reverse().join().replace(key, '').toString() + "\n"
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

function js_interpreter_debug(){
    console.log(
        memory,
        astack,
        ipointer,
        mpointer
    )
}

function setTo(value){
    if (value == "helloworld")
        document.getElementById("code").value = "+8>+9[1-<+9>]<9-8-.3-.+7..+3.9-9-9-9-1-+2.9-3-.+9+9+9+9+3+9+3+4.8-.+3.6-.9-1-+2.9-9-9-8-."
    else if (value == "adder")
        document.getElementById("code").value = ",>,[<+1>1-]<9-1-9-1-9-1-9-1-8-."
    else if (value == "multiplier")
        document.getElementById("code").value = ",9-1-9-1-9-1-9-1-8-',9-1-9-1-9-1-9-1-8-'*\";"
    else if (value == "asciitoDec")
        document.getElementById("code").value = ",9-1-9-1-9-1-9-1-8-;"
}