/*
SYNTAX
[] += -_ '" ;: >.<, `~




 */

var cells = [0, 0, 0, 0, 0]
var pointer = 0

var Stack = [] //Important Data

function evaluate(input){
    lines = input.split("|").toString()
    console.log(lines)
    for (i = 0; i < lines.length; i++){
        if(lines[i][0] == "+"){
            cells[pointer]++;
        }else if(lines[i][0] == "="){
            cells[pointer] = lines[i][0].split('=')[0];
        }else if(lines[i][0] == "-"){
            if (cells[pointer] != 0){
                cells[pointer]--;
            }
        }else if(lines[i][0] == "_"){
            cells[pointer] = 0;
        }else if(lines[i][0] == ";"){
            console.log(cells[pointer])
        }else if(lines[i][0] == ">"){
            pointer++;
        }else if(lines[i][0] == "<"){
            pointer--;
        }
    }
}