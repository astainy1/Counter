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
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const counterMessage = document.querySelector('.counterMessage')

//Increase Count function
function IncreaseCount() {
    // clearInterval(DecreaseCount);

    //assign localstorage counter to a variable
    let counter = localStorage.getItem('counter');

    counter++; //Increment counter
    h2.innerHTML = counter; //display counter in html element
    
    //Update counter value into localstorage
    localStorage.setItem('counter', counter);
    
    if(counter === 0){
        h2.style.color = 'black';
    }else if(counter < 0){
        h2.style.color = 'red';
    }
    
    else{
        h2.style.color = 'green';
    }

    // setInterval(IncreaseCount, 1000); //invoke count f
}

//Decrease Count function
function DecreaseCount(){
    // clearInterval(IncreaseCount);

    let counter = localStorage.getItem('counter');
    counter--;
    h2.innerHTML = counter;

    localStorage.setItem('counter', counter);

    if(counter === 0){
        h2.style.color = 'black';
    }else if(counter < 0){
        h2.style.color = 'red';
    }
    
    else{
        h2.style.color = 'green';
    }

    
    // setInterval(DecreaseCount, 1000); //invoke count function after 2000ms
}


//Load DOM before js script
document.addEventListener('DOMContentLoaded', () =>{

    // h2.innerHTML = initialNumber;

    increaseBtn.addEventListener('click', IncreaseCount); //invoke increase count function
    decreaseBtn.addEventListener('click', DecreaseCount); //invoke decrease count function

})
