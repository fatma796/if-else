function getTemperatureFeedback(temp) {
    if (temp<0)
    { return "It's freezing!"}
    else if (temp<=0 && temp<=15)
    { return "It's cold!"}
    else if (temp<=16 && temp<=25)
    { return "It's comfortable!"}
    else 
    { return  "It's hot!"} 
}
console.log (getTemperatureFeedback (-1))
console.log (getTemperatureFeedback (0))

function checkGuess(guess, number){
    if (guess>number)
    { return  "Too high!"}
    else if (guess<number)
        { return  "Too low!"}   
    else 
    { return "Correct!" }
}  
console.log (checkGuess(10,2))
console.log (checkGuess(2,10))
console.log (checkGuess())

function isEligibleForDiscount(age, isStudent){
    if( age<18 || age>60 || isStudent)
    {return true}
    else { return false}
} 
console.log (isEligibleForDiscount(17, true))
console.log (isEligibleForDiscount())

function canLogin(username, password, isAdmin){
    if ( username==="admin" && password===12345  && isAdmin)
    {return "Access granted for admin" }
    else if ( username!=="admin" && password!== 12345 )
        {return "Access granted for user" }
    else {return "Access denied" }  
}
console.log (canLogin("admin", 12345, true))
console.log (canLogin("admin", 0, false))

function classifyNumber(num){
   if (num>0 && num %2===0)
    {return "Positive and even"}
  else if (num>0 && num !==0)
    {return "Positive and odd"}
  else if (num<0 && num %2===0)
    {return "Negative and even"}
  else if ( num<0 && num!==0 )
    {return "Negative and odd"}
  else {return "Zero" }
}
console.log (classifyNumber(2))
console.log (classifyNumber(-2))
console.log (classifyNumber(0))
console.log (classifyNumber(-7)) 

function countVowels(str){
    if (str .includes ("a") || str .includes ("i") 
        || str .includes ("o")) 
    { return true} 
    else  { return false } 
    }
console.log (countVowels("fatma"))
console.log (countVowels("vvver"))

function replaceWord(sentence, wordToReplace, replacement){
{return sentence.replaceAll( wordToReplace, replacement)} 
}
console.log (replaceWord("From the river to the sea palestine will be free" , "will be" , "is almost"))

function emphasize(word, times){
    {return (word + " ").repeat(times)}
}
console.log (emphasize("fatma", 4))

function generateDiscount() {
{return Math.floor(Math.random() * (30 - 5 + 1) ) + 5;}
}
console.log (generateDiscount())

function formatBalance(balance){
    {return balance.toFixed(2)}
}
console.log (formatBalance(5.898))



