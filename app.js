//Testing connection
// alert('Connected successfully!');

//Check if there is a key named counter in localStorage
if(!localStorage.getItem('counter')){
    //if there isn't, store counter with 0 value
    let initialNumber = 0 //Initial value of counter key in localstorage
    let storedNumber = localStorage.setItem('counter', initialNumber); 

}

// let counter = 0; //Setting initial value of counter to 0

//Get HTML elements
const h2 = document.querySelector('h2');
const button = document.querySelector('button');
const message = document.querySelector('p');

//Counter function
function count() {

    //assign localstorage counter to a variable
    let counter = localStorage.getItem('counter');

    counter++; //Increment counter
    h2.innerHTML = counter; //display counter in html element
    
    //Update counter value into localstorage
    localStorage.setItem('counter', counter); 
    
    //A condition set if counter reaches 20 something should happen
    if(counter === 30){
        
        message.innerHTML = `Your count has reached ${counter}`;
        counter = 0;
    }else{
        message.innerHTML = '';
        }
}

//Load DOM before js script
document.addEventListener('DOMContentLoaded', () =>{

    button.onclick = count; //invoke count function on button
    setInterval(count, 2000); //invoke count function after 2000ms
})