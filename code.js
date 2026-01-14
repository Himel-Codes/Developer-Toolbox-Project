//JS syntax & comments
//JS variables
const back_button = document.getElementById("right");
const next_button = document.getElementById("wrong");


next_button.style.display = 'none'; //JS assignment
back_button.style.display = 'none'; // JS assignment

let flashcards = []; // Array to store flashcards


let totalcards = 0; //JS variable
let current_card = 1; //JS variable

//JS functions 
function AddCard() {
    // JS strings & JS assignment
    
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;

    // JS conditionals
    if (question && answer) {
        flashcards.push({ question: question, answer: answer }); // JS Objects & Adds flashcard to the list
        document.getElementById("Flash").innerHTML = "Flashcard is saved!"; //JS events/DOM
        
        // JS assignemnt & Clear input fields for new entry
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        
        // Adds flashcard to the counter
        totalcards = totalcards + 1; //JS arithmetic/operator/math 
        
        let flashcardText = document.getElementById("flashcard").querySelector("p");
        
        
        //JS conditionals (if else)
        if (totalcards === 1) { 
            flashcardText.innerText = flashcards[0].question;
        }
        
        if (totalcards > 1) {
            next_button.style.display = 'block';
        }

        document.getElementById("card_total").innerHTML = totalcards; // JS DOM
    } else {
        document.getElementById("Flash").innerHTML = "Enter both question and answer!";
    }
    
} 





//flipcard function
//JS variables
let Index = 0;
let Iquestion = true; 
let flashcardText = document.getElementById("flashcard").querySelector("p");

//JS functions & conditionals 
function flipCard () {
    if (flashcards.length > 0) {
        
        if (Iquestion) {
            flashcardText.innerText = flashcards[Index].question; 
        }else { 
             flashcardText.innerText = flashcards[Index].answer; 
             
           }
          Iquestion = !Iquestion;  //JS operators (boolean)
          
          //fade in animation or JS animations
        flashcardText.style.animation = "none"; 
        void flashcardText.offsetWidth;
     flashcardText.style.animation = "fadeIn 2s ease-in-out";
        
    } else { 
        document.getElementById("flashcard").querySelector("p").innerText = "No flashcards available!"; 

}
}

//JS functions
function cardAdder() {
    Index = Index + 1; //JS arithmetic/JS array iteration
    current_card = current_card + 1;
    document.getElementById("current_card").innerHTML = current_card;
    document.getElementById("flashcard").querySelector("p");
    flashcardText.innerText = flashcards[Index].question;
   //JS animation
    flashcardText.style.animation = "none"; 
    setTimeout(() => {flashcardText.style.animation = "fadeIn 2s ease-in-out";},10);
}

function cardRemover() {
    Index = Index - 1;
    current_card = current_card - 1;
    document.getElementById("current_card").innerHTML = current_card;
    document.getElementById("flashcard").querySelector("p");
    flashcardText.innerText = flashcards[Index].question;
    flashcardText.style.animation = "none"; 
    setTimeout(() => {flashcardText.style.animation = "fadeIn 2s ease-in-out";},10);
}

//JS functions
function back() {
    next_button.style.display = 'block';
    if (current_card == 2) { //JS conditionals
        cardRemover();
        back_button.style.display = 'none'; 
    } else {
        cardRemover();
    }
    StartTimer(); 
}

function next() {
    back_button.style.display = 'block';
    if (current_card == (totalcards - 1)) { //JS conditionals
        cardAdder();
        next_button.style.display = 'none';
    } else {
        cardAdder();
    }
    StartTimer(); 
}

//JS functions
function ClearCards() {
    next_button.style.display = 'none';
    back_button.style.display = 'none';
    totalcards = 0;
    flashcards = [];
    current_card = 1;
    document.getElementById("card_total").innerHTML = totalcards;
    document.getElementById("current_card").innerHTML = current_card;
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("Flash").innerHTML = "Flashcards cleared.";
}

//JS functions 
function feedback() {
    let m = true; //JS Booleans
    while(m === true) { //JS While Loop
        let response = prompt("What is your feedback for our application?"); //JS events
        if (response != "") { //JS conditionals
            break; //JS break (exit loop)
        } else {
            alert("Please input a valid response."); //JS Strings
        }
            
    } 
}


let IntervalTimer; 
let timeLeft = 30; 
let TimerDisplay = document.createElement("p"); 
TimerDisplay.id = "timer";  //for id 

document.getElementById("realBody").append(TimerDisplay); 
TimerDisplay.textContent = "Time Left: " + timeLeft + " seconds"; 

function StartTimer()  { 
    timeLeft = 30; 
    TimerDisplay.textContent = "Time Left: " + timeLeft + " seconds";
    
    clearInterval(IntervalTimer); 
    
    IntervalTimer = setInterval(() =>  {
    timeLeft--; 
     TimerDisplay.textContent = "Time Left: " + timeLeft + " seconds";
     
     if (timeLeft <= 0) {
    clearInterval(IntervalTimer); 
    alert("Time's up! Move to the next flashcard."); 
} 
}, 1000); 
}