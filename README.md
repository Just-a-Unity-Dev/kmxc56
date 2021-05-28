# kmxc56
Welcome to the hellish landscape that is `kmxc56`.
An esolang made by Just-a-Unity-Dev, code stolen from [here.](https://medium.com/@shawnmclau/building-a-brainfuck-interpreter-with-javascript-part-1-116fdb293f5b)
He certainly lost his brain `+9;` times doing this. (the code outputs 9)

#### Chapter 3 (Tree)
- [Syntax](#syntax)
- - [Basic Pointers](#basic-pointers)
- - [Math Time](#math-time)
- - [Stacks and Stuff](#stacks-and-stuff.)
- - [Displaying Stacks, Strings and more](#displaying-stacks-strings-and-more)
- - [Other Important Commands](#other-important-commands)


# SYNTAX
## Basic Pointers
You gotta learn this before anything else
### \> [Pointer Right]
This simply increments a pointer to the right. Easy enough
##### Usage
`>`
### \< [Pointer Left]
This simply increments a pointer to the left. Seriously, this isn't even hard.
##### Usage
`><` (we have to move to the right first, because then we would just hit a wall)

## Math Time
So, something important in a "normal" programming language is **Math*! Of course, even how hellish `kmxc56` is, it still has math.

### \+ [Increment]
This increments the current cell by an integer in the next character.
##### Usage
`+#5;` displays `5`

### \- [Decrement]
This decrements the current cell by an integer the second previous character
##### Usage
`5#-;` will display `-5`

### \= [Set]
Hate using the new **Math** TM commands? Well, you now have `=`! Or, set! This sets a cell to an integer that is positive or negative based on the

##### Usage
`=P9;` displays `9`
`=N9` displays `-9`


## Cell Manipulation
### _ [Reset]
This simply resets the cell. There is no need for explanation.
##### Usage
`+#2_;` displays `0`

## Stacks and stuff.
### ' [Push Cell to Stack]
This is pretty simple. It pushes the cell value to the stack.
`+#3'` will add `3` to the stack

### " [Pop Top Stack and Set Cell Value]
`+#6'>+#3'";` will display `3`

### Mini Math
Ok, so this is just Math with extra steps
#### * [Multiply the top 2 integers in the stack]
This multiplies the top 2 integers in the stack, pretty easy.
###### Usage
`+#3'>_+#5'_*";` will display `15`
#### $ [Divide the top 2 integers in the stack]
This divides the top 2 integers in the stack, pretty easy.
REMEMBER: TOP / SECOND
###### Usage
`+#5'>_+#5'_$";` will display `1`
#### $ [Add the top 2 integers in the stack]
This divides the top 2 integers in the stack, pretty easy.
###### Usage
`+#5'>_+#5'_$";` will display `1`
#### $ [Subtract the top 2 integers in the stack]
REMEMBER: TOP - SECOND
This divides the top 2 integers in the stack, pretty easy.
###### Usage
`+#5'>_+#5'_$";` will display `1`


## Displaying Stacks Strings and more

### ; [Display Cell Value]
Displays the current cell value to console
##### Usage
`++;` displays `2`

### . [Display as Ascii]
Displays current cell value as ASCII to console
`++++++++++++++++++++++++++++++++.` displays ` `, or a space!

### \` [ Display Stack from Top to Bottom]


## Other Important Commands

### , [Input]
This reads the first character of an input, removes it and stores it's ascii data into the cell.
###### Usage
`H` as input
`,;` will display `72`
`,.` will display `H`

### : [If]
This checks if the current cell is the next integer, if the current cell is

### \~ [Stop]
This just ends the program. Very simple

### \# [Nothing]
Guess what this does? Absolutely NOTHING! (Truttle1 reference), this is just an empty space. It is usually used to fill in gaps between a math command and the number.