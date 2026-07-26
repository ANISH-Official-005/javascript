/* //console.log(print statement):
var a=10;                            //output: 319
var b=309;            //inserting semicolon in js code is not mandatory because js has an Automatic Semicolon Insertion. 
console.log(a+b); */

/* //using var as variable
                                    
var a=10                             //var is a function scope or global scope
var b=39                            //output: 49
console.log(a+b)
 */

/* //using let as variable

let a=10                            // let is a block scope
let b=39                            //output: 49
console.log(a+b) */

/* //using const as variable:
                                    //const is a block scope
const a =100                        //output: 139
const b=39
console.log(a+b) */


/* //var-global scope, let-local scope:
{
var a=10    //var is a global scope accessed anywhere   //output: 10
}
console.log(a) */

/* {
let a=10  //let is a local scope accessed only in particular area where it assigned shows error
console.log(a)           //output: 10
} */

//diff b/w constant & let,var
/*  const a=10    
a=39         //const means the initial value is the fixed value and cannot be replaced
console.log(a) */    //output: error  

/* var a=10
a=20                  //output: 20
console.log(a) */

/* let a=10
a=30                  //output: 30
console.log(a)  */     

/* const weekdays = 7      //output: 7
console.log(weekdays)   //const is used for the fixed values like week has 7 days */


/* //1. create a variable named "Price" and set it to a specific price value.
//2. create a variable named "Product" and set it to a product name.
//3. create a variable named "Tax" and set it to a specific tax value.
//4. print the name of the product
//5. calculate the total price amount, including tax(total=Price+Tax),and then print it

var Price=100
const Product="box"
var tax=10
console.log(Product)         //output: box
var Total=Price+tax          //        110
console.log(Total) */


/* //1. Declare a variable named "FruitName."
//2. Declare a variable named "count."
//3. Declare a variable named "Price" and set it to the price of the fruit.
//4. Declare a variable named "total" and calculate it by multiplying the "count" by the "Price."
//5. Print the name of the fruit.
//6. Print the total price of the fruits.

var FruitName = "Dragonfruit"                   //output: Dragonfruit
var count=10                                    //        1000                   
var Price = 100
var total=Price*count
console.log(FruitName) 
console.log(total) */

//keywords:

// if,else,var,let,const  dont use keywords as variables

//comments:
//to make the code readable adding short notes

//post and pre increment:
//post increment
/* var a=10          //'a' value is assigned first to 'b' and then increment done if 'a' after a++ 
var b=a++            // Here value of b is 10 because due to the post increment when the a++ see next 'a' then value becomes 11.
console.log(b)       // otherwise the value of 'b' is 10                 output: 10 */

/* //pre increment
var a=10                //output: 11
var b=++a            
console.log(b) */

//post increment - clear example
/* var a=10          //'a' value is assigned first to 'b' and then increment done if 'a' after a++ 
var b=a++            //output: 11
console.log(a)                 10    
console.log(b)      */

/* //pre increment
let x=5
let y=++x;                          
console.log(x)                      //output:6
console.log(y)                             //6 */
/* 
//To check the datatype
var a=true
console.log(typeof(a)) */

//Javascript Datatype
// (i) Primitive Datatype        (ii) Non Primitive Datatype
//       1. Number                      1. Object
//       2. String                      2. Array
//       3. Boolean
//       4. Null
//       5. Undefined

/* //Null datatype

var a=null              //output: null
console.log(a) */

/* //undefined

var a                   //output: undefined
console.log(a) */

//function:
/* function abc()
{
    console.log("anish")                            //output: anish
}
abc() */

//function for oppo, samsung, Apple, Redmi
/* function samsung()
{
    console.log("This is Samsung")
}
                                                    
function oppo()                                     //output: This is Samsung
{                                                   //        This is oppo
    console.log("This is oppo")                     //        This is Apple
}                                                   //        This is Redmi

function apple()
{
    console.log("This is Apple")
}

function redmi()
{
    console.log("This is Redmi")
}

samsung()
oppo()
apple()
redmi() */
 

// JavaScript Exercise
//- Create two variables a and b.
//- Create a function called add
// This functions should print addition of two numbers

/* var a=1
var b=2

function add()                          //output: 3
{
console.log(a+b)
}

add()
 */
/* JavaScript Exercise

- Create a variable called factor,fplayer,fmovie
- Create a function called favourite()
- Everytime you call this function, this function
should return the following output
output:
Favourite Actor : Kamal
Favourite Player : Dhoni
Favourite Movie:Anbe sivam */

/* var factor="Kamal"
var fplayer="Dhoni"
var fmovie="Anbe sivam"

function favourite()
{
    console.log("Favourite Actor:"+factor)                  //output: Favourite Actor:Kamal
    console.log("Favourite Player:"+fplayer)                //        Favourite Player:Dhoni
    console.log("Favourite Movie:"+fmovie)                  //        Favourite Movie:Anbe sivam
}
favourite() */


//parameters in javascript

/* function add(a,b)                                   //output: 30
{
    console.log(a+b)
}

add(10,20) */

/* JavaScriptExercise

- Create a function called area()
- This function should get 2 values as
parameter(length, breadth)
- Pass two values to the function and print the
result */

/* function area(length,breadth)
{
 console.log("Area:"+length*breadth)                        //output: Area:50
}
area(5,10) */


/* function area(l,b)
{
    var a=l*b
    console.log("Area:"+a)                                  //output: Area:50
}

var length=20
var breadth=30
area(5,10) */

//return keyword in function

/* function myname()
{
    return "Anish"                          //output: Anish
}

var a=myname()
console.log(a) */

/* Create a function called add which SHOULD take 2 parameter a and b
and it should return the addition of two variables */

/* function add(a,b)
{
 return a+b                     //output: 3
}

var sum=add(1,2)
console.log(sum) */

//if else

/* if(true)
{
    console.log("if is working")                //output: if is working
}
else
{
    console.log("else is working")
} */

/* if else exercise:

1. Question: it is rainging outside?
  - if the answer is "yes" print "Take an Umbrella"
  - if the answer is "no" print "Enjoy the sunshine" */

/* 
1. Question: Is it raining outside?
- If the answer is "yes," print "Take an umbrella."
- If the answer is "no," print "Enjoy the sunshine."

var rain=false
if(rain)
{
    console.log("Take an Umbrella")                 //output: Enjoy the Sunshine
}
else{
    console.log("Enjoy the Sunshine")
}
 */
/* 
2. Question: Did you finish your homework?
- If the answer is "yes," print "Great job!"
- If the answer is "no," print "Finish your homework before playing." */

/* var homework=true 
if(homework)
{
    console.log("Great job!")                               //Output: Great job!
}
else
{
    console.log("Finish your homework before playing.")
} */

/* 3. Question: Are there any cookies left?
- If the answer is "yes," print "Would you like a cookie?"
- If the answer is "no," print "Time to bake more cookies." */

/* cookies_left=true
if(cookies_left)
{
    console.log("Would you like a cookie?")                 //output: Would you like a cookie
}
else
{
    console.log("Time to bake more cookies.")
} */

/* 4. Question: Did you brush your teeth?
- If the answer is "yes," print "Your teeth are clean."
- If the answer is "no," print "Go brush your teeth now." */

/* brush_teeth=false
if(brush_teeth)
{
     console.log("Your teeth are clean.")               //output: Go brush your teeth now.
}
else
{
    console.log("Go brush your teeth now.")
}
 */
/* 5. Question: Is it your birthday today?
- If the answer is "yes," print "Happy birthday! Enjoy your special day!"
- If the answer is "no" print "Have a great day!" */

/* birthday_today=false
if(birthday_today)
{
    console.log("Happy birthday! Enjoy your special day!")
}
else                                                    //output: Have a great day!
{
    console.log("Have a great day!")
} */

/* 
//logical AND

console.log(true && true)                               //output: true
console.log(false && true)                              //        false
console.log(false && false)                             //        false

console.log(true && true && true)                       //        true

//logical OR
console.log(true ||  true || false)                     //Output: false */

/* //logical NOT
console.log(!true)                                      //output: false
console.log(!false)                                     //        true */

/* 1. Question: What is the color of the traffic light?
- If the answer is "red," print "Stop."
- If the answer is "yellow," print "Get Ready"
- If the answer is "green," print "Go." */


/* 
var color="green"

if(color=="red")
{
    console.log("stop")
}
if (color=="yellow") {
    console.log("Get Ready")
} 
if (color=="green") {
    console.log("Go")
}  */

/* 2. Question: What is the season of the year?
- If the answer is "spring," print "Enjoy the blooming flowers."
- If the answer is "summer," print "Have fun in the sun."
- If the answer is "autumn" or "fall," print "Admire the colorful leaves."
- If the answer is "winter," print "Bundle up and stay warm." */

/* var season="winter"

if(season=="spring")
{
    console.log("Enjoy the blooming flowers.")
}
if(season=="summer")
{
    console.log("Have fun in the sun.")
}
if(season=="autumn")
{
    console.log("Admire the colorful leaves.")
}
if(season=="winter")
{
    console.log("Bundle up and stay warm.")
} */

/* 3. Question: What is the score in a game?
- If the score is less than 50, print "You need to improve."
- If the score is between 50 and 70 (inclusive), print "Good job!"
- If the score is greater than 70, print "Excellent performance!" */

/* score=60
if(score<=50)
{
    console.log("You need to improve.")
}
else if(score>50 && score<=70)                  //output: Good job!
{
    console.log("Good job!")
}
else if(score>70)
{
    console.log("Excellent performance!")
} */

/* 4. Question: Is the number even or odd?
- If the number is even, print "The number is even."
- If the number is odd, print "The number is odd." */
/* 
num="odd"

if(num=="even")
{
     console.log("The number is even.")
}
else if(num=="odd")                         //output: The number is odd
{
    console.log("The number is odd.")
} */

/* 5. Question: Is the character a vowel or a consonant?
- If the character is a vowel (a, e, i, o, u), print "It's a vowel."
- If the character is a consonant, print "It's a consonant." */

/* char="f"
if(char=="a"||
   char=="e"||
   char=="i"||
   char=="o"||
   char=="u")
{
    console.log("It's a vowel.")                //output: It's a consonant
}
else
{
    console.log("It's a consonant.")
} */

//for loop

// syntax:for(initialization; condition; iteration count)

/* for(count=1;count<=5;count=count+1)
{
    console.log("anish")
}
 */
//Print all the numbers from 1 to 10 using a for loop

/* for(i=1;i<=10;i=i+1)
{
    console.log(i)
} */


/* Print numbers from 1 to 10, but increment by 2
in each step using a for loop. */

/* for(i=1;i<=10;i=i+2)
{
    console.log(i)
} */

//Print numbers from 1 to 10, in Reverse Order

/* for(i=10;i>=1;i=i-1)
{
    console.log(i)
} */

//Print 2 tables
/* 
for(i=1;i<=10;i=i+1)
{
    console.log(i+"x2="+i*2)
} */


//after the html file read the below things

 //random number 
/* var a=Math.random()             //math.random() gives numbers from 0.0 to 0.9
console.log(a)                  //output: 0.5935993100900112


var a=Math.random()             //math.random() gives numbers from 1 to 9
console.log(a*10)               //output: 3.5963831392972323 */

//math.floor()

/* var b=Math.floor(0.99)
console.log(b)                  //output: 0 */

//math.floor & math.random()

/* var c=Math.random()

console.log(Math.floor(c*10))   //output: 2 */

//in the above programs the value range from 0 to 9 to get value range from 1 to 10 this is the program

/* var c=Math.random()                 //output: 6

console.log(Math.floor(c*10)+1)  */

