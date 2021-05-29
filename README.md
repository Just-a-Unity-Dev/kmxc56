# kmxc56
Welcome to the hellish landscape that is `kmxc56`.
An esolang made by Just-a-Unity-Dev, code stolen from [here.](https://medium.com/@shawnmclau/building-a-brainfuck-interpreter-with-javascript-part-1-116fdb293f5b)
He certainly lost his brain `+9;` times doing this. (the code outputs 9)
The interpreter is [here](https://just-a-unity-dev.github.io/kmxc56/).

#### Chapter 3 (Tree)
- [Tutorial](#tutorial)
- - [Basics](#basics)
- - - [Setup](#setup)
- - - [Coding](#coding)
- - [Mediocre](#mediocre)
- - [Advanced](#advanced)
- [Syntax](#syntax)
- - [Basic Pointers](#basic-pointers)
- - [Math Time](#math-time)
- - [Stacks and Stuff](#stacks-and-stuff.)
- - [Displaying Stacks, Strings and more](#displaying-stacks-strings-and-more)
- - [Other Important Stuff](#other-important-commands)

# Tutorial
## Basics
Welcome to the Basics of kmxc56!
I expect you to at least know the basics once you read Mediocre, so lets do that!

### Setup
Go to [this website](https://just-a-unity-dev.github.io/kmxc56/) and you are ready!
To run code, click the Reset Interpreter and click Interpret
You need to reset the interpreter first, otherwise there will be conflicts and the cells will still be the same.

### Coding

The simplest program is!
`;`
I know, it doesn't do much, but it does something! It displays `0`!
Okay, data in kmxc56 is stored in a tape or an array of cells. You can pretty much do everything here. Now, lets learn how to move our pointer!
But first, what is a pointer?
A pointer is an integer, which represents what cell are you modifying. So, if we wanted to modify Cell 30, we move our pointer 30 times! So, now that we know what a pointer is, we can get started!
`<` and `>` are some of the simplest but most important commands in kmxc56. These move the pointer left and right! But we can't do much yet, all we're doing is moving the pointer left and right. So, lets do some math!
`+` and `-` are also one of the most simplest but most important commands in kmxc56. These modify the current cell. In order to subtract, we place the integer first then the symbol, the same goes for adding, except the integer goes after the symbol. So, if we do `+5;`, it will display `5` and `+5-;` will display 0

`;` simply displays the current cell's value, it's pretty useful for debugging.
So, lets write a program!
`>+5;`
This simply moves the pointer right, and adds 5 to the current cell and displays it! Hurray!

Now, in order to show you the next program, allow me to introduce you to ***Loops***!
`[` and `]` are the instructions for loops! When the code hits a `]`, if the current cell isn't 0 it will loop back to the `[`. We can use this to make our first REAL program!

#### The Adder Program (--)
Okay, let's make the first part of our calculator, an adder! This won't take input, it will just move 2 cells into 1.
First, we increment 2 cells. You can replace the first 2 integers with anything you want. `+3>+2` Don't move the pointer back.
After that, we begin a loop. We start by decrementing the current cell, moving the pointer back and then incrementing that cell, then we move back. `+3>+2[1-<+1>]`
Okay, nice! We have an adder, but we need to display the value, so lets do that! We must move back since we are on a cell that is 0, then display it!  `+3>+2[1-<+1>]<;`
Good job! We now have an adder program!
I'll update this later, since I need to do more stuff, but feel free to read the [syntax](#syntax) page!

## Mediocre

stuff isnt done yet, try messing around

## Advanced
stuff isnt done yet, try messing around

# SYNTAX
## Basic Pointers
You got to learn this before anything else
### \> [Pointer Right]
This simply increments a pointer to the right. Easy enough
##### Usage
`>`
### \< [Pointer Left]
This simply increments a pointer to the left. Seriously, this isn't even hard.
##### Usage
`><` (we have to move to the right first, because then we would just hit a wall)

## Math Time
So, something important in a "normal" programming language is **Math**! Of course, even how hellish `kmxc56` is, it still has math.

### \+ [Increment]
This increments the current cell by an integer in the next character.
##### Usage
`+5;` displays `5`

### \- [Decrement]
This decrements the current cell by an integer the second previous character
##### Usage
`+55-;` will display `0`

### \= [Set]
Hate using the new **Math** TM commands? Well, you now have `=`! Or, set! This sets a cell to an integer that is positive or negative based on the

##### Usage
`=9;` displays `9`


## Cell Manipulation
### _ [Reset]
This simply resets the cell. There is no need for explanation.
##### Usage
`+2_;` displays `0`

## Stacks and stuff.

STACKS! YAY! WAYS TO STORE VARIABLES! Stack's begin at 2, because I am EVIL!

### ' [Push Cell to Stack]
This is pretty simple. It pushes the cell value to the stack.
`+#3'` will add `3` to the stack

### " [Pop Top Stack and Set Cell Value]
`+6'>+3'";` will display `3`

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
`+5'_+5'_/";` will display `1`


## Displaying Strings and more

### ; [Display Cell Value]
Displays the current cell value to console
##### Usage
`++;` displays `2`

### . [Display as Ascii]
Displays current cell value as ASCII to console
`++++++++++++++++++++++++++++++++.` displays ` `, or a space!



## Other Important Commands

### , [Input]
This reads the first character of an input, removes it and stores it's ascii data into the cell.
###### Usage
`H` as input
`,;` will display `72`
`,.` will display `H`

### \# [Nothing]
Guess what this does? Absolutely NOTHING! This is just an empty space. It is usually used to fill in gaps between a math command and the number.